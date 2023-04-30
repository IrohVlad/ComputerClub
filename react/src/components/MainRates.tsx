import React from 'react';

interface IRateExample {
    id: number;
    title: string;
    price: number;
    short_description: string;
    description: string;
}
const MainRates = () => {
    const [rates, setRates] = React.useState<Array<IRateExample>>([])
    let [index, setIndex] = React.useState<number>(0)
    const getRates = async () => {
        await fetch('http://127.0.0.1:8000/api/type').then(data => data.json()).then(data => {
            setRates(data);
        });
    }
    React.useEffect(()=>{
        getRates();
    }, [])
    return (
        <section className="main__rates-section">
            <div className="purple-light _light__fore1"></div>
            <div className="main__rates _container">
                <div className="first__column">
                    <div className="main__rates__title">
                        Тариф <span className="_gold-text">{rates.length && rates[index].title}</span>
                    </div>
                    <div className="main__rates__stats">
                    {rates.length && rates[index].short_description}
                    </div>
                </div>
                <div className="second__column">
                    <div className="main__rates__text">
                    {rates.length && rates[index].description}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainRates;