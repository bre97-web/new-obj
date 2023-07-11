import AppVue from "@/App.vue";
import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: '/',
        component: AppVue
    }

]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})