import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashbord'

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
