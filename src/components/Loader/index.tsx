import { FC } from 'react'

import './style.scss'

interface IProps {
  className: string;
}

const Loader: FC<IProps> = ({ className }) => (
  <div className={className}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default Loader
