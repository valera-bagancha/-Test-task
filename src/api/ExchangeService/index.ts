import axios from 'axios'

import { IExchangeRate } from '../../types/currencies'
import { IErrorMessage } from '../../types/error'

class ExchangeService {
  async getExchange(counter: number): Promise<IExchangeRate[] | void> {
    
    try {
      if (counter === 5) {
        throw new Error('Oops, something went wrong')
      }
      
      const { data } = await axios.get<IExchangeRate[]>(
        'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5'
      )
      
      return data
    } catch (error) {
      console.dir(error)
      const errorMessage = error as IErrorMessage
      throw new Error(errorMessage.message);
      
    }
  }
}

export default new ExchangeService()
