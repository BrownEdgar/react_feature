import React, { useState } from 'react'

export default function CustomHook(initialState) {
const [value, setvalue] = useState(initialState)
 const sorted = () => {

    const sort = value.sort((a,b) => a - b)
    setvalue([...sort])
 }
const add = (n) => {
    const copy = value.slice()
    const i = copy.findIndex(elem => elem > n);
    copy.slice(i, 0, n);
    setvalue(copy)
}

    const check = (numb) => {
        const copy = value.slice()
        const a = copy.filter(elem => elem < numb)
        console.log(a.length);
    }


  return   [value, { sorted, add, check }, ]
}