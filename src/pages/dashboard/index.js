import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import DashboardStyle from './dashboard.styles';

const dashboard = () => {
  return (
    <DashboardStyle>
        <div className="dashboard__list">
            <div className="dashboard__list__item">
                <Link to="/school-app/dashboard">Dashboard</Link>
                
            </div>
            <div className="dashboard__list__item">
            <Link to="/school-app/dashboard/courses">Courses</Link>

                
            </div>
            <div className="dashboard__list__item">
            <Link to="/school-app/dashboard/profile">Profile Page</Link>
                
            </div>
            <div className="dashboard__list__item">
            <Link to="/school-app/logout">Logout</Link>
                
            </div>
        </div>
        <div className="dashboard__content">
        <Outlet/>
       
        </div>

    </DashboardStyle>
  )
}

export default dashboard