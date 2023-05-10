import React from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import Footer from '../components/Footer';
interface IPRoduct{
    id: number;
    name: string;
    price: number;
    img: string;
    count: number;
}

const ProductsPage = () => {
    const [products, setProducts] = React.useState<Array<IPRoduct>>([]);
    const getProducts =React.useCallback(async () => {
        await fetch('http://127.0.0.1:8000/api/product/all', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(data => data.json()).then(data => {
            setProducts(data);
        });
    }, [])
    React.useEffect(()=>{
        getProducts()
    }, [])
    return (
        <>
        <Header/>
        <main>
            <section className="products-section">
                <div className="products _container">
                    {products.length && products.map((value) => {
                        return <Product key={value.id} func={getProducts} id={value.id} count={value.count} price={value.price} name={value.name} img={value.img}/>
                    })}
                </div>
            </section>
        </main>
        <Footer/>
        </>
    );
};

export default ProductsPage;