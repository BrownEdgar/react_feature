import React, { useState } from "react";
import "./App.scss";

let count = 0;

export default function App() {
  /*const [formDate, setFormDate] = useState({
    username: "",
    email: "",
    password: "",
  });*/

  const [users, setUsers] = useState(
    []
  ); /* սարքում ենք դատարկ զանգված գրանցվելուց հետո հերթով push կանենք*/

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = e.target;

    const user = {
      id: ++count,
      username: username.value,
      email: email.value,
      password: password.value,
    };

    if (users.length === 0) {
      setUsers([user]);
    } else {
      setUsers([
        ...users,
        user,
      ]); /* զանգվածում ավելացնում ենք user-ներին, պարտադիր կլոնով,՝ useState-ը միանգամից չենք փոխում*/
    }

    e.target.reset();
  }; /* 
                    preventDefaulf ֆունկցիան կասեցնում է էջի refresh-ը և form-ի վրա հետևելու ենք onSubmit իրադարձությանը
                    username.value = "" մաքրում է  input-ի դաշտտը
                    username.value = ""; կամ e.target.reset(); 
                    */

  return (
    <div className="App">
      <div className="alert">
        <p>Users saved</p>
      </div>
      <h1>hForm in react</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username </label>
          <input type="text" name="username" id="username" required />
        </div>

        <div>
          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">password </label>
          <input type="password" name="password" id="password" required />
        </div>

        <div>
          <input type="submit" value="save" />
        </div>
      </form>
    </div>
  );
}
