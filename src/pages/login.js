import React,{useState,useEffect} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {Link } from "react-router-dom";
import loginImg from '../assets/loginImg.svg'
import KodeLogo from '../assets/kode.png'
import LoginContainer from './login.styles'
import {auth,signInWithGoogle} from '../fiebase-config'

const Login = () => {
 
  const [loginEmail,setLoginEmail] = useState("")
  const [loginPassword,setLoginPassword] = useState("")
  const [showBtn,setShowBtn] = useState(false);
  const [showGoogleBtn,setShowGoogleBtn] = useState(true);

  const handleClick = () => {
    signInWithGoogle();
    setShowBtn(true);
    setShowGoogleBtn(false);
  }


  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowBtn(true);
  //   }, 2000);
  // }, []);


  
 


 
  const login = async ()=>{
    try{

      const user = await createUserWithEmailAndPassword(auth,loginEmail,loginPassword)
      console.log(user);
    } catch(error){
      console.log(error.message);

    }

  }
  const logout = async ()=>{

  }
  
  return (
    <LoginContainer>
        <div className="login__left">
            <h2>Student's Login</h2>
            <p>Make sure your account is secure.</p>
            <img className='loginImg' src={loginImg} alt="login-img" />
        </div>

        <div className="login__form">
          <img className='loginLogo' src={KodeLogo} alt="kode logo" />
               <div className="form">
            {/* <div className="form-group">
              
               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="login email" 
              onChange={(event)=>{
                setLoginEmail(event.target.value)
              }}
              />
             
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                  onChange={(event)=>{
                    setLoginPassword(event.target.value)
                  }}
                  />
                  </div> 
                  <button type="submit" className="btn" onClick={login}>
                  <Link to="/dashboard">login</Link>
                  </button>  */}
                  {/* <button type="submit" className="btn" onClick={signInWithGoogle}> */}
                  {showGoogleBtn && <button type="submit" className="btn" onClick={handleClick}>
                  signin with google
                  </button> }

                  {showBtn && <div className='buttonDiv'>
                    <p>

                    {auth.currentUser.name} <br/>
                    </p>
                    <Link to="/school-app/dashboard">
                       go to <span>dashboard</span></Link>
                    </div>}
                  
                 </div> 

                 
          

        </div>
    </LoginContainer>
  )
}

export default Login