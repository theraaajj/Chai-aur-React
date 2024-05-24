import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(0)          // can also name the function as xyzCounter. 
  //counter is the variable that is to be changed
  // setCounter is the function that changes it
  // (0) is the default value of the counter


  const addValue = () => {
    // console.log("Value Added", Math.random()); // checked. Add Value button functioning.
    // console.log("clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1)
  }


  const removeValue = () => {
    setCounter(counter - 1)       // can also go to negatives!
  }


  return (
    <>
     <h1>Chai aur React</h1>
     <h2>counter value : {counter}</h2>
     <button
     onClick={addValue}
     >Add Value</button> <br />
     <button
     onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App