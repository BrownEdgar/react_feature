import React from "react";

export default function Modal({ onclose }) {
  return;
  <div className="Modal">
    <div>
      <h2>Are you sure?</h2>
      <button>onClick={() => onclose(false)}cencel</button>
    </div>
  </div>;
}
