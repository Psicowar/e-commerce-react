import WishList from "../WishList/WishList.jsx";
import CountAllWishes from "../CountAllWishes/CountAllWishes.jsx";

import { ListButton } from "../ButtonComponent/ButtonComponent.jsx";

import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import { useWishListContext } from "../../context/WishListProvider.jsx";
import "./WishContainer.css"
import Swal from "sweetalert2";



const WishContainer = ({ status }) => {
	const { wishList, setWishList } = useWishListContext()
	const [text, setText] = useState('')


	// const addWish = (text) => {
	// 	const newWish = {
	// 		id: uuidv4(),
	// 		text,
	// 		done: false,
	// 		isEditing: false,
	// 		status: "active"
	// 	}
	// 	const handleNewWish = [newWish, ...wishes];
	// 	setWishes(handleNewWish)
	// 	setWishes('')
	// }



	useEffect(() => {
		localStorage.setItem('WishList', JSON.stringify(wishList))
	}, [wishList])

	
	const handleSetDeleteWish = (id) => {
		const updatedWishList = wishList.filter(item => item.id !== id)
		setWishList(updatedWishList)
	}



	const handleWish = (e) => {
		e.preventDefault();
		let newWish = {
			id: uuidv4(),
			text: text,
			done: false,
			isEditing: false,
			status: "active",
		}
		if (text === '') {
			Swal.fire({
				icon: 'error',
				title: "You can't add a blank task",
				color: '#212529',
				confirmButtonColor: '#212529',
				background: '#6c757d'
			});
			return;
		} else {
			setWishList([...wishList, newWish])
			const localStorageWish = [...wishList, newWish]
			localStorage.setItem('WishList', JSON.stringify(localStorageWish))
			setText('')
		}
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
						title: 'Saved!',
						background: '#6c757d',
						icon: 'success',
						confirmButtonColor: '#212529',
					})
				} else if (result.isDenied) {
					Swal.fire({
						title: 'Changes are not saved',
						confirmButtonColor: '#212529',
						background: '#6c757d',
						icon: 'info'
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


	const handleEditModal = async (id) => {
		const currentWish = wishList.find((item) => item.id === id)
		const { value } = await Swal.fire({
			title: 'Edit task',
			input: 'text',
			inputValue: currentWish.text,
			background: '#6c757d',
			color: '#212529',
			confirmButtonColor: '#212529',
		})
		if (value) {
			setText(currentWish.text)
			const updatedWishList = wishList.map(wish => {
				if (wish.id === id) {
					wish.text = value
				};
				return wish
			})
			setWishList(updatedWishList)
		} else {
			Swal.fire({
				icon: 'error',
				title: "You can't add a blank task",
				background: '#6c757d',
				color: '#212529',
				confirmButtonColor: '#212529',
			});
			
		}
		setText('')
	}



	return (
		<div className="min-vh-100 d-flex bg-dark">
			<div className="container d-flex flex-column mw-100 p-3 border border-secondary" >
				<h6 className="text-secondary text-center m-0 p-2 fs-3">TO-DO List (React-App)</h6>
				<div className="d-flex justify-content-between p-2">
					<CountAllWishes />
					<div className="d-flex align-items-center justify-content-between ">
						<div className="dropdown">
							<button className=" text-secondary btn border border-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Filters
							</button>
							<ul className="dropdown-menu dropdown-menu-filters bg-dark border border-secondary">
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
				<div className="m-3  border-secondary">
					<form onSubmit={(e) => handleWish(e)}>
						<input
							type="text"
							className="input__wish bg-secondary text-dark w-100 p-1 "
							placeholder="Add new to-do"
							name={text}
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
					</form>
				</div>
				<WishList
					status={status}
					handleSetDeleteWish={handleSetDeleteWish}
					handleEditModal={handleEditModal}
				/>
			</div>
		</div>

	)
};

export default WishContainer;  
