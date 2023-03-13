
import Cart from "../../CartComponents/CartLogo/CartLogo"
import { Link } from "react-router-dom"
import IconUser from "./IconUser/IconUser"
import "./NavBar.css"
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
            <Link to="/favorites"><span className="favorite-access">Favorites</span></Link>
            <Link to="/"><Logout/></Link>
          </>
          :
          <Link to="/login">{<IconUser />}</Link>
      }
      <Cart />
    </>
  )
}



export default NavBar