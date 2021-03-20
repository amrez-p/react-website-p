import React from 'react'
import {Foot, FootContainer, FootInfo,HR,FootInfo_Items,FootHead,FootPara,SocialLinks, FootItems, FootLinks, FootLogo, FootMenu, IconWrapper } from './Data';
import {FaLinkedin,FaDribbble,FaGithub} from 'react-icons/fa';
const Footer = () => {
    return (
        <>
        <Foot>

            <FootContainer>
                <FootLogo>
                    Portfolio
                </FootLogo>
                <FootMenu>
                    <FootItems>
                        <FootLinks to='/'>Home</FootLinks>
                    </FootItems>
                    <FootItems>
                        <FootLinks to='/about'>About</FootLinks>
                    </FootItems>
                    <FootItems>
                        <FootLinks to='/contact'>contact</FootLinks>
                    </FootItems>
                </FootMenu>
                    <HR />
                    <FootInfo>
                        <FootInfo_Items>
                            <FootHead>Personal Address</FootHead>
                             <FootPara>Badar Commercial, Phase 5 </FootPara>
                             <FootPara>DHA, karachi, Pakistan</FootPara>
                        </FootInfo_Items>
                        <FootInfo_Items>
                            <FootHead> Contact us(Fake Info)</FootHead>
                             <FootPara>P: +253-863-8967</FootPara>
                             <FootPara>M: am@gmail.com</FootPara>
                        </FootInfo_Items>
                        <IconWrapper>
                            <SocialLinks href='/'>
                                <FaGithub />
                            </SocialLinks>
                            <SocialLinks href='/'>
                                <FaLinkedin />
                            </SocialLinks>
                            <SocialLinks href='/'>
                                <FaDribbble />
                            </SocialLinks>
                     </IconWrapper>
                     </FootInfo>
            </FootContainer>
        </Foot>
        </>
    )
}

export default Footer;
