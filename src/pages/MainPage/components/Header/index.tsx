import { FC } from 'react'

import Contacts from '../../../../components/Contacts'
import headerContacts from '../../../../constants/headerContacts'

import './style.scss'

const Header: FC = () => (
  <header className="head">
    <h1 className="logo">Currency Converter</h1>
    <Contacts contacts={headerContacts} />
  </header>
)

export default Header
