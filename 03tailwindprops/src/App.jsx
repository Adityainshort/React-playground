import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let names = ["Shoes", "Clothes" ,"Hats","Umbrealla"]
  let prices = ["24" , "10" ,"15","20"]

  return (
    <>
      <h1 className="bg-green-400 p-4 text-black rounded-xl"> Hello Adii !!</h1>
      <Card name={names[0]}  price={prices[0]} />
      <Card name={names[1]}  price={prices[1]} />
      <Card name={names[2]}  price={prices[2]} />
      <Card name={names[3]}  price={prices[3]} />
    </>
  )
}

export default App
