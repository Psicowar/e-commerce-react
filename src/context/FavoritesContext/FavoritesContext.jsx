import { createContext, useState } from "react";
export const FavoritesContext = createContext(null);


export const FavoritesContextProvider = ({ children }) => {
	const getDataLocalStorage = localStorage.getItem("favItems")
	const [favorites, setFavorites] = useState(
		getDataLocalStorage ? JSON.parse(getDataLocalStorage) : []
	);
	
	return (
		<FavoritesContext.Provider value={[
			favorites,
			setFavorites,
		]}
		>
			{children}
		</FavoritesContext.Provider>
	)
	
};
