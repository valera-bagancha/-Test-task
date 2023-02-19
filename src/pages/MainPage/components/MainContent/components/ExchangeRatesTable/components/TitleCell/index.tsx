import { FC } from 'react'

interface IProps {
  value: string
}

const TitleCell: FC<IProps> = ({ value }) => (
  <div className="exchange-rate">
    <h2>{value}</h2>
  </div>
)

export default TitleCell
