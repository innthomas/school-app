import styled from "styled-components";
import peopleImg from "./assets/people.svg";

const AppContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');

    max-width: 100%;
    height: 100vh;
    font-family: 'Oxygen', sans-serif;
    background-image: url(${peopleImg});
    background-repeat: no-repeat;
    background-position:80% 70%;
    background-size: 40%;

   & .container{

     & .container__left{
         width: 40%;
         height: 100%;
         margin: 10rem 8rem;
         
         & .app__text{
            font-family: 'Oxygen', sans-serif;
             font-size: 3rem;
             opacity: 90%;

             & .learn{
                 color: green;
             }

             & .schedule{
                 color: orange;
             }
         }

         & .app__paragraph{
                font-family: 'Oxygen', sans-serif;
                font-size: 1.5rem;
                opacity: 60%;
         }
     }

   }

`;

export default AppContainer;