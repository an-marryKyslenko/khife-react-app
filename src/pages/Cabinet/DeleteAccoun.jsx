import React from 'react'
import Button from '../../components/IU/button/Button'

const DeleteAccoun = () => {
	return (
		<section className='cabinet__section'>
			<div className="cabinet__container">
				<h2 className='cabinet__subtitle'>Видалити акаунт</h2>
				<div
					div className="cabinet__content delete-account">
					<p className="delete-accout__text">Якщо бажаєш видалити свій акаунт, введи <strong>свій пароль</strong></p>
					<input type="text" className='delete-accout__input' placeholder='Введіть свій пароль ...'/>
					<Button name="Видалити акаунт"  details="delete-account__button _black" />
				</div>
			</div>
		</section>
	)
}

export default DeleteAccoun