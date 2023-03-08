
import "./CartLogo.css"

import cartLogoPng from "../../../assets/imgs/cart.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/ShoppingCartContex/ShoppingCartContext";
import {GiShoppingCart} from "react-icons/gi"
import { FaRegUser } from "react-icons/fa";

const Cart = () => {

	const [cart] = useContext(CartContext);

	const totalProducts = cart.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantity;
	}, 0)

	
	return (

		<div className="cart__logo bg-dark">
			
				<Link to="/cart"><GiShoppingCart className="cart_logo--icon" size={"2.4rem"}/><span className="cart_logo--quantity">{totalProducts}</span></Link>			
			
		</div>


	)
};

export default Cart;
