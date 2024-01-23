import React from 'react'

import './Title.css'
const Title = ({title,secondClass}) => {
	return (
		<h2 className={secondClass ? `title ${secondClass}`: 'title'}>{title}</h2>
	)
}

export default Title