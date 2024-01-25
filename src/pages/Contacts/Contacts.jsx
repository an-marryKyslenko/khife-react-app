import React from 'react'
import SocialMedia from '../../components/IU/SocialMedia/SocialMedia'
import { contacts } from '../../data/footerData'

import './Contacts.css'
const Contacts = () => {
	const { phones, works, adress, email, title } = contacts
	return (
		<main className='contacts'>
			<div className="contacts__container container">
				<h1 className='contacts__title title'>Контакти</h1>
				<div className="contacts__list">
					<h2 className="contacts__subtitle">{title}</h2>
					<ul className="contacts-menu">
						<li className='contacts-menu__item'><span>{phones.icon}</span> {phones.tel}</li>
						<li className='contacts-menu__item'><span>{works.icon}</span> {works.days} {works.hours}</li>
						<li className='contacts-menu__item'><span>{adress.icon}</span> {adress.name} <br /> {adress.street} {adress.office}</li>
						<li className='contacts-menu__item'><span>{email.icon}</span> {email.text}</li>
					</ul>
				</div>
				<SocialMedia details='contacts__social-media' />
			</div>
		</main>
	)
}

export default Contacts