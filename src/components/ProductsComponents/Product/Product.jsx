
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/ShoppingCartContex/ShoppingCartContext";
import Tilt from "react-vanilla-tilt";
import "./Product.css"
import { toast } from "react-toastify";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi"
import { FavouritesContext } from "../../../context/FavouritesContext/FavouritesContext";
import { MdFavoriteBorder } from "react-icons/md"


export const Product = ({ id, img, title, actualPrice, previousPrice }) => {
	const discount = previousPrice - actualPrice;
	const [cart, setCart] = useContext(CartContext);
	const [favourites, setFavourites] = useContext(FavouritesContext);
	const [favOn, setFavOn] = useState(false)


	useEffect(() => {
		const json = JSON.stringify(cart)
		localStorage.setItem("cartItems", json)
	}, [cart])

	useEffect(() => {
		const favItems = favourites.find((item) => item.id === id)
		if(favItems) {
			setFavOn(true)
		}
		const json = JSON.stringify(favourites)
		localStorage.setItem("favItems", json)
	}, [favourites])

	const addToCart = () => {
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

	const removeItem = (id) => {
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

	const addToFavourites = (product) => {
		const favItems = favourites.find((item) => item.id === id);
		if(!favItems) {
			setFavourites([...favourites, product])
			setFavOn(true)
			toast.success("Added to favorites")
		} else {
			const currentItem = favourites.filter((item) => item.id !== id)
			setFavourites(currentItem)
			setFavOn(false)
			toast.success("Remove from favorites")
		}
		
	}






	const getProductsById = (id) => {
		return cart.find((item) => item.id === id)?.quantity || 0;
	};


	const quantityPerItem = getProductsById(id)


	return (

		<Tilt className="tilt__container" key={id}>
			<div className="card p-0 card__container" >
				<p className="discount">- {(100 / (previousPrice / discount)).toFixed(2)}%</p>

				<div>
					<img className="tilt__container-img" src={require(`../../../assets/imgs/${img}`)} alt={title} />
				</div>

				<div className="card-body w-100">
					<h6 className="card-data fs-6">{title} </h6>
					<div className="price-box">

						<span className="card-data fs-6"> Price: {actualPrice}€</span>
						<span className="text-decoration-line-through">Previous Price: {previousPrice}€ </span>
					</div>
					<div className="d-flex justify-content-center card__buttons">
						{
							quantityPerItem === 0 ? (
								<button className="btn btn-dark btn__product fs-6" onClick={addToCart}>Buy</button>
							) : (
								<FiPlusCircle onClick={addToCart} className="btn__product" size={30} />
							)
						}

						{
							quantityPerItem > 0 && <span className="fs-6">{quantityPerItem}</span>
						}

						{
							quantityPerItem > 0 && <FiMinusCircle onClick={() => removeItem(id)} className="btn__product" size={30} />
						}
						{
							favOn ? 

							<MdFavoriteBorder className="btn__favourites--on" onClick={() => addToFavourites({ id, title, img, actualPrice, previousPrice })} size={20} />
							: 

							<MdFavoriteBorder className="btn__favourites--off" onClick={() => addToFavourites({ id, title, img, actualPrice, previousPrice })} size={20} />
						}
						
					</div>
				</div>
			</div>
		</Tilt>

	)

};



