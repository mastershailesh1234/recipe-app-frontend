import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcons,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcons />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/SoupStarter">Stater And Soups</SidebarLink>
        <SidebarLink to="/MainCourse">Main Course</SidebarLink>
        <SidebarLink to="/EndingFood">
          Dessert, Mocktail And Beverages
        </SidebarLink>
        <SidebarLink to="/FullMenu">Full Menu</SidebarLink>
        <SidebarLink to="/">Home</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
