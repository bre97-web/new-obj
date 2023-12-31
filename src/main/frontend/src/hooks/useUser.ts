import { reactive } from "vue"

type User = {
    u_id: string,
    u_name: string,
    u_pwd: string,
    isAdmin: boolean
}
type Users = User[]

function useUser(id: string = '', name: string = '', password: string = '', isAdmin: boolean = false) {
    const target: User = reactive({
        u_id: id,
        u_name: name,
        u_pwd: password,
        isAdmin: isAdmin,
    })

    const get = (): User => target
    const set = (e: User): void => {
        target.u_id = e.u_id
        target.u_name = e.u_name
        target.u_pwd = e.u_pwd
        target.isAdmin = e.isAdmin
    }
    const setId = (e: number) => {
        target.u_id = e.toString()
    }
    const setName = (e: string) => {
        target.u_name = e
    }
    const setPassword = (e: string) => {
        target.u_pwd = e
    }
    const setIsAdmin = (e: boolean) => {
        target.isAdmin = e
    }

    const isNotNull = (): boolean => {
        return target.u_id != null && target.u_id != undefined && target.u_id != '' && target.u_id.length !== 0 && target.u_name.length !== 0 && target.u_pwd.length !== 0
    }
    const isValid = (e: any) => {
        return e != null && e != undefined && e != ''
    }

    return {
        get,
        set,
        setId,
        setName,
        setPassword,
        setIsAdmin,
        isNotNull,
        isValid
    }
}

export { useUser }
export type { User, Users }