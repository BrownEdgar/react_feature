import React from 'react'
import style from "./Product.module.css"

export default function Product({product , handleDelete}) {
  return (
    <div className={style.Product}>
        {/* <span className={style.btn_delete} onClick={() => handleDelete(product.id)}>X</span> */}
        <span className={style.btn_delete} onClick={() => handleDelete(product.id)}>delete</span>
        <div className={style.imgbox}>
        <img src={product.image} alt={`product-${product.id}`} />
        <p className={style.price}>{product.price}</p>

        </div>
        <h3 className={style.container}>{product.title}</h3>
        <button className={style.button3}>Add to cart</button>
    </div>
  )
}