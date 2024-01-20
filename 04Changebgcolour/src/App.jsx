import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';

function App() {
  const [colour, setColour] = useState("white");
  const handleButtonClick = (currcolor) => {
    setColour(currcolor)
    console.log(currcolor)
};

  return (
    <>
      <div className=' h-screen w-full ' style={{ backgroundColor: colour }}>
        <div className='fixed flex flex-wrap justify-evenly bottom-10 w-full'>
          <div className='flex px-7 py-5 bg-slate-500 rounded-full gap-2'>
          <Buttons text="Purple" colour='grey' onClick={handleButtonClick}/>
          <Buttons text="Red" colour='red'  onClick={handleButtonClick}/>
          <Buttons text="Blue" colour='blue'  onClick={handleButtonClick}/>
          <Buttons text="Black" colour='black'  onClick={handleButtonClick}/>
          <Buttons text="Green" colour='green'  onClick={handleButtonClick}/>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
