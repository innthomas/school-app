import styled from "styled-components"

const CourseStyles = styled.div`
max-width: 100%;
max-height: 100vh;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(2,1fr);
grid-row-gap: 3rem;
grid-column-gap: 2rem;

     & .course__item{
            max-width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: red;
            border-radius: 0.5rem;
            background-color: #276FBF;
            color: #fff;
            font-size: 1.5rem;
            font-weight: 700;
            font-family: 'Oxygen', sans-serif;
            opacity: 60%;
            cursor: pointer;
            margin: 1rem;
            padding: 1rem;

     }

`;

export default CourseStyles;