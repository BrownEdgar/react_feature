import React, { useState, useEffect } from 'react';
import Modal from './Modal';

function UserList() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);

  function handleUserClick(user) {
    setSelectedUser(user);
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
    setSelectedUser(null);
  }

  return (
    <div>
      <h1>User List</h1>
      {users.map(user => (
        <div key={user.id} onClick={() => handleUserClick(user)}>
          <p>{user.name}</p>
        </div>
      ))}
      {selectedUser && (
        <Modal onClose={handleModalClose}>
          <h2>{selectedUser.name}</h2>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Website: {selectedUser.website}</p>
        </Modal>
      )}
    </div>
  );
}

export default UserList;
