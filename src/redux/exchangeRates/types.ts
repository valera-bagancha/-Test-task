import { IExchangeRate } from '../../types/currencies'

export interface IState {
  exchangeRates: IExchangeRate[]
  isPending: boolean
}
