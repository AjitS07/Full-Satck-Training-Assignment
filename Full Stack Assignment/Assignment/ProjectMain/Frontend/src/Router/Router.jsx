import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../Components/Login'
import Singup from '../Components/Singup'
import Home from '../Components/Home'
import Cart from '../Components/Cart'
import UnProtected from '../Components/UnProtected'
import Protected from '../Components/Protected'
import Order from '../Components/Order'
import Myorder from '../Components/Myorder'
import Dashboard from '../Components/Dashbord'
import AdminUser from '../Components/AdminUser'
import AdminProduct from '../Components/AdminProduct'
import AdminOrder from '../Components/AdminOrder'
import Profile from '../Components/Profile'
import OpenRouters from '../Components/OpenRouters'

const Router = createBrowserRouter([
    {
        element:<OpenRouters/>,
        children:[{
            path:"/",
            element:<Home/>
        }]
    },
    {
        path:"/cart",
        element:<Cart/>
    },
    {
        element :<UnProtected/>,
        children:[
            {
                path : "/signup",
                element : <Singup/>
            },
            {
                path : "/login",
                element : <Login/>
            }
        ]
    },
    {
        element:<Protected allowedRole = {["User"]} />,
        children:[{
            path:"/order",
            element:<Order/>
        },
        {
            path : "/myorder",
            element:<Myorder/>
        }
    ]
        
    },
    {
        element:<Protected allowedRole ={["Admin"]} />,
        children:[{
            path:"/dashboard",
            element:<Dashboard/>
        },
        {
            path : "/adminuser",
            element:<AdminUser/>
        },
        
        {
            path : "/adminproduct",
            element:<AdminProduct/>
        },
        {
            path : "/adminorder",
            element:<AdminOrder/>
        },
        
    ]
        
    },
    {
        element:<Protected allowedRole = {["User","Admin"]} />,
        children :[
            {
                path: "/profile",
                element:<Profile/>

            }

        ]   
    }



])

export default Router