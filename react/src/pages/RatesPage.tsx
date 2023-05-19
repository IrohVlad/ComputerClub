import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Rate from '../components/Rate';
interface IPRoduct{
    id: number;
    title: string;
    short_description: string;
    description: string;
    price: number;
    img: string;
    rates: Array<object> | Array<null>;
}

const RatesPage = () => {
    const [products, setProducts] = React.useState<Array<IPRoduct>>([]);
    const getRates =React.useCallback(async () => {
        await fetch('http://127.0.0.1:8000/api/rate/all', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(data => data.json()).then(data => {
            setProducts(data);
        });
    }, [])
    React.useEffect(()=>{
        getRates()
    }, [])
    return (
        <>
        <Header/>
        <main>
            <section className="products-section">
                <div className="products _container">
                    {products.length && products.map((value) => {
                        return <Rate rates={value.rates} key={value.id} func={getRates} id={value.id} description={value.description}
                        short_description={value.short_description} price={value.price} title={value.title} img={value.img}/>
                    })}
                </div>
            </section>
        </main>
        <Footer/>
        </>
    );
};

export default RatesPage;