import  { useState } from 'react'

export default function CustomHook(initialstate) {
    const [value, setValue] = useState(initialstate)
    
    const alldone = () => {
          value.map(elem =>{
          if(elem.completed === false){
          elem.completed = true 
        }
      })
      setValue([...value])
    }

    const removeById = (num) => {
      value.forEach((elem , i) => {
        if(elem.id === num)
        value.splice(i , 1)
      });
      setValue([...value])
    }

    const addTodo = () => {
      const addNewTodo = {
        "userId": 1,
        "id": 3,
        "title": "lorem ipsum dolor sit amet consectetur", 
        "completed": false
      }
      setValue([...value , addNewTodo])
    }

  return [value , { alldone , removeById  , addTodo }]     
  
}
