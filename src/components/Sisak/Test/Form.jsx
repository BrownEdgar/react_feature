import React from 'react'

export default function Form() {
  return (
    <form onSubmit={onsubmit}>
        <div>
            <label htmlFor="name">Name</label>
                <input type="text" id='name' required />

        </div>
        <div>
            <label htmlFor="surname">Surname</label>
                <input type="text" id='surname' required />
        </div>
        <div>
            <label htmlFor="email">Email</label>
                <input type="text" id='email' required />
        </div>
        <div>
            <label htmlFor="languages">Select your language</label>
            <select name="languages" id="languages">
                <option value=""></option>
                <option value="html&css">HTML & CSS</option>
                <option value="javascript">Javascript</option>
                <option value="react">react</option>
                <option value="typescript">Typescript</option>
                <option value="python">Python</option>
            </select>
        </div>
        <div>
            <input type="submit" value="Register" required/>
        </div>
    </form>
  )
}
