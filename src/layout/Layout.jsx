import React from 'react'
import Header from '../components/Header';
import Home from '../page/Home';
function Layout() {
  return (
    <div>
    <Header heading={'New Questionnaire'} buttonLabel={'Log In'}/>
    <Home/>
    </div>
  )
}

export default Layout