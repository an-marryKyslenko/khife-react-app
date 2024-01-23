import React, { useEffect, useState } from 'react'
import {Link,NavLink} from 'react-router-dom'

import {GiShoppingCart}from 'react-icons/gi'
import {IoIosArrowDown} from 'react-icons/io'
import {BsPerson } from 'react-icons/bs'
import { FiMapPin} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlPhone} from 'react-icons/sl'
import {GiBowieKnife}from 'react-icons/gi'

import './Header.css'

import {headerMenu} from '../../data/data'
import { menuCatalog } from '../../data/catalogMenu'
import { useGlobalContaxt } from '../../context'
import Catalor from '../catalog/Catalor';

const Header = () => {
  const {openCatalog,setOpenCatalogue,setSideMenu} = useGlobalContaxt()
  const [catalogId,setCatalogId]=useState(0)
  const [visiblePhone,setVisiblePhone]=useState(false)
  const handleCatalog=(index)=>{
    setOpenCatalogue(true)
    setCatalogId(index)
    
  }
  useEffect(()=>{
    
  },[])
  
  const closeCatalog=()=>{
    setOpenCatalogue(false)
  }
  return (
	 <header className='header' >
      <div className="header__top">
        <div className="container header__container">
          <div className="header__menu menu">
            {headerMenu.menu.map((item,index)=>{
              const {name,path} =item;
              return (
                <NavLink 
                  to={path}
                  className={({isActive})=> isActive ? 'menu__link active-link hover-link' : 'menu__link hover-link'} 
                  key={index} >
                    {name}
                </NavLink>
              )
            }
              
            )}
          </div>
          <a 
          className='smoll-screen'
          href={`tel:${headerMenu.telephones[0]}`}
          ><SlPhone/></a>
          <Link to='/' className='menu-link hover-link personal'><BsPerson className='personal-icon'/> <span>Особистий кабінет</span> </Link>
          <button type='button' className="smoll-screen"><AiOutlineHeart/></button>
          <Link to='/' className='smoll-screen cart_link'>
              <span className="cart__icon"><GiShoppingCart/> <span>0</span></span>
          </Link>
          <button className="menu-burger" onClick={()=>setSideMenu(true)}></button>
        </div>
      </div>
      <div className="header__middle">
        <div className="container header__container">
          <Link to='.' className='header__logo'>Gostro <span>Елітні <GiBowieKnife/> ножі</span></Link>
          <input type="text" placeholder='Пошук ...' className='header__search'/>
          <div className="header-info">
            <p className="header__location"><FiMapPin/> {headerMenu.city}</p>
            <div className="header__phones phones">
              {visiblePhone &&<div className="phones__drob-down" onMouseLeave={()=>setVisiblePhone(false)}>
                {headerMenu.telephones.map(telephone=>(
                  <a key={telephone} href={`tel:${telephone}`}>{telephone}</a>
                ))}
              </div>}
              <a  href={`tel:${headerMenu.telephones[0]}`}>{headerMenu.telephones[0]}</a>
              <IoIosArrowDown className='phones__icon hover-link' onClick={()=>setVisiblePhone(true)}/>
              
            </div>
            <button type='button' className="header__likes hover-link"><AiOutlineHeart/></button>
            <div className="header__cart cart">
              <Link to='/' className='cart_link'>
                <div className="cart__icon"><GiShoppingCart/> <span>0</span></div>
                <span className='cart__amount'>0 грн</span>
                <span className='cart__text'>Оформити </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom" onMouseLeave={closeCatalog}>
        <div className="header__container container">
          <div className='header__catalog'>
            {menuCatalog.map((item,index)=>{
              const {mainTitle,id}=item
              return <button
                  id={index}
                  onClick={()=>handleCatalog(index)}
                  key={index} 
                  to={`/catalogue/${id}`}
                  className={`header__catalog-btn hover-link ${index===catalogId && openCatalog ? 'active': ''}`}
                >{mainTitle}</button>
            })}
            
          </div>
        </div>
          <Catalor  index={catalogId} open={openCatalog}/>
      </div>

   </header>
  )
}

export default Header