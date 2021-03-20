import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const NavContainer = styled.div`
margin-inline:auto;
display:flex;
justify-content:space-between;
align-items:center;
max-width:1500px;
width:100vw;
padding:0 8rem;
`;


export const NavLogo = styled(Link)`
text-decoration:none;
font-weight:800;
font-size:35px;
@media screen and (max-width: 960px) {
margin-left:-60px;
}
`;

export const Bars = styled.div`
display:none;
@media screen and (max-width:960px){
   display:block;
   position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.4rem;
    cursor: pointer;
  
}

`;

export const NavMenu = styled.ul`
display:flex;
height:20px;
@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #242424;
  
  }
`;

export const NavItems = styled.li`
padding:0 40px;
list-style:none;
`;


export const NavLinks = styled(Link)`
font-size:20px;
font-weight:600;
text-decoration:none;
&:hover{
    border-bottom:3px solid #242424;
    border-top:3px solid #242424;
    transition:0.2s ease-out;
}
@media screen and (max-width: 960px) {
  text-align: center;
    padding: 5rem;
    width: 100%;
    display: table;
     color:#fff;
     &:hover{
       border:none;
       border-bottom:3px solid #fff;
     }
}
`;