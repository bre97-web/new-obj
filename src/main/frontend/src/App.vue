<template>
    <main class="flex flex-row h-screen max-h-screen relative">
        <div class="fixed">
            <NavigationRail :open="open" :setOpen="setOpen" :togglePanel="togglePanel"></NavigationRail>
        </div>
        
        <main class="flex-grow" :class="open ? 'ml-44' : 'ml-20'">
            <div class="max-w-6xl mx-auto px-4">
                <router-view v-slot="{ Component }">
                    <component :is="Component"></component>
                </router-view>
            </div>
        </main>
        <!-- <div class="border bg-purple-50 w-full">
            <div class="p-4">
    
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <td>编号[u_id]</td>
                        <td>用户名[u_name]</td>
                        <td>密码[u_pwd]</td>
                        <td>修改</td>
                    </tr>
                    </thead>
                    <tbody id="gridId">
                    <tr>
                        <td>未请求到数据</td>
                    </tr>
                    </tbody>
                    
                </table>

            </div>
        </div> -->

    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavigationRail from './components/NavigationRail.vue'

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