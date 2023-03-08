
import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/ShoppingCartContex/ShoppingCartContext";
import Tilt from "react-vanilla-tilt";

import "./Product.css"


export const Product = ({ id, img, title, actualPrice, previousPrice }) => {
	const discount = previousPrice - actualPrice;
	const [cart, setCart] = useContext(CartContext);

	useEffect(() => {
		const json = JSON.stringify(cart)
		localStorage.setItem("cartItems", json)
	}, [cart])

	const addToCart = () => {
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
				return [...currentItems, { id, img, title, quantity: 1, actualPrice, previousPrice }]
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



	const getProductsById = (id) => {
		return cart.find((item) => item.id === id)?.quantity || 0;
	};


	const quantityPerItem = getProductsById(id)


	return (

		<Tilt className="tilt__container" key={id}>
			<div className="card p-0 card__container">
				<p className="discount">- {(100 / (previousPrice / discount)).toFixed(2)}%</p>

				<div>
					<img className="tilt__container-img" src={require(`../../../assets/imgs/${img}`)} alt={title} />
				</div>

				<div className="card-body w-100">
					<h6 className="card-data">{title} || </h6>
					<div className="price-box">

						<span className="card-data fs-6"> Price: {actualPrice}€</span>
						<span className="text-decoration-line-through">Previous Price: {previousPrice}€ </span>
					</div>
					<div className="d-flex justify-content-center card__buttons">
						{
							quantityPerItem === 0 ? (
								<button className="btn btn-dark btn__product" onClick={addToCart}>Buy</button>
							) : (
								<button className="btn btn-secondary btn__product" onClick={addToCart}>+</button>
							)
						}
						{quantityPerItem > 0 && <div>{quantityPerItem}</div>}

						{
							quantityPerItem > 0 && (
								<button className="btn btn-secondary btn__product" onClick={removeItem}>-</button>
							)
						}

					</div>
				</div>
			</div>
		</Tilt>

	)

};



