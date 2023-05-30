import React, { useState } from "react";

export default function Users({ users }) {
  const [filteredUsers, setFilteredUsers] = useState([]);

  const onChange = (e) => {
    console.log(e.target.name);
    setFilteredUsers(users.filter((user) => user.languages === e.target.name));
    console.log(users.filter((user) => user.languages === e.target.name));
  };

  return (
    <div>
      <div className="checkbox">
        <input
          onChange={(e) => onChange(e)}
          type="checkbox"
          id="html&css"
          name="html&css"
        />
        <label for="html&css">HTML&CSS</label>

        <input
          onChange={(e) => onChange(e)}
          type="checkbox"
          id="javascript"
          name="javascript"
        />
        <label for="html&css">JavaScript</label>

        <input
          onChange={(e) => onChange(e)}
          type="checkbox"
          id="react.js"
          name="react.Fjs"
        />
        <label for="html&css">React.js</label>

        <input
          onChange={(e) => onChange(e)}
          type="checkbox"
          id="typescript"
          name="typescript"
        />
        <label for="html&css">TypeScript</label>

        <input
          onChange={(e) => onChange(e)}
          type="checkbox"
          id="python"
          name="python"
        />
        <label for="html&css">Python</label>
      </div>
      <ul className="main-list">
        {filteredUsers.length > 0
          ? filteredUsers.map((user) => {
              return (
                <li key={user.id}>
                  <span className="date">
                    {user.registeredDate.format("hh:mm")}
                  </span>
                  <span>{user.name}</span>
                  <span className={`${user.languages.toLowerCase()}`}>
                    {user.languages}
                  </span>
                </li>
              );
            })
          : users.map((user) => {
              return (
                <li key={user.id}>
                  <span className="date">
                    {user.registeredDate.format("hh:mm")}
                  </span>
                  <span>{user.name}</span>
                  <span className={`${user.languages.toLowerCase()}`}>
                    {user.languages}
                  </span>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
