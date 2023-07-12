<template>
    <div>
        <header>
            <Display msg="个人中心"></Display>
        </header>

        <main>
            <template v-if="!account.getIsLogin">
                <div class="text-start">
                    您还没有登录，请尝试<a @click="router.push('/login')" class="text-blue-500 hover:underline underline-offset-2">登陆</a>后访问个人中心。
                </div>
            </template>
            <template v-else>
                <div>
                    欢迎
                </div>
            </template>
        </main>
    </div>
</template>

<script setup lang="ts">
import { Display } from '@/components/Text';
import { useAccountStore } from '@/store/useAccountStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';


const account = useAccountStore()


const router = useRouter()

onMounted(() => {
})
</script>

<style scoped>

</style>