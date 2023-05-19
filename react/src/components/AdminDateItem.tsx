import React from 'react';
import Delete from '../assets/delete.svg'

const AdminDateItem = ({id, date, func, state, rate_index, setter, index}) => {
    const [fetchState, setFetchState] = React.useState({text: ''})
    return (
        <div className="description-item">
                <div >{fetchState.text}</div>
                <div className="input">
                    <label htmlFor="title">Дата</label>
                    <input onBlur={()=>{
                        fetch('http://127.0.0.1:8000/api/rate/date', {
                            method: 'PATCH',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({id, date})
                        }).then(data => {
                            if (data.ok){
                                setFetchState({text:'success'})
                                func();
                            } else {
                                setFetchState({text:'error'})
                                func();
                            }
                        })
                    }} onChange={(e)=>{
                        if(state.length){
                            setter([...state.slice(0, rate_index), {...state[rate_index], rates: [...state[rate_index].rates.slice(0, index),
                                 {...state[rate_index].rates[index], date: e.target.value}, ...state[rate_index].rates.slice(index + 1) ]}, ...state.slice(rate_index + 1)])
                        }
                    }} value={date} name="title" type="date" placeholder='title' />
                </div>
                <div onClick={()=>{
                    fetch('http://127.0.0.1:8000/api/rate/date', {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({id})
                    })
                    func()
                }} className="del-button">
                    <img src={Delete} alt="" />
                </div>
        </div>
    );
};

export default AdminDateItem;