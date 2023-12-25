import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/CSS/Header.css';

const Header = () => {
    return(
        <header>
            <nav className='navbar'>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/Contact'>Contact</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;