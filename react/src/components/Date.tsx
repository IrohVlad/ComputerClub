import React from 'react';

const Date = ({date, id, active, In, func}) => {
    return (
        <div onClick={()=>{
            if(!In){
                func({id})
            }
        }} className={In ? 'date booked' : id == active ? 'date active' : 'date'}>
            {date}
        </div>
    );
};

export default Date;