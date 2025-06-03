import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../ui/Headers'
import Footer from '../ui/Footer'
function AppLeyout() {
  return (
     <>
          <Headers />
          <Outlet />
          <Footer />
     </>
  )
}

export default AppLeyout
