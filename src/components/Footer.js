import React from 'react';
import '../Assets/CSS/Footer.css';
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <footer className='mt-5'>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <p><i class="bi bi-geo-alt"></i> &nbsp; &nbsp; Johar Town phase 2 Lahore, Pakistan</p>
            <p><i class="bi bi-telephone-inbound"></i> &nbsp; &nbsp; +923458620683</p>
            <p><i class="bi bi-envelope"></i> &nbsp; &nbsp; Anasn5020@gmail.com</p>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <ul>
              <li><NavLink exact className="nav-link" to='/'>Home</NavLink></li>
              <li><NavLink exact className="nav-link" to='/about'>About</NavLink></li>
              <li><NavLink exact className="nav-link" to='/Contact'>Contact</NavLink></li>
              <li><NavLink exact className="nav-link" to='/blog'>Blog</NavLink></li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <ul>
              <li><strong>Features</strong></li>
              <li>Discover</li>
              <li>Engage</li>
              <li>Enjoy</li>
            </ul>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <ul className='SocialMediaIcons'>
              <li><h6><strong>Social Media</strong></h6></li>
              <li><a href='#' className='text-decoration-none'><h6><i class="bi bi-facebook"></i> &nbsp;Facebook</h6></a></li>
              <li><a href='#' className='text-decoration-none'><h6><i class="bi bi-whatsapp"></i> &nbsp;Whatsapp</h6></a></li>
              <li><a href='#' className='text-decoration-none'><h6><i class="bi bi-instagram"></i> &nbsp;Instagram</h6></a></li>!!
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;