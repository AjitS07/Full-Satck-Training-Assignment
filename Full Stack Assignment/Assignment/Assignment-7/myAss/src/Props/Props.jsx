// import React from 'react'

// const Props = (props) => {
// //   console.log(props)
//   return (
//     <div>
//         <h1>Hello  {props.name.FirstName} ,{props.name.age},{props.name.address} </h1>
//     </div>
//   )
// }

// export default Props

//Build a `ProfileCard` component that takes `name`, `age`, and `location` as props and displays them in a card layout.
import tailwindcss from 'tailwindcss'
import React from 'react'

const ProfileCard = ( props ) => {
    return (
        <div className="card w-48 h-10 bg-green-700 ">
            <div className="card-header">
                <h3>Hello</h3>
                <h3>Name:={props.name.FirstName}</h3>
            </div>
            <div className="card-body">
                <p>Age:= {props.name.age}</p>
                <p>Location:= {props.name.address}</p>
            </div>
        </div>
    )
}

export default ProfileCard



