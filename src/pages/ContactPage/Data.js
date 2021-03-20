import styled from 'styled-components';
import {container} from '../../GobalStyle'
import image_two from '../../images/Image_two.jpg'

export const ContactContainer = styled(container)`
${container};
background-image:linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),url(${image_two});
background-size:cover;
background-position:center;
background-repeat:no-repeat;
flex-direction:column;
margin:30px;
line-height:60px;
h1{
    color:#fff;
    font-size:6rem;
}
p{
    color:#fff;

    font-size:1.5rem;
}
`;