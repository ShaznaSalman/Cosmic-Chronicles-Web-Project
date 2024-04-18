import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
    return(
        <nav className='container'>
            <img src={logo} alt='' className='logo'/>
            <ul>
                <li><button className='btn'>Home</button></li>
                <li><button className='btn'>Blog</button></li>
                <li><button className='btn'>News</button></li>
                <li><button className='btn'>About Us</button></li>
                <li><button className='btn'>Contact</button></li>
            </ul>

        </nav>
    )
}
export default Navbar