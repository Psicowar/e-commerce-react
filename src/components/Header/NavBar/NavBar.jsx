
import Cart from "../../CartComponents/CartLogo/CartLogo"
import { Link } from "react-router-dom"
import IconUser from "./IconUser/IconUser"
import { GrHomeRounded } from "react-icons/gr"
import { IconContext } from "react-icons"


const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/login">{<IconUser />}</Link>
      <Cart />
    </>
  )
}



export default NavBar