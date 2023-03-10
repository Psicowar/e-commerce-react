
import Cart from "../../CartComponents/CartLogo/CartLogo"
import { Link } from "react-router-dom"
import IconUser from "./IconUser/IconUser"
import "./NavBar.css"



const NavBar = () => {
  return (
    <>
      <Link to="/"><span className="home-access">Home</span></Link>
      <Link to="/products"><span className="products-access">Products</span></Link>
      <Link to="/login">{<IconUser />}</Link>
      <Cart />
    </>
  )
}



export default NavBar