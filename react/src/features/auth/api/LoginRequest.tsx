import {login, loginError} from '../'
import { baseUrl } from '../../../shared'
export const LoginRequest = async (dispatch, data: Object) => {
    const request = await fetch(`${baseUrl}/login`, {
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