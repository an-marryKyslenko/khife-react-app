import React from 'react'
import { Link } from 'react-router-dom'

const FakePage = () => {
	return (
		<main className='page'>
			<div className="container">
				<h1 className="title" style={{marginBottom: 0, marginTop: 30}}>This page is fake!</h1>
				<Link to="/" className='page__button button' style={{width: '230px',display:'inline-block', margin: '30px 0 60px'}}><span>Go to home</span></Link>
			</div>
		</main>
	)
}

export default FakePage