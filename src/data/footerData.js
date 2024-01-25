import { BsWhatsapp } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'
import { FiPhoneCall } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'

export const footerData = {
	title: 'Ножі інтернет-магазин "Госто"',
	text: 'Наш інтернет-магазин "Гостро" пропонує Вам ножі дуже високої якості із міста зброярів - Златоуста. Ножі відомі та популярні серед споживачів як на російському ринку, так і за кордоном: ножі мисливські, господарські, туристичні, рибальські, складні та метальні. Ніж Золотоуста - це ідеальний друг і товариш у повсякденному житті та в екстремальних ситуаціях. На багато продукції поширюється гарантія до 10 років - це один з головних показників якості. Для Вас на нашому сайті "Гостро" запропонований величезний асортимент ножів. Наші менеджери допоможуть визначитися та підібрати найкращий кий ніж, орієнтуючись на Ваші побажання.',
	footerMenu: [
		{
			title: 'ІНФОРМАЦІЯ',
			menu: ["Гострі ножі у Києві", "Ножові сталі", "Про нас", "Умови оплатита доставки", "Політикаконфіденційності",]
		},
		{
			title: 'СЛУЖБА ПІДТРИМКИ',
			menu: ["Контактна інформація", "Повернення товару", "Карта сайту"]

		},
		{
			title: 'ДОДАТКОВО',
			menu: ["подарункові сертифікати", "Партнери", "Товари зі знижкою"]
		},
		{
			title: 'ОСОБИСТИЙ КАБІНЕТ',
			menu: ["Особистий кабінет", "Історія замовлень", "Мої закладки", "Розсилка новин"]
		},
	],
}
export const socialMedia = [
	{ link: '#', icon: <ImFacebook />, color: '#4267B2' },
	{ link: '#', icon: <FiPhoneCall />, color: '#665CAC' },
	{ link: '#', icon: <FaTelegramPlane />, color: '#0088cc' },
	{ link: '#', icon: <BsWhatsapp />, color: '#25D366' },
]

export const contacts = {
	title: 'КОНТАКТИ',
	phones: { icon: <HiOutlinePhone />, tel: '8 (800) 777-49-67' },
	works: { icon: <AiOutlineClockCircle />, days: 'Пн-Пт', hours: '7:00 - 16:00' },
	adress: { icon: <FiMapPin />, name: "Гострий ніж", street: 'вул. Героїв,д.1,', office: 'офіс «6а»' },
	email: { icon: <HiOutlineMail />, text: 'info@info.ua' }
}