import React from "react";
import styled, { css }  from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `}
`;

const NavItem = styled.li`
  ${tw`
        text-sm
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-8
    `}
`;

const AnchorItem = styled.a<{menu?:any}>`
  ${tw`
        no-underline 
        text-black
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}
    ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;

function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem>
            <AnchorItem href="#" menu>Home</AnchorItem>
          </NavItem>
          <NavItem>
            <AnchorItem href="#" menu>About</AnchorItem>
          </NavItem>
          <NavItem>
            <AnchorItem href="#" menu>Services</AnchorItem>
          </NavItem>
          <NavItem>
            <AnchorItem href="#" menu>Contact Us</AnchorItem>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <AnchorItem href="#">Home</AnchorItem>
      </NavItem>
      <NavItem>
        <AnchorItem href="#">About</AnchorItem>
      </NavItem>
      <NavItem>
        <AnchorItem href="#">Services</AnchorItem>
      </NavItem>
      <NavItem>
        <AnchorItem href="#">Contact Us</AnchorItem>
      </NavItem>
    </ListContainer>
  );
}

export default NavItems;

