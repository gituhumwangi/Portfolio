import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav id='Navbar'>
        <img src='https://img.freepik.com/premium-vector/blue-white-letter-d-logo-black-background_853558-5036.jpg' 
        alt='logo'
        className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass="active" to='landingpage' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Home</Link>
            <Link activeClass="active" to='skillssection' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">About</Link>
            <Link activeClass="active" to='myprojects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Projects</Link>
            <Link activeClass="active" to='contactSection' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Contact</Link>
        </div>
        <button className='desktopMenuBtn' onClick = { () => {
          document.getElementById('contactSection').scrollIntoView({behavior: 'smooth'})
        }}>
            <img src='https://cdn-icons-png.flaticon.com/512/4812/4812568.png' 
            alt='Contact' 
            className='desktopMenuImg'/>Contact Me</button>
    </nav>
  )
}

export default Navbar