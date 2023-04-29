import  { useState } from 'react'

export default function CustomHook(initialState) {
	const [value, setValue] = useState(initialState)
    
    const AddDone = () => {
     value.forEach((elem) =>{
              if(!elem.completed){
                elem.completed = true
              }   
        })
        setValue([...value])
      }
	
      const RemoveById = (num) => {
        const copy = [...value]
        copy.forEach((elem, index) =>{
          if(elem.id === num){
            copy.splice(index, 1)
          }
        })
        setValue(copy)
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