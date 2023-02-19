import { FC } from 'react'

import { IExchangeRate } from '../../../../../../../../../types/currencies'
import Cell from '../../Cell'
import TitleCell from '../../TitleCell'

interface IProps {
  exchangeRate: IExchangeRate
}

const ExchangeRateValue: FC<IProps> = ({ exchangeRate }) => {
  const { ccy, base_ccy, ...rest } = exchangeRate

  const title = `${ccy}/${base_ccy}`

  const ExchangeList = Object.values(rest).map(value => (
    <Cell key={value} value={value} />
  ))

  return (
    <div className="row">
      <TitleCell value={title} />
      {ExchangeList}
    </div>
  )
}

export default ExchangeRateValue
