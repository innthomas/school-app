import styled from "styled-components";

const LoginContainer = styled.div`

    max-width: 100%;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;

    & .login__left{
        width: 40%;
        /* height: 100%; */
        margin: 3rem 2rem 0rem 4rem;
        display: flex;
        ;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & .loginImg{
            width: 100%;
            height: 100%;
        }

    }

    & .login__form{
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & .loginLogo{
            width: 10%;
            margin-bottom: 2rem;

        }

        & .form{

            & input{
                width: 100%;
                height: 3rem;
                border: 1px solid #ccc;
                border-radius: 15px;
                padding: 0.5rem;
                margin-bottom: 1rem;
                font-size: 1.5rem;
                font-family: 'Oxygen', sans-serif;
                opacity: 60%;

            }

            & button{
                width: 100%;
                height: 3rem;
                border: 1px solid #ccc;
                border-radius: 15px;
                padding: 0.5rem;
                margin-bottom: 1rem;
                font-size: 1.5rem;
                font-family: 'Oxygen', sans-serif;
                opacity: 60%;
                background-color: #276FBF;
                color: white;
                cursor: pointer;

            }

        }



    }


`;

export default LoginContainer;