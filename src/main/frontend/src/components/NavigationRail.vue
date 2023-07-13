<template>
    <nav class="relative bg-[var(--md-sys-color-surface)] h-full" :class="navStore.isOpen ? 'w-44' : 'w-20'">
        <div class="relative flex flex-col justify-between px-3 pb-4 h-full">
            <div>
                <ul class="relative flex flex-col gap-2 w-full">
                    <template v-for="e in routerList" :key="e.path">
                        <li
                            :class="{'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]': router.currentRoute.value.path === e.path}"
                            class="rounded-[16px] relative w-full h-14"
                            @click="() => router.push(e.path)"
                        >
                            <md-ripple></md-ripple>
                            <div class="flex items-center h-full rounded-xl" :class="navStore.isOpen ? 'justify-start gap-2 pl-6' : 'justify-center'">
                                <md-icon :class="{'text-[var(--md-sys-color-primary)]': router.currentRoute.value.path !== e.path}">{{ e.icon }}</md-icon>
                                <h1 :class="{'text-[var(--md-sys-color-on-primary-container)]': router.currentRoute.value.path === e.path}" class="text-sm" v-show="navStore.isOpen">{{ e.label }}</h1>
                            </div>
                        </li>
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
        label: '首页',
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
onMounted(() => {
    navStore.watchWindowSizeAndSetWindowSize()
})
onUnmounted(() => {
    navStore.unWatchWindowSizeAndSetWindowSize()
})
</script>

<style scoped>
nav,
li {
    transition: all 0.15s;
}
li h1 {
    animation: opacityFromZeroToFull 0.5s;
    opacity: 1;
}
@keyframes opacityFromZeroToFull {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
}
* {
    @apply select-none;
}
</style>