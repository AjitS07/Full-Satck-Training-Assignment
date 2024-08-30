import React from 'react'

function state() {
    let count = 0;
    console.log()

  return (
  <div className='text-2xl font-medium text-white text-center'>  
        <p>Te value of count is :{count}</p>
        <button className='p-2 bg-slate-500 shadow rounded text-gray-800 m-4 active:bg-slate-400' onClick={()=> setCount(count-1);}>
            Dev Count(-)
        </button>
        <button className='p-2 bg-slate-500 shadow rounded text-gray-800 m-4 active:bg-slate-400' onClick={()=>{ count -= 1;}}>
            Dev Count(+)
        </button>


    </div>
  )
}

export default state