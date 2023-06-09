import React, { useEffect, useState } from "react";
import Users from "./Posts";
import Modal from "./Modal";
import "./Modal.scss";

import "./App.scss";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function App({}) {
  const [data, setData] = useState([]);
  const [isOpen, setIsopen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(0);
  const [divShow, setDivShow] = useState(true);
  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleDelete = (id) => {
    const f = data.filter((user) => user.id !== id);
    setData(f);
    setIsopen(false);
    setDivShow(true);
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setIsopen(true);
  };

  return (
    <div>
      {isOpen && (
        <Modal>
          <div className="Modal-Content">
            <h2>Are you sure?</h2>
            <button onClick={() => setIsopen(false)}>NO</button>
            <button onClick={() => handleDelete(selectedUser.id)}>YES</button>
          </div>
        </Modal>
      )}

      {divShow && (
        <div className="wrapper">
          <ul className="names">
            {data.map((user) => (
              <li key={user.id}>
                {user.name}
                <button
                  className="btn_delete"
                  onClick={() => handleDeleteClick(user)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
