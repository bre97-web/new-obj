<template>
    <div>
        <header>
            <Display msg="注册"></Display>
            <p class="text-xs">已经拥有账户了？前往<a @click="router.push('/login')"
                    class="text-blue-500 hover:underline underline-offset-2">登录</a>。</p>
        </header>

        <main>
            <form>
                <md-outlined-text-field 
                    :error="userActive.isExists"
                    :supportingText="userActive.isExists ? '账户已存在' : '账户可用'"
                    v-model="user.phone"
                    maxlength="11"
                    label="手机号"
                >
                    <md-icon slot="leadingicon">phone</md-icon>
                </md-outlined-text-field>
                <md-outlined-text-field 
                    v-model="user.name"
                    maxlength="255"
                    label="用户名"
                >
                    <md-icon slot="leadingicon">face</md-icon>
                </md-outlined-text-field>
                <md-outlined-text-field
                    v-model="user.password"
                    maxlength="255"
                    type="password"
                    label="密码"
                >
                    <md-icon slot="leadingicon">password</md-icon>
                </md-outlined-text-field>
                
                <div class="flex justify-end gap-2">
                    <md-text-button type="reset">重置</md-text-button>
                    <md-filled-button @click="submit" :disabled="!userActive.isPass()">
                        <template v-if="registerPendding">
                            <md-icon slot="icon" class="rotate">cached</md-icon>
                        </template>
                        <template v-else>
                            <md-icon slot="icon">input</md-icon>
                        </template>
                        提交
                    </md-filled-button>
                </div>

                <div v-if="registerError" class="text-[var(--md-sys-color-error)] text-right text-xs">
                    似乎出现了意外
                </div>
            </form>
        </main>
    </div>
</template>

<script setup lang="ts">
import { Display } from '@/components/Text';
import { useAccountStore } from '@/store/useAccountStore';
import { reactive, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const account = useAccountStore()
const user = reactive({
    phone: '',
    name: '',
    password: ''
})

const userActive = reactive({
    isExists: false,
    isNotNull: () => user.phone.length > 0 && user.name.length > 0 && user.password.length > 0,
    isPass: () => userActive.isNotNull() && !userActive.isExists
})


watchEffect(() => {
    if (user.phone.length > 0) {
        account.isExist(user.phone).then(res => {
            userActive.isExists = res.data
        })
    }

})


const router = useRouter()

const registerPendding = ref(false)
const registerError = ref(false)
const submit = async () => {
    registerPendding.value = true
    let isSuccess = await account.register({
        u_id: parseInt(user.phone),
        u_name: user.name,
        u_pwd: user.password,
    })

    registerPendding.value = false

    if (isSuccess) {
        router.push('/login')
    }

    registerError.value = true
}


</script>

<style scoped></style>