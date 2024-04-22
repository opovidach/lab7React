import React from 'react';

const Cart = ({ cartItems }) => (
    <div className="cart">
        <h2 className="cart-title">Shopping Cart</h2>
        <ul className="cart-items">
            {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                </li>
            ))}
        </ul>
        <div className="cart-total">
            Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </div>
    </div>
);

export default Cart;
