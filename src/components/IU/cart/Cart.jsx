import React from 'react'

import { Link } from 'react-router-dom'

import {AiFillHeart,AiFillStar,AiOutlineHeart} from 'react-icons/ai'
import {MdBalance} from 'react-icons/md'
import {GiShoppingCart}from 'react-icons/gi'

import './Cart.css'
import Button from '../button/Button'
const Cart = ({title,
  sale,garda,handle,
  stars,reviews,price,img,details,
  lengthTotal,width}) => {

  return (
    <Link to='/' className={`${details} card`}>
      <img className='card__img' src={img} alt="" />
      <h6 className="card__title">{title}</h6>
      <div className="cart__size">{lengthTotal}x{width}</div>
      <div className="cart__consists">{garda}, {handle}</div>
      <div className="cart__stars">{stars.map}</div>
      <div className="cart__reviews">{reviews} відгуків</div>
      <hr style={{width: '100%',height: '1px',backgroundColor: "rgba(20, 20, 20, 0.5)"}}/>
      <div className="cart__price">{price} грн.</div>
      <div className='cart__icons'>
        <button type='button' className='hover-link cart__balance'><MdBalance/></button>
        <button type='button' className='cart__heart'><AiOutlineHeart/><AiFillHeart className='hover-icon'/></button>
      </div>
      <Button name={'В корзину'} icon={<GiShoppingCart/>} details={'cart__button'}/>
      {sale && <span className='cart__sale'>{sale}</span>}
    </Link>
  )
}

export default Cart