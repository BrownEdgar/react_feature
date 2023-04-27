import  { useState } from 'react'

export default function CustomHook(initialState) {
	const [value, setValue] = useState(initialState)
    
    const AddDone = () => {
     value.forEach((elem) =>{
              if(elem.completed === false){
                elem.completed = true
              }   
        })
        setValue([...value])
      }
	
      const RemoveById = (num) => {
        value.forEach((elem, index) =>{
          if(elem.id === num){
            value.splice(index, 1)
          }
        })
        setValue([...value])
      }
    
      const AddToDo = (title) => {
        const newTodo = {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": false
        }
    
        setValue([...value, newTodo]);
      };

	return [value, { AddDone, RemoveById, AddToDo }]
}