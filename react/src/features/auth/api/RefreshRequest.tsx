import {login, after} from '../'
import { baseUrl } from '../../../shared'
export const RefreshRequest = async (dispatch) => {
    const request = await fetch(`${baseUrl}/refresh`, {
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