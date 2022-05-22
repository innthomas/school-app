import styled from "styled-components";

const DashboardStyle = styled.div`
font-family: 'Oxygen', sans-serif;
width: 100%;
height: 100vh;
display: flex;

    & .dashboard__list{
        width: 20%;
        max-height: 100%;
        margin: 1rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: #f5f5f5;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
        padding: 1rem;
        margin-bottom: 2rem;
        font-family: 'Oxygen', sans-serif;
        font-size: 1.5rem;
        opacity: 60%;
        & .dashboard__list__item{
            margin-bottom: 1rem;
            cursor: pointer;
            

            & a{
                text-decoration: none;
            }

        }
    }
      

`;

export default DashboardStyle;