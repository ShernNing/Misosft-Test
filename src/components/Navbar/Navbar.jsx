import React from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import header from "../assets/header.png";
import mail from "../assets/mail.png";
import "./Navbar.scss";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className='nav-wrapper'>
      <nav className='nav'>
        <a
          href='https://www.misoft.io/'
          target='_blank'
          rel='noreferrer'
          className='logo-container'
        >
          <img src={logo} alt='VNumber' className='logo' />
        </a>
        <section className='links'>
          <Link to='plates' smooth={true} duration={500}>
            <h2>Car Plates</h2>
          </Link>
          <Link to='services' smooth={true} duration={500}>
            <h2>Our Services</h2>
          </Link>
          <Link to='contact' smooth={true} duration={500}>
            <h2>OUR CONTACT</h2>
          </Link>
        </section>
        <section className='social'>
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
            <img src={facebook} alt='facebook' className='social-icon' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <img src={instagram} alt='instagram' className='social-icon' />
          </a>
        </section>
      </nav>
      <a href='mailto:example@example.com' className='mail-container'>
        <img src={mail} alt='mail' className='mail' />
      </a>
      <img src={header} alt='header' className='container-image' />
    </div>
  );
}

export default Navbar;
