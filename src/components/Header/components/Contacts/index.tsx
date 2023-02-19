import { contacts } from '../../../../constants/contacts'
import { ConstantCard } from '../ContactCard'

export const Contacts = () => {
  const dataContact = contacts.map(contact => (
    <ConstantCard
      key={contact.icon}
      iconText={contact.icon}
      contact={contact.text}
    />
  ))
  return <div>{dataContact}</div>
}
