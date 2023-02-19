import { FC } from 'react'

import { IContacts } from '../../types/contacts'
import Contact  from './Contact'

interface IProps {
  contacts: IContacts[]
}

const Contacts: FC<IProps> = ({ contacts }) => {
  const dataContact = contacts.map(contact => (
    <Contact
      key={contact.icon}
      iconText={contact.icon}
      contact={contact.text}
    />
  ))

  return <div>{dataContact}</div>
}

export default Contacts
