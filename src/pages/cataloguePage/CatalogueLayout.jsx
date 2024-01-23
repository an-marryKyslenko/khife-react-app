import React from 'react'
import { Outlet } from 'react-router-dom'
const CatalogueLayout = () => {
	return (
		<div className='wrapper'>
			<Outlet />
		</div>
	)
}

export default CatalogueLayout