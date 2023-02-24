
import { useContext } from "react";
import { CartContext } from "../../../context/ShoppingCartContex/ShoppingCartContext";

import Tilt from "react-vanilla-tilt";


import "./Product.css"

export const Product = ({ id, img, title, price }) => {
	const [cart, setCart] = useContext(CartContext);

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
				return [...currentItems, { id, img, title, quantity: 1, price }]
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
				<img className="tilt__container-img" src={img} alt={title} />
				<div className="card-body">
					<h6 className="card-data">{title} || </h6>
					<h6 className="card-data">Price: {price}€</h6>
					<div className="d-flex justify-content-center card__buttons">
						{
							quantityPerItem === 0 ? (
								<button className="btn btn-dark btn__product" onClick={() => addToCart()}>Buy</button>
								): (
									<button className="btn btn-secondary btn__product" onClick={() => addToCart()}>+</button>
									)
						}
									{quantityPerItem > 0 && <div>{quantityPerItem}</div>}

						{
							quantityPerItem > 0 && (
								<button className="btn btn-secondary btn__product" onClick={() => removeItem(id)}>-</button>
							)
						}
						
					</div>
				</div>
			</div>
		</Tilt>

	)

};



