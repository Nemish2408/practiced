import React from 'react'
import { Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar'

const ProtectedLayout = () => {
  const {role} = useAuth()
  if (role) {    
    return (
      <>
        <Navbar/>
        <Outlet/>
      </>
    )
  }
}

export default ProtectedLayout
