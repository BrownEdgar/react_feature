import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleClick = () => {
    setData([...data.sort((a, b) => b.price - a.price)]);
  };

  return (
    <div>
      <div className="btn">
        <button onClick={handleClick} className="button">GET SORT</button>
      </div>
      <div className="wrap">
        <ul className="box">
          {data.map((data) => (
            <li key={data.id}>
              <h1>{data.title}</h1>
              <h2 className="price">${data.price}</h2>
              <p className="about">Category: {data.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Ստեղծել «Promise»,  որը 'https://fakestoreapi.com/products'  api-ից կստանա բոլոր "Product"-ը
// կսորտավորի ըստ գնի <թանկից-էժան> և կցուցադրի էջում։
