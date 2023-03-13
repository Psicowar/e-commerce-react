import { useContext, useEffect } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../../../context/ShoppingCartContex/ShoppingCartContext";
import { CartProducts } from "../CartProducts/CartProducts";
import "./CartContainer.css"
export const CartContainer = () => {
	const [cart, setCart] = useContext(CartContext);

	const totalProducts = cart.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantity;
	}, 0)
	const totalPrice = cart.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantity * currentProduct.actualPrice;
	}, 0)

	const onDeleteAll = () => {
		setCart([])
		toast.success("All products deleted!")
	}

	useEffect(() => {
		const json = JSON.stringify(cart)
		localStorage.setItem("cartItems", json)
	}, [cart])

	return (

		cart.length > 0
			? (
				<section>
					<div className="cart__component-box d-flex justify-content-center flex-column">
						{
							cart.map(product => {
								return <CartProducts key={product.id} product={product} {...product} />
							})
						}
						<div className="cart-total">
							<h6 className="m-0">Total products: {cart.length}</h6>
							<h6 className="m-0">Total units: {totalProducts}</h6>
							<h6 className="m-0">Total price: {totalPrice.toFixed(2)}€</h6>
							<div className="cart-buttons">
								<button className="btn btn-dark cart__btn-purchase">
									Confirm Purchase
								</button>
								<button className="btn btn-dark cart__btn-delete" onClick={onDeleteAll}>
									Clean car
								</button>
							</div>
						</div>

					</div>
				</section>
			) : (
				<div className="cart__empty-box d-flex justify-content-center align-items-center flex-column">
					<MdOutlineAddShoppingCart size={300} color="#f0f8ff" className="m-4" />
					<span className="fs-4">Empty cart, go back to: <Link to="/products"><span className="product__page--link">Products</span></Link></span>
				</div>
			)


	)
};


