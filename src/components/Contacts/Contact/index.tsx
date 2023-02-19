import { FC } from 'react'

interface IProps {
  iconText: string
  contact: string
}

import './style.scss'

const Contact: FC<IProps> = ({ iconText, contact }) => (
  <div className="contacts">
    <span className="material-symbols-outlined">{iconText}</span>
    <span>{contact}</span>
  </div>
)

export default Contact
