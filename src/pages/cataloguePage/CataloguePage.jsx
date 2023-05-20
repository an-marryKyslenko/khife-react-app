import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { useGlobalContaxt } from '../../context'

import Filters from '../../components/filters/Filters'

import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'

import Cart from '../../components/IU/cart/Cart'
import './CataloguePage.css'

import {prodactsFavorite} from '../../data/dataProdact'

export function loader({request}){
	return new URL(request.url)
}

const CataloguePage = () => {
	const {catalog}= useGlobalContaxt()
	const {category}=useParams()
	const params = useLoaderData()
	const idType = params.searchParams.get('type')
	const idTypes = params.searchParams.get('types')
	const categoryItem = catalog.filter(item=>item.id === category )[0]
	const catalogMenu = categoryItem.titles.filter(menu=>menu.id ===idTypes)[0]
	const subtitles = catalogMenu.subtitle.filter(item=>item.id===idType)[0]
	const title = idType ? subtitles.name : idTypes ? catalogMenu.title : ''
  return (
	 <main className='catalogue'>
		<div className="catalogue__container container">
			<h3 className="catalogue__title">{title}</h3>
			<div className="catalogue__path">
				<Link to='/'>Головна</Link>
				<IoIosArrowForward/>
				<span>{title}</span>
			</div>
			<select className='catalogue__select'>
				<option name='filter-select' value='По популярності'>По популярності</option>
				<option name='filter-select' value='dafd'>По ціні</option>
				<option name='filter-select' value='dfa'>По алфавіту</option>
			</select>
			<div className='catologue__main-section'>
				<Filters details='catalogue__filters'/>
				<section className="catalogue__list">
					{prodactsFavorite.map((item,index)=>{
						
						return(
							<Cart key={index} {...item} details="catalogue__cart"/>
						)
					})}
					<button className='catalogue__button hover-bottom'><span>Показати більше</span></button>
					<div className="catalogue__pagination bullets">
						<button className={`bullets__prev`}><IoIosArrowBack/></button>
						<button className={`bullets__bullet `}>1</button>
						<button className={`bullets__bullet _active`}>2</button>
						<button className={`bullets__next _active`}><IoIosArrowForward/></button>
					</div>
				</section>
			</div>
		</div>
	 </main>
  )
}

export default CataloguePage