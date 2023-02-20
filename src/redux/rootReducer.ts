import localStorage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

import exchangeRates from './exchangeRates'
import counter from './counter'

const persistConfig = {
  key: 'counter',
  storage: localStorage,
}

const rootReducer = combineReducers({
  exchangeRates,
  counter: persistReducer(persistConfig, counter),
})

export default rootReducer
