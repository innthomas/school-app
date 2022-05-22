import React,{useState,useEffect} from 'react';
import read from '../../assets/read.svg'
import DashboardContentStyle from './dashboardContent.styles';
import {auth} from '../../fiebase-config';

const DashboardContent = () => {
 
  const [user,setUser]= useState("innocent")
  return (
    <DashboardContentStyle>
       <div className='dashboard__text'>
        <h3>Welcome </h3>
        <h1>{localStorage.getItem("displayName")}</h1>
        <p>explore your world!</p>
        
       </div>
       <div className='dashboard__image'>
       <img src={read} alt='read'/>
       </div>
    </DashboardContentStyle>
  )
}

export default DashboardContent