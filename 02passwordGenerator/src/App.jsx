import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  
  let [length, setLength] = useState(6)
  let [number, setNumber ] = useState(false)
  let [character, setCharacter] = useState(false)
  let [password, setPassword] = useState("");

  let passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVGabcdefghijklmnopqrstuvwxyz"

    if (number) {
      str += "0123456789"
    }
    if (character) {
      str += "~!#$%^&*_-=<>,.?/"
    }

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(randomIndex);
      
    }
    setPassword(pass)

  }, [length, number, character])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator])
  return (
    <>
      <div className="flex flex-col items-center bg-gray-800 min-h-screen text-white p-5">
      <h1 className="text-white text-3xl font-extrabold mb-5">Password Generator</h1>
      
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md">
        {/* Input and Copy Button */}
        <div className="flex items-center space-x-3 mb-5">
          <input
            type="text"
            name="query"
            value={password}
            className="flex-grow p-2 border border-green-500 rounded-lg text-white bg-gray-700 focus:outline-none focus:border-2"
            required
          />
          <button className="p-2 bg-green-500 text-white rounded-lg border-2 border-white hover:bg-green-600 transition">
            COPY
          </button>
        </div>

        {/* Password Range Slider */}
        <div className="flex items-center space-x-4 mb-5">
          <label htmlFor="passwordRange" className="text-sm font-medium">
            Password Length: {length}
          </label>
          <input
            type="range"
            min={1}
            max={20}
            id="passwordRange"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="flex-grow h-2 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-sm font-bold">{length}</span>
        </div>

        {/* Checkboxes for Options */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="number"
              className="w-5 h-5 text-green-500 accent-green-600"
              onClick={() => 
                setNumber( !number)
              }
            />
            <label htmlFor="number" className="text-orange-500 font-medium">
              Include Numbers
            </label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="symbol"
              className="w-5 h-5 text-green-500 accent-green-600"
              onClick={() =>setCharacter( !character)}
            />
            <label htmlFor="symbol" className="text-orange-500 font-medium">
              Include Symbols
            </label>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
