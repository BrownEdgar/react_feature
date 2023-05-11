import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAsync, getSortProducts, sortProduct } from './productSlice'

export default function Products() {
   
    const sortProducts  = useSelector(getSortProducts)
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(addProductAsync("https://fakestoreapi.com/products"))
    }, [])
    const getSortProductsfilter = ()=>{
    dispatch(sortProduct())
   }
  return (
    <div>
        <button onClick={getSortProductsfilter}>Get Sort products</button>
        <pre>{JSON.stringify(sortProducts,null,1)}</pre>
    </div>
  )
}
