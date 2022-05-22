import React from 'react'
import {Link } from "react-router-dom";
import logo from '../assets/kode.png';
import HeaderStyles from './Header.styles';

const Header = () => {
  return (
    <HeaderStyles>
      <div className='logoDiv'>
        <img className='header__logo' src={logo} alt="logo" />
      </div>
      <div className="buttonDiv">
      <Link to="/school-app/login">login</Link>

      </div>

      
      
    </HeaderStyles>
  )
}

export default Header