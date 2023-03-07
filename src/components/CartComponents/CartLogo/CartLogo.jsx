
import "./CartLogo.css"

import cartLogoPng from "../../../assets/imgs/cart.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/ShoppingCartContex/ShoppingCartContext";

const Cart = () => {

	const [cart] = useContext(CartContext);

	const totalProducts = cart.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantity;
	}, 0)

	
	return (

		<div className="cart__logo">
			<Link to="/cart"><img src={cartLogoPng} alt="Cart.png"/>{totalProducts}</Link>			
		</div>


	)
};

export default Cart;
