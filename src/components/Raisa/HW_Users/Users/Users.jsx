import React from "react";
import "./Users.scss";

export default function Users({ users }) {
  return (
    <div>
      {users.map((user, id) => {
        return (
          <div className="Users__Item" key={id}>
            <h2> {user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            <button className="Users__Delete">X</button>
          </div>
        );
      })}
    </div>
  );
}
