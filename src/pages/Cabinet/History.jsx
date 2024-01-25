import React from 'react'
import MiniCart from '../../components/IU/MiniCart/MiniCart'
import { productsFavorite } from '../../data/dataProdact'
const History = () => {
	return (
		<section className='cabinet__section'>
			<div className="cabinet__container">
				<h2 className='cabinet__subtitle'>Історія замовлень</h2>
				<div className="cabinet__content history">
					<div className="history__item">
						<div className="history__date">12.04.2022</div>
						<MiniCart data={productsFavorite[0]} isHistory secondClass="history__cart" amount="2"/>
						<div className="history__total-price">Загальна сума: {productsFavorite[0].price*2}грн.</div>
					</div>
					<div className="history__item">
						<div className="history__date">12.04.2022</div>
						<MiniCart data={productsFavorite[0]} isHistory secondClass="history__cart" amount="2"/>
						<MiniCart data={productsFavorite[0]} isHistory secondClass="history__cart" amount="2"/>
						<div className="history__total-price">Загальна сума: {productsFavorite[0].price*4}грн.</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default History