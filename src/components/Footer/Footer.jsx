import { FaRegCopyright } from 'react-icons/fa'
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className='footer-style text-center p-3'>
        <FaRegCopyright />
        <span className='d-flex flex-row'> 2023 by Dayan Álvarez. All rights reserved</span>
    </footer>
  )
}
