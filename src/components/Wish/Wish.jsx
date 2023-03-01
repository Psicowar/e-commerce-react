import { useEffect, useState } from "react";
import closeSVG from "../../assets/imgs/close.icon.svg";
import editSVG from "../../assets/imgs/edit.icon.svg";
import "./Wish.css";
import { useWishListContext } from "../../context/WishListProvider.jsx.jsx";


const Wish = ({ wish, handleSetDeleteWish, handleSetOverWrite }) => {


	const { wishList, setWishList } = useWishListContext()
	const [changeStatus, setChangeStatus] = useState('completed')


	const [isCheck, setIsCheck] = useState(false)

	useEffect(() => {
		setChangeStatus(wish.status==="completed"?"active":"completed")
	
	}, [wish])

	const handleOnChange = () => {
		
		if (wish.status = changeStatus) {
			let newElement = [...wishList]
			wishList && wishList.map((item, key) => {
				if (item.id === wish.id) {
					newElement[key].status = changeStatus;
					newElement[key].done = !wish.done;
				}
			})
			setWishList(newElement)
			setIsCheck(wish.done)
			setChangeStatus('active')
			localStorage.setItem('WishList', JSON.stringify(wishList))
			return
		} else if(	wish.status = changeStatus ) {
			let newElement = [...wishList]
			wishList && wishList.map((item, key) => {
				if (item.id === wish.id) {
					newElement[key].status = changeStatus;
					newElement[key].done = wish.done
				}
			})
			setWishList(newElement)
			setIsCheck(wish.done)
			setChangeStatus('completed')
			localStorage.setItem('WishList', JSON.stringify(wishList))
			return
		}
		
	}


	
	return (

		<div className="d-flex align-items-center justify-content-between">
			<div className="d-flex align-items-center justify-content-between border-bottom border-secondary w-100 rounded-1 p-1">
				<input type="checkbox" className="m-2" onChange={() => handleOnChange()} checked={isCheck} />
				<p className={"m-0 p-2 text-secondary w-100 " + (wish.done && "text-decoration-line-through")}>
					{wish.text}
				</p>
				<img onClick={() => handleSetOverWrite(wish.id)} className="edit__icon m-2" src={editSVG} alt="Edit icon" />
				<img onClick={() => handleSetDeleteWish(wish.id)} className="close__icon m-2" src={closeSVG} alt="Close icon" />
			</div>
		</div>

	)
};

export default Wish;
