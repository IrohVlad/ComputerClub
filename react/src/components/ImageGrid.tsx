import React from 'react';
import ImageGridItem from './ImageGridItem';

const ImageGrid = ({id, state}) => {
    const [images, setImages] = React.useState([]);
    const fetchImages =  React.useCallback(async ()=> {
        await fetch('http://127.0.0.1:8000/api/image', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(data => data.json())
        .then(data => setImages(data));
    }, [])
    React.useEffect(()=>{
        fetchImages()
    }, [])
    return (
        <div className='image-grid _container'>
            {images.length && images.map((value, index)=>{
                return <ImageGridItem key={index} img={value} id={id} state={state} />
            })}
        </div>
    );
};

export default ImageGrid;