import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import productImagem from './assets/m.jpg';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const products = [
        {
            name: "Product 1",
            price: 19.99,
            description: "Description for Product 1",
            image: productImagem
        },
        {
            name: "Product 2",
            price: 29.99,
            description: "Description for Product 2",
            image: productImagem
        },
        {
            name: "Product 3",
            price: 39.99,
            description: "Description for Product 3",
            image: productImagem
        }
    ];

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="app">
            <h1 className="app-title">Welcome to Our Store</h1>
            <ProductList products={products} addToCart={addToCart} />
            <Cart cartItems={cartItems} />
        </div>
    );
}

export default App;
