<template>
    <div>
        <header>
            <Display msg="注册"></Display>
            <p class="text-xs">已经拥有账户了？前往<a @click="router.push('/login')" class="text-blue-500 hover:underline underline-offset-2">登录</a>。</p>
        </header>

        <main>
            <form>
                <md-outlined-text-field v-model="user.phone" maxlength="11" type="phone" label="手机号"></md-outlined-text-field>
                <md-outlined-text-field v-model="user.name" maxlength="255" label="用户名"></md-outlined-text-field>
                <md-outlined-text-field v-model="user.password" maxlength="255" type="password" label="密码"></md-outlined-text-field>

                <div class="flex justify-end gap-2">
                    <md-text-button type="reset">重置</md-text-button>
                    <md-filled-button>提交</md-filled-button>
                </div>
            </form>
        </main>
    </div>
</template>

<script setup lang="ts">
import { Display } from '@/components/Text';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const user = reactive({
    phone: '',
    name: '',
    password: ''
})

const router = useRouter()
</script>

<style scoped>

</style>