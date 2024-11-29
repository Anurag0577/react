import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Demo from './demo.jsx'
import Count from './Count.jsx'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card />  
    </>
  )
}

export default App
