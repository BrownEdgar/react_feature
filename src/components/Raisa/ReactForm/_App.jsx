import React, { useState } from "react";

import "./App.scss";

export default function App() {
  const [formDate, setFormDate] = useState({
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefaulf();
    const { username } = e.target;
    setFormDate({ username: username.value });
    username.value = "";
  }; /* preventDefaulf ֆունկցիան կասեցնում է էջի refresh-ը և form-ի վրա հետևելու ենք onSubmit իրադարձությանը */

  return (
    <div className="App">
      <h1>hello {formDate.username}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username </label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <input type="submit" value="save" />
        </div>
      </form>
    </div>
  );
}
