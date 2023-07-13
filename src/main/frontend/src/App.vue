<template>

    <header>
        <TopNavigation></TopNavigation>
    </header>

    <main class="flex flex-col h-screen relative bg-[var(--md-sys-color-background)]" :class="open ? 'ml-44' : 'ml-20'">
        <div class="rounded-3xl bg-[var(--md-sys-color-surface-container-lowest)] h-full m-2 p-4">
            <router-view v-slot="{ Component }">
                <component :is="Component"></component>
            </router-view>
        </div>
        
    </main>

    <nav class="fixed top-0 left-0">
        <NavigationRail :open="open" :setOpen="setOpen" :togglePanel="togglePanel"></NavigationRail>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavigationRail from './components/NavigationRail.vue'
import TopNavigation from './components/TopNavigation.vue';

const open = ref(false)
const setOpen = (e: boolean) => {
    open.value = e
}
const togglePanel = () => {
    open.value = !open.value
}
</script>

<style scoped>

</style>