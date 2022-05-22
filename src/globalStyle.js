import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'
 
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
   ${normalize}
   font-family: 'Oxygen', sans-serif;

  
`;
 
export default GlobalStyle;