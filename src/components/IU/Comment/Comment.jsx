import React from 'react'
import Stars from '../Stars/Stars'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import './Comment.css'
const Comment = ({ user, isAuth }) => {
	return (
		<div className="details__comment comment">
			<div className="comment__img">
				<img src={user.image} alt={user.name} />
			</div>
			<div className="comment__content">
				<h5 className="comment__user">{user.name}</h5>
				<p className='comment__date'>{user.date}</p>
				<Stars addClass='comment__stars' amounStars={user.rating} />
				<p className='comment__text'>{user.comment}</p>
				{
					isAuth && (
						<>
							<button className='comment__btn'>Відповісти</button>
							<button type='button' className='cart__heart'><AiOutlineHeart /><AiFillHeart className='hover-icon' /></button>
						</>
					)
				}
			</div>
		</div>
	)
}

export default Comment