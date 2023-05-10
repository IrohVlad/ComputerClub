import React from 'react';

const Date = ({date, id, active, sold, In, func}) => {
    return (
        !sold ? <div onClick={()=>{
            if(!In){
                func({id})
            }
        }} className={In ? 'date booked' : id == active ? 'date active' : 'date'}>
            {date}
        </div> : <></>
    );
};

export default Date;