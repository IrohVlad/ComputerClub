import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  before: boolean;
  auth: boolean;
  role: string;
}

const initialState: CounterState = {
  before: true,
  auth: false,
  role: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
        state.role = action.payload;
        state.auth = true;
    },
    logout: (state) => {
        state.role = '';
        state.auth = false;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const RegisterRequest = async (dispatch, data: Object) => {
  const request = await fetch('http://127.0.0.1:8000/api/signup', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if(request.ok){
    let response = await request.json()
    localStorage.setItem('token', response.token)
    dispatch(login(response.role))
  }
}

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer