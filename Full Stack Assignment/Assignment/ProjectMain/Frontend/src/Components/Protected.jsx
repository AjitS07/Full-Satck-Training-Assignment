import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';

const Protected = ({allowedRole}) => {
    const { isAuth,role }=useSelector((state)=>state.auth);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!isAuth){
            return navigate("/")
        }
    },[isAuth]
);
useEffect(()=>{
    if(!allowedRole.includes(role)){
        return navigate("/")
    }
},[role])
    
  return (
    <div><Outlet/></div>
  )
}

export default Protected