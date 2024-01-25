import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { cabinetSection } from '../../data/userData'
import './Cabinet.css'
const Cabinet = () => {
	return (
		<main className='cabinet'>
			<div className="cabinet__container container">
				<div className="cabinet__title title">Особистий кабінет</div>
				<div className="cabinet__contant">
					<div className="cabinet__menu">
							<NavLink
								end
								to={cabinetSection[0].link}
								className={({ isActive }) => isActive ? 'cabinet__link _active' : 'cabinet__link '}
							>
								<span className='icon'>{cabinetSection[0].icon}</span>
								<span>{cabinetSection[0].title}</span>
							</NavLink>
							<NavLink
								to={cabinetSection[1].link}
								className={({ isActive }) => isActive ? 'cabinet__link _active' : 'cabinet__link '}
							>
								<span className='icon'>{cabinetSection[1].icon}</span>
								<span>{cabinetSection[1].title}</span>
							</NavLink>
							<NavLink
								to={cabinetSection[2].link}
								className={({ isActive }) => isActive ? 'cabinet__link _active' : 'cabinet__link '}
							>
								<span className='icon'>{cabinetSection[2].icon}</span>
								<span>{cabinetSection[2].title}</span>
							</NavLink>
							<NavLink
								to={cabinetSection[3].link}
								className={({ isActive }) => isActive ? 'cabinet__link _active' : 'cabinet__link '}
							>
								<span className='icon'>{cabinetSection[3].icon}</span>
								<span>{cabinetSection[3].title}</span>
							</NavLink>
							
					</div>
					<div className="cabinet__output">
						<Outlet />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Cabinet