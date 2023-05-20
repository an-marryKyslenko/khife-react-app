import React from 'react'

import './Button.css'

const Button = ({name,details,icon}) => {
  return (
	<button type='button' className={`${details} button`}> <span>{name}{icon && icon}</span></button>
  )
}

export default Button