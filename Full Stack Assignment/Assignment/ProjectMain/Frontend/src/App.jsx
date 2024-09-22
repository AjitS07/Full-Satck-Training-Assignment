import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
// import { useState } from 'react'

// import Navbar from './Components/Navbar'
// import Dashboard from './Components/Dashbord'

function App() {
//  const [count, setCount] = useState(0)
  return (
    <div className='w-screen h-screen m-0 p-0 flex justify-center items-center'>
      <RouterProvider router ={Router}/>
      {/* <Navbar />
      <Dashboard /> */}
    </div>
  )
}

export default App
