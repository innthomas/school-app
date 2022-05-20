import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import DashboardStyle from './dashboard.styles';

const dashboard = () => {
  return (
    <DashboardStyle>
        <div className="dashboard__list">
            <div className="dashboard__list__item">
                <Link to="/dashboard">Dashboard</Link>
                
            </div>
            <div className="dashboard__list__item">
            <Link to="/dashboard/courses">Courses</Link>

                
            </div>
            <div className="dashboard__list__item">
            <Link to="/dashboard/profile">Profile Page</Link>
                
            </div>
            <div className="dashboard__list__item">
            <Link to="/logout">Logout</Link>
                
            </div>
        </div>
        <div className="dashboard__content">
        <Outlet/>
       
        </div>

    </DashboardStyle>
  )
}

export default dashboard