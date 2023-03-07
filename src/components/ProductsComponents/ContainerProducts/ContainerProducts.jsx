import { Product } from "../../ProductsComponents/Product/Product"
// import { data } from "../../../assets/db/db"
import "./ContainerProducts.css"
import { useEffect, useState } from "react";
import useData from "../../../hooks/UseData";
import { ColorRing } from "react-loader-spinner";




export const ContainerItem = () => {
	const [searchValue, setSearchValue] = useState('');

	const [products, isLoading, error] = useData(searchValue);


	return (
		<div className="container-fluid row row-cols-5 d-flex justify-content-center">
			<div className="pt-5 pb-4 w-100 d-flex justify-content-center">
				<input
					className="p-1 rounded"
					type="text"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</div>
			{isLoading ? (
				<div className='loading-box'>
					<ColorRing
						height='100'
						width='100'
						wrapperClassName='loading-circle'
						colors={['#5d79ae', '#0c0f12', '#ccba7c', '#413a27', '#de9b35']}
					/>
				</div>
			) : (
				<>
					{products && products.map(product => {
						return <Product key={product.id} {...product} product={product} />
					})}
				</>
			)}
			{error && <h1>Error</h1>}
		</div>

	)
};


