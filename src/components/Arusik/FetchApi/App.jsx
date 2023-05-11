import React, { useEffect, useState } from "react";

import './App.css'

export default function App() {
  const [products, setProducts] = useState([]);
  

  const handleClick = () => {
    setProducts([...products.sort((a, b) => b.price - a.price)]);
  };
  const handleClick2 = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  return (
    <div>
      <button onClick={handleClick2}>Products</button>
      <button onClick={handleClick}>Sort Products</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
