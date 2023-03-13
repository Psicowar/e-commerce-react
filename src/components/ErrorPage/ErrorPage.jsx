import React from 'react';
import { Link } from 'react-router-dom';
import errorPage from '../../assets/imgs/error-404.jpg'
import './ErrorPage.css'

const ErrorPage = () => {
	return (
		<div className='error__container'>
			<span className='error__text'> ERROR 404</span>
			<span className='url__text'> INVALID URL</span>
			<img className='error__img' src={errorPage} alt="Error page" />
			<span className="fs-4 text-white">Go back to: <Link to="/"><span className="error__page--link">Products</span></Link></span>
		</div>
	)






};

export default ErrorPage;
