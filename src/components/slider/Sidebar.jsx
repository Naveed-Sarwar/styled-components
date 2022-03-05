import React from "react";
import {
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrap,
  CloseIcon,
  SidebarContainer,
  Icon,
} from "./SidebarStyled";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="about">
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="discover">
            Discover
          </SidebarLink>
          <SidebarLink onClick={toggle} to="services">
            Services
          </SidebarLink>
          <SidebarLink onClick={toggle} to="signup">
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarWrap>
          <SidebarRoute onClick={toggle} to="/signin">
            Sign In
          </SidebarRoute>
        </SidebarWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;