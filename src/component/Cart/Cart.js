import React from 'react';
import "./Cart.css"

const Cart = ({ cart }) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity
        totalShipping = totalShipping + product.shipping;


    }
    const tax = parseFloat((total * .1).toFixed(2));
    const grandTotal = total + totalShipping + tax
    return (
        <div >
            <h3 className='summary-title'>order summary</h3>
            <div className='summary-info'>
                <p>order items:{quantity}</p>
                <p>Total price:{total}</p>
                <p>Total shipping:${totalShipping}</p>
                <p>Tax:${tax}</p>
                <p><b>Grand Total:{grandTotal.toFixed(2)}</b></p>
            </div>
        </div >
    );
};

export default Cart;