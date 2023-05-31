import React from 'react';
import AdminTabItem from './AdminTabItem';

const AdminTab = ({state, setter}) => {
    return (
        <section className='tab-section'>
            <div className="tab _container">
                <AdminTabItem state={state} setter={setter} name={'Product'}/>
                <AdminTabItem state={state} setter={setter} name={'Rate'}/>
                <AdminTabItem state={state} setter={setter} name={'Pc'}/>
            </div>
        </section>
    );
};

export default AdminTab;