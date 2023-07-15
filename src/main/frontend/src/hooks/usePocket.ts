
enum UseOfMoneyType {
    shopping_cart = 0,
    sports_esports,
    toys_fan,
    restaurant,
    volunteer_activism,
    family_restroom
}
type UseOfMoneyTypes = UseOfMoneyType[]

type PocketFlowType = '收入' | '支出'

type Pocket = {
    u_id: string,
    szqk: UseOfMoneyTypes,
    money: string | number,
    lx: UseOfMoneyType,
    bz: string,
    date: string,
}

export type { Pocket, PocketFlowType, UseOfMoneyTypes }
export { UseOfMoneyType }
