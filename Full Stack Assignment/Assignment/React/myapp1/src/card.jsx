import Vector from "./assets/card-1.jpeg"


import React from 'react'

const Card = ({item}) => {
    const { heading , desc , color , image}=item
  return (
    <div className={`flex flex-col items-center ${color} p-4 rounded shadow-lg`}>
        {/* <img src="https://img.freepik.com/premium-photo/product-that-is-called-natural-hair_1191871-14558.jpg?w=740" alt="" className="w-48"/> */}
        <img src={image} alt="" className="w-48"/>

        <h1 className="text-2xl font-medium text-white">{heading}</h1>
        <p className="text-gray-600">{desc}</p>
      </div>
  )
}

export default Card