import React from 'react';
import {Button} from '../../GobalStyle';
import Imagethree from '../../images/Image_three.svg';
import Imagefour from '../../images/Image_four.svg';
import Imagefive from '../../images/Image_five.svg';
import { 
    Heading, 
    HomeContainer,
     Para,
     HomeWrapper,
      HomeSection,
       HomeGrid,
       HomeGridTwo,
        GridTitle,
         GridText,
         HomeBanner,
         BannerWrapper,
         BannerHeading,
         BannerPara,
         BannerLeft,
         BannerRight,
         HomeSectionTwo
        
        } from './Data';

const Home = () => {
    return (
        <>
         <HomeContainer>
             <HomeWrapper>
             <Heading>Hello My Name is Amrez Pirzada</Heading>
             <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor sapien ut sem blandit, eu posuere elit auctor. Donec erat ipsum, gravida vel condimentum et, iaculis non est.Integer pellentesque vitae enim quis vulputate. Mauris ornare risus vitae rutrum vulputate. Nulla velit lacus, auctor vel blandit in, aliquet ut enim</Para>
             <Button to="/about">Learn More</Button>
             </HomeWrapper>

             <HomeSection>
                 <HomeGrid className="img1">
                     <GridTitle>Web Design</GridTitle>
                     <GridText>View Projects</GridText>
                 </HomeGrid>
                 <HomeGrid className="img2">
                 <GridTitle>App Design</GridTitle>
                 <GridText>View Projects</GridText>
                 </HomeGrid>
                 <HomeGrid className="img3">
                     <GridTitle>UI Designs</GridTitle>
                     <GridText>View Projects</GridText>
                 </HomeGrid>
             </HomeSection>
             
             <HomeSectionTwo>
                 <HomeGridTwo>
                     <img src={Imagethree} alt=""/>
                     <GridTitle>Passionate</GridTitle>
                     <GridText>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Fusce commodo ornare lacus eu finibus. 
                          Suspendisse tristique commodo massa et vulputate.
                           Nunc eget arcu semper ante molestie scelerisque quis 
                          sodales interdum gravida sit amet, facilisis quis augue.
                          </GridText>
                 </HomeGridTwo>
                 <HomeGridTwo>
                     <img src={Imagefour} alt=""/>
                 <GridTitle>Resourceful</GridTitle>
                 <GridText>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Fusce commodo ornare lacus eu finibus. 
                          Suspendisse tristique commodo massa et vulputate.
                           Nunc eget arcu semper ante molestie scelerisque quis 
                          sodales interdum gravida sit amet, facilisis quis augue.
                     </GridText>
                 </HomeGridTwo>
                 <HomeGridTwo>
                     <img src={Imagefive} alt=""/>
                     <GridTitle>Friendly</GridTitle>
                     <GridText>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Fusce commodo ornare lacus eu finibus. 
                          Suspendisse tristique commodo massa et vulputate.
                           Nunc eget arcu semper ante molestie scelerisque quis 
                          sodales interdum gravida sit amet, facilisis quis augue.
                     </GridText>
                 </HomeGridTwo>
             </HomeSectionTwo>

               <HomeBanner>
                   <BannerWrapper>
                       <BannerRight>
                       <BannerHeading>Let's talk about <br /> your project</BannerHeading>
                       <BannerPara>Contact me today and to find out how
                           my expertise can help your business grow.
                       </BannerPara>
                       </BannerRight>
                       <BannerLeft>
                       <Button to="/contact">Get in Touch</Button>
                       </BannerLeft>
                       
                   </BannerWrapper>
               </HomeBanner>
         </HomeContainer>
        </>
    )
}

export default Home;
