import React, { useState } from "react";
import "./App.scss";
let count = 0;

export default function App() {
  const [users, setUsers] = useState([]);
  const [notification, setNotification] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email } = e.target;
    const user = {
      id: ++count,
      username: username.value,
      email: email.value,
    };

    if (users.length === 0) {
      setUsers([user]);
    } else {
      setUsers([...users, user]);
    }
    setNotification(true);
    setTimeout(setNotification, 3000, false);
    e.target.reset();
  };

  const handleBlur = (e) => {
    const { value: email } = e.target;
    const emailExist = users.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (emailExist) {
      setError(true);
      setNotification(false);
    } else {
      setError(false);
    }
  };

  return (
    <div className="App">
      <div className={`alert ${notification ? "show" : ""}`}>
        <p>You have registered!</p>
      </div>

      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">name </label>
          <input type="text" name="username" id="username" required />
        </div>
        <div>
          <label htmlFor="email">email </label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={handleBlur}
            required
          />
          {error && <p className="error">This email already exist</p>}
        </div>
        <div>
          <input type="submit" value="save" />
        </div>
      </form>
    </div>
  );
}
