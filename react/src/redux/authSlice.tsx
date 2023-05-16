import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  before: boolean;
  auth: boolean;
  errors: Object;
  role: string;
}

const initialState: CounterState = {
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
  } else {
    let response = await request.json()
    let errors;
    if(response.errors){
      errors = response.errors;
    } else {
      errors = 'Произошла ошибка'
    }
    dispatch(loginError(errors))
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
  } else {
    let response = await request.json()
    let errors;
    if(response.errors){
      errors = response.errors;
    } else {
      errors = 'Произошла ошибка'
    }
    dispatch(loginError(errors))
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
export const { login, loginError, logout, after } = authSlice.actions

export default authSlice.reducer