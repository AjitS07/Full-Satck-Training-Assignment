import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../Login'

const Router = createBrowserRouter( {

    element : <parent/>
    childeren : [{
        path : "/",
        element : <Dashboard/>
    },
    {
        path : "dashboard",
        element : <Dashboard/>
    },
    {
        path : "*",
        element : <NotFound/>
    },
    {
        path:"*",
        element : <NotFound/>
    },
    {
        path:"*",
        element : <NotFound/>
    }


]

}
)

export default Router