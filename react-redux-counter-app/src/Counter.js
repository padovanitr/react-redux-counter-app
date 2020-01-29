import React from 'react'
import './App.css'

const Counter = props => (
  <div className="App">
    <h1>React Redux Counter</h1>
    <div>
      <button className='decrement' onClick={props.decrement}>Decrement</button>
      <button className='increment' onClick={props.increment}>Increment</button>
      <h2>Result: {props.count}</h2>
    </div>
  </div>
)

export default Counter