import { useEffect, useState, FC } from 'react'

import { exchangeRatesTitles } from '../../../../constants/exchangeRatesTitles'
import ExchangeService from '../../../../api/ExchangeService'
import { IExchangeRate } from '../../../../types/currencies'
import { delay } from '../../../../utils/delay'

import { CurrencyConverter } from './components/CurrencyConverter'
import ExchangeRatesTitles from './components/ExchangeRatesTitles'
import ExchangeRatesValues from './components/ExchangeRatesValues'
import ExchangeRates from './components/ExchangeRates'
import Loader from '../../../../components/Loader'

import './style.scss'

const MainContent: FC = () => {
  const [exchangeRates, setExchangeRates] = useState<IExchangeRate[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    delay(1000).then(async () => {
      const usd = await ExchangeService.getExchange()

      setExchangeRates(usd)

      setIsLoading(false)
    })
  }, [])

  return (
    <main className="main-content">
      {isLoading ? (
        <Loader className="lds-ring" />
      ) : (
        <>
          <ExchangeRates>
            <ExchangeRatesTitles titles={exchangeRatesTitles} />
            <ExchangeRatesValues exchangeRates={exchangeRates} />
          </ExchangeRates>
          <CurrencyConverter />
        </>
      )}
    </main>
  )
}

export default MainContent
