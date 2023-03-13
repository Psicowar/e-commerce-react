import React, { useContext, useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';
import { GlobalProductContext } from '../../context/ProductGlobalContext/ProductGlobalContext';
import './ProductDetailContainer.css';

const ProductDetailContainer = () => {
	const { title: productTitle } = useParams()
	const [product, setProduct]   = useState()
	const { products, isLoading } = useContext(GlobalProductContext)
	useEffect(() => {		
		if (!isLoading) {
			const result = products.find((item) => item.title === productTitle)
			setProduct(result)
		}
	}, [isLoading, productTitle, products])

	return (
		!product ?
			(
				<div className='loading-box'>
					<ColorRing
						height='100'
						width='100'
						wrapperClassName='loading-circle'
						colors={['#5d79ae', '#0c0f12', '#ccba7c', '#413a27', '#de9b35']}
					/>
				</div>
			) :

			<div className='detail__container m-3'>
				<div className="detail__box " key={product.id}>
					<img className="tilt__container-img" src={require(`../../assets/imgs/${product.img}`)} alt={product.title} />
					<h5><strong >Type:</strong> {product.type}</h5>
					<h5 className="m-4">Name: {product.title} </h5>
					<p name="product_description" id={product.id} cols="30" rows="10"><strong>Description:</strong> {product.description}</p>
					<span className="fs-4">Go back to: <Link to="/"><span className="product__page--acces">Products</span></Link></span>
				</div>
			</div>


	)


};

export default ProductDetailContainer;
