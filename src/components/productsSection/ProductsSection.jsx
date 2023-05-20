import React,{useState} from 'react'

import {IoIosArrowForward} from 'react-icons/io'

import { splitParts } from '../../functions/splitParts'

import { PaginationCenter } from '../IU/pagination/Pagination'
import Cart from '../IU/cart/Cart'
import './ProductsSection.css'
import BlogCart from '../IU/blogCart/BlogCart'

const ProductsSection = ({title,link,data,textLink,lengthPart,isNews,isBlog}) => {
	const [paginationPage,setPaginationPage] = useState(0)
	
	const newData = splitParts(data,lengthPart)
	const handleSlide = (e)=>{
		const page = e.target.attributes['data-slide'].value * 1
		setPaginationPage(page)
	}
  return (
	<section className={`prodacts ${isNews ? 'news-section' : ''} `}>
		<div className="container prodacts__container">
			<h4 className={`prodacts__title ${isNews && 'news-section'}`}>{title}</h4>

			{!isNews || isBlog && (
				<a className='prodacts__link hover-link' href={link}>
					{textLink}
					<IoIosArrowForward className='icon scale-up-center'/>
				</a>
			)
			}
			<div className="prodacts__list">
				{isNews && (
					<div className={`prodacts__card ${isNews && 'news-section'}`}>
						<p>Ласкаво просимо до офіційного сайту «ЗЛАТМАКС»! 
							У нашому магазині представлений найбільш широкий вибір 
							Златоустівських ножів від Златоустівських Збройових Фабрик та 
							компаній, ми є офіційними постачальниками.</p>
						<a className='prodacts__link' href={link}>{textLink}<IoIosArrowForward className='icon scale-up-center'/></a>
					</div>
				)}
				{isBlog 
				?
				<>
					{newData.map((item,index)=> (
						<BlogCart key={index} {...item}/>
					)
					)}
				</>
				:
				<>
					{newData[paginationPage].map((item,index)=> (
						<Cart key={index} {...item} details="prodacts__card"/>
						)
					)}
				</>
			}
			</div>
			{!isBlog && <PaginationCenter  data={newData} page={paginationPage} handleSlide={handleSlide}/>}
		</div>
	</section>
  )
}

export default ProductsSection