import React, {useState} from 'react'
import { splitParts } from '../../functions/splitParts'
import BlogCart from '../IU/blogCart/BlogCart'
import Title from '../IU/Title/Title'

import './BlogSection.css'
const BlogSection = ({title,data, lengthPart}) => {

	const newData = splitParts(data,lengthPart)[0];
  return (
	<section className={`prodacts__blog blog`}>
	<div className="container blog__container">
		<Title title={title}/>
		<div className="blog__list">

				{newData.map((item,index)=> (
					<BlogCart key={index} {...item}/>
				)
				)}

		</div>
	</div>
</section>
  )
}

export default BlogSection