import React from 'react';

const ImageGridItem = ({img, id, state}) => {
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
                    } else if (state == 'rate'){
                        fetch('http://127.0.0.1:8000/api/rate/img', {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify({id, img})
                        })
                    }
                }} src={`http://127.0.0.1:8000/storage/${img.substr(7)}`} alt="" />
        </div>
    );
};

export default ImageGridItem;