import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <nav className='nav'>
            <div className='nav-container'>
                <Link className='navbar-logo' to="/">
                    Matthew Walker <i className='fab fa-typo3'/>
                </Link> 
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <NavLink exact="true" activeclassName='active' onClick={closeMobileMenu} className='link-btn'to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' onClick={closeMobileMenu} className='link-btn'to="/about">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' onClick={closeMobileMenu} className='link-btn'to="/social">PROJECTS</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' onClick={closeMobileMenu} className='link-btn'to="/contact">CONTACT</NavLink>
                    </li>
                </ul> 
            </div>
        </nav>

    )
}