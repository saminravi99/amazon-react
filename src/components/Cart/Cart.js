import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className="cart">
            <h3 className="text-center mt-4">Order Summary</h3>

            <h6 className="mt-5">Selected Item: 0 </h6>
            <h6 className="mt-4">Total Price: $ 0 </h6>
            <h6 className="mt-4">Total Shipping Charge: $ 0  </h6>
            <h6 className="mt-4">Tax (10%) : $ 0</h6>
            <h4 className="mt-5">Grand Total: $ 0</h4>

            <div className="mt-5 d-flex flex-column justify-content-center">
                <button className="clr-btn px-5 py-3">Clear Cart <i className="fa-solid fa-trash ms-2"></i></button>
                <button className="mt-4 rvw-btn px-5 py-3">Review Order <i className="fa-solid fa-arrow-right  ms-2"></i></button>
            </div>
        </div>
    );
};

export default Cart;