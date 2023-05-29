import {logout} from '../'
import { baseUrl } from '../../../shared'
export const LogoutRequest = async (dispatch) => {
    const request = await fetch(`${baseUrl}/logout`, {
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