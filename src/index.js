import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './globalStyle';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import DashboardContent from './pages/dashboard/dashboardContent';
import Courses from './pages/dashboard/courses';
import CourseDetail from './pages/dashboard/courses/courseDetail';
import Profile from './pages/dashboard/profile';
import Logout from './pages/logout';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
      <Route path="/school-app/" element={<App/>} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
          <button>go back to home</button>
        </main>
      }
    />
      <Route path="/school-app/login" element={<Login/>} />
      <Route path="/school-app/logout" element={<Logout/>} />
      <Route path="/school-app/dashboard" element={<Dashboard/>}>
       <Route index element={<DashboardContent/>}/>
        <Route path="/school-app/dashboard/courses" element={<Courses/>} >
          <Route path=":courseId" element={<CourseDetail/>} />
          
        </Route>
          
        
        <Route path="/school-app/dashboard/profile" element={<Profile/>} />
      </Route>
      
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
