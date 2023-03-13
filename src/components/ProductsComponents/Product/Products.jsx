
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/ShoppingCartContex/ShoppingCartContext";
import Tilt from "react-vanilla-tilt";
import "./Products.css"
import { toast } from "react-toastify";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi"
import { FavoritesContext } from "../../../context/FavoritesContext/FavoritesContext";
import { MdFavoriteBorder } from "react-icons/md"
import { Link } from "react-router-dom";


export const Product = (product) => {
	const { id, title, img, previousPrice, actualPrice } = product
	const [cart, setCart, addToCart, removeFromCart] = useContext(CartContext);
	const [favorites, setFavorites] = useContext(FavoritesContext);
	const [favOn, setFavOn] = useState(false)

	useEffect(() => {
		const json = JSON.stringify(cart)
		localStorage.setItem("cartItems", json)
	}, [cart, setCart])

	useEffect((id) => {
		const favItems = favorites.find((item) => item.id === id)
		if (favItems) {
			setFavOn(true)
		}
		const json = JSON.stringify(favorites)
		localStorage.setItem("favItems", json)
	}, [favorites])


	const onAddToCart = () => {
		addToCart(product)
	}

	const onRemoveFromCart = () => {
		removeFromCart(product)
	}

	const addToFavorites = (product) => {
		const favItems = favorites.find((item) => item.id === id);
		if (!favItems) {
			setFavorites([...favorites, product])
			setFavOn(true)
			toast.success("Added to favorites")
		} else {
			const currentItem = favorites.filter((item) => item.id !== id)
			setFavorites(currentItem)
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
				<span className="discount">- {(100 / (previousPrice / (previousPrice - actualPrice))).toFixed(2)}%</span>
				<img className="tilt__container-img" src={require(`../../../assets/imgs/${img}`)} alt={title} />
				<div className="card-body w-100">
					<h6 className="card-data fs-6">{title} </h6>
					<div className="price-box">

						<span className="card-data fs-6"> Price: {actualPrice}€</span>
						<span className="text-decoration-line-through">Previous Price: {previousPrice}€ </span>
					</div>
					<div className="d-flex justify-content-center card__buttons">
						{
							<Link to={`${title}`}><button className="btn text-white btn-outline-info">Info</button></Link>
						}
						
						{
							quantityPerItem === 0 ? (
								<button className="btn btn-outline-warning text-white btn__product fs-6" onClick={onAddToCart}>Buy</button>
							) : (
								<FiPlusCircle onClick={onAddToCart} className="btn__product" size={30} />
							)
						}

						{
							quantityPerItem > 0 && <span className="fs-6">{quantityPerItem}</span>
						}

						{
							quantityPerItem > 0 && <FiMinusCircle onClick={onRemoveFromCart} className="btn__product" size={30} />
						}
						{
							favOn ?

								<MdFavoriteBorder className="btn__favorites--off" onClick={() => addToFavorites(product)} size={20} />
								:

								<MdFavoriteBorder className="btn__favorites--on" onClick={() => addToFavorites(product)} size={20} />
						}

					</div>
				</div>
			</div>
		</Tilt>

	)

};



