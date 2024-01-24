import { useCallback, useState ,useRef } from 'react'
import React, { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  const[length,setLength] = useState(8)
  const[number,setNumber] = useState(false)
  const[character,setCharacter] = useState(false)
  const[password,setPassword] = useState("")

  const passwordref = useRef()



  const passwordgenerator = useCallback(()=>{
    let a = "abcdefghijkl"
    let currPassword =""
    console.log(character)
    if(number){
      a+='1234567890'
    }
    if (character) {
      a+='!@#$%^&*(){}?~`'
    }
    for (let index = 0; index < length; index++) {
      currPassword+=a.charAt(Math.ceil(Math.random()*(a.length)+1))
    }
    setPassword(currPassword)

  },[length,character,number]);

  const copyfun =useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    passwordref.current?.select();
  },[password])


  useEffect(() => {
    passwordgenerator(length);

  },[length,number,character]);


  return (
    <>
    <div className='flex flex-col items-center  bg-slate-300'>
      <div className='w-1/2 rounded-xl bg-gray-400 h-48 my-9 flex flex-col items-center justify-center'>
      <h1 className='bg-transparent text-xl font-bold ' >PASSWORD GENERATOR </h1>
        <div  className='w-5/6 rounded-2xl  h-11 my-4 bg-transparent'>

                  <input className='bg-slate-200 w-5/6 h-full rounded-tl-xl rounded-bl-xl'
                  type="text" id="username" name="username" placeholder='  Password ' value={password} readOnly ref={passwordref}/>

                  <button className='bg-blue-500 w-1/6 h-full text-xl rounded-tr-xl rounded-br-xl' type="button"
                  onClick={()=> {
                    copyfun()
                  }}
                  >copy</button>
        </div>
        <div  className='w-5/6 rounded h-11 my-1 bg-transparent items-center flex justify-evenly'>

          <span className='bg-transparent'>
          <input type="range" min={1} max={100} onChange={(e)=>{setLength(e.target.value)}}/>
          <label  className='bg-transparent m-2' htmlFor="length">Length: {length}</label>
          </span>
          

          <span className='bg-transparent'>
          <input 
          
          type="checkbox" 
          name="character" 
          id="character" 
          onChange={() => setCharacter((prev) => !prev )}/>
          <label  className='bg-transparent m-2' htmlFor="Character">Character</label>
          </span>


          <span className='bg-transparent'>
          <input 
          
          type="checkbox" 
          name="Number" 
          id="Number" 
          onChange={()=> setNumber((prev)=>!prev)} />
          <label  className='bg-transparent m-2' htmlFor="Number">Number</label>
          </span>


        </div>
      </div>
    </div>
    </>
  )
}

export default App
