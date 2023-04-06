import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTshirt from '../TShirt/SingleTshirt';
import './Home.css'
import Cart from '../OrderCart/Cart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Home = () => {
    const shirts = useLoaderData() ;
    const [cart , setCart] = useState([])

    const handleCart = (shirt)=>{
        const haveCart = cart.find(crt => crt._id === shirt._id)
        if(haveCart){
            toast('You have already added')
            return
        }
        const newCart = [...cart , shirt]
        setCart(newCart)
    }

    const handleRemove = (id)=>{
        const remaining = cart.filter(crt => crt._id !== id)
        setCart(remaining)
    
    }

    return (
        <div className='Home-container'>
         <div className='tshirts-container'>
         {
            shirts.map(shirt => <SingleTshirt
            key={shirt._id}
            shirt={shirt}
            handleCart={handleCart}
            ></SingleTshirt>)
          }
        </div>
        <div className=''>
            <Cart
            cart={cart}
            handleRemove={handleRemove}
            ></Cart>
        </div>
        </div>
    );
};

export default Home;