interface IProps {
  baseCcy: string
  sale: string
  buy: string
  ccy: string
}

export const ExchangeRatesValues = ({exchange}: any) => { // {sale, buy, ccy, baseCcy}: IProps)
  const value = exchange.map((value) => )
  return (
    <div>{value}</div>
    // <>
    //   <div>{ccy}/{baseCcy}</div>
    //   <div>{+buy}</div>
    //   <div>{+sale}</div>
    // </>
  )
}