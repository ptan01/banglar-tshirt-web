import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTshirt from '../TShirt/SingleTshirt';
import './Home.css'

const Home = () => {
    const shirts = useLoaderData()
    return (
        <div className='Home-container'>
         <div className='tshirts-container'>
         {
            shirts.map(shirt => <SingleTshirt
            key={shirt._id}
            shirt={shirt}
            ></SingleTshirt>)
          }
        </div>
        <div className=''>
            <h3>there is card </h3>
        </div>
        </div>
    );
};

export default Home;