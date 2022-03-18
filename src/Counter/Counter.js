import React, { useState } from 'react'
import "./counter.css"

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0)
  const [inputValue, setInputValue] = useState(1)

  const addCounter = () => {
    setCounterValue(prevCount => prevCount + inputValue)
  }

  const minusCounter = () => {
    setCounterValue(prevCount => prevCount - inputValue)
  }

  return (
    <div>
      <h3 data-testid="header">Counter</h3>
      <h1 
        className={`${counterValue >= 100 && "green" || counterValue <= -100 && "red"}`}
        data-testid="counter">{counterValue}</h1>
      <div>
        <button data-testid="minus" onClick={minusCounter}>-</button>
        <input data-testid="input" type="number" value={inputValue} onChange={(event) => setInputValue(parseInt(event.target.value))}></input>
        <button onClick={addCounter} data-testid="add">+</button>
      </div>
    </div>
  )
}
