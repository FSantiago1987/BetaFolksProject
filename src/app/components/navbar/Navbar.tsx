import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {Link} from 'react-scroll';

import Logo from "../logo/Logo";
import NavItems from "./NavItems";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";

const navbarVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 3.5,
    },
  },
};

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
        w-full
        max-w-screen-xl
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `}
`;

const LogoContainer = styled.div``;

const NavItemsContainer = styled(motion.div)``;

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItemsContainer
        variants={navbarVariants}
        initial={isMobile ? "" : "hidden"} 
        animate={isMobile ? "" : "visible"}
      >
        <NavItems />
      </NavItemsContainer>
    </NavbarContainer>
  );
}

export default Navbar;
