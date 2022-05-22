import { useParams } from "react-router-dom";
import {getCourses} from '../../../data2';
import CourseDetailContainer from './courseDetail.styles';

export default function CourseDetail() {
  let params = useParams();
  const course = getCourses(parseInt(params.courseId,10));
  
  return <CourseDetailContainer>
  <h2>Course Name: {course.name}</h2>
    <p><b>Course Description:</b><br/> {course.details.intro}</p>
    <h5>Branches:</h5>
    <ul>
        {course.details.branches.map(branch => (
            <li key={branch}>{branch}</li>
        ))}
    </ul>

    
     </CourseDetailContainer>
}