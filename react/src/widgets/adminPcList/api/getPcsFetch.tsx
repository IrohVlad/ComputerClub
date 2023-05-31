import { getPcs } from "../store/pcSlice";

export default async (dispatch) =>{ 
    let response = await fetch('http://127.0.0.1:8000/api/pc/admin', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    })
    if(response.ok){
        const data = await response.json();
        dispatch(getPcs(data));
    }
}