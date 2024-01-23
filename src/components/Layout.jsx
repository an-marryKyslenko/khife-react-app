import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
import SideMenu from './sidemenu/SideMenu'
import { useGlobalContaxt } from '../context'
const Layout = () => {
	const { sideMenu} = useGlobalContaxt()
	return (
		<div className={sideMenu ? 'wrapper _lock' : 'wrapper'}>
			<Header />
			<SideMenu />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout