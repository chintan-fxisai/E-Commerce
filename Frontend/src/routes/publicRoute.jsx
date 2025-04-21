import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


function publicRoute({children}) {

    const access_token = localStorage.getItem("authToken")

    if(access_token){
        return <Navigate to="/todo" />
    }else{
        return children || <Outlet/>
    }
}   

export default publicRoute