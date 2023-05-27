import React from 'react'
import { useState } from 'react'
import value from './data.json'
import './App.css'

export default function Questions({isActive,handleClick}) {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [data] = useState(value)

  return (
  <div className='wrap'>
    <h1 className='ready-question'>Questions {questionNumber + 1}/{data.length}</h1>
    <div className={`box ${isActive ? 'active' : ""}`}>
        <div className='question'>
          <p>
              {data[questionNumber].question}
          </p>
          <button onClick={handleClick}>Show answer</button>
          <div className='next'>
              <button onClick={()=>{setQuestionNumber(questionNumber-1)}} disabled={questionNumber === 0}>Prev</button>
              <button onClick={()=>{setQuestionNumber(questionNumber + 1)}} disabled={questionNumber === data.length - 1}>Next</button>
          </div>
      </div>
      <div className='answer'>
          <p>
              {data[questionNumber].answer}
          </p>
          <button onClick={handleClick}>Hide</button>
      </div>
  </div>
</div>
)
}
