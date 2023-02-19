import { FC } from 'react'

import CurrencyConverter from './components/CurrencyConverter'
import ExchangeRatesTitles from './components/ExchangeRatesTable/components/ExchangeRatesTitles'
import ExchangeRates from './components/ExchangeRatesTable'
import Loader from '../../../../components/Loader'

import { exchangeRatesTitles } from '../../../../constants/exchangeRatesTitles'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import {
  exchangeRatesSelector,
  isPendingSelector,
} from '../../../../redux/exchangeRates/selectors'

import './style.scss'
import ExchangeRatesValues from './components/ExchangeRatesTable/components/ExchangeRatesValues'

const MainContent: FC = () => {
  const exchangeRates = useAppSelector(exchangeRatesSelector)
  const isPending = useAppSelector(isPendingSelector)

  return (
    <main className="main-content">
      {isPending ? (
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
