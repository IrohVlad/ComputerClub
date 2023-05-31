import React from 'react';

const AdminTabItem = ({state, setter, name}) => {
    return (
        <div onClick={()=>{
            setter({name})
        }} className={state.name == name ? 'tab-item tab-item-active' : 'tab-item'}>
            {name}
        </div>
    );
};

export default AdminTabItem;