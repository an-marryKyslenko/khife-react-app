import React, { useState } from 'react'
import { useGlobalContaxt } from '../../context'
import './SideMenu.css'
import { headerMenu } from '../../data/data'
import { MdClose} from 'react-icons/md'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
const SideMenu = () => {
	const {sideMenu,setSideMenu,catalog} = useGlobalContaxt()
	const data = {
		isMenu: true,
		isCatalog: false,
		isSubcatalog: false,
	}
	const [menuState,setMenuState] = useState(data)
	const [saveItem,setSaveItem]=useState('')
	const closeButton =()=>{
		setSideMenu(false)
		setMenuState(data)
	}
	const handleChangeSideMenu =(nameOpen,nameClose)=>{
		setMenuState(prev=>({
			...prev,
			[nameOpen]: true,
			[nameClose]:false,
		}))
	}
  return (
	 <nav className={`sidemenu ${sideMenu && 'open'}`}>
		<button type='button' className='sidemenu__close' onClick={closeButton}><MdClose/></button>
		<div className="sidemenu__container container">
			{menuState.isCatalog 
			? 
			<button 
				className='hover-link'
				type='button' 
				style={{zIndex:20,position:'relative'}}
				onClick={()=>handleChangeSideMenu('isMenu','isCatalog')}
				><BsArrowLeft/> Назад</button>
			:  menuState.isSubcatalog &&
			<button 
				className='hover-link'
				type='button' 
				style={{zIndex:20,position:'relative'}}
				onClick={()=>handleChangeSideMenu('isCatalog','isSubcatalog')}
				><BsArrowLeft/> Назад</button>
			
			}
			<ul className="sidemenu__menu">
				<li className='hover-link'><Link to='/'>Особистий кабінет</Link></li>
				<li className='hover-link' onClick={()=>handleChangeSideMenu('isCatalog')}>Каталог ножів <IoIosArrowForward/></li>
				{headerMenu.menu.map((item,i)=>(
					<li className='hover-link' key={i}><Link to={item.path}>{item.name}</Link></li>
				))}
			</ul>
			<ul  
				className={`sidemenu__menu menu-catalog ${menuState.isCatalog && 'open'}`}>
				{catalog.map((menu,index)=>{
					return(
						<li key={index} className="hover-link"
						onClick={()=>{
							handleChangeSideMenu('isSubcatalog')
							setSaveItem(menu.mainTitle)
						}}
						>
							{menu.mainTitle} <IoIosArrowForward/>
						</li>
					)
				})}
			</ul>
			<ul 
				id='#subcatalog' 
				className={`sidemenu__menu menu-catalog ${menuState.isSubcatalog && 'open-subcatalog'}`}>
				{catalog.map(menu=>menu.mainTitle === saveItem && menu.titles[0].subtitle.map((item,index)=>(
					<li key={index}>{item}</li>
				)))}
			</ul>
			
		</div>
	 </nav>
  )
}

export default SideMenu