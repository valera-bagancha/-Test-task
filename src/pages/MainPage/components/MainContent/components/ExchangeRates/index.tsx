import { FC, ReactElement } from 'react'

import './style.scss'

interface IProps {
  children: ReactElement[]
}

const ExchangeRates: FC<IProps> = ({  children }) => (
  <div className="main-table-exchange">
    {children}
  </div>
)

export default ExchangeRates
