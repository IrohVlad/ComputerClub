import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import authState from './IAuthState'

const initialState: authState = {
  before: true,
  auth: false,
  errors: {},
  role: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
        state.role = action.payload;
        state.auth = true;
        state.errors = {};
        state.before = false;
    },
    loginError: (state, action: PayloadAction<string>) =>{
      state.errors = action.payload;
    },
    after: (state) => {
      state.before = false;
    },
    logout: (state) => {
        state.role = '';
        state.auth = false;
        state.errors = {};
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, loginError, logout, after } = authSlice.actions

export default authSlice.reducer