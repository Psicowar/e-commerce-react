
import "./CartLogo.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/ShoppingCartContex/ShoppingCartContext";
import {GiShoppingCart} from "react-icons/gi"



const Cart = () => {
	const [cart] = useContext(CartContext);

	
	return (

		<div className="cart__logo bg-dark">
				<Link to="/cart"><GiShoppingCart className="cart_logo--icon" size={"2.4rem"}/><span className="cart_logo--quantity">{cart.length}</span></Link>			
			
		</div>


	)
};

export default Cart;
