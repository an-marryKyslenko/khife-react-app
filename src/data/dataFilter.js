import { menuCatalog } from "./catalogMenu"
import {productsFavorite} from './dataProdact'

function getMinMax (arr,type){
	const newArr=[...arr.map(i=>i[type])]
	
	return [Math.min(...newArr),Math.max(...newArr)]
}
function getArray(arr,type){
	const oldArr = [...arr.map(item=>item[type])]
	
	const obj = oldArr.reduce((allNames,name)=>{
		const total = allNames[name] ?? 0
		return {...allNames, [name]:total + 1}
	},[])
	const newArr = []
	for(const [key,value] of Object.entries(obj)){
		newArr.push({name:key,total: value})
	}
	return newArr
}

export const dataFilter = [
	{
		title: 'Ціна',
		data : getMinMax(productsFavorite,'price')
	},
	{
		title:'Виробництво',
		data: getArray(productsFavorite, 'manufacturer')
	},
	{
		title:'Сталь',
		data: getArray(productsFavorite, 'stile')
	},
	{
		title:'Ручка',
		data: getArray(productsFavorite, 'handle')
	},
	{
		title:'Гарда і тильник',
		data: getArray(productsFavorite, 'garda')
	},
	{
		title:'Загальна довжина',
		data: getMinMax(productsFavorite,'lengthTotal')
	},
	{
		title:'Ширина леза',
		data: getMinMax(productsFavorite,'width')
	},
	{
		title:'Рейтинг',
		data: getMinMax(productsFavorite,'stars')
	},
]
