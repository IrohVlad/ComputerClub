import React from 'react';
import DescriptionItem from './DescriptionItem';
import Delete from '../assets/delete.svg'

interface IAdminDescription{
    id: number;
    product_type_id: number;
    title: string;
    value: string;
}
const Descriptions = ({product_info, product_index, state, setter, product_id, func}) => {
    return (
        <div className='descriptions'>
            {product_info && product_info.map((value: IAdminDescription, index)=>{
                return <DescriptionItem product_index={product_index} index={index} state={state} setter={setter} key={value.id} func={func} product_type_id={value.product_type_id} title={value.title} value={value.value} id={value.id}/>
            })}
            <div onClick={()=>{
                fetch('http://127.0.0.1:8000/api/product/info', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({product_type_id: product_id, title: "", value: ""})
                })
                func()
            }} className="new-button">
                    +
            </div>
        </div>
    );
};

export default Descriptions;