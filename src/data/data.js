import icon1 from '../images/icons/header-icon-1.svg'
import icon2 from '../images/icons/header-icon-2.svg'
import icon3 from '../images/icons/header-icon-3.svg'
import icon4 from '../images/icons/header-icon-4.svg'
import logo from '../images/logo.svg'


import knife1 from '../images/knife-catalog-1.png'
import knife2 from '../images/knife-catalog-2.png'
import knife3 from '../images/knife-catalog-3.png'
import knife4 from '../images/knife-catalog-4.png'
import knife5 from '../images/knife-catalog-5.png'
import knife6 from '../images/knife-catalog-6.png'

import fleshlight1 from '../images/light.png'
import fleshlight2 from '../images/multi-light.png'

const garanticItems = [
	{
		icon: icon1,
		text: 'Гарантія 100% повернення грошових коштів'
	},
	{
		icon: icon2,
		text: 'Доставка по Україні та Польщі'
	},
	{
		icon: icon3,
		text: 'Можливість оформлення замовлення без реєстрації.'
	},
	{
		icon: icon4,
		text: 'Знижки постійним покупцям.'
	},
	
]
const headerMenu = {
	menu: [
		{name:'Про нас', path: "about"},
		{name:'Оплата і доставка', path: "paining"},
		{name:'Новини', path: "news"},
		{name:'Контакти', path: "contakts"},
	],
	logo: logo,
	city: 'Київ',
	telephones: ['380983432135', '38066899765'],
	
}

const mainText = [
	{
		title: 'Інтернет магазин сертифікованих ножів',
		text: 'Ласкаво просимо до офіційного сайту «ГОСТРО»! У нашому магазині представлений найбільш широкий вибір Златоустівських ножів від Златоустівських. Збройових заводів і компаній, ми є офіційними постачальниками.',
		button: '/',
		id: 11	
	},
	{
		title: 'Mагазин сертифікованих златоустівських ножів',
		text: 'Ласкаво просимо до офіційного сайту «ГОСТРО»! У нашому магазині представлений найбільш широкий вибір Златоустівських ножів від Златоустівських. Збройових заводів і компаній, ми є офіційними постачальниками.',
		button: '/',
		id: 12	
	},
	{
		title: 'Інтернет магазин сертифікованих златоустівських ножів',
		text: 'Ласкаво просимо до офіційного сайту «ГОСТРО»! У нашому магазині представлений найбільш широкий вибір Златоустівських ножів від Златоустівських. Збройових заводів і компаній, ми є офіційними постачальниками.',
		id: 13,
		button: '/'
	},
]

const typeWeapons = [
	{
		title: 'Каталог ножів',
		sections: ["Обробні","Туристичні","Мисливські"],
		img: knife1,

	},
	{
		title: 'Середньоклинкова зброя',
		sections: ["Обробні","Туристичні","Мисливські"],
		img: knife2,
	},
	{
		title: 'Довголинкова зброя',
		sections: ["Обробні","Туристичні","Мисливські"],
		img: knife3
	},
	{
		title: 'Сувенірні вироби',
		sections: ["Обробні","Туристичні","Мисливські"],
		img: knife4
	},
	{
		title: 'Супутні товари',
		sections: ["Обробні","Туристичні","Мисливські"],
		img: knife5
	},
	{
		title: 'Ножова майстерня',
		sections: ["Обробні","Туристичні","Мисливські"],
		img: knife6
	},
]
const typeFlashlights = [
	{
		title: 'Тактичні ліхтарі',
		text: 'Lorem ipsum dolor sit amet, onsectetur adipiscing elit.',
		link: '#',
		img: fleshlight1
	},
	{
		title: 'Палобні мультиліхтарі',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		link: '#',
		img: fleshlight2
	},
]
export {garanticItems,headerMenu,mainText,typeWeapons,typeFlashlights}