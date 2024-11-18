import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <Button label="count up" setCount={() => setCount((count) => count + 1)} />
      <Button label="count down" setCount={() => setCount((count) => count - 1)}/>
    </>
  )
}

export default App
