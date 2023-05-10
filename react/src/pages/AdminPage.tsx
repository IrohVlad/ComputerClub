import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import AdminTab from '../components/AdminTab'
import AdminForm from '../components/AdminForm';
import AdminProduct from '../components/AdminProduct';
import AdminRate from '../components/AdminRate';
import AdminPc from '../components/AdminPc';

export interface IAdminProduct{
    id: number;
    name: string;
    price: number;
    img: string;
    product_info: Array<object>;
}
export interface IAdminRate{
    id: number;
    title: string;
    price: number;
    img: string;
    short_description: string;
    description: string;
    rates: Array<object>;
}
export interface IAdminPc{
    id: number;
    pc_info: Array<object>;
}

const AdminPage = () => {
    const [state, setState] = React.useState({name: 'Product'})
    const [product, setProducts] = React.useState<Array<IAdminProduct>>([]);
    const [rate, setRates] = React.useState<Array<IAdminRate>>([]);
    const [pc, setPcs] = React.useState<Array<IAdminPc>>([]);
    const getProducts =React.useCallback(async () => {
        await fetch('http://127.0.0.1:8000/api/product/admin', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
            }).then(data => data.json()).then(data => {
                setProducts(data);
            });
    }, [])
    const getRates =React.useCallback(async () => {
        await fetch('http://127.0.0.1:8000/api/rate/admin', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
                }).then(data => data.json()).then(data => {
                    setRates(data);
                });
    }, [])
    const getPcs =React.useCallback(async () => {
        await fetch('http://127.0.0.1:8000/api/pc/admin', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
                }).then(data => data.json()).then(data => {
                    setPcs(data);
                });
    }, [])
    React.useEffect(()=>{
        getProducts()
        getRates()
        getPcs()
    }, [])
    return (
        <>
            <Header/>
            <main>
                <AdminTab state={state} setter={setState}/>
                <AdminForm>
                    <input type='file' onChange={(e: any)=>{
                        let file = e.target.files[0];
                        if (file) {
                            let data = new FormData();
                            data.append('img', file);
                            fetch('http://127.0.0.1:8000/api/image', {
                                method: 'POST',
                                headers: {
                                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                                    'Accept': 'multipart/form-data',
                                    'Content-type': 'multipart/form-data'
                                },
                                body: data
                            })
                          }
                    }} />
                    {state.name == 'Product' && product.length && product.map((value, index)=>{
                        return <AdminProduct index={index} state={product} setter={setProducts} func={getProducts} key={value.id} id={value.id} title={value.name} price={value.price} product_info={value.product_info}/>
                    }) }
                    {state.name == 'Rate' && rate.length && rate.map((value, index)=>{
                        return <AdminRate rates={value.rates} index={index} state={rate} setter={setRates} func={getRates} key={value.id} id={value.id} title={value.title} price={value.price} short_description={value.short_description} description={value.description}/>
                    }) }
                    {state.name == 'Pc' && pc.length && pc.map((value, index)=>{
                        return <AdminPc pc_info={value.pc_info} index={index} state={pc} setter={setPcs} func={getPcs} key={value.id} id={value.id} />
                    }) }
                    {state.name == "Product" && <div onClick={()=>{
                        fetch('http://127.0.0.1:8000/api/product', {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({name: '', price: 0})
                        })
                        getProducts()
                    }} className="new-button">
                    +
                    </div>}
                    {state.name == 'Rate' && <div onClick={()=>{
                        fetch('http://127.0.0.1:8000/api/rate', {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({title: '', price: 0, short_description: '', description: ''})
                        })
                        getRates()
                    }} className="new-button">
                    +
                    </div>}
                    {state.name == 'Pc' && <div onClick={()=>{
                        fetch('http://127.0.0.1:8000/api/pc', {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({})
                        })
                        getPcs()
                    }} className="new-button">
                    +
                    </div>}
                </AdminForm>
            </main>
            <Footer/>
        </>
    );
};

export default AdminPage;