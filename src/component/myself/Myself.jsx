import React, { useContext } from 'react';
import { RingContext } from '../PropsDriling/grandpa';

const Myself = () => {
    const myRing = useContext(RingContext)
    return (
        <div className='border'>
            <h4>this is me</h4>
            <p>And i got my {myRing}</p>
        </div>
    );
};

export default Myself;