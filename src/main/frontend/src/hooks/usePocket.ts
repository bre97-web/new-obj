import { useAccountStore } from "@/store/useAccountStore"
import { useDate } from "./useDate"

enum UseOfMoneyType {
    shopping_cart = 0,
    sports_esports,
    toys_fan,
    restaurant,
    volunteer_activism,
    family_restroom,
}
type UseOfMoneyTypes = UseOfMoneyType[]

type PocketFlowType = '收入' | '支出'

type Pocket = {
    u_id: string,
    szqk: PocketFlowType,
    money: string | number,
    lx: UseOfMoneyTypes | null,
    bz: string,
    date: string,
}

function usePocket({
    flowType = '收入',
    money = '',
    useOfMonkeyTypes = null,
    desc = '',
    date = useDate('mm-dd-yyyy')
}: {
    flowType?: PocketFlowType,
    money?: string | number,
    useOfMonkeyTypes?: UseOfMoneyTypes | null,
    desc?: string,
    date?: string,
}) {
    const target: Pocket = {
        u_id: useAccountStore().getUser.phone,
        szqk: flowType,
        money: money,
        lx: useOfMonkeyTypes,
        bz: desc,
        date: date
    }

    return target
}

export type { Pocket, PocketFlowType, UseOfMoneyTypes }
export { usePocket, UseOfMoneyType }
