import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
    color: #000;
    font-variant-caps: all-petite-caps;
  }
`;

export const container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:90vh;
`;
export const Button = styled(Link)`
background:#fff;
font-weight:700;
border-radius:5px;
padding:8px 15px;
text-decoration:none;
border:none;
outline:none;
cursor: pointer;
&:hover{
  background:#242424;
  color:#fff;
  transform:scale(0.9);
  transition:0.3s ease;
}
`;


export default GlobalStyle;