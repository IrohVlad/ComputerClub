import React from 'react';
import Delete from '../assets/delete.svg'
import AdminDate from './AdminDate';


const AdminRate = ({state, setter, index, func, title, price, rates, short_description, description, id}) => {
    const [fetchState, setFetchState] = React.useState({text: ''})
    return (
        <div className='admin-product'>
            {fetchState.text}
            <div className="input">
                <label htmlFor="title">Название тарифа</label>
                <input onBlur={()=>{
                    fetch('http://127.0.0.1:8000/api/rate', {
                        method: 'PATCH',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({id, title, price, short_description, description})
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
                        setter([...state.slice(0, index) ,{...state[index], title: e.target.value}, ...state.slice(index + 1) ])
                    }
                }} value={title} name="title" type="text" placeholder='title' />
            </div>
            <div className="input">
                <label htmlFor="price">Цена тарифа</label>
                <input onBlur={()=>{
                    fetch('http://127.0.0.1:8000/api/rate', {
                        method: 'PATCH',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({id, title, price, short_description, description})
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
                        setter([...state.slice(0, index) ,{...state[index], price: e.target.value}, ...state.slice(index + 1) ])
                    }
                }} value={price} name="price" type="text" placeholder='price' />
            </div>
            <div className="input">
                <label htmlFor="price">Краткое описание</label>
                <input onBlur={()=>{
                    fetch('http://127.0.0.1:8000/api/rate', {
                        method: 'PATCH',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({id, title, price, short_description, description})
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
                        setter([...state.slice(0, index) ,{...state[index], short_description: e.target.value}, ...state.slice(index + 1) ])
                    }
                }} value={short_description} name="price" type="text" placeholder='price' />
            </div>
            <div className="input">
                <label htmlFor="price">Развернутое описание</label>
                <input onBlur={()=>{
                    fetch('http://127.0.0.1:8000/api/rate', {
                        method: 'PATCH',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({id, title, price, short_description, description})
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
                        setter([...state.slice(0, index) ,{...state[index], description: e.target.value}, ...state.slice(index + 1) ])
                    }
                }} value={description} name="price" type="text" placeholder='price' />
            </div>
            <AdminDate rates={rates} rate_index={index} state={state} setter={setter} rate_id={id} func={func}/>
            <div onClick={()=>{
                fetch('http://127.0.0.1:8000/api/rate', {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({id})
                }).then(data => {
                    if (data.ok){
                        setFetchState({text:'success'})
                        func();
                    } else {
                        setFetchState({text:'error'})
                        func();
                    }
                })
            }} className="del-button">
                    <img src={Delete} alt="" />
            </div>
        </div>
    );
};

export default AdminRate;