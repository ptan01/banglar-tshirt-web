import React, { createContext } from 'react';
import Father from '../Father/Father';
import './Grandpa.css'

export const RingContext = createContext('ring')

const Grandpa = () => {
    return (
        <div className='border'>
           <h4>this is grandpa</h4>
            <RingContext.Provider value='golden ring'>
            <Father></Father>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;