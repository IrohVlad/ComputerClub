import React from 'react';

const AdminForm = ({children}) => {
    return (
        <section className='admin-form-section'>
            <div className="admin-form _container">
                {children}
            </div>
        </section>
    );
};

export default AdminForm;