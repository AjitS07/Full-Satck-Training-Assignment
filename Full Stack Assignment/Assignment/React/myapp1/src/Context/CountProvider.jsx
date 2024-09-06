import React,{ createContext,useState} from "react"

export const CountContext = createContext( );
const CountProvider = ({children})=>{
const [count,setCount]=userState(0);
return(
    <CountContext.Provider value={{count,setCount}}>
        {Children}
    </CountContext.Provider>
 
)
}
export default CountProvider
    
