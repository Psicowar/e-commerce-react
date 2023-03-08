import NavBar from "./NavBar/NavBar"
import Logo from "./Logo/Logo"
import "./Header.css"

const Header = () => {
  
  return (
    <header>
        <nav className="header__box">
            <Logo />
            <NavBar />
        </nav>
    </header>
  )
}

export default Header
