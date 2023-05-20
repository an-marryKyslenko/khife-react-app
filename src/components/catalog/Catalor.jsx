import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContaxt } from '../../context'
import './Catalog.css'

const Catalor = ({index}) => {
	const {catalog,openCatalog,setOpenCatalog}= useGlobalContaxt()
	const catalogSection = catalog[index]
	const {titles,id} = catalogSection
  return (
	 <section className={`catalog ${openCatalog ? 'open-menu':'close-menu'}`}>
		<div className="container">
			<ul className='catalog__section'>
				{titles.map((item,index)=>(
					<li key={index} className='catalog__item'>
						<h5 className='catalog__title'>{item.title}</h5>
					</li>
				))}
			</ul>
			<ul className='catalog__section subsection'>
				{titles.map((types,index)=>(
					<li key={index} className='catalog__item'>
						<ul className='catalog__subtitles'>
							{types.subtitle.map((item,i)=>(
								<li className='catalog__subtitle hover-link' key={i}>
									<Link to={`${id}?types=${types.id}&type=${item.id}`}>{item.name}</Link>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
			<ul className='catalog__section subsection'>
				{titles.map((item,index)=>(
					<li key={index} className='catalog__item'>
						<Link className='catalog__btn hover-link' to={`${id}?types=${item.id}`}>Дивитись все</Link>
					</li>
				))}
			</ul>
			
		</div>
	 </section>
  )
}

export default Catalor