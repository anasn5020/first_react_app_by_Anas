import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/CSS/Header.css';
import logoi from '../Assets/Images/logo.png'

const Header = () => {
    return(
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src={logoi} className='Logo' alt='Logo'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <NavLink exact className="nav-link active" to='/'>Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink exact  className="nav-link active" to='/about'>About</NavLink>
        </li>
        <li class="nav-item">
        <NavLink exact className="nav-link active" to='/Contact'>Contact</NavLink>
        </li>
        <li class="nav-item">
        <NavLink exact className="nav-link active" to='/blog'>Blog</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
            {/* <nav className='navbar'>
                <ul>
                    <li><NavLink className="headerLinks" to='/'>Home</NavLink></li>
                    <li><NavLink className="headerLinks" to='/about'>About</NavLink></li>
                    <li><NavLink className="headerLinks" to='/Contact'>Contact</NavLink></li>
                    <li><NavLink className="headerLinks" to='/about'>About</NavLink></li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Header;