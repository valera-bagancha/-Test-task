import { createSlice } from '@reduxjs/toolkit'

import { IState } from './types'

const initialState: IState = {
  exchangeRates: [],
  isPending: false,
  isError: false,
  errorMessage: '',
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

    setIsError: (state, { payload }) => {
      state.isError = payload
    },

    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload
    },
  },
})

export default slice.reducer

export const { setExchangeRates, setIsPending, setIsError, setErrorMessage} = slice.actions
