import { combineReducers } from '@reduxjs/toolkit'

import exchangeRates from './exchangeRates'

const rootReducer = combineReducers({
  exchangeRates,
})

export default rootReducer
