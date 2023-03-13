import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/ShoppingCartContex/ShoppingCartContext";
import "./CartProducts.css"
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi"



export const CartProducts = (product) => {
	const [cart, setCart, addToCart, removeFromCart ] = useContext(CartContext);
	const { id, title, img, actualPrice, quantity } = product
	

	useEffect(() => {
	}, [cart, setCart])

	
	const onAddToCart = () => {
		addToCart(product)
	}

	const onRemoveFromCart = () => {
		removeFromCart(product)
	}




	return (

		<div className="cart__box " key={id}>
			<img src={require(`../../../assets/imgs/${img}`)} alt={title} />
			<span>{title}</span>
			<FiPlusCircle onClick={onAddToCart} className="btn__product" size={30} />
			<span>{quantity}</span>
			<FiMinusCircle onClick={onRemoveFromCart} className="btn__product" size={30} />
			{
				quantity === 1 ?
					<span>Price: {actualPrice.toFixed(2)}€</span>
					:
					<span>Price: {(actualPrice * quantity).toFixed(2)}€</span>
			}
		</div>





	)
};

