import React from 'react';

export default function Users({ users }) {
  return (
    <ul className="main-list">
      {users.map((user) => {
        let registrationColor = '';

        switch (user.languages) {
          case 'html&css':
            registrationColor = '#c0392b';
            break;
          case 'javascript':
            registrationColor = '#1abc9c';
            break;
          case 'react':
            registrationColor = '#e67e22';
            break;
          case 'typescript':
            registrationColor = '#2980b9';
            break;
          case 'python':
            registrationColor = '#8e44ad';
            break;
          default:
            registrationColor = '#8e44ad';
        }

        const registrationStyle = {
          color: registrationColor,
        };

        return (
          <li key={user.id}>
            <span className="date">at {user.registeredDate.calendar()}</span>
            <span style={registrationStyle}>{user.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
