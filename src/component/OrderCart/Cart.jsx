import React from 'react';
import './Cart.css'

const Cart = ({ cart ,handleRemove }) => {

    const style = {
        display: 'flex',
        alignItems: 'center',
    }

    return (
        <div>
            <h4>Selectd T-Shrit</h4>
            {
                cart.map(crt => <div style={style} key={crt._id}>
                    <p>{crt.name}</p>
                    <button onClick={()=>handleRemove(crt._id)} className='remove-btn'>Remove</button>
                </div>)
            }
        </div>
    );
};

export default Cart;