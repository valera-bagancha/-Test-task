import { exchangeRatesTitles } from '../../../../constants/exchangeRatesTitles'


export const ExchangeRatesTitles = () => {
  const titles = exchangeRatesTitles.map((title) => <h2 key={title}>{title}</h2>)
  return (
    <div className='row'>{titles}</div>
  )
}