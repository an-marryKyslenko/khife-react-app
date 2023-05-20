import React,{createContext, useContext, useEffect, useState} from 'react';
import { menuCatalog } from './data/catalogMenu';
const MyContaxt = createContext()

const ProviderContaxt = ({children})=>{
	// const [screenSize,setScreenSize] = useState(undefined)
	const [openCatalog,setOpenCatalog] = useState(false)
	const [catalog,setCatalor]= useState(menuCatalog)
	const [sideMenu,setSideMenu] = useState(false)
	return (
		<MyContaxt.Provider
			value={{
				openCatalog,
				setOpenCatalog,
				catalog,
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