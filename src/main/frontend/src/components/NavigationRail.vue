<template>
    <nav class="bg-[var(--md-sys-color-surface)] h-full" :class="navStore.isOpen ? 'w-44' : 'w-20'">
        <div class="flex flex-col justify-between px-4 pb-4 h-full">
            <div class="flex flex-col" :class="navStore.isOpen ? 'items-start' : 'items-center'">
                <ul class="flex flex-col gap-2">
                    <template v-for="e in routerList" :key="e.path">
                        <NavigationButton :label="e.label" :path="e.path" :icon="e.icon"></NavigationButton>
                    </template>
                </ul>
            </div>
            
            <div>
                <DarkSwitch></DarkSwitch>
            </div>
        </div>
    </nav>
</template>

<script setup lang="tsx">
import { useRouter } from 'vue-router';
import DarkSwitch from './DarkSwitch.vue';
import { useNavigationRailStore } from '@/store/useNavigationRail';
import { onMounted, onUnmounted } from 'vue';

type NavButton = {
    label: string,
    path: string,
    icon: string
}
const routerList: NavButton[] = [
    {
        label: '后台首页',
        path: '/',
        icon: 'home',
    },
    {
        label: '用户管理',
        path: '/userlist',
        icon: 'manage_accounts',
    },
    {
        label: '个人中心',
        path: '/profile',
        icon: 'person',
    },
]

const router = useRouter()

const navStore = useNavigationRailStore()

const NavigationButton = ({ label, path, icon }: NavButton) => (
    <li class="overflow-clip rounded-[16px] max-w-min">
        <md-fab class={navStore.isOpen ? "w-32" : "w-14"} variant={router.currentRoute.value.path === path ? "primary" : "lowered"} label={navStore.isOpen ? label : ''} onClick={() => router.push(path)}>
            <md-icon slot="icon">{icon}</md-icon>
        </md-fab>
    </li>
)

onMounted(() => {
    navStore.watchWindowSizeAndSetWindowSize()
})
onUnmounted(() => {
    navStore.unWatchWindowSizeAndSetWindowSize()
})
</script>

<style scoped>
nav {
    transition: all 0.15s;
}
</style>