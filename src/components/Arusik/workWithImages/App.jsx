import React, { useState } from 'react'
import data from "./data.json"
import Product from './Product/Product'

import style from "./App.module.css" 

export default function App() {
  const [products, setProducts] = useState(data)

  const handleDelete = (id) => {
    const f = products.filter(product => product.id !== id)
    setProducts(f)
  }
  return (
    <div className={style.container}>
      {products.length >0
      ? (
        products.map((elem) => {
          return <Product product={elem} key={elem.id} handleDelete={handleDelete} />
        })
      )
    : <h1>No data:</h1>}
    </div>
  )
}
