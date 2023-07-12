import axios from "axios";
import { defineStore } from "pinia";
import { User } from "./useUserStore";

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
        getIsLogin: (s) => s.isLogin,
    },
    actions: {
        async isExist(id: number) {
            return await axios.get('/api/selectUserById', {
                params: {
                    u_id: id
                }
            })
        },
        async login({ u_id, u_pwd}:{
            u_id: number,
            u_pwd: string
        }) {
            let res = await axios.post('/api/selectUserByAllField', {
                u_id: u_id,
                u_pwd: u_pwd,
            })
            if(res.data.length !== 0) {
                return true
            }
            return false
        },
        async register(e: User): Promise<boolean> {
            var res = null
            try {
                res = await axios.post('/api/addUser', {
                    u_id: e.u_id,
                    u_name: e.u_name,
                    u_pwd: e.u_pwd,
                })
            } catch {
                return false
            }

            if(res?.data) {
                return true
            }
            return false
        },
        logout() {
            this.isLogin = false
        },
    }
})

export { useAccountStore }
