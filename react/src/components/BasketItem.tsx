import React from 'react';
import hero from '../assets/hero.png'
import del from '../assets/delete.svg'

interface IBasketItemProps{
    img: string;
    title: string;
    count: number | null;
    func: Function;
    state: any;
    id: number
}

const BasketItem = React.memo<IBasketItemProps>(({img, state, title, count, func, id}) => {
    return (
        <div className="basket-item">
            <div className="basket-img">
                <img src={hero} alt="" />
            </div>
            <div className="basket-title">{title}</div>
            <div className="basket-buttons">
            {count ? <div className="product-add">
                    <div onClick={()=>{
                        fetch('http://127.0.0.1:8000/api/product/del', {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({basketId: 1, clear: false, productId: id})
                        }).then(data => data.json()).then(data => {
                            func()
                        })
                    }} className="minus">-</div>
                    <div className="count">{count}</div>
                    <div onClick={()=>{
                        fetch('http://127.0.0.1:8000/api/product/add', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({basketId: 1, productId: id})
                        }).then(data => data.json()).then(data => {
                            func()
                        })
                    }} className="plus">+</div>
                </div>: ''}
                <div onClick={()=>{
                    if(count){
                        fetch('http://127.0.0.1:8000/api/product/del', {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({basketId: 1, clear: true, productId: id})
                        }).then(data => data.json()).then(data => {
                            func()
                        })
                    } else {
                        fetch('http://127.0.0.1:8000/api/rate/del', {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({rateId: id})
                        }).then(data => data.json()).then(data => {
                            func()
                        })
                    }
                }} className="basket-delete">
                    <img src={del} alt="" />
                </div>
                <div onClick={()=>{
                    if(state.name == 'products'){
                        fetch('http://127.0.0.1:8000/api/product/buy', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({product_type_id: id})
                        }).then(func())
                    } else if (state.name == 'rates') {
                        fetch('http://127.0.0.1:8000/api/rate/buy', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({rate_id: id})
                        }).then(func())
                    }
                }} className="basket-buy _gold-button">Купить</div>
            </div>
        </div>
    );
});

export default BasketItem;