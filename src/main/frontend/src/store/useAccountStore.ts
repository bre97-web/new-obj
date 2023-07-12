import { defineStore } from "pinia";

const useAccountStore = defineStore('account_store', {
    state: () => ({
        isLogin: false,
        user: {
            name: '',
            password: '',
            phone: ''
        },
    }),
    getters: {
        getUser: (s) => s.user,
        isLogin: (s) => s.isLogin,
    },
    actions: {
        login() {
            
        }
    }
})

export { useAccountStore }
