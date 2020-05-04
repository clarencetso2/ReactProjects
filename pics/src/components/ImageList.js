import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
import ReactDOM from 'react-dom';

const ImageList = (props) =>{
	
	const images = props.images.map((image) => {
		//assign id to root element that is returning the list
		return <ImageCard key={image.id} image={image}/>
	});
	return <div className="image-list">{images}</div>;
};

export default ImageList;