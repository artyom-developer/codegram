import React, { Fragment, useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Details'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

import { Router } from '@reach/router'
import { Context } from './Context'
import { Redirect } from '@reach/router'
 
export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default/>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login'/>}
        {!isAuth && <Redirect from='/user' to='/login'/>}
        {isAuth && <Redirect from='/login' to='/'/>}
        <Favs path='/favs' />
        <User path='/user' />
      </Router> 
      <NavBar />
    </div>
  )
}