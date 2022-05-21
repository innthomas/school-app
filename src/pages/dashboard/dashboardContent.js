import React from 'react';
import read from '../../assets/read.svg'
import DashboardContentStyle from './dashboardContent.styles';

const dashboardContent = () => {
  return (
    <DashboardContentStyle>
       <div className='dashboard__text'>
        <h3>Welcome ,</h3>
        <h1>Innocent</h1>
        <p>explore your world!</p>
        
       </div>
       <div className='dashboard__image'>
       <img src={read} alt='read'/>
       </div>
    </DashboardContentStyle>
  )
}

export default dashboardContent