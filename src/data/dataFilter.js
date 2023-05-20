import { menuCatalog } from "./catalogMenu"
import {prodactsFavorite} from './dataProdact'

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
		data : getMinMax(prodactsFavorite,'price')
	},
	{
		title:'Виробництво',
		data: getArray(prodactsFavorite, 'manufacturer')
	},
	{
		title:'Сталь',
		data: getArray(prodactsFavorite, 'stile')
	},
	{
		title:'Ручка',
		data: getArray(prodactsFavorite, 'handle')
	},
	{
		title:'Гарда і тильник',
		data: getArray(prodactsFavorite, 'garda')
	},
	{
		title:'Загальна довжина',
		data: getMinMax(prodactsFavorite,'lengthTotal')
	},
	{
		title:'Ширина леза',
		data: getMinMax(prodactsFavorite,'width')
	},
	{
		title:'Рейтинг',
		data: getMinMax(prodactsFavorite,'stars')
	},
]
