import React from 'react';
import Descriptions from './Descriptions';
import Delete from '../assets/delete.svg'
import ImageGrid from './ImageGrid';

const AdminProduct = React.memo<any>(({state, setter, img, index, func, title, price, product_info, id, count}) => {
    const [fetchState, setFetchState] = React.useState({text: ''})
    const [add, setAdd] = React.useState('0');
    return (
        <div className='admin-product'>
            <div className='product_count'>{fetchState.text}</div>
            <div>{count}</div>
            <div className='product_gen'>
                <div className="plus" onClick={()=>{
                    fetch('http://127.0.0.1:8000/api/product/createins', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({count: add, product_type_id: id})
                    }).then(data => {
                        if (data.ok){
                            setFetchState({text:'success'})
                            setAdd('0')
                            func();
                        } else {
                            setFetchState({text:'error'})
                            setAdd('0')
                            func();
                        }
                    })
                }}>+</div>
                <div className="input">
                    <input type="text" onChange={(e)=>{
                        let text = e.target.value.replace(/\s/, '');
                        setAdd(text)
                    }} onBlur={(e)=>{
                        if(isNaN(+String(+e.target.value))){
                            setAdd('0')
                        }
                    }} value={add}/>
                </div>
                <div className="minus" onClick={()=>{
                    fetch('http://127.0.0.1:8000/api/product/deleteins', {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({count: add, product_type_id: id})
                    }).then(data => {
                        if (data.ok){
                            setFetchState({text:'success'})
                            setAdd('0')
                            func();
                        } else {
                            setFetchState({text:'error'})
                            setAdd('0')
                            func();
                        }
                    })
                }}>-</div>
            </div>
            <div className="input">
                <label htmlFor="title">Название продукта</label>
                <input onBlur={()=>{
                    fetch('http://127.0.0.1:8000/api/product', {
                        method: 'PATCH',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({id, name: title, price})
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
                        setter([...state.slice(0, index) ,{...state[index], name: e.target.value}, ...state.slice(index + 1) ])
                    }
                }} value={title} name="title" type="text" placeholder='title' />
            </div>
            <div className="input">
                <label htmlFor="price">Цена продукта</label>
                <input onBlur={()=>{
                    fetch('http://127.0.0.1:8000/api/product', {
                        method: 'PATCH',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({id, name: title, price})
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
            <div className="image">
                <img src={`http://127.0.0.1:8000/storage/${img.substr(7)}`} alt="" />
            </div>
            
            <ImageGrid func={func} id={id} state={'product'}/>
            <Descriptions state={state} setter={setter} func={func} product_index={index} product_id={id} product_info={product_info}/>
            <div onClick={()=>{
                fetch('http://127.0.0.1:8000/api/product', {
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
});

export default AdminProduct;