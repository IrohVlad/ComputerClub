import React from 'react';

const ProductInfo = ({title, value}) => {
    return (
        <div className='product-info _container'>
            <div className="title">{title}</div>
            <div className="value">{value}</div>
        </div>
    );
};

export default ProductInfo;