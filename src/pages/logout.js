import React from 'react';
import {Link} from "react-router-dom";
import byeImg from '../assets/bye.svg'
import LogoutContainer from './logout.styles';

const logout = () => {
  return (
    <LogoutContainer>
      <div className="logout__image">
        <img src={byeImg} alt="bye" />
      </div>
      <div className="logout__content">
        <h1>See you soon!</h1>
        <p>You have been logged out successfully.</p>
        <button>
        <Link to="/school-app/login">login again</Link>
        </button>
      </div>

    </LogoutContainer>
  )
}

export default logout