import React, { useState, useEffect } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'

import Filters from '../../components/filters/Filters'

import { IoIosArrowForward} from 'react-icons/io'

import Title from '../../components/IU/Title/Title'
import Cart from '../../components/IU/cart/Cart'
import './CataloguePage.css'

import { productsFavorite } from '../../data/dataProdact'
import { PaginationBullets } from '../../components/IU/pagination/Pagination'
import { splitParts } from '../../functions/splitParts'
import Button from '../../components/IU/button/Button'

import { menuCatalog } from '../../data/catalogMenu'

export function loader({ request }) {
	return new URL(request.url)
}

const CataloguePage = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [paginationPage, setPaginationPage] = useState(0)
	const [partOfData, setPartOfData] = useState(12)
	const [showFilters, setShowFilters] = useState(false)
	const { category } = useParams()
	const params = useLoaderData()

	const categoryItem = menuCatalog.filter(item => item.mainCategory === category)[0]
	const idTypes = params.searchParams.get('types')
	let title = '';
	if (idTypes) {
		const idType = params.searchParams.get('type')
		const catalogMenu = categoryItem.titles.filter(menu => menu.id === idTypes)[0]
		const subtitles = catalogMenu.subtitle.filter(item => item.id === idType)[0]
		title = idType ? subtitles.name : idTypes ? catalogMenu.title : ''
	} else {
		title = categoryItem.mainTitle
	}

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [])

	const newData = splitParts(productsFavorite, partOfData)
	const handleSlide = (e) => {
		const page = e.target.attributes['data-slide'].value * 1
		setPaginationPage(page)
	}
	const handlePage = (status) => {
		if (status === 'dcr') {
			setPaginationPage(prev => prev !== 0 ? prev - 1 : prev)
		}
		if (status === 'inc') {
			setPaginationPage(prev => prev !== newData.length - 1 ? prev + 1 : prev)
		}
	}
	const handleShowMore = () => {
		setPartOfData(prev => prev + 6)
	}

	const handleFiltersVisibility = (e) => {
		setShowFilters(!showFilters)
	}
	return (
		<main className='catalogue'>
			<div className="catalogue__container container">
				<Title title={title} secondClass="catalogue__title" />
				<div className="catalogue__path path">
					<Link to='/'>Головна</Link>
					<IoIosArrowForward />
					<span>{title}</span>
				</div>
				<select className='catalogue__select'>
					<option name='filter-select' value='by-popular'>По популярності</option>
					<option name='filter-select' value='by-price'>По ціні</option>
					<option name='filter-select' value='by-alphabet'>По алфавіту</option>
				</select>
				<div className="catalogue__filters-button">
					<Button onClick={handleFiltersVisibility} name='Фільтер товарів' details='filters-button' icon={null} />
				</div>

				<div className='catologue__main-section'>
					<Filters details='catalogue__filters' isShow={showFilters} setIsShow={setShowFilters} />
					<section className="catalogue__list">
						{newData[paginationPage].map((item, index) => {

							return (
								<Cart key={index} {...item} details="catalogue__cart" />
							)
						})}
						{paginationPage !== newData.length - 1 && <button className='catalogue__button hover-bottom' onClick={handleShowMore}><span>Показати більше</span></button>}
						<PaginationBullets page={paginationPage} data={newData} handlePage={handlePage} handleSlide={handleSlide} />
					</section>
				</div>
			</div>
		</main>
	)
}

export default CataloguePage