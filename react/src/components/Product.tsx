import React from 'react';
import ProductInfo from './ProductInfo';
interface IProductProps{
    func: Function;
    id: number;
    price: number;
    name: string;
    img: string;
    info: Array<any>;
    count: number;
}
const Product = React.memo<IProductProps>(function({func, id, price, name, info, img, count}) {
    const [state, setState] = React.useState({status: true, response: ''})
    return (
        <>
        <div className="product">
            <div className="first-column">
                <div className="product-title">
                Товар {name} <br/> <span>{price} Рублей</span>
                </div>
                <div className="product-text">
                {/* {desc} */}
                </div>
                <div className="product-buttons">
                <div onClick={()=>{
                    fetch('http://127.0.0.1:8000/api/product/add', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({productId: id})
                    }).then(data => data.json()).then(data => {
                        if(data.error){
                            setState({status: false, response: data.error})
                        }
                        func()
                    })
                }} className={state.status ? "product-button" : "product-button product-button-error"}>Купить</div>
                {count ? <div className="product-add">
                    <div onClick={()=>{
                        fetch('http://127.0.0.1:8000/api/product/del', {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({clear: false, productId: id})
                        }).then(data => data.json()).then(data => {
                            if(data.error){
                                setState({status: false, response: data.error})
                            } else {
                                setState({status: true, response: ''})
                                func()
                            }
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
                            if(data.error){
                                setState({status: false, response: data.error})
                            } else {
                                setState({status: true, response: ''})
                                func()
                            }
                        })
                    }} className="plus">+</div>
                </div>: ''}
                </div>
                <div>
                    {!state.status && state.response}
                </div>
            </div>
            <div className="second-column">
                <div className="product-img">
                    <img src={`http://127.0.0.1:8000/storage/${img.substr(7)}`} alt="" />
                </div>
            </div>
        </div>
        <div className="product-stats">
        {info.length ? info.map((value)=>{
            return <ProductInfo title={value.title} value={value.value} />
        }) : ''}
        </div>
        </>
    );
});

export default Product;