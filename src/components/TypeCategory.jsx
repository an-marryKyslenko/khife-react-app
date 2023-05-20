import React from 'react'
import Button from './IU/button/Button'

const TypeCategory = ({title,img,sections,text,link}) => {

  return (
	<div className="item-category">
		<div className="item-category__container">
			{sections ?
				<>
					<h5 className="item-category__title">{title}</h5>
					<ul className="item-category__list">
						{sections.map((name,i)=>(
							<li key={i}>{name}</li>
						))}
					</ul>
				</>
				:
				<div className='item-category__content'>
					<h5 className="item-category__title">{title}</h5>
					<p>{text}</p>
					<img className='item-category__img' src={img} alt={title} />
					<Button name="Деталі" details="item-category__btn"/>
				</div>
			}
		</div>
	</div>
  )
}

export default TypeCategory