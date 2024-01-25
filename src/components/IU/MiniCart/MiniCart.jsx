import React from 'react'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";

import './MiniCart.css'
const MiniCart = ({data,func,isHistory,secondClass,amount}) => {
	const {img,title,id,price} = data;
	return (
		<Link to={`../../product/${id}`} class={`${secondClass} mini-cart`}>
			<div class="mini-cart__img">
				<img src={img} alt={title} />
			</div>
			<div class="mini-cart__info">
				<h3 class="mini-cart__name">{title}</h3>
				{isHistory && (<div className='mini-cart__amount'>{amount} шт.</div>)}
				<div className="mini-cart__price">{price}грн.</div>
				<button className="mini-cart__button" >Додати до кошика {isHistory ? 'знову':''}</button>
			</div>
			{!isHistory && (
				<button class='mini-cart__delete'><IoCloseOutline /></button>
			)}
		</Link>
	)
}

export default MiniCart