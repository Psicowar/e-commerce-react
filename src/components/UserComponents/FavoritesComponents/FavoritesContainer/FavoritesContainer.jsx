import { useContext } from "react";
import { toast } from "react-toastify";

import FavoritesProducts from "../FavoritesProducts/FavoritesProducts";
import "./FavoritesContainer.css"
import { TbMoodSadDizzy } from "react-icons/tb";
import { FavoritesContext } from "../../../../context/FavoritesContext/FavoritesContext";



const FavoritesContainer = () => {
    const [favorites, setFavorites] = useContext(FavoritesContext);

 

    const handleDeleteAll = () => {
        localStorage.removeItem("favItems")
        setFavorites([])
        toast.success("Remove from favorites")
    }

    return (
        <>
            {
                favorites.length < 1
                    ?
                    <div className="d-flex justify-content-center flex-column gap-3 align-items-center fav__empty">
                        <span className="fs-1">EMPTY LIST</span>
                        <TbMoodSadDizzy size={200} color="#f0f8ff" />
                    </div>
                    :
                    <>
                        <div className="container__search">
                            <div className="container__input">
                                <button className="btn btn-outline-danger text-white" onClick={handleDeleteAll}>Remove all favorites</button>
                            </div>
                        </div>

                        <div className="container-fluid d-flex justify-content-center row row-cols-5 p-0 m-0 fav__container">

                            {

                                favorites.map(product => {
                                    return <FavoritesProducts product={product} {...product} key={product.id} />
                                })
                            }

                        </div >
                    </>
            }



        </>

    )
};

export default FavoritesContainer;
