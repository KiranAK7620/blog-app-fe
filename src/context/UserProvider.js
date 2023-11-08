import React from 'react'
import userContext from './userContext'
import { useState } from 'react'

const UserProvider = ({children}) => {

    const [user,setUser]=useState({
        name:'kiran'
    })
  return (
    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider