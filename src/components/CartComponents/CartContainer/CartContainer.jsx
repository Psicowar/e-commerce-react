import { CartProducts } from "../CartProducts/CartProducts";
import "./CartContainer.css"
export const CartContainer = () => {

	
	return (

		<section>
			<div className="cart__component-box d-flex justify-content-center flex-column">
				<CartProducts/>
			</div>
		</section>

	)
};


