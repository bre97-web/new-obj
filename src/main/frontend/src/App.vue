<template>
    <div class="flex items-start justify-start w-full bg-[var(--md-sys-color-background)] h-[3000px]">
        <!-- <nav class="fixed top-0 left-0"> -->
        <nav>
            <NavigationRail :open="open" :setOpen="setOpen" :togglePanel="togglePanel"></NavigationRail>
        </nav>
        
        <main class="flex-grow">
            <nav>
                <TopNavigation></TopNavigation>
            </nav>
            <div class="rounded-3xl bg-[var(--md-sys-color-surface-container-lowest)] h-full">
                <router-view v-slot="{ Component }">
                    <component :is="Component"></component>
                </router-view>
            </div>
            
        </main>

        <aside>

        </aside>

</div>

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