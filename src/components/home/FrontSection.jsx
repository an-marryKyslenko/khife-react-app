import React, { useState } from 'react'
import {mainText,garanticItems} from '../../data/data'
import knife from '../../images/c24cd35d64b39ae4ba697531c34b374c.png'
import Button from '../IU/button/Button';
import {Pagination} from '../IU/pagination/Pagination';
import './FrontSecton.css';

const FrontSection = () => {
	const [slide,setSlide] = useState(mainText[0].id)
	const handleSlide =(e)=>{
		const item = e.target.attributes['data-slide'].value * 1
		setSlide(item)
	}
	return (
		<section className="fullscreen">
		<div className="container fullscreen__container">
		<div className="fullscreen__contant">
				{mainText.map((item,index)=>{
				return (<div key={index} className={`fullscreen__slide ${item.id === slide ? 'active' : item.id === slide+1 ? 'next' : item.id === slide-1 ? 'prev': ''}`} id={item.id}>
					<h2 className="fullscreen__title">{item.title}</h2>
					<p className='fullscreen__text'>{item.text}</p>
					{/* <a href={item.button} className='fullscreen__btn'>Детальніше</a> */}
					<Button name='Детальніше' details='fullscreen__btn' icon={null}/>
				</div>)
				})}
			<Pagination 
			data={mainText} 
			handleSlide={handleSlide} 
			slide={slide}
			showNumber={true}/>
		</div>
		<div className="fullscreen__img">
			<img src={knife} alt="knifes" />
		</div>
		<div className="fullscreen__garantic">
			{garanticItems.map((item,index)=>(
				<div key={index} className="fullscreen__item">
				<img src={item.icon} alt="icon" />
				<p className='fullscreen__item-text'>{item.text}</p>
				</div>
			))}
		</div>
		</div>
		<span className='decor-border-one'></span>
		<span className='decor-border-two'></span>
		<span className='decor-border-tree'></span>
		<span className='decor-border-four'></span>
		<span className='decor-border-five'></span>
	</section>
	)
}

export default FrontSection