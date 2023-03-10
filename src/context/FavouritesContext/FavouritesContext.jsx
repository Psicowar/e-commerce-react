import { createContext, useState } from "react";
export const FavouritesContext = createContext(null);


export const FavouritesContextProvider = ({ children }) => {
		const getDataLocalStorage = localStorage.getItem("favItems")
		const [favourites, setFavourites] = useState(
			getDataLocalStorage ? JSON.parse(getDataLocalStorage) : []

		);
	return <FavouritesContext.Provider value={[favourites, setFavourites]}>{children}</FavouritesContext.Provider>
};
