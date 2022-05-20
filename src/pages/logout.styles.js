import styled from "styled-components";


const LogoutContainer = styled.div`
margin: 2rem auto;
width: 70%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

    & .logout__image img {
        width: 40%;
        
        margin: 1rem;
        /* display: flex;
        justify-content: center;
        align-items: center; */

    }

    & .logout__content {
        font-family: "Oxygen","sans-serif";
        display: grid;
        justify-content: space-around;
        align-items: center;
        
        

    }
    

`;

export default LogoutContainer;