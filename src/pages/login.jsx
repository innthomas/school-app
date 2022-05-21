import React from 'react'
import {Link } from "react-router-dom";
import loginImg from '../assets/loginImg.svg'
import KodeLogo from '../assets/kode.png'
import LoginContainer from './login.styles'

const login = () => {
  return (
    <LoginContainer>
        <div className="login__left">
            <h2>Student's Login</h2>
            <p>Make sure your account is secure.</p>
            <img className='loginImg' src={loginImg} alt="login-img" />
        </div>

        <div className="login__form">
          <img className='loginLogo' src={KodeLogo} alt="kode logo" />
          <form className='form'>
            <div className="form-group">
              
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
             
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div> 
                  <button type="submit" className="btn">
                  <Link to="/dashboard">login</Link>
                  </button>
                  
          </form>

        </div>
    </LoginContainer>
  )
}

export default login