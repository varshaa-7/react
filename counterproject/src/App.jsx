 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(0)

  const addvalue=() =>{
    //counter=counter+1;
    setCounter(counter+1)
  }
  const removevalue=() =>{
    //counter=counter-1;
    setCounter(counter-1)
  }

  // let counter=3;
  
  return (
    <>  
     <h1>Counter Project</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addvalue}>
      Increase Value
     </button> <br/>
     <button onClick={removevalue}>Decrease Value</button>
    </>
  )
}

export default App
