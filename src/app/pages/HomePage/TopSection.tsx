import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BlobImg from "../../../Assets/Images/blob.svg";
import Beta from "../../../Assets/Images/Beta.png";
import { SCREENS } from "../../components/responsive";
import Button from "../../components/button/Button";
import {motion} from 'framer-motion';
import { useMediaQuery } from "react-responsive";

const TopSectionContainer = styled(motion.div)`
  min-height: 450px;
  margin-top: 6rem;
  ${tw`
        w-full
        max-w-screen-xl
        flex
        flex-wrap
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `}
  @media (max-width: ${SCREENS.sm}) {
    min-height: 150px;
    margin-top:50px!important;
  }
`;

const LeftContainer = styled(motion.div)`
  ${tw`
        w-1/2
        flex
        flex-col
    `}
`;

const Slogan = styled.h1`
  ${tw`
        font-bold
        text-2xl
        text-left
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `}
`;

const RightContainer = styled(motion.div)`
  ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;

const Description = styled.p`
  ${tw`
            text-xs
            lg:text-sm
            xl:text-lg
            sm:max-h-full
            overflow-hidden
            max-h-12
            text-gray-800
            text-left
        `}
`;

const BlobContainer = styled(motion.div)`
  width: 26rem;
  height: 13.5rem;
  position: absolute;
  right: -5rem;
  top: -11rem;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 45rem;
    max-height: 12rem;
    right: -9rem;
    top: -16rem;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 45rem;
    max-height: 35rem;
    right: -7rem;
    top: -15rem;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 65rem;
    max-height: 40rem;
    right: -12rem;
    top: -25rem;
    transform: rotate(-20deg);
  }
`;

const StandaloneImage = styled.div`
  width: auto;
  height: 15rem;
  right: 2rem;
  top: -7rem;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 20rem;
    right: 0rem;
    top: -6rem;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21rem;
    right: 10rem;
    top: -5rem;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 35rem;
    right: 2rem;
    top: -9.5rem;
    transform: rotate(-2deg);
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        mt-4
    `}
`;

const TopVariants = {
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{
      duration: 2,
      delay:2
    }
  }
}

const TopMobileVariants = {

}

const LeftVariants = {
  hidden:{
    opacity:0,
    x:-200
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration: 2,
      delay:4
    }
  }
}

const RightVariants = {
  hidden:{
    opacity:0,
    x:-100,
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration: 2.5,
      delay:2.5
    }
  }
}

function TopSection() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  return (
      <TopSectionContainer variants={TopVariants} initial={isMobile ? "" : "hidden"} animate={isMobile ? "" : "visible"}>
      <LeftContainer variants={LeftVariants}>
        <Slogan>Dog Walking Service</Slogan>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
          pellentesque lorem.
        </Description>
        <ButtonsContainer>
          <Button text="Book a Dog Walker" />
          <Button text="Puppy Training" theme="filled" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer variants={RightVariants}>
        <BlobContainer>
          <img src={BlobImg} alt="" />
        </BlobContainer>
        <StandaloneImage>
          <img src={Beta} alt="" />
        </StandaloneImage>
      </RightContainer>
    </TopSectionContainer>
  );
}

export default TopSection;
