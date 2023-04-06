import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const shirts = useLoaderData()
    return (
        <div>
          <h2>this is Home{shirts.length}</h2>  
        </div>
    );
};

export default Home;