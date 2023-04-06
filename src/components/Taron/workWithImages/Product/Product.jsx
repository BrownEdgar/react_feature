import React from 'react'
import style from "./Product.module.css"

export default function Product({product , handleDelete}) {
  return (
    <div className={style.Product}>
        <span className={style.btn_delete} onClick={() => handleDelete(product.id)}>X</span>
<<<<<<< HEAD
        <img src={product.image} alt={`product-${product.id}`} />
=======
			<img src={product.image} alt={`product-${product.id}`} />
>>>>>>> 0b457d81703fcc0136630c450667d8deaeb2b3ef
        <h3 className={style.container}>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.production}</p>
        <p>{product.year}</p>
        <p>{product.firm}</p>
        <button>{product.buy}</button>
    </div>
  )
}
