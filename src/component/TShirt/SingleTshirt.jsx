import React from 'react';
import './SingleTshirt.css';

const SingleTshirt = ({shirt}) => {
    const {name, id , picture, price} = shirt
    return (
        <div className='tshirt-container'>
            <img className='t-img' src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p>Price:${price}</p>
        </div>
    );
};

export default SingleTshirt;