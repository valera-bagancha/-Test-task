import { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import ConvertorService from '../../../../../../api/ConvertorService'
import CURRENCIES from '../../../../../../constants/currencies'
import { currenciesList } from '../../../../../../constants/currenciesList'
import { exchangeRatesSelector } from '../../../../../../redux/exchangeRates/selectors'
import ConverterItem from './components/ConverterItem'
import ReverseButton from './components/ReverseButton'

import './style.scss'

const CurrencyConverter = () => {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')

  const [firstSelectValue, setFirstSelectValue] = useState(CURRENCIES.UAH)
  const [secondSelectValue, setSecondSelectValue] = useState(CURRENCIES.USD)

  const exchangeRates = useSelector(exchangeRatesSelector) 
  
  useMemo(() => {
    const value = exchangeRates.find((obj) => firstSelectValue === obj.ccy && secondSelectValue === obj.base_ccy)
  } ,[])


  // useMemo(() => {
  //   if (!firstValue) return
  //   if (firstSelectValue == 'UAH' && secondSelectValue == 'USD') {
  //     const value = +firstValue/+(exchangeRates[1].buy)
  //     const currentValue = value.toFixed(2)
  
  //     setSecondValue(currentValue)
  //   }

  //   if (firstSelectValue == 'USD' && secondSelectValue == 'UAH') {
  //     const value = +firstValue*+(exchangeRates[1].buy)
  //     const currentValue = value.toFixed(2)
  
  //     setSecondValue(currentValue)
  //   }

  //   if (firstSelectValue == 'UAH' && secondSelectValue == 'EUR') {
  //     const value = +firstValue/+(exchangeRates[0].buy)
  //     const currentValue = value.toFixed(2)
  
  //     setSecondValue(currentValue)
  //   }

  //   if (firstSelectValue == 'EUR' && secondSelectValue == 'UAH') {
  //     const value = +firstValue*+(exchangeRates[0].buy)
  //     const currentValue = value.toFixed(2)
  
  //     setSecondValue(currentValue)
  //   }

  //   if (firstSelectValue == 'EUR' && secondSelectValue == 'USD') {  
  //     const factor = +(exchangeRates[0].buy)/+(exchangeRates[1].buy) 
  //     const value = +firstValue*factor
  //     const currentValue = value.toFixed(2)

  //     setSecondValue(currentValue)
  //   }

  //   if (firstSelectValue == 'USD' && secondSelectValue == 'EUR') {  
  //     const factor = +(exchangeRates[1].buy)/+(exchangeRates[0].buy) 
  //     const value = +firstValue*factor
  //     const currentValue = value.toFixed(2)

  //     setSecondValue(currentValue)
  //   }
  // },[firstSelectValue, secondSelectValue, firstValue])

  // useEffect(() => {
  //   if (!firstValue) {
  //     setSecondValue('')
  //   }
  // }, [firstValue])

  const handleReverse = useCallback(() => {
    setFirstValue(secondValue)
    setFirstSelectValue(secondSelectValue)

    setSecondValue(firstValue)
    setSecondSelectValue(firstSelectValue)
  }, [secondValue, secondSelectValue])

  return (
    <section className="converter-box">
      <ConverterItem
        value={firstValue}
        inputLabel="Change"
        selectValue={firstSelectValue}
        selectValues={currenciesList}
        handleChangeValue={setFirstValue}
        handleChangeSelectValue={setFirstSelectValue}
      />
      <ReverseButton handleReverse={handleReverse} />
      <ConverterItem
        value={secondValue}
        inputLabel="Get"
        selectValue={secondSelectValue}
        selectValues={currenciesList}
        handleChangeValue={setSecondValue}
        handleChangeSelectValue={setSecondSelectValue}
      />
    </section>
  )
}

export default CurrencyConverter
