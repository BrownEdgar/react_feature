import React from "react";

export default function Pagination({ totalPosts, perPage, changePage }) {
  const links = [];
  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    links.push(i);
  }

  return (
    <div className="Paginetion">
      <ul>
        {links.map((number, index) => {
          return (
            <li key={index} onClick={() => changePage(number)}>
              {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
