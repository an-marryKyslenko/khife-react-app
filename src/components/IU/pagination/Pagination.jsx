import React, { useState } from 'react'

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import './Pagination.css'

// const Pagination = ({ data, handleSlide, slide, showNumber, details }) => {
// 	return (
// 		<div style={details} className="pagination">
// 			<div className="pagination__bullets">
// 				{data.map((item, index) => {
// 					return (
// 						<button
// 							key={index}
// 							data-slide={item.id}
// 							className={`pagination__bullet ${item.id === slide ? '_active' : ''}`}
// 							onClick={handleSlide}
// 						></button>)
// 				})}
// 			</div>
// 			{showNumber && <div className='pagination__numbers'><span className='active-slide'>0{slide - 10}</span> /3</div>}
// 		</div>
// 	)
// }

const PaginationCenter = ({ handleSlide, page, data }) => {

	return (
		<div className="pagination pagination-center">
			<div className="pagination__bullets">
				{data.map((item, index) => (
					<button
						key={index}
						data-slide={index}
						className={`pagination__bullet pagination-center__bullet ${index == page && '_active'}`}
						onClick={handleSlide}
					>
						<span></span>
					</button>)
				)}
			</div>
		</div>
	)
}
const PaginationBullets = ({ handleSlide, page, data, handlePage }) => {

	return (
		<div className="catalogue__pagination bullets">
			<button className={`bullets__prev`} onClick={() => handlePage('dcr')}><IoIosArrowBack /></button>
			{data.map((item, index) => (
				<button key={index} data-slide={index} onClick={handleSlide} className={`bullets__bullet ${index === page && '_active'}`}>{index + 1}</button>
			))}
			<button className={`bullets__next _active`} onClick={() => handlePage('inc')}><IoIosArrowForward /></button>
		</div>
	)
}


export { PaginationCenter, PaginationBullets }