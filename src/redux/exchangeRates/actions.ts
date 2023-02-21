import { Dispatch } from 'redux'

import { setIsPending, setExchangeRates, setIsError, setErrorMessage } from './index'
import ExchangeService from '../../api/ExchangeService'
import { delay } from '../../utils/delay'
import { setCount } from '../counter'
import { IError } from '../../types/error'


export const setExchangeRatesAsync = () => async (dispatch: Dispatch, getState: any) => {

  try {
    const { counter } = getState().counter

    dispatch(setIsPending(true))
  
    await delay(3000)
    
    const exchangeRates = await ExchangeService.getExchange(counter)
    
    dispatch(setCount(counter + 1))
  
    dispatch(setExchangeRates(exchangeRates))
  
    dispatch(setIsPending(false))
  } catch (error) {

    const errorMessage = error as IError
  
    dispatch(setErrorMessage(errorMessage.message))

    dispatch(setCount(0))

    dispatch(setIsError(true))
    
  }
}
