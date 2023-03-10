import { Product } from "../../ProductsComponents/Product/Product"
import "./ContainerProducts.css"
import useData from "../../../hooks/UseData";
import { ColorRing } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";




export const ContainerItem = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const queryParams = searchParams.get('q') ?? '';
	const [products, isLoading, error] = useData();
	const [filterSearch, setFilterSearch] = useState("")

	

	const handleChange = ({ target }) => {
		const { value } = target
		setSearchParams({ q: value })
		setFilterSearch(value)
	}

	let filterItems = []
	if (filterSearch.length > 0) {
		filterItems = [...products].filter(product => product.title.toLowerCase().includes(filterSearch.toLowerCase()))
	}


	return (
		
		<>
			<div className="container__search">
				<div className="container__input">
					<input
						className="p-1 rounded"
						type="text"
						value={filterSearch}
						onChange={handleChange}
						placeholder='Look for skins...'
					/>
				</div>
			</div>
			<div className="container-fluid d-flex justify-content-center row row-cols-5 p-0 m-0 test">
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
						{	
							filterItems.length !== 0 ? (
								filterItems.map(product => {
									return <Product key={product.id} {...product} product={product} />})
							) : (
								products.map(product => {
									return <Product key={product.id} {...product} product={product} />
								})
							)
						}
					</>
				)}
				{error && <h1>Error loading products</h1>}
			</div>
		</>

	)
};


