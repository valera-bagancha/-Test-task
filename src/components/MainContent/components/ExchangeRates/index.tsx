import { ExchangeRatesTitles } from '../ExchangeRatesTitles'
import { ExchangeRatesValues } from '../ExchangeRatesValues'

export const ExchangeRates = ({ exchange }: any) => {
  return (
    <div className="main-table-exchange">
      <ExchangeRatesTitles/>
      {/* <div>Currency/current Data</div>
      <div>Buy</div>
      <div>Sell</div> */}
      <ExchangeRatesValues exchange={exchange}/>
      {/* {exchange.map((currencies: any) => (
        <ExchangeRatesValues
          key={currencies.ccy}
          sale={currencies.sale}
          buy={currencies.buy}
          ccy={currencies.ccy}
          baseCcy={currencies.base_ccy}
        />
      ))} */}
    </div>
  )
}
