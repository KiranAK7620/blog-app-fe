import React from 'react'
import Base from './Base'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from '../auth';



const Privateroute = () => {
   
    // let loggedIn=isLoggedIn();
   
    // if(loggedIn){
    //     return <Outlet />
    // }
    // else{
    //     return <Navigate to={"/login"} />;
    // }

    return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"}/>
}

export default Privateroute