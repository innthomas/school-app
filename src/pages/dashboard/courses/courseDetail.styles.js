import styled from 'styled-components'

const CourseDetailContainer = styled.div`
font-family: 'Oxygen', sans-serif;
width: 100%;
height: 100vh;

& p{
    padding: 1rem 2em;
}

& ul {
    display: flex;
    flex-wrap: wrap;

    & li{
        list-style: none;
        padding: 1em 2rem;
    }
}

`;

export default CourseDetailContainer;