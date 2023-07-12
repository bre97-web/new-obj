
type User = {
    u_id: number,
    u_name: string,
    u_pwd: string
}
type Users = User[]

function useUser(id: number = 0, name: string = '', password: string = '') {
    const target: User = {
        u_id: id,
        u_name: name,
        u_pwd: password
    }

    const get = (): User => target
    const set = (e: User): void => {
        target.u_id = e.u_id
        target.u_name = e.u_name
        target.u_pwd = e.u_pwd
    }
    const setId = (e: number) => {
        target.u_id = e
    }
    const setName = (e: string) => {
        target.u_name = e
    }
    const setPassword = (e: string) => {
        target.u_pwd = e
    }

    return {
        get,
        set,
        setId,
        setName,
        setPassword
    }
}

export { useUser }
export type { User, Users }