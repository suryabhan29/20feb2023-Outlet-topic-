// Import area

import React from 'react'
import { Outlet } from 'react-router-dom'

// Defination area

export default function Layout() {
  return (
        <>
            <header>Header</header>
            <Outlet />
            <footer>Footer</footer>
        </>
        
  )
}
