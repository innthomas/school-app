import styled from "styled-components";

const LoginContainer = styled.div`
    font-family: 'Oxygen', sans-serif;
    max-width: 100%;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;

    & .login__left{
        width: 40%;
        height: 100%;
        margin: 3rem 2rem 0rem 4rem;
        display: flex;
        ;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & h2{
            font-family: 'Oxygen', sans-serif;
            font-size: 2rem;
            opacity: 90%;
            color: green;
            margin-bottom: 0;

        }

        & p{
            font-family: 'Oxygen', sans-serif;
            font-size: 1.5rem;
            opacity: 60%;
            margin-bottom: 0;

        }

        & .loginImg{
            width: 100%;
            height: 100%;
        }

    }

    & .login__form{
        width: 60%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & .loginLogo{
            width: 20%;
            margin-bottom: 4.5rem;

        }

        & .form{

            & input{
                width: 100%;
                height: 3rem;
                border: 1px solid #ccc;
                border-radius: 15px;
                padding: 0.5rem;
                margin-bottom: 3rem;
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
                margin-top: 2rem;
                margin-bottom: 1rem;
                font-size: 1.5rem;
                font-weight: 700;
                font-family: 'Oxygen', sans-serif;
                opacity: 60%;
                background-color: #276FBF;
                color: white;
                cursor: pointer;
                

                & a{
                    text-decoration: none;
                    color: white;
                }

            }

            & button:hover{
                background-color: deepskyblue;
                color: white;

               & h1,p,button{
                    margin-bottom: 5rem;
                }

            }

        }


        



    }

    @media (max-width: 768px){
            flex-direction: column;

            & .login__left {
                margin-bottom: 4rem;

                img{
                    display: none;
                }
                

            }

        }


`;

export default LoginContainer;