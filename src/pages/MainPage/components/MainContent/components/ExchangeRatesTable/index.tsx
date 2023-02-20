import { FC, ReactElement } from 'react'

import './style.scss'

interface IProps {
  children: ReactElement[]
}

const ExchangeRatesTable: FC<IProps> = ({ children }) => (
  <section className="main-table-exchange">{children}</section>
)

export default ExchangeRatesTable
