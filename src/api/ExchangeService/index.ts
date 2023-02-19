import axios from 'axios'

class ExchangeService {
  async getExchange(): Promise<any | void> {
    try {
      const { data } = await axios.get<any>('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5')

      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export default new ExchangeService()
