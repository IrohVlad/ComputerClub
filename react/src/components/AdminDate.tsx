import React from 'react';
import AdminDateItem from './AdminDateItem';

interface IAdminDate{
    id: number;
    rate_type_id: number;
    date: string;
}

const AdminDate = ({rates, rate_index, state, setter, rate_id, func}) => {
    return (
        <div className='descriptions'>
            {rates && rates.map((value: IAdminDate, index)=>{
                return <AdminDateItem rate_index={rate_index} index={index} state={state} setter={setter} key={value.id} func={func} date={value.date} id={value.id}/>
            })}
            <div onClick={()=>{
                fetch('http://127.0.0.1:8000/api/rate/date', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({rate_type_id: rate_id, date: '1000-01-01'})
                })
                func()
            }} className="new-button">
                    +
            </div>
        </div>
    );
};

export default AdminDate;