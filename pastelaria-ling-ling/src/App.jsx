import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Import Components
import Header from "./Components/Header/Header.jsx"
import Main from "./Components/Main/Main.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App
