<template>
    <md-standard-icon-button @click="toggleDark">
        <md-icon>light_mode</md-icon>
        <!-- <md-icon>dark_mode</md-icon> -->
    </md-standard-icon-button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';


const isDark = ref(false)
const setDark = (e: boolean) => {
    isDark.value = e
}
const toggleDark = () => {
    setDark(!isDark.value)
}

watch(isDark, () => {
    document.documentElement.classList[isDark.value ? 'remove': 'add']('dark')
})
</script>

<style scoped>

</style>