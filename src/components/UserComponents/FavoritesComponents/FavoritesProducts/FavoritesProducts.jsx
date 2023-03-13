import { useContext } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import Tilt from "react-vanilla-tilt";
import { CartContext } from "../../../../context/ShoppingCartContex/ShoppingCartContext";


const FavoritesProducts = (product) => {
    const { id, title, img, previousPrice, actualPrice } = product
    const [cart, setCart, addToCart, removeFromCart] = useContext(CartContext);

	

    const onAddToCart = () => {
		addToCart(product)
	}

	const onRemoveFromCart = () => {
		removeFromCart(product)
	}

    const getProductsById = (id) => {
		return cart.find((item) => item.id === id)?.quantity || 0;
	};

	const quantityPerItem = getProductsById(id)

    return (

        <>

            <Tilt className="tilt__container" key={id}>
			<div className="card p-0 card__container" >
				<p className="discount">- {(100 / (previousPrice / (previousPrice - actualPrice))).toFixed(2)}%</p>

				<div>
					<img className="tilt__container-img" src={require(`../../../../assets/imgs/${img}`)} alt={title} />
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
								<button className="btn btn-dark btn__product fs-6" onClick={onAddToCart}>Buy</button>
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
					</div>
				</div>
			</div>
		</Tilt>
        </>
    )
};

export default FavoritesProducts;
