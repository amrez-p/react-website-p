import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Foot = styled.div`
background:#242424;
height:300px;
overflow:hidden;
max-width:1560px;
width:100vw;
margin-inline:auto;
@media screen and (max-width: 960px) {
height:500px;
margin-inline:auto;
text-align:center;
}
`;
export const FootContainer = styled.div`
display:flex;
flex-direction:column;
padding:5rem 8rem;

`;
export const FootLogo = styled(Link)`
font-size:35px;
color:#fff;
font-weight:800;
text-decoration:none;
height:20px;
@media screen and (max-width: 960px) {
    margin-bottom:40px;
}  
`;
export const FootMenu = styled.ul`
display:flex;
justify-content:flex-end;
@media screen and (max-width: 960px) {
display:flex;
flex-direction:column;
}
`;
export const FootItems = styled.li`
padding:0 40px;
list-style:none;
`;
export const FootLinks = styled(Link)`
color:#fff;
font-weight:600;
text-decoration:none;
`;
export const HR = styled.hr`
color:#fff;
opacity:0.1;
margin:25px 0;
`;
export const FootInfo = styled.div`
display:flex;
margin-left:-10px
;
@media screen and (max-width: 960px) {
display:flex;
flex-direction:column;
}
`;
export const FootInfo_Items = styled.div`
padding:0 10px;
@media screen and (max-width: 960px) {
    margin-bottom: 20px;
}  
`;
export const FootHead = styled.h5`
color:#fff;
`;
export const FootPara = styled.p`
color:#fff;

`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  margin-left:60%;  
  @media screen and (max-width: 960px) {
    margin-inline:auto;
    margin-top:20px;
}  
`;
export const SocialLinks = styled.a`
font-size:22px;

*{
    color:#fff;
   transform:scale(1);
    &:hover{
  transition-duration:0.1s ease;
   transform:scale(1.1);
}
}

`;