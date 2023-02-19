import { useEffect, useState } from 'react'
import ExchangeService from '../../api/ExchangeService'
import { delay } from '../../utils/delay'
import { Loader } from '../Loader'
import { CurrencyConverter } from './components/CurrencyConverter'
import { ExchangeRates } from './components/ExchangeRates'

export const MainContent = () => {
  const [exchange, setExchange] = useState<any>([])
  const [loader, setLoader] = useState(false)
    
  useEffect(() => {

    setLoader(true)

    delay(1000).then(async () => {
      try {
        const usd = await ExchangeService.getExchange()
        setExchange(usd)
      } catch (error) {
        console.log(error);
      }
      setLoader(false)
    })
  }, [])
  
  return (
    <main className="main-content">
      {loader ? <Loader/> : <ExchangeRates exchange={exchange}/>}
      <div>
        <CurrencyConverter />
      </div>
    </main>
  )
}
