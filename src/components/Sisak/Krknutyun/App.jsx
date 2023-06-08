import React, { useState } from "react";

import "./App.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur fuga, hic perspiciatis similique vitae soluta quasi, inventore nostrum non cupiditate doloremque necessitatibus fugit. Consequatur, eos sed voluptas ratione fugit inventore repellendus mollitia non totam officiis. Eaque quasi minima natus!",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, architecto.",
      isShow: false,
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      answer: "Lorem ipsum dolor sit amet consectetur.",
      isShow: false,
    },
  ]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className="wrap">
        <div className={`box ${isActive ? "active" : ""}`}>
          <div className="question">
            <p>{data[activeId].question}</p>
            <button onClick={handleClick}>Show answer</button>
            <button
              onClick={() => setActiveId(activeId + 1)}
              disabled={activeId === data.length - 1}
            >
              Next
            </button>
          </div>

          <div className="answer">
            <p>{data[activeId].answer}</p>
            <button onClick={handleClick}>Hide</button>
          </div>
        </div>
      </div>
    </div>
  );
}

//useEffect
//useTRansition
//props.children
// what is ....
//useReducer
// ? :
// ui button
