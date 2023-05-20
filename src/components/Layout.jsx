import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import {Outlet} from 'react-router-dom'
import SideMenu from './sidemenu/SideMenu'
const Layout = () => {
  return (
	 <div className='wrapper'>
		<Header/>
		<SideMenu/>
		<Outlet/>
		<Footer/>
	 </div>
  )
}

export default Layout