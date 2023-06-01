import React from 'react';

const ImageGridItem = ({img, getFunc, id, state, func}) => {
    return (
        <div className="image-grid-item">
                <div onClick={()=>{
                        fetch('http://127.0.0.1:8000/api/image', {
                            method: 'DELETE',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({img})
                        })
                        getFunc()
                }} className="del">-</div>
                <img onClick={()=>{
                    if(state == 'product'){
                        fetch('http://127.0.0.1:8000/api/product/img', {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({id, img})
                        })
                        func()
                    } else if (state == 'rate'){
                        fetch('http://127.0.0.1:8000/api/rate/img', {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({id, img})
                        })
                        func()
                    }
                }} src={`http://127.0.0.1:8000/storage/${img.substr(7)}`} alt="" />
        </div>
    );
};

export default ImageGridItem;