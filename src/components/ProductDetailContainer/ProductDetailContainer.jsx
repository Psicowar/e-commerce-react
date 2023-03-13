import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetailContainer.css';
import products from '../../assets/api/db2.json';
const ProductDetailContainer = () => {
	const { title: productTitle } = useParams()
	const { id, title, img, description, type } = products.find((product) => {
		return product.title === productTitle
	})
	return (
		<div className='detail__container m-3'>
			<div className="detail__box " key={id}>

					<img className="tilt__container-img" src={require(`../../assets/imgs/${img}`)} alt={title} />
					<h5><strong >Type:</strong> {type}</h5>
					<h5 className="m-4">Name: {title} </h5>
					<p name="product_description" id={id} cols="30" rows="10"><strong>Description:</strong> {description}</p>
					<span className="fs-4">Go back to: <Link to="/products"><span className="product__page--acces">Products</span></Link></span>

			</div>
		</div>
	)


};

export default ProductDetailContainer;
