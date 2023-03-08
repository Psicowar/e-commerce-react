import { Product } from "../../ProductsComponents/Product/Product"
import "./ContainerProducts.css"
import useData from "../../../hooks/UseData";
import { ColorRing } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";




export const ContainerItem = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const queryParams = searchParams.get('q') ?? '';
	const [products, isLoading, error] = useData(queryParams);
	

	const handleChange = ({target}) => {
		const {value} = target
		setSearchParams({q: value})
	}
	

	return (
		<div className="container-fluid row row-cols-5 d-flex justify-content-center">
			<div className="pt-5 pb-4 w-100 d-flex justify-content-center">
				<input
					className="p-1 rounded"
					type="text"
					value={queryParams}
					onChange={handleChange}
					placeholder='Look for skins...'
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
			{error && <h1>Error loading products</h1>}
		</div>

	)
};


