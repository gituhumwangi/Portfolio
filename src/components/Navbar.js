import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <img src='https://img.freepik.com/premium-vector/blue-white-letter-d-logo-black-background_853558-5036.jpg' 
        alt='logo'
        className='logo'/>
        <div className='desktopMenu'>
            <Link className="desktopMenuItemList">Home</Link>
            <Link className="desktopMenuItemList">About</Link>
            <Link className="desktopMenuItemList">Portfolio</Link>
            <Link className="desktopMenuItemList">Clients</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src='https://cdn-icons-png.flaticon.com/512/4812/4812568.png' 
            alt='Contact' 
            className='desktopMenuImg'/>Contact Me</button>
    </nav>
  )
}

export default Navbar