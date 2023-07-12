import { createRouter, createWebHashHistory } from "vue-router";

import index from '../views/index.vue'
import userlist from '../views/userList.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'

const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/userlist',
        component: userlist
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    },

]
const Router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default Router