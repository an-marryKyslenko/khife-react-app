import React from 'react'
import { socialMedia } from '../../../data/footerData'
import './SocialMedia.css'
const SocialMedia = ({details}) => {
	return (
		<div className={`${details} social-media`}>
			{socialMedia.map((media, index) => (
				<a key={index} style={{ backgroundColor: media.color }} className={`social-media__link _${media.color}`} href={media.link}>{media.icon}</a>
			))}
		</div>
	)
}

export default SocialMedia