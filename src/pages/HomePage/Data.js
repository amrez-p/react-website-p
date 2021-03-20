import styled from 'styled-components';
import imageone from '../../images/Image_one.jpg';
import Imagesix from '../../images/Image_six.jpg';
import Imageseven from '../../images/Image_seven.jpg';
import Imageeight from '../../images/Image_eight.jpg';

export const HomeContainer = styled.div`
margin: 30px auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:1440px;
max-width:85%;

`;
export const HomeWrapper = styled.div`
background-image:linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),url(${imageone});
border-radius:20px;
width:100%;
height:500px;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
padding: 0 0 2rem 3rem;
line-height:40px;
a{
    padding:2px 15px;
}
@media screen and (max-width: 960px) {
align-items:center;
width:600px;
margin-inline:auto;
}
`;

export const Heading = styled.h1`
font-size:60px;
color:#fff;
margin-bottom:20px;
`;
export const Para = styled.p`
font-size:16px;
color:#fff;
width:800px;
margin-bottom:20px;
line-height:20px;
`; 


export const HomeSection = styled.div`
display:grid;
margin:50px 150px;
justify-content:center;
grid-template-columns:repeat(3,1fr);
grid-column-gap:10px;
grid-row-gap:10px;
grid-template-areas:
"one two two"
"one three three";
.img1{
    grid-area:one;
    background-image:linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),url(${Imagesix});
    object-fit:contain;
    background-size:cover;
    background-position:center;  
    background-repeat:no-repeat;
    width:400px;
    height:500px;
    h5{
        margin-top:160px;
    }
}
.img2{
    grid-area:two;
    background-image:linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),url(${Imageseven});
    background-size:cover;
background-position:center;
background-repeat:no-repeat;
    object-fit:contain;
    width:600px;
    height:240px;
}
.img3{
    grid-area:three;
    background-image:linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)),url(${Imageeight});
    object-fit:contain;
    background-size:cover;
background-position:center;
background-repeat:no-repeat;
    width:600px;
    height:240px;
}
@media screen and (max-width: 960px) {
display:flex;
flex-direction:column;
margin-inline:auto;
.img1,.img2,.img3{
    width:600px;
    height:240px;
    h5{
        margin-top:70px;
    }
}
}
`;
export const HomeGrid = styled.div`
border-radius:20px;
text-align:center;
h5{
    margin:70px 0;
    color:#fff;
}
p{
    margin:-80px 0;
    color:#fff;
}
`;
export const HomeSectionTwo = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
@media screen and (max-width: 960px) {
display:flex;
flex-direction:column;
margin-inline:auto;
}
`;
export const HomeGridTwo = styled.div`
margin-inline:auto;
text-align:center;
img{
    object-fit:contain;
    width:150px;
    height:150px;
}
@media screen and (max-width: 960px) {
margin-bottom:20px;
}
`;
export const GridTitle = styled.h5`
font-size:30px;
`;
export const GridText = styled.p`
font-size:16px;
`;


export const HomeBanner = styled.div`
position: relative;
bottom:-80px;
height:150px;
background:#000;
border-radius:10px;
width:85%;
@media screen and (max-width: 960px) {
display:none;
}
`;
export const BannerWrapper = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
margin-top:20px;
`;
export const BannerRight = styled.div`
padding:0 50px;
`;
export const BannerLeft = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
export const BannerHeading = styled.h2`
font-size:40px;
color:#fff;
line-height:35px;
`;
export const BannerPara = styled.p`
margin-top:10px;
color:#fff;
line-height:15px;
`;
