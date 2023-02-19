import { useCallback, useEffect, useState } from 'react'

import ConvertorService from '../../../../../../api/ConvertorService'
import CURRENCIES from '../../../../../../constants/currencies'
import { currenciesList } from '../../../../../../constants/currenciesList'
import ConverterItem from './components/ConverterItem'
import ReverseButton from './components/ReverseButton'

import './style.scss'

const CurrencyConverter = () => {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')

  const [firstSelectValue, setFirstSelectValue] = useState(CURRENCIES.UAH)
  const [secondSelectValue, setSecondSelectValue] = useState(CURRENCIES.USD)

  // useEffect(() => {
  //   delay(3).then(async () => {
  //     try {
  //       const corrected = await ConvertorService.getExchangeConvertor()
  //       setCorrected(corrected.new_amount)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })
  // }, [])

  const handleReverse = useCallback(() => {
    setFirstValue(secondValue)
    setFirstSelectValue(secondSelectValue)

    setSecondValue(firstValue)
    setSecondSelectValue(firstSelectValue)
  }, [secondValue, secondSelectValue])

  return (
    <div className="converter-box">
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
    </div>
  )
}

export default CurrencyConverter
