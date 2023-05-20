import React from 'react'
import './BlogCart.css'
const BlogCart = ({image,title,date}) => {
	return (
		<div className='blog-cart'>
			<div className="blog-cart__image">
				<img src={image} alt=""/>
			</div>
			<h5 className="blog-cart__title">{title}</h5>
			<div className="blog-cart__date">{date}</div>
		</div>
	)
}

export default BlogCart