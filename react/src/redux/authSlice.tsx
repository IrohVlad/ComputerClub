import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  auth: boolean
}

const initialState: CounterState = {
  auth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.auth = true
    },
    login: (state) => {
        state.auth = true
    },
    logout: (state) => {
        state.auth = false
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { register, login, logout } = authSlice.actions

export default authSlice.reducer