import { useWishListContext } from "../../context/WishListProvider.jsx";

const CountAllWishes = () => {
    const { wishList } = useWishListContext()
    return (
        <div className="d-flex justify-content-center">
            <h5 className='text-secondary m-2 p-2'>
                Total Wishes: {wishList && wishList.length}
            </h5>
        </div>
    )
};

export default CountAllWishes;


