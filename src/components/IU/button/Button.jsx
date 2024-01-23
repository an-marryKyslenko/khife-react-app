import React from 'react'

import './Button.css'

const Button = ({name,details,icon, onClick}) => {
  return (
	<button type='button' onClick={onClick} className={`${details} button`}> 
  <span>{name}</span>
  <span className='icon'>{icon && icon}</span>
  </button>
  )
}

export default Button