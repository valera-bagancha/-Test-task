interface IProps {
  iconText: string
  contact: string
}

export const ConstantCard = ({iconText, contact}: IProps) => {
  
  return (
    <div className="contacts">
      <span className="material-symbols-outlined">{iconText}</span>
      <span>{contact}</span>
    </div>
  )
}