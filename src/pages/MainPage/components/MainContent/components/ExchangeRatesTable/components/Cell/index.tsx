import { FC, useRef, useState } from 'react'
import { useAppDispatch } from '../../../../../../../../hooks/useAppDispatch'
import { setExchangeRates } from '../../../../../../../../redux/exchangeRates'

import './style.scss'
interface IProps {
  value: string
}

const Cell: FC<IProps> = ({ value }) => {
  const [showEdit, setShowEdit] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [editMode, setEditMode] = useState(false)

  const dispatch = useAppDispatch()

  const ref = useRef<null | HTMLInputElement>(null)

  const validationValue = (data: string) => {
    const minValue = +value * 0.9
    const maxValue = +value * 1.1
    if (+data < minValue || +data > maxValue) {
      return value
    }
    return data
  }

  const onSaveValue = (e: any) => {
    validationValue(e)

    dispatch(setExchangeRates(value))
  }

  const onMouseEnter = () => {
    if (editMode) return
    setShowEdit(true)
  }

  const onMouseLeave = () => {
    setShowEdit(false)
  }

  const clickHandler = () => {
    setShowEdit(false)
    setDisabled(false)
    setEditMode(true)
  }

  return (
    <div className="exchange-rate">
      <div className="input-box">
        <input
          ref={ref}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="input-cell"
          type="text"
          defaultValue={value}
          readOnly={disabled}
        />
        {showEdit && (
          <span
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={clickHandler}
            className="material-symbols-outlined edit-icon"
          >
            edit
          </span>
        )}
        {editMode && (
          <div className="settings">
            <span onClick={onSaveValue} className="material-symbols-outlined">done</span>
            <span className="material-symbols-outlined">close</span>
          </div>
        )}
      </div>
    </div>
  )
}

{
  /* <span>
      {value}
    </span> */
}

export default Cell
