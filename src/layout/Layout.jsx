import React from 'react'
import Header from '../header/Header'
import { Outlet } from "react-router-dom";
import Home from '../page/Home';
function Layout() {
  return (
    <div>
    <Header/>
    <Home/>
    </div>
  )
}

export default Layout