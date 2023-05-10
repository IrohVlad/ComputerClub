import React from 'react';
import Delete from '../assets/delete.svg'

const PcDescriptionItem = ({pc_index, index, state, setter, func, pc_id, title, value, id}) => {
    const [fetchState, setFetchState] = React.useState({text: ''})
    return (
        <div className="description-item">
                <div >{fetchState.text}</div>
                <div className="input">
                    <label htmlFor="title">Название характеристики</label>
                    <input onBlur={()=>{
                        fetch('http://127.0.0.1:8000/api/pc/info', {
                            method: 'PATCH',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({id, title, value})
                        }).then(data => {
                            if (data.ok){
                                setFetchState({text:'success'})
                                func();
                            } else {
                                setFetchState({text:'error'})
                                func();
                            }
                        })
                    }} onChange={(e)=>{
                        if(state.length){
                            setter([...state.slice(0, pc_index), {...state[pc_index], pc_info: [...state[pc_index].pc_info.slice(0, index), {...state[pc_index].pc_info[index], title: e.target.value}, ...state[pc_index].pc_info.slice(index + 1) ]}, ...state.slice(pc_index + 1)])
                        }
                    }} value={title} name="title" type="text" placeholder='title' />
                </div>
                <div className="input">
                    <label htmlFor="value">Значение характеристики</label>
                    <input onBlur={()=>{
                        fetch('http://127.0.0.1:8000/api/pc/info', {
                            method: 'PATCH',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({id, title, value})
                        })
                        func();
                    }} onChange={(e)=>{
                        if(state.length){
                            setter([...state.slice(0, pc_index), {...state[pc_index], pc_info: [...state[pc_index].pc_info.slice(0, index), {...state[pc_index].pc_info[index], value: e.target.value}, ...state[pc_index].pc_info.slice(index + 1) ]}, ...state.slice(pc_index + 1)])
                        }
                    }} value={value} name="value" type="text" placeholder='value' />
                </div>
                <div onClick={()=>{
                    fetch('http://127.0.0.1:8000/api/pc/info', {
                        method: 'DELETE',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({id})
                    }).then(data => {
                        if (data.ok){
                            setFetchState({text:'success'})
                            func();
                        } else {
                            setFetchState({text:'error'})
                            func();
                        }
                    })
                }} className="del-button">
                    <img src={Delete} alt="" />
                </div>
        </div>
    );
};

export default PcDescriptionItem;