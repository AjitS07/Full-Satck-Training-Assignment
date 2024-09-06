import React,{useReducer} from 'react'

const Reducer = () => {
    function countReducer (state,action){
        switch(action,type){
            case "increment":
                return{...state,count : state.count +1};
            case "decrement":
                return {...state,count :state.count -1 };
            case "reset" :
                return {...state,count : 0}
            case "loading" :
                return {...state,loading : !state.loading}
            default :
                return new Error("Unknown Type")

        }
    }
    const initialState = { count : 0 , loading : true}

    const [state, dispatch] = useReducer(countReducer , initialState);
  return (
    <div className = 'p-24'>
    <button className = 'p-2 bg-gray-200' onclick={()=> {dispatch({type : "increment"})}}>inc</button>
    </div>
  )
}

export default Reducer