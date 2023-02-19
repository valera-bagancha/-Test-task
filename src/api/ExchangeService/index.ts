import axios from 'axios'

import { IExchangeRate } from '../../types/currencies'

class ExchangeService {
  async getExchange(): Promise<IExchangeRate[] | void> {
    try {
      const { data } = await axios.get<IExchangeRate[]>(
        'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5'
      )

      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export default new ExchangeService()
