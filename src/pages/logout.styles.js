import styled from "styled-components";


const LogoutContainer = styled.div`
font-family: 'Oxygen', sans-serif;
margin: 2rem auto;
width: 70%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

    & .logout__image img {
        width: 40%;
        height: 90%;
        
        margin-top: 5rem;
        /* display: flex;
        justify-content: center;
        align-items: center; */

    }

    & .logout__content {
        font-family: "Oxygen","sans-serif";
        display: grid;
        justify-content: space-around;
        align-items: center;

        & button{
            background: #348AA7;
            padding: 4px 4px;
            border-radius: 10px;
            font-weight: 900;
            padding: 1rem 2rem;
        }

        & button:hover{
            background: #4F5D75;
        }
        
        & button a{

            text-decoration: none;
            color: white;

        }
    }

    @media (max-width: 768px){
            flex-direction: column;

            & .logout__image img{
                display: none;
            }

        }
    

`;

export default LogoutContainer;