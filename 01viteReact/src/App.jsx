import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Demo from './demo.jsx'
import Count from './Count.jsx'
import Card from './components/Card.jsx'
import './App.css'

function App() {

  return (
    <>
      <Card title = {"First Card"} description = {"This is first card of the container."} />
      <Card title = {"Second Card"} description = {"This is second card of the container."} />
      <Card title = {"Third Card"} description = {"This is third card of the container."} />  
    </>
  )
}

export default App
