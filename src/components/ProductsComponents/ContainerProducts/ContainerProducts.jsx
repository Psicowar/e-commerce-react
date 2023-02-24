import { Product } from "../../ProductsComponents/Product/Product"
import { data } from "../../../assets/db/db"
import "./ContainerProducts.css"




export const ContainerItem = () => {
	
	
	


	return (
		<div className="container-fluid row row-cols-5 d-flex justify-content-center">
			{data.map(product => {
				
				return <Product key={product.id} {...product} product={product}/>

			})}

		</div>

	)
};


