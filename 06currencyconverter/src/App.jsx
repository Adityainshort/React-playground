import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/currencyinfo'

function App() {

  const[amount,setAmount] = useState(0)
  const[from,setFrom] = useState("usd")
  const[to,setTo] = useState("inr")
  const[Answer,setAnswer] = useState(0)

  const currencyinfo = useCurrencyInfo(from)
  const options = Object.keys(currencyinfo)
  console.log(options)


  function swap() {
    setFrom(to)
    setTo(from)
    setAnswer(amount)
    setAmount(Answer)
  }


  function convert(){
    setAnswer( amount * currencyinfo[to] )
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.stack.imgur.com/spmUM.gif')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();

              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  options={options}
                  amountchanged={setAmount}
                  currency={from}
                  currencychanged={setFrom}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={Answer}
                  options={options}
                  currency={to}
                  currencychanged={setTo}
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
