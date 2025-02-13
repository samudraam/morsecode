import { useState } from 'react'
import './App.css'
import MorseToA from './MorseToA'

function App() {
  const [isMorseAll, setIsMorseAll] = useState(false);

  return (
    <>
    <MorseToA isMorseAll={isMorseAll} color={"black"}/>
    </>
  )
}

export default App
