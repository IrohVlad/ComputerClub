import React from 'react';
import PcDescriptions from './PcDescriptions';
import Delete from '../assets/delete.svg'


const AdminPc = ({id, func, pc_info, state, setter, index}) => {
    return (
        <div className='admin-product'>
        <PcDescriptions pc_info={pc_info} pc_index={index} state={state} setter={setter} pc_id={id} func={func}/>
        <div onClick={()=>{
            fetch('http://127.0.0.1:8000/api/pc', {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({id})
            })
            func();
        }} className="del-button">
                <img src={Delete} alt="" />
        </div>
    </div>
    );
};

export default AdminPc;