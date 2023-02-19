import { Dispatch } from 'redux'

import { setIsPending, setExchangeRates } from './index'
import ExchangeService from '../../api/ExchangeService'
import { delay } from '../../utils/delay'

export const setExchangeRatesAsync = () => async (dispatch: Dispatch) => {
  console.log('test')

  dispatch(setIsPending(true))

  await delay(3000)

  const exchangeRates = await ExchangeService.getExchange()

  dispatch(setExchangeRates(exchangeRates))

  dispatch(setIsPending(false))
}
