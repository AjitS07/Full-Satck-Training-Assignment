import React from 'react'
import Child2 from './Child2'
const child = React.memo(()=> {
  console.log("child Compnent Rendered")
  return (
    <div classNmane = 'bg-orange-300 w-4/5 h-4/5 text-3xl '>{count}</div>
  )
})

export default Child1