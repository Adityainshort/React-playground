import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[count,setCount] = useState(15)
  // let count =8 ;
  function addvalue(){
    setCount(count+1)
  }
  function remove(){
    
    setCount(count-1)
  }
  return (
    <>
      <h1>Aditya's Counter </h1>
      <h1>Value : {count} </h1>
      <button onClick={addvalue}>Add</button>
      <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
