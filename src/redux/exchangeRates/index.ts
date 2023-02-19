import { createSlice } from '@reduxjs/toolkit'

import { IState } from './types'

const initialState: IState = {
  exchangeRates: [],
  isPending: false,
}

const slice = createSlice({
  name: 'exchangeRates',
  initialState,
  reducers: {
    setExchangeRates: (state, { payload }) => {
      state.exchangeRates = payload
    },

    setIsPending: (state, { payload }) => {
      state.isPending = payload
    },
  },
})

export default slice.reducer

export const { setExchangeRates, setIsPending } = slice.actions
