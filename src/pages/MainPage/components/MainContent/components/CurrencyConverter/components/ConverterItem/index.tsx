import { TextField } from '@mui/material'
import { FC } from 'react'

import { ICurrencies } from '../../../../../../../../types/currencies'

interface IProps {
  value: string
  selectValue: string
  inputLabel: string
  selectValues: ICurrencies[]
  handleChangeValue: (value: string) => void
  handleChangeSelectValue: (value: string) => void
}

const ConverterItem: FC<IProps> = ({
  value,
  inputLabel,
  selectValue,
  selectValues,
  handleChangeValue,
  handleChangeSelectValue,
}) => {
  const selectValuesList = selectValues.map(({ value, label }) => (
    <option key={label} value={value}>
      {label}
    </option>
  ))

  return (
    <div className="change">
      <TextField
        value={value}
        id="standard-basic"
        label={inputLabel}
        variant="standard"
        onChange={e => handleChangeValue(e.target.value)}
      />
      <TextField
        value={selectValue}
        onChange={e => handleChangeSelectValue(e.target.value)}
        id="standard-select-currency-native"
        select
        SelectProps={{
          native: true,
        }}
        variant="standard"
      >
        {selectValuesList}
      </TextField>
    </div>
  )
}
export default ConverterItem
