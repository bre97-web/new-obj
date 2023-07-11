import { createRouter, createWebHashHistory } from "vue-router";

import index from '../views/index.vue'
import userlist from '../views/userList.vue'

const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/userlist',
        component: userlist
    }

]
const Router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default Router