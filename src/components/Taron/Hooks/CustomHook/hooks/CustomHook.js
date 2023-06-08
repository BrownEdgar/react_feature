import {useState} from 'react'

export default function CustomHook(initialState) {
    const [value, setValue] = useState(initialState)
    const sorted = () =>{
        const sort = value.sort((a,b) => a - b)
        setValue([...sort])
    }

    const add = (n) => {
        const copy = value.slice()
        const i = copy.findIndex(elem => elem > n)
        copy.splice(i, 0 , n)
        setValue(copy)
    }

    const check = (num) => {
        const copy = value.slice()
        const c = copy.filter(elem => elem < num)
        console.log(c.length)
    }

  return  [value , {sorted , add , check}]
} 


// , { sorted, add, removeByIndex, toJson }