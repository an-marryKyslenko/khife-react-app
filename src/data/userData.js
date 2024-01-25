import { IoAccessibilitySharp } from "react-icons/io5";
import {AiOutlineHeart} from 'react-icons/ai'
import { GoHistory } from "react-icons/go";
import { AiOutlineUserDelete } from "react-icons/ai";

export const cabinetSection = [
	{
		title: 'Особиста інформація',
		link: '.',
		icon: <IoAccessibilitySharp/>,
	},
	{
		title: 'Улюблені товари',
		link: 'favorite',
		icon: <AiOutlineHeart/>,
	},
	{
		title: 'Історія замовлень',
		link: 'history',
		icon: <GoHistory/>,
	},
	{
		title: 'Видалити акаунт',
		link: 'delete-account',
		icon: <AiOutlineUserDelete/>,
	},
]