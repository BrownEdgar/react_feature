import React from 'react'
import Style from "../Car/Car.module.css"

export default function product({car}) {
  return (
    <div className={Style.Car}>
      <img src={car.image} alt={car.id} /> 
      <p> {car.description}</p>
    <h1 className={Style.title}>{car.title}</h1>
    </div>
  )
}


//jnjelu pahy chem uzel uxxaki anem saytis hamar petq chi

