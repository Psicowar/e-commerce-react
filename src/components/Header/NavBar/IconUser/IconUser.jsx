import { SlUser } from "react-icons/sl";
import "./IconUser.css"

function IconUser() {
  return (
    <div className="d-flex align-items-center justify-content-center icon__user">
      <SlUser size={"1.3rem"}/>
      <span className=" text-decoration-none icon__user">Login</span>
    </div>
  )
}

export default IconUser