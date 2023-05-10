import React from 'react';
import Delete from '../assets/delete.svg'

const DescriptionItem = ({state, setter, product_index, index, product_type_id, title, value, func, id}) => {
    const [fetchState, setFetchState] = React.useState({text: ''})
    return (
        <div className="description-item">
                <div >{fetchState.text}</div>
                <div className="input">
                    <label htmlFor="title">Название характеристики</label>
                    <input onBlur={()=>{
                        fetch('http://127.0.0.1:8000/api/product/info', {
                            method: 'PATCH',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({id, title, value})
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
                            setter([...state.slice(0, product_index), {...state[product_index], product_info: [...state[product_index].product_info.slice(0, index), {...state[product_index].product_info[index], title: e.target.value}, ...state[product_index].product_info.slice(index + 1) ]}, ...state.slice(product_index + 1)])
                        }
                    }} value={title} name="title" type="text" placeholder='title' />
                </div>
                <div className="input">
                    <label htmlFor="value">Значение характеристики</label>
                    <input onBlur={()=>{
                        fetch('http://127.0.0.1:8000/api/product/info', {
                            method: 'PATCH',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({id, title, value})
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
                            setter([...state.slice(0, product_index), {...state[product_index], product_info: [...state[product_index].product_info.slice(0, index), {...state[product_index].product_info[index], value: e.target.value}, ...state[product_index].product_info.slice(index + 1) ]}, ...state.slice(product_index + 1)])
                        }
                    }} value={value} name="value" type="text" placeholder='value' />
                </div>
                <div onClick={()=>{
                    fetch('http://127.0.0.1:8000/api/product/info', {
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

export default DescriptionItem;