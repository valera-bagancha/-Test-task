import { FC } from 'react'

interface IProps {
  value: string;
}

const Cell: FC<IProps> = ({ value }) => (
  <div className="exchange-rate">
    <span>
      {value}
    </span>
  </div>
)

export default Cell