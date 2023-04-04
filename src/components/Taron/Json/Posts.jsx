import React from 'react';
import PropTypes from "prop-types"


export default function Users({users}) {
  return (
    <div>
    {users.map((elem,index) =>{
        return(
            <div key={index}> 
                <h2>{elem.name}</h2>
            </div>
        )
    })}
    </div>  
  )
}

