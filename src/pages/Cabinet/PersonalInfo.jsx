import React from 'react'
import Button from '../../components/IU/button/Button'

const PersonalInfo = () => {
	return (
		<section className='cabinet__section'>
			<div className="cabinet__container">
				<h2 className='cabinet__subtitle'>Персональна інформація</h2>
				<div className="cabinet__content personal-info">
					<form className="personal-info__form">
						<label className='personal-info__field' htmlFor="user-name">
							<span className="personal-info__label">Ім'я:</span>
							<input type="text" value='Тарас' className='personal-info__input' />
						</label>
						<label className='personal-info__field' htmlFor="user-name">
							<span className="personal-info__label">Фамілія:</span>
							<input type="text" value='Щур' className='personal-info__input' />
						</label>
						<label className='personal-info__field' htmlFor="user-name">
							<span className="personal-info__label">Емаіл:</span>
							<input type="text" value='taras.s@exemple.com' className='personal-info__input' />
						</label>
						<label className='personal-info__field' htmlFor="user-name">
							<span className="personal-info__label">Рік народження:</span>
							<input type="text" value='20.04.2000' className='personal-info__input' />
						</label>
						<div className="personal-info__buttons">
							<Button name="Зберегти зміни" details="personal-info__button" />
							<Button name="Скинути зміни" details="personal-info__button _black" />
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default PersonalInfo