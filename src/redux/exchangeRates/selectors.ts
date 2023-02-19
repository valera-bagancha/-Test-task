import { createSelector } from 'reselect'

import { IState } from '../types'

const exchangeRatesStateSelector = (state: IState) => state.exchangeRates

export const exchangeRatesSelector = createSelector(
  exchangeRatesStateSelector,
  ({ exchangeRates }) => exchangeRates
)

export const isPendingSelector = createSelector(
  exchangeRatesStateSelector,
  ({ isPending }) => isPending
)
