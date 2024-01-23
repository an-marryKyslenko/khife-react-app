import React, { useState } from 'react'
import { useGlobalContaxt } from '../../context'
import './SideMenu.css'
import { headerMenu } from '../../data/data'
import { MdClose } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

import { menuCatalog } from '../../data/catalogMenu'
const SideMenu = () => {
	const { sideMenu, setSideMenu } = useGlobalContaxt()
	const data = {
		isMenu: true,
		isCatalogue: false,
		isSybcatalogue: false,
	}
	const [menuState, setMenuState] = useState(data)
	const [mainTitle, setMainTitle] = useState('')


	const [mainCategory, setMainCategory] = useState('')
	const closeButton = () => {
		setSideMenu(false)
		setMenuState(data)
	}
	const handleChangeSideMenu = (nameOpen, nameClose) => {
		setMenuState(prev => ({
			...prev,
			[nameOpen]: true,
			[nameClose]: false,
		}))
	}
	const catalogue = menuCatalog.filter(menu => menu.mainTitle === mainTitle)[0]?.titles || [];

	return (
		<nav className={`sidemenu ${sideMenu ? 'open' : ''}`}>
			<div className="sidemenu__buttons">
				{menuState.isCatalogue
					?
					<button
						className='sidemenu__back-btn hover-link'
						type='button'
						style={{ zIndex: 20, position: 'relative' }}
						onClick={() => handleChangeSideMenu('isMenu', 'isCatalogue')}
					><BsArrowLeft /> Назад</button>
					: menuState.isSybcatalogue &&
					<button
						className='sidemenu__back-btn hover-link'
						type='button'
						style={{ zIndex: 20, position: 'relative' }}
						onClick={() => handleChangeSideMenu('isCatalogue', 'isSybcatalogue')}
					><BsArrowLeft /> Назад</button>

				}
				<button type='button' className='sidemenu__close' onClick={closeButton}><MdClose /></button>
			</div>
			<div className="sidemenu__container container">
				<ul className="sidemenu__menu">
					<li className='hover-link'><Link to='/'>Особистий кабінет</Link></li>
					<li className='hover-link' onClick={() => handleChangeSideMenu('isCatalogue')}>Каталог ножів <IoIosArrowForward /></li>
					{headerMenu.menu.map((item, i) => (
						<li className='hover-link' key={i}><Link to={item.path}>{item.name}</Link></li>
					))}
				</ul>
				<ul
					className={`sidemenu__menu menu-catalogue ${menuState.isCatalogue && 'open'}`}>
					{menuCatalog.map((menu, index) => {
						return (
							<li key={index} className="hover-link"
								onClick={() => {
									handleChangeSideMenu('isSybcatalogue')
									setMainTitle(menu.mainTitle)
									setMainCategory(menu.mainCategory)
								}}
							>
								{menu.mainTitle} <IoIosArrowForward />
							</li>
						)
					})}
				</ul>
				<ul
					id='#subcatalogue'
					className={`sidemenu__menu menu-catalogue ${menuState.isSybcatalogue && 'open-subcatalogue'}`}>
					{catalogue.map((menu, i) => (
						<li key={i}>
							<Link
							onClick={closeButton}
								to={`catalogue/${mainCategory}?types=${menu.id}`}
							>
								{menu.title}
							</Link>
						</li>
					))}
				</ul>

			</div>
		</nav>
	)
}

export default SideMenu