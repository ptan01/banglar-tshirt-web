import React from 'react';
import './SingleTshirt.css';

const SingleTshirt = ({shirt , handleCart}) => {
    const {name, id , picture, price} = shirt
    return (
        <div className='tshirt-container'>
            <img className='t-img' src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p>Price:${price}</p>
            <button className='cart-btn' onClick={()=>handleCart(shirt)} >Add to Cart</button>
        </div>
    );
};

export default SingleTshirt;