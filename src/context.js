import React,{createContext, useContext, useEffect, useState} from 'react';
import { menuCatalog } from './data/catalogMenu';
const MyContaxt = createContext()

const ProviderContaxt = ({children})=>{
	const [openCatalogue,setOpenCatalogue] = useState(false)
	const [category,setCategory]= useState(menuCatalog)
	const [sideMenu,setSideMenu] = useState(false)
	return (
		<MyContaxt.Provider
			value={{
				openCatalogue,
				setOpenCatalogue,
				category,
				sideMenu,
				setSideMenu,
			}}
		>
			{children}
		</MyContaxt.Provider>
	)
}

export const  useGlobalContaxt =()=> useContext(MyContaxt)

export {MyContaxt,ProviderContaxt}