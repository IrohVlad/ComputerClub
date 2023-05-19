import React from 'react';
import Descriptions from './Descriptions';
import Delete from '../assets/delete.svg'
import ImageGrid from './ImageGrid';

const AdminProduct = React.memo<any>(({state, setter, img, index, func, title, price, product_info, id}) => {
    const [fetchState, setFetchState] = React.useState({text: ''})
    return (
        <div className='admin-product'>
            <div >{fetchState.text}</div>
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
            
            <ImageGrid id={id} state={'product'}/>
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