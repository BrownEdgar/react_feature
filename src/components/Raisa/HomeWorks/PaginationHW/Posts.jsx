import React from "react";

export default function Posts({ currentPost }) {
  return (
    <div className="Posts">
      <ul className="Posts__list">
        {currentPost.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
