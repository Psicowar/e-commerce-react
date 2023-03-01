import WishList from "../WishList/WishList.jsx";
import WishSearchBar from "../WishSearchBar/WishSearchBar.jsx";
import CountAllWishes from "../CountAllWishes/CountAllWishes.jsx";

import { ListButton } from "../WishFilters/WishesFiltersComponents.jsx";

import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import { useWishListContext } from "../../context/WishListProvider/WishListProvider.jsx.jsx";
import "./WishContainer.css"
import Swal from "sweetalert2";



const WishContainer = ({ status }) => {
	const { wishList, setWishList } = useWishListContext()
	const [wish, setWish] = useState('');
	const [wishes, setWishes] = useState([]);



	const addWish = (text) => {
		const newWish = {
			id: uuidv4(),
			text,
			done: false,
			isEditing: false,
			status: "active"
		}
		const handleNewWish = [newWish, ...wishes];
		setWishes(handleNewWish)
		setWish('')
	}



	const handleSetOverWrite = (id) => {
		const currentWish = wishes.find((item) => item.id === id)
		setWish(currentWish)
	}

	useEffect(() => {
		localStorage.setItem('WishList', JSON.stringify(wishList))
	}, [wishList])
	
	const handleSetDeleteWish = (id) => {
		const updatedWishList = wishList.filter(item => item.id !== id)
		setWishList(updatedWishList)
	}



	const handleSetDeleteAll = () => {
		if (wishList.length > 0) {
			Swal.fire({
				title: 'Are you sure you want to delete everything??',
				showDenyButton: true,
				confirmButtonText: 'Delete',
				denyButtonText: `Cancel`,
				confirmButtonColor: '#892716',
				denyButtonColor: '#212529',
				color: '#212529',
				background: '#6c757d'
			}).then((result) => {
				if (result.isConfirmed) {
					localStorage.removeItem('WishList')
					setWishList([])
					Swal.fire({
						tittle:'Saved!', 
						background: '#6c757d', 
						icon:'success',
						confirmButtonColor: '#212529',
					})
				} else if (result.isDenied) {
					Swal.fire({
						tittle:'Changes are not saved',
						confirmButtonColor: '#212529', 
						icon:'info'
					})
				}
			})
		} else {
			Swal.fire({
				icon: 'info',
				title: "Nothing to delete",
				background: '#6c757d',
				color: '#212529',
				confirmButtonColor: '#212529',
			});
		}

	}



	return (
		<div className="min-vh-100 d-flex bg-dark">
			<div className="container d-flex flex-column mw-100 p-3 border border-secondary" >
				<h6 className="text-secondary text-center m-0 p-2 fs-3">TO-DO List(REACT-App)</h6>
				<div className="d-flex justify-content-between">

					<CountAllWishes />
					<div className="d-flex align-items-center justify-content-between ">
						<div className="dropdown">
							<button className=" text-secondary btn border border-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Filters
							</button>
							<ul className="dropdown-menu bg-dark border border-secondary">
								<NavLink to="/wishes/all" ><ListButton liNames={'All'} /></NavLink>
								<NavLink to="/wishes/active"><ListButton liNames={'Active'} /></NavLink>
								<NavLink to="/wishes/completed"><ListButton liNames={'Completed'} /></NavLink>
							</ul>
						</div>
						<button className='delete__completed text-secondary m-2 btn border border-secondary' onClick={handleSetDeleteAll}>
							Delete Completed
						</button>
					</div>
				</div>
				<WishSearchBar addWish={addWish} handleSetOverWrite={handleSetOverWrite} />
				<WishList
					status={status}

					handleSetDelete={handleSetDeleteWish}
					handleSetOverWrite={handleSetOverWrite}
				/>

			</div>

		</div>

	)
};

export default WishContainer;  
