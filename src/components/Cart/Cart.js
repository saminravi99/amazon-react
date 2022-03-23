import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const price = props.cart.reduce((total, product) => {
        return total + product.price;
    }, 0);

    const shipping = props.cart.reduce((total, product) => total + product.shipping, 0);
    const tax = price * 0.1;
    const grandTotal = price + shipping + tax;

    // const getId =props.cart.find(product => product.id);
    // console.log(getId);

    // console.log(price);

    
    return (
        <div className="cart">
            <h3 className="text-center mt-4">Order Summary</h3>

            <h6 className="mt-5">Selected Item: {props.cart.length} </h6>
            <h6 className="mt-4">Total Price: $ {price} </h6>
            <h6 className="mt-4">Total Shipping Charge: $ {shipping}  </h6>
            <h6 className="mt-4">Tax (10%) : $ {tax}</h6>
            <h5 className="mt-5">Grand Total: $ {grandTotal}</h5>

            <div className="mt-5 d-flex flex-column justify-content-center">
                <button onClick={() => props.clearCart()} className="clr-btn px-5 py-3">Clear Cart <i className="fa-solid fa-trash ms-2"></i></button>
                <button onClick={props.confirmOrder} className="mt-4 rvw-btn px-5 py-3">Confirm Order  <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Cart;