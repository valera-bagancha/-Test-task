import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'


import ConvertorService from '../../../../../../api/ConvertorService'
import { currencies } from '../../../../../../constants/currenciesList'
import { delay } from '../../../../../../utils/delay'



import './style.scss'

export const CurrencyConverter = () => {
  const [changeValue, setChangeValue] = useState<any>('')
  const [getValue, setGetValue] = useState('')

  const [changeSelectValue, setChangeSelectValue] = useState<any>('USD')
  const [getSelectValue, setGetSelectValue] = useState<any>('UAH')

  const [correctedValue, setCorrected] = useState<any>([])

  const changeHandler = () => {
    setChangeValue(getValue)
    setGetValue(changeValue)
    setChangeSelectValue(getSelectValue)
    setGetSelectValue(changeSelectValue)
  }

  useEffect(() => {
    delay(3).then(async () => {
      try {
        const corrected = await ConvertorService.getExchangeConvertor()
        setCorrected(corrected.new_amount)
      } catch (error) {
        console.log(error)
      }
    })
  }, [])

  console.log('correctedValue', correctedValue)

  // useEffect(() => {
  //   if (!changeValue) {
  //     setGetValue('')
  //   }
  // },[changeValue])

  return (
    <div className="converter-box">
      <div className="change">
        <TextField
          value={changeValue}
          id="standard-basic"
          label="Change"
          variant="standard"
          onChange={e => setChangeValue(e.target.value)}
        />
        <TextField
          value={changeSelectValue}
          onChange={e => setChangeSelectValue(e.target.value)}
          id="standard-select-currency-native"
          select
          SelectProps={{
            native: true,
          }}
          variant="standard"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <span onClick={changeHandler} className="material-symbols-outlined">
          sync_alt
        </span>
      </div>
      <div className="change">
        <TextField
          value={getValue}
          id="standard-basic"
          label="Get"
          variant="standard"
          onChange={e => setGetValue(e.target.value)}
        />
        <TextField
          value={getSelectValue}
          onChange={e => setGetSelectValue(e.target.value)}
          id="standard-select-currency-native"
          select
          SelectProps={{
            native: true,
          }}
          variant="standard"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </div>
  )
}
