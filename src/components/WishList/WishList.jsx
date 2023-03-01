import Wish from "../Wish/Wish";
import emptyList from "../../assets/imgs/diary.ilustration.svg"
import "./WishList.css"
import { useEffect, useState } from "react";
import { useWishListContext } from "../../context/WishListProvider.jsx";

const WishList = ({ status, handleSetDeleteWish, handleSetOverWrite, handleEditModal }) => {

	const { wishList } = useWishListContext()

	const [filterList, setFilterList] = useState(undefined)


	useEffect(() => {
		const arrWish = []
		wishList.forEach(wish => {
			if (status === 'all') {
				arrWish.push(wish)
				return;
			} else {
				if (wish.status === status) {
					arrWish.push(wish)
				}
			}
		})
		setFilterList(arrWish)

	}, [wishList, status])




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
									handleSetDeleteWish={handleSetDeleteWish}
									handleSetOverWrite={handleSetOverWrite}
									handleEditModal={handleEditModal}
								/>
							</li>
						)
					})
				}
			</ul>
		)
	}


};

export default WishList;
