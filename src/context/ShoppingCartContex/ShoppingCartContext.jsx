import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext(null);


export const ShoppingCartProvider = ({ children }) => {
	const getDataLocalStorage = localStorage.getItem("cartItems")
	const [cart, setCart] = useState(
		getDataLocalStorage ? JSON.parse(getDataLocalStorage) : []
	);

	
	const addToCart = (product) => {
		const { id, img, title, actualPrice, previousPrice } = product
		setCart((currentItems) => {
			const cartItem = currentItems.find((item) => item.id === id);
			if (cartItem) {
				return currentItems.map((item) => {
					if (item.id === id) {
						toast.success("Added successfully!")
						return { ...item, quantity: item.quantity + 1 }
					} else {
						return item
					}
				});
			} else {
				toast.success("Added successfully!")
				return [...currentItems, { id, img, title, quantity: 1, actualPrice, previousPrice }]
			}
		});
	};

	const removeFromCart = (product) => {
		const {id} = product
		setCart((currentItems) => {
			if (currentItems.find((item) => item.id === id)?.quantity === 1) {
				toast.success("Deleted from cart")
				return currentItems.filter((item) => item.id !== id);
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						toast.success("Deleted from cart")
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					};
				});
			};
		});
	};
	
	


	return (
		<CartContext.Provider value={[
			cart,
			setCart,
			addToCart,
			removeFromCart,
		]}
		>
			{children}
		</CartContext.Provider>
	)


};
