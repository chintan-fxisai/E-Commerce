import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function privateRoutes({children}) {
    const access_token = localStorage.getItem("authToken")

    if (access_token){
        return children || <Outlet/>
    }else {
        return <Navigate to="/login" />
    }

}

export default privateRoutes