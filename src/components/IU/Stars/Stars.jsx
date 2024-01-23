import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";

import './Stars.css'
const Stars = ({ addClass, amounStars }) => {
	return (
		<div className={`${addClass} stars`}>
			{[1, 2, 3, 4, 5].map(item => {
				if (item <= amounStars) {
					return <span key={item} className='golden'><MdOutlineStarPurple500 /></span>
				} else {
					return <span key={item}><MdOutlineStarPurple500 /></span>
				}
			})}

		</div>
	)
}

export default Stars