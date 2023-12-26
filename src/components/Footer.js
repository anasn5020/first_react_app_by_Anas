import React from 'react';
import '../Assets/CSS/Footer.css';
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <footer className='mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
            <ul>
              <li><NavLink exact className="nav-link active" to='/'>Home</NavLink></li>
              <li><NavLink exact className="nav-link active" to='/about'>About</NavLink></li>
              <li><NavLink exact className="nav-link active" to='/Contact'>Contact</NavLink></li>
              <li><NavLink exact className="nav-link active" to='/blog'>Blog</NavLink></li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
            <ul>
              <li><strong>Features</strong></li>
              <li>Discover</li>
              <li>Engage</li>
              <li>Enjoy</li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
            <strong>Social Media</strong>
            <ul className='SocialMediaIcons mt-2'>
              <li><h1><i class="bi bi-facebook"></i></h1></li>
              <li><h1><i class="bi bi-whatsapp"></i></h1></li>
              <li><h1><i class="bi bi-instagram"></i></h1></li>
              <li><h1><i class="bi bi-threads"></i></h1></li>
              <li><h1><i class="bi bi-telegram"></i></h1></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;