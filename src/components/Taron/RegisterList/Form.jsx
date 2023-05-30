import React from "react";

import "./Form.css";

export default function Form({ onSubmit }) {
  return (
    <div>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" required />
      </div>
      <div>
        <label htmlFor="languages">select your languages</label>
        <select name="languages" id="languages" required>
          <option value=""></option>
          <option value="html&css">HTML & CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React.js</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Register" />
      </div>
    </form>
    </div>
  );
}