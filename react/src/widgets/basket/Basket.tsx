import React from 'react';
import BasketItem from '../../components/BasketItem';
import hero from '../assets/hero.png'
import del from '../assets/delete.svg'
interface IBasketItems{
    rates: Array<any>;
    products: Array<any>;
}

const Basket = () => {
    const [items, setItems] = React.useState<IBasketItems>({rates: [], products: []});
    const getRates = React.useCallback(async () => {
        await fetch('http://127.0.0.1:8000/api/rate/basket', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({basketId: 1})
        }).then(data => data.json()).then(data => {
            setItems(prev => {return {rates: [...data], products: [...prev.products]}});
        });
        await fetch('http://127.0.0.1:8000/api/product/basket', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({basketId: 1})
        }).then(data => data.json()).then(data => {
            setItems((prev)=> {return {rates: [...prev.rates], products: [...data]}});
        });
    }, [])
    React.useEffect(()=>{
        getRates()
    }, [])
    return (
        <section className='basket-section'>
            <div className={!items.products.length && !items.rates.length ? "basket basket-empty" : "basket _container"}>
                {items.products.length ? items.products.map((value)=>{
                    return <BasketItem func={getRates} state={{name: 'products'}} id={value.id} key={value.id} title={value.name} 
                    count={value.pivot.count} img={value.img}/>
                }): ''}
                {items.rates.length ? items.rates.map((value)=>{
                    return <BasketItem func={getRates} state={{name: 'rates'}} id={value.id} key={value.id}
                     title={`Тариф ${value.rate_types.title} (${value.date})`} count={null} img={value.rate_types.img}/>
                }): ''}
                {!items.products.length && !items.rates.length && 'Пусто'}
            </div>
        </section>
    );
};

export default Basket;