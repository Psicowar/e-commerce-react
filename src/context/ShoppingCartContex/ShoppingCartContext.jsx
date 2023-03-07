import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({children}) => {
	const getDataLocalStorage = localStorage.getItem("cartItems")
	const [cart, setCart] = useState(
		getDataLocalStorage ? JSON.parse(getDataLocalStorage) : []
	);
	return <CartContext.Provider value={[cart, setCart]}>{children}</CartContext.Provider>	
};
