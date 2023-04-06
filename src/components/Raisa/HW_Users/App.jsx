import React, { useState, useEffect } from "react";
import Users from "./Users/Users";
import Modal from "./Users/Modal";

import "./App.scss";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function App() {
  const [data, setData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [divShow, setDivShow] = useState(true);

  useEffect(() => {
    fetch(`${API_KEY}/users`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {isOpen && (
        <Modal isOpen={isOpen} onclose={setIsOpen} setDivShow={setDivShow} />
      )}
      {divShow && (
        <div className="container">
          <Users users={data} />
        </div>
      )}
    </div>
  );
}
