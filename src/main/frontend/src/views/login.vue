<template>
    <div>
        <header>
            <Display msg="登录"></Display>
            <p class="text-xs">还没有账户？现在<a @click="router.push('/register')" class="text-blue-500 hover:underline underline-offset-2">创建</a>一个。</p>
        </header>

        <main>
            <form>
                <md-outlined-text-field 
                    :error="userActive.isLoginError"
                    v-model="user.phone"
                    label="手机号"
                >
                    <md-icon slot="leadingicon">phone</md-icon>
                </md-outlined-text-field>
                <md-outlined-text-field
                    :error="userActive.isLoginError"
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
                        <template v-if="loginPendding">
                            <md-icon slot="icon" class="rotate">cached</md-icon>
                        </template>
                        <template v-else>
                            <md-icon slot="icon">input</md-icon>
                        </template>
                        提交
                    </md-filled-button>
                </div>

                <div v-if="userActive.isLoginError" class="text-[var(--md-sys-color-error)] text-right text-xs">
                    账户信息不匹配
                </div>
            </form>
        </main>
    </div>
</template>

<script setup lang="ts">
import { Display } from '@/components/Text';
import { useAccountStore } from '@/store/useAccountStore';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const account = useAccountStore()
const user = reactive({
    phone: '',
    // name: '',
    password: ''
})

const userActive = reactive({
    isNotNull: () => user.phone.length > 0 && user.password.length > 0,
    isPass: () => userActive.isNotNull(),
    isLoginError: false
})

const router = useRouter()

const loginPendding = ref(false)
const submit = async () => {
    loginPendding.value = true
    let isSuccess = await account.login({
        u_id: parseInt(user.phone),
        u_pwd: user.password,
    })

    loginPendding.value = false

    if (isSuccess) {
        router.push('/')
    }

    userActive.isLoginError = true
}
</script>

<style scoped>

</style>