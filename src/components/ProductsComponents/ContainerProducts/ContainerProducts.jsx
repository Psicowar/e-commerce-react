import { Product } from "../Product/Products"
import "./ContainerProducts.css"
import useData from "../../../hooks/UseData";
import { ColorRing } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";




export const ContainerItem = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [products, isLoading, error] = useData();
	const queryParams = searchParams.get('q') ?? "";



	const handleChange = ({ target }) => {
		const { value } = target
		setSearchParams({ q: value })
	}



	return (

		<>
			<div className="container__search">
				<div className="container__input">
					<input
						className="p-1 rounded"
						type="text"
						name="filter"
						value={queryParams}
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
							products
								.filter(({ title }) => {
									if (!queryParams) return true
									else {
										const titleToLowerCase = title.toLowerCase()
										return titleToLowerCase.includes(queryParams.toLowerCase())
									}
								})
								.map(product => {
									return <Product key={product.id} {...product} product={product} />
								})
						}
					</>
				)}
				{error && <h1>Error loading products</h1>}
			</div>
		</>

	)
};


