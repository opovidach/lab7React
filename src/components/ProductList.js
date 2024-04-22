import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => (
    <div className="product-list">
        {products.map((product, index) => (
            <ProductCard key={index} {...product} addToCart={() => addToCart(product)} />
        ))}
    </div>
);

export default ProductList;
