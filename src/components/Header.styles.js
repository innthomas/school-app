import styled from "styled-components";

const HeaderStyles = styled.header`
width: 100%;
height: 10vh;
border: 1px solid gray;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: rgba(255, 255, 255, 0.2); */



& .header__logo{
    width: 40%;
    height: 60%;
    object-fit: contain;
    padding: 1rem;
    margin: 1rem;
    

}

& .buttonDiv{
   margin: 2px 24px;
   padding: 6px 14px;
   border: 1px solid transparent;
   border-radius: 10px;
   background-color: #276FBF;
   
   font-weight: 800;

   & a{
   text-decoration: none;
   color: #ffffff;
   }
   
}




`;

export default HeaderStyles;