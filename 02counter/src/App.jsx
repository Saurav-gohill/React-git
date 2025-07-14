import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(5);

  // let count = 5;

  const addValue = () => {
    //counter += 1;
    setCounter(counter + 1);
  }

  const removeValue = () =>{
    //counter -= 1;
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {counter}</h2>
      <br />
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
