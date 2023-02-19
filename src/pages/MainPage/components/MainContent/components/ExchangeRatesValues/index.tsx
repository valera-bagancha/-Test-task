import { FC } from 'react'

import { IExchangeRate } from '../../../../../../types/currencies'
import ExchangeRateValue from './ExchangeRateValue'

interface IProps {
  exchangeRates: IExchangeRate[]
}

const ExchangeRatesValues: FC<IProps> = ({ exchangeRates }) => {
  const ExchangeRatesList = exchangeRates.map(exchangeRate => (
    <ExchangeRateValue key={exchangeRate.buy} exchangeRate={exchangeRate} />
  ))

  return <>{ExchangeRatesList}</>
}

export default ExchangeRatesValues
