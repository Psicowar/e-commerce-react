
import Cart from "../../CartComponents/CartLogo/CartLogo"
import { Link } from "react-router-dom"
import IconUser from "./IconUser/IconUser"
import "./NavBar.css"
import FavouritePage from "../../UserComponents/FavouritePage/FavouritePage"
import { useAuthUser } from "../../../context/AuthUserContext/AuthUserContext"
import Logout from "../../UserComponents/Logout/Logout"


const NavBar = () => {
  const { authState } = useAuthUser()
  return (
    <>
      <Link to="/"><span className="home-access">Home</span></Link>
      <Link to="/products"><span className="products-access">Products</span></Link>
      {
        authState.isAuthenticated ?
          <>
            <Link to="/favourites">Favourites</Link>
            <Link to="/"><Logout className="logout-access"/></Link>
          </>
          :
          <Link to="/login">{<IconUser />}</Link>
      }
      <Cart />
    </>
  )
}



export default NavBar