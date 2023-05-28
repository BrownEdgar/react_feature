import React from 'react'

export default function Form({onSubmit}) {
  return (
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' required/>
        </div>
        <div>
            <label htmlFor='surname'>Surname</label>
            <input type='text' id='surname' required/>
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required/>
        </div>
        <div>
            <label htmlFor='langueges'>Langueges</label>
            <select name='langueges' id='langueges' >
                <option value=''></option>
                <option value='htmlcss'>Html & Css</option>
                <option value='javascript'>Javascript</option>
                <option value='react'>React</option>
                <option value='typescript'>Typescript</option>
                <option value='python'>Python</option>
            </select>
        </div>
        <div>
            <input type='submit' vlaue='Register'/>
        </div>
    </form>
  )
}
