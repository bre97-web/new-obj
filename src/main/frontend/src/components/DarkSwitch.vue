<template>
    <md-switch ref="switchRef" @click="theme.toggleDark"></md-switch>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store/useThemeStore';
import { onMounted, ref } from 'vue';

const theme = useThemeStore()

const switchRef = ref()

onMounted(() => {
    switchRef.value.selected = theme.theme.isDark
})
</script>

<style scoped>

</style>