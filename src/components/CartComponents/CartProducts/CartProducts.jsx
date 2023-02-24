import { useContext } from "react";
import { CartContext } from "../../../context/ShoppingCartContex/ShoppingCartContext";
import "./CartProducts.css"


export const CartProducts = () => {
	const [cart, setCart] = useContext(CartContext);

	const totalProducts = cart.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantity;
	}, 0)


	const totalPrice = cart.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantity * currentProduct.price;
	}, 0)

	

	return (

		<>
			{cart.map((item) => {
				console.log(item)
				return (
					<div className="cart__box" key={item.id}>
						<img src={item.img} alt={item.title} />
						<p>{item.title}</p>
						<p>Price: {item.price}€</p>
					</div>

				)
			})}
			<div className="cart-total">
				<h6>Total Cart products: {totalProducts}</h6>
				<h6>Total price: {totalPrice.toFixed(2)}€</h6>
			</div>
			<div>
				<button className="btn btn-dark cart__btn-purchase">
					Confirm Purchase
				</button>
			</div>
		</>

	)
};

