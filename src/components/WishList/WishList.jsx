import Wish from "../Wish/Wish";
import emptyList from "../../assets/imgs/diary.ilustration.svg"
import "./WishList.css"
import { useEffect, useState } from "react";
import WishSearchBar from "../WishSearchBar/WishSearchBar";
import { useWishListContext } from "../../context/WishListProvider.jsx.jsx";

const WishList = ({ status , handleSetComplete, handleSetDeleteWish, handleSetOverWrite }) => {

	const {wishList} = useWishListContext()
	console.log(wishList);

	const [filterList, setFilterList] = useState(undefined)


	useEffect(() => {
		const arrWish = []
		wishList.forEach(wish => {
			if(status === 'all') {
				arrWish.push(wish)
				return;
			}else {
				if(wish.status === status) {
					arrWish.push(wish)
				}
			}
		})
		setFilterList(arrWish)	
		
	}, [wishList, status])


	

	const [edit, setEdit] = useState({})

	
	const submitUpdate = (value) => {
		handleSetOverWrite(edit.id, value)	
		setEdit({
			id: '',
			text: '',
			isEditing: false
		});
	}
	if (edit.id) {
		return <WishSearchBar edit={edit} onSubmit={submitUpdate} />
	} else {
		if (filterList && filterList.length === 0) {
			return (
				<div className="d-flex justify-content-center align-items-center h-100">
					<img className="list__img" src={emptyList} alt="Diary ilustration" />
				</div>
			)
		} else {
			return (
				<ul className="d-flex flex-column overflow-hidden p-0" >
					{
					filterList && filterList.map(wish => {
							return (
								<li key={wish.id} className='m-0'>
									<Wish
										key={wish.id}
										wish={wish}
										handleSetComplete={handleSetComplete}
										handleSetDeleteWish={handleSetDeleteWish}
										handleSetOverWrite={handleSetOverWrite}
									/>
								</li>
							)
						})
					}
				</ul>
			)
		}
	}



};

export default WishList;
