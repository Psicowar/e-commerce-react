import iconUser from "../../../../assets/imgs/icon-user.png"
import { SlUser } from "react-icons/sl";
import "./IconUser.css"

function IconUser() {
  return (
    <div className="d-flex align-items-center icon__user">
      <SlUser size={"2rem"}/>
      <p className="icon__user-p text-decoration-none">My Account</p>
    </div>
  )
}

export default IconUser