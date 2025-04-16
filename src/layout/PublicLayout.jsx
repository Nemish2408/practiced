import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const PublicLayout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default PublicLayout
