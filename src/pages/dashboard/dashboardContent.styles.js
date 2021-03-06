import styled from 'styled-components';

const DashboardContentStyle = styled.div`
font-family: 'Oxygen', sans-serif;
width: 100%;
height: 100%;
display:flex;
justify-content: space-between;
/* background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%); */
/* background-size:10px 40px; */

& .dashboard__text{
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    text-align: center;
    padding: 5px;
    & h1{
        font-size: 2.5rem;
        font-weight: bold;
        /* color: #fff; */
        opacity: 80%;
        margin-bottom: 10px;
    }
    
    & h3{
        font-size: 1.5rem;
        font-weight: bold;
        /* color: #fff; */
        opacity: 70%;
        

    }

    & p{
        font-size: 1.2rem;
        /* color: #fff; */
        opacity: 60%;
        font-weight: bold;
    }
}

& .dashboard__image{
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & img{
        width: 100%;
        height: 100%;

    }

    @media (max-width: 768px){
            display: none;

        }

      
}


`;

export default DashboardContentStyle;