import React from 'react'
import { mainText, garanticItems } from '../../data/data'
import knife from '../../images/c24cd35d64b39ae4ba697531c34b374c.png'
import Button from '../IU/button/Button';
import './FrontSecton.css';

const FrontSection = () => {

	return (
		<section className="fullscreen">
			<div className="container fullscreen__container">
				<div className="fullscreen__contant">
					<h2 className="fullscreen__title">{mainText[0].title}</h2>
					<p className='fullscreen__text'>{mainText[0].text}</p>
					<Button name='Детальніше' details='fullscreen__btn' icon={null} />
				</div>
				<div className="fullscreen__img">
					<img src={knife} alt="knifes" />
				</div>
				<div className="fullscreen__garantic">
					{garanticItems.map((item, index) => (
						<div key={index} className="fullscreen__item">
							<img src={item.icon} alt="icon" />
							<p className='fullscreen__item-text'>{item.text}</p>
						</div>
					))}
				</div>
			</div>
			<div className="fullscreen__decor decor">
				<span className='decor__item'></span>
				<span className='decor__item'></span>
				<span className='decor__item'></span>
				<span className='decor__item'></span>
				<span className='decor__item'></span>
			</div>
		</section>
	)
}

export default FrontSection