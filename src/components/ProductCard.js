import React from 'react';

const ProductCard = ({ name, price, description, image, addToCart }) => (
    <div className="product-card">
        <img className="product-image" src={image} alt={name} />
        <div className="product-details">
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">Price: ${price}</p>
            <button onClick={addToCart} className="add-to-cart-btn">Add to Cart</button>
        </div>
    </div>
);

export default ProductCard;
