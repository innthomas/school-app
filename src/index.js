import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './globalStyle';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Courses from './pages/dashboard/courses';
import Profile from './pages/dashboard/profile';
import Logout from './pages/logout';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="/dashboard/courses" element={<Courses/>} />
        <Route path="/dashboard/profile" element={<Profile/>} />
      </Route>
      
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
