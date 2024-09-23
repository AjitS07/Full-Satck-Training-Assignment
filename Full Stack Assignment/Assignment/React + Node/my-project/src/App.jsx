import { useState } from 'react'
import './App.css';



import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default App
