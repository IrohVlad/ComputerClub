import React from 'react';
import Date from './Date';

interface IRateProps{
    func: Function;
    id: number;
    price: number;
    title: string;
    short_description: string;
    description: string;
    img: string;
    rates: Array<object> | Array<null>;

}

const Rate = React.memo<IRateProps>(({func, rates, id, price, title, img, short_description, description}) => {
    const [state, setState] = React.useState({status: true, response: ''})
    const [activeDate, setActiveDate] = React.useState({id: null});
    // const setActive = (num: number){
    //     setActiveDate({id})
    // }
    return (
        <>
        <div className="rate">
            <div className="first-column">
                <div className="product-title">
                Тариф {title} <br/> <span>{short_description}</span> <br/> <span>{price} Рублей</span>
                </div>
                <div className="product-text">
                {description}
                </div>
                <div className="product-buttons">
                <div onClick={()=>{
                    if(activeDate.id){
                        fetch('http://127.0.0.1:8000/api/rate/add', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({basketId: 1, rateId: activeDate.id})
                    }).then(data => data.json()).then(data => {
                        if(data.error){
                            setState({status: false, response: data.error})
                        }
                        setActiveDate({id: null});
                        func()
                    })
                    }
                }} className={!state.status ?  "product-button product-button-error" : activeDate.id ? "product-button" : "product-button product-button-disabled"}>Купить</div>
                </div>
                <div>
                    {!state.status && state.response}
                </div>
            </div>
            <div className="second-column">
                <div className="product-img">
                    <img src={`http://127.0.0.1:8000/storage/hero.png`} alt="" />
                </div>
            </div>
        </div>
        <div className="dates">
            {rates.length ? rates.map((value)=>{
                return <Date func={setActiveDate} active={activeDate.id} key={value.id} id={value.id} date={value.date} sold={value.sold} In={value.in}/>
            }): "Все даты заняты"}
        </div>
        </>
    );
});

export default Rate;