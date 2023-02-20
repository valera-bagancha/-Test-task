import { createSlice } from '@reduxjs/toolkit'
import { IState } from './types'


const initialState: IState = {
  counter: 0,
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCount: (state, { payload }) => {
      state.counter = payload
    },
    
  }
})

export default slice.reducer

export const { setCount } = slice.actions