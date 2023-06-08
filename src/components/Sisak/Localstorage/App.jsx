import React, { useState, useEffect} from 'react'

export default function App() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const p = localStorage.getItem('products') ?? JSON.parse(localStorage.getItem('products'));
        if (p) {
            setProducts(p)
        }

        
    }, [])
  return (
    <div>
        {JSON.stringify(products)}
    </div>
  )
}
