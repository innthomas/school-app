import React from 'react';
import {FaGraduationCap} from 'react-icons/fa';
import CourseStyles from './courses.styles';
//import {course} from '../../data.js';

const courses = () => {
  return (
    <CourseStyles>
      <div className="course__item">
        

        <FaGraduationCap />
        
        <h2>chemistry</h2>
      </div>
      <div className="course__item">
      <FaGraduationCap />
      <h2>Physics</h2>
      </div>
      <div className="course__item">
      <FaGraduationCap />
        <h2>Mathematics</h2>
        </div>
      <div className="course__item">
      <FaGraduationCap />
        <h2>Biology</h2>
        </div>
      <div className="course__item">
      <FaGraduationCap />
        <h2>English Language</h2>
        </div>
      
    </CourseStyles>
  )
}

export default courses