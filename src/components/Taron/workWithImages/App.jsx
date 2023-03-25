import React, { useState } from 'react'
import data from "./data.json"
import Product from "./Product/Product"

import style from "./App.module.css"

export default function App() {
    // const [url, setUrl] = useState('https://www.shutterstock.com/image-photo/view-mountain-ararat-yerevan-city-260nw-1450464164.jpg')


    const [products, setProducts] = useState(data)
    const handleDelete = (id) => {
        const f = products.filter(product => product.id !== id)
        setProducts(f)
    }
  return (
    <div className={style.container}>
        {
            products.lenght > 0 ? (products.map((elem) => {
                return <Product product={elem} key={elem.id} handleDelete = {handleDelete}/>
            })
            )
            : <h1>No Data!</h1>
        }



        {/* variant 1 */}
        {/* <img src="https://www.shutterstock.com/image-photo/view-mountain-ararat-yerevan-city-260nw-1450464164.jpg" alt="book" /> */}
        {/* variant 2 */}
        {/* <img src={url} alt="book" /> */}
        {/* variant 3 */}
        {/* <img src="./images/" alt="book" /> */}
    </div>
  )
}
