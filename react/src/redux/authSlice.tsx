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
        state.before = false;
    },
    after: (state) => {
      state.before = false;
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
  if(request.status == 200){
    let response = await request.json()
    localStorage.setItem('token', response.token)
    dispatch(login(response.role))
  }
}
export const LoginRequest = async (dispatch, data: Object) => {
  const request = await fetch('http://127.0.0.1:8000/api/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if(request.status == 200){
    let response = await request.json()
    localStorage.setItem('token', response.token)
    dispatch(login(response.role))
  }
}
export const RefreshRequest = async (dispatch) => {
  const request = await fetch('http://127.0.0.1:8000/api/refresh', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({})
  })
  if(request.status == 200){
    let response = await request.json()
    localStorage.setItem('token', response.token)
    dispatch(login(response.role))
  } else {
    dispatch(after())
  }
}
export const LogoutRequest = async (dispatch) => {
  const request = await fetch('http://127.0.0.1:8000/api/logout', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({})
  })
  if(request.status == 200){
    localStorage.removeItem('token')
    dispatch(logout())
  }
}

// Action creators are generated for each case reducer function
export const { login, logout, after } = authSlice.actions

export default authSlice.reducer