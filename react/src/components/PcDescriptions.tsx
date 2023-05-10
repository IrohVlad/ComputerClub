import React from 'react';
import PcDescriptionItem from './PcDescriptionItem';

interface IAdminPcDescription{
    id: number;
    pc_id: number;
    title: string;
    value: string;
}
const PcDescriptions = ({pc_info, pc_index, pc_id, state, setter, func}) => {
    return (
        <div className='descriptions'>
            {pc_info && pc_info.map((value: IAdminPcDescription, index)=>{
                return <PcDescriptionItem pc_index={pc_index} index={index} state={state} setter={setter} key={value.id} func={func} pc_id={value.pc_id} title={value.title} value={value.value} id={value.id}/>
            })}
            <div onClick={()=>{
                fetch('http://127.0.0.1:8000/api/pc/info', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({pc_id, title: "", value: ""})
                })
                func()
            }} className="new-button">
                    +
            </div>
        </div>
    );
};

export default PcDescriptions;