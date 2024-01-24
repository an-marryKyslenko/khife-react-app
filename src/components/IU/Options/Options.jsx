import React from 'react'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import './Options.css'
const Options = ({ details, data, setDeliveryCountry, title, category }) => {
	const [option, setOption] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const handleChangeOption = (e) => {
		const option = e.target.value;
		setDeliveryCountry(option)
	}
	const handleChangeOptions = (e) => {
		setOption(e.target.value)
	}
	const handleOpenList = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className={`${details} options ${isOpen ? '_active' : ''}`}>
			<div className="options__title" onClick={handleOpenList}>
				{title || option || `Виберіть ${category}`}
				<span className='arrow-icon'><IoIosArrowDown /></span>
			</div>
			<div className="options__list">
				{data.map((item, index) => {
					if (!!item.country) {
						return (<div key={item.country} className="options__item">
							<label htmlFor={`country-${item.id}`} className="options__label"><span className="options__text">{item.country}</span></label>
							<input onClick={handleChangeOption} id={`country-${item.id}`} className="options__input" type="radio" value={item.country} name="option" />
						</div>)
					} else {
						return (<div key={item} className="options__item">
							<label htmlFor={`item-${index}`} className="options__label"><span className="options__text">{item}</span></label>
							<input onClick={handleChangeOptions} id={`item-${index}`} className="options__input" type="radio" value={item} name="option" />
						</div>)
					}
				})}
			</div>

		</div>
	)
}

export default Options