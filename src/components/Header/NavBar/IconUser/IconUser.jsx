import iconUser from "../../../../assets/imgs/icon-user.png"
import "./IconUser.css"

function IconUser() {
  return (
    <div className="d-flex align-items-center icon__user">
      <img src={iconUser} alt="User icon" />
      <p className="icon__user-p text-decoration-none">My Account</p>
    </div>
  )
}

export default IconUser