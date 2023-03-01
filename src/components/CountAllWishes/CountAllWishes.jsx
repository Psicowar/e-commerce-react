import { useWishListContext } from "../../context/WishListProvider.jsx.jsx";

const CountAllWishes = () => {
    const {wishList} = useWishListContext()
	return (
        <div className="d-flex justify-content-center">
            <p className='text-secondary m-0 p-3'>
            Total Wishes: {wishList && wishList.length} 
            </p>
        </div>
    )
};

export default CountAllWishes;


