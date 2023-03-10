import NavBar from "./NavBar/NavBar"
import Logo from "./Logo/Logo"
import "./Header.css"
const Header = () => {
  
  return (
    <header className="header__container">
        <nav className="nav__container">
            <Logo />
            <NavBar />
        </nav>
    </header>
  )
}

export default Header
