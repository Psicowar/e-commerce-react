import { useContext, createContext } from "react";
import { useState } from "react";

export const WishListContext = createContext(null)

const WishListProvider = ({children}) => {
	const getDataLocalStorage = localStorage.getItem('WishList')
	const [wishList, setWishList] = useState(
		getDataLocalStorage ? JSON.parse(getDataLocalStorage) : []
	)

	return (
		<WishListContext.Provider value={{wishList, setWishList}}>
			{children}
		</WishListContext.Provider>
	)
};


export const useWishListContext = () => {
	const context = useContext(WishListContext)
	if(!context) {
		throw new Error('Error provider')
	}
	return context
}


export default WishListProvider;

