import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/ShoppingCartContex/ShoppingCartContext";
import "./CartProducts.css"



export const CartProducts = () => {
	const [cart, setCart] = useContext(CartContext);
	const totalProducts = cart.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantity;
	}, 0)
	
	useEffect(() => {
		const json = JSON.stringify(cart)
		localStorage.setItem("cartItems", json)
	}, [cart])

	
	const totalPrice = cart.reduce((accumulator, currentProduct) => {
		return accumulator + currentProduct.quantity * currentProduct.actualPrice;
	}, 0)

	const addToCart = (id) => {
		setCart((currentItems) => {
			const cartItem = currentItems.find((item) => item.id === id);
			if (cartItem) {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 }
					} else {
						return item
					}
				});
			} else {
				return [...currentItems, { id }]
			}
		});
	};

	const removeItem = (id) => {
		setCart((currentItems) => {
			if (currentItems.find((item) => item.id === id)?.quantity === 1) {
				return currentItems.filter((item) => item.id !== id);
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				})
			}
		})
	};


	const handleDeleteAll = () => {
		setCart([])
	}



	return (
		<>
			{
				cart.length > 0
					?
					(
						<>
							{cart.map((item) => {
								return (

									<div className="cart__box " key={item.id}>
										<img src={require(`../../../assets/imgs/${item.img}`)} alt={item.title} />
										<span>{item.title}</span>
										<button className="btn btn-secondary" onClick={() => addToCart(item.id)}>+</button>
										<span>{item.quantity}</span>
										<button className="btn btn-secondary" onClick={() => removeItem(item.id)}>-</button>
										{
											item.quantity === 1 ?
												<span>Price: {item.actualPrice.toFixed(2)}€</span>
												:
												<span>Price: {(item.actualPrice * item.quantity).toFixed(2)}€</span>
										}
									</div>
								)
							})}
							<div className="cart-total">
								<h6>Total Cart products: {totalProducts}</h6>
								<h6>Total price: {totalPrice.toFixed(2)}€</h6>
							</div>
							<div className="cart-buttons">
								<button className="btn btn-dark cart__btn-purchase">
									Confirm Purchase
								</button>
								<button className="btn btn-dark cart__btn-delete" onClick={handleDeleteAll}>
									Clean car
								</button>
							</div>
						</>
					)
					: <span>Empty cart go back to: <Link to="/products"><span className="product__page--link">Products</span></Link></span>
			}

		</>

	)
};

