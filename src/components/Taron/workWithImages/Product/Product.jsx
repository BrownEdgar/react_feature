import React from 'react'
import style from "./Product.module.css"

export default function Product({product , handleDelete}) {
  return (
    <div className={style.Product}>
        <span className={style.btn_delete} onClick={() => handleDelete(product.id)}>X</span>
        <img src={product.image} alt="{`product-${product.id}`}" />
        <h3 className={style.container}>{product.title}</h3>
        <p>{product.description}</p>
    </div>
  )
}
