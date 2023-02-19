import { FC } from 'react'

import TitleCell from '../TitleCell'

interface IProps {
  titles: string[]
}

const ExchangeRatesTitles: FC<IProps> = ({ titles }) => {
  const TitlesList = titles.map(title => (
    <TitleCell key={title} value={title} />
  ))

  return <div className="row">{TitlesList}</div>
}

export default ExchangeRatesTitles
