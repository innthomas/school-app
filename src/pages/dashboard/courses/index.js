import { Link, Outlet } from "react-router-dom";
import {getCourses} from '../../../data';

export default function Courses() {
  const courses = getCourses();
  console.log(courses);
  return (
    <div className="courses">
      <h1>courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

