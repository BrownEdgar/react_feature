import React from 'react'
import style from './Product.module.css'

export default function Product({product,handleDelete}) {
  return (
    <div className={style.product}>
      <span className={style.btn_delete} onClick = {()=>{handleDelete(product.id)}}>+</span>
      <img src = {product.image} alt = {`product - ${product.id}`}/>
      <h3 className={style.title}>{product.title}</h3>
      <p>{product.description}</p>
 
    </div>
  )
}
