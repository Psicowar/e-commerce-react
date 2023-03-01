import { useState } from "react";
import Swal from "sweetalert2";
import "./WishSearchBar.css";
import { useWishListContext } from "../../context/WishListProvider.jsx.jsx";
import { v4 as uuidv4 } from 'uuid';

const WishSearchBar = () => {
	const [text, setText] = useState('')
	const { wishList, setWishList } = useWishListContext()



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

	


	return (
		<div className="m-3  border-secondary">
			<form onSubmit={(e) => handleWish(e)}>
				<input
					type="text"
					className="input__wish bg-secondary text-dark w-100 px-2 "
					placeholder="Add new to-do"
					name={text}
					value={text}
					onChange={(e) => setText(e.target.value)}

				/>
			</form>

		</div>
	)
};

export default WishSearchBar;
