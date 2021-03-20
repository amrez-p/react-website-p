import React,{useState} from 'react'
import { Bars, NavContainer, NavItems, NavLinks, NavLogo, NavMenu } from './Data';
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {
const [click,setClick] = useState(false);
const handleClick = () => setClick(!click);

    return (
        <>
          <NavContainer>
              <NavLogo>
                  Portfolio
              </NavLogo>
              <Bars onClick={handleClick}>
                  {click? <FaTimes /> : <FaBars/> }
              </Bars>
                <NavMenu onClick={handleClick} click={click}>
                <NavItems>
                <NavLinks to='/'>Home</NavLinks>
                </NavItems>    
                <NavItems>
                <NavLinks to='/about'>About</NavLinks>
                </NavItems>    
                <NavItems>
                <NavLinks to='/contact'>Contact</NavLinks>
                </NavItems>    
                </NavMenu>              
              
              </NavContainer>  
        </>
    )
}

export default Navbar;
