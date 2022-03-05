import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  MobileIcon,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./HeaderStyled";
import { FaBars } from "react-icons/fa";
const Header = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
              <NavLinks to="discover">Discover</NavLinks>
              <NavLinks to="services">Services</NavLinks>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
             <NavBtnLink to ="/signin">Sign in</NavBtnLink>
          </NavBtn> 
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
