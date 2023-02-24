import { Link } from "react-router-dom"
import imgPng from "../../../assets/imgs/CSGO.png"
import "./Logo.css"
const Logo = () => {
  return (
    <>
     <Link to="/"><img src={imgPng} alt="Smile face" className="header-logo" /></Link> 
    </>
  )
}


export default Logo

