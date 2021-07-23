import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BlobImg from "../../../Assets/Images/blob.svg";
import Beta from "../../../Assets/Images/Beta.png";
import { SCREENS } from "../../components/responsive";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import LogoInsta from "../../../Assets/Images/logoInsta.png";
import LogoFace from "../../../Assets/Images/logoFace.png";
import "./styles.css";

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
    margin-top: 50px!important;
  }
  @media (min-height: 800px) {
    min-height: 650px;
    margin-top: 150px !important;
    padding-left: 5px;
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
  @media (min-height: 800px) {
    font-size: 4rem;
    margin-top: -50px;
  }
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
            leading-4
        `}
  @media (min-height: 800px) {
    font-size: 1.2rem;
  }
`;

const CapitalizeDescription = styled.span`
  ${tw`
    uppercase
    font-bold
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
  @media (min-height: 800px) {
    width: 75rem !important;
    max-height: 70rem !important;
    right: -15rem !important;
    top: -30rem !important;
    transform: rotate(-20deg);
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
  @media (min-height: 800px) {
    height: 40rem !important;
    right: 6rem;
    top: -11.5rem;
    transform: rotate(-2deg);
  }
`;

const IconsContainer = styled.div`
  ${tw`
        flex
        md:mt-2
        items-center
    `}
`;

const IconsText = styled.p`
  ${tw`
        text-xs
        md:text-base
        pr-2
        md:pr-8
    `}
`;

const Icons = styled.div`
  ${tw`
        flex
        mt-4
    `}
  img {
    width: auto;
    height: 2rem;
    @media (min-width: ${SCREENS.sm}) {
      height: 4rem;
    }
  }
  a {
    text-decoration: none;
  }
`;

const IconsF = styled.div`
  ${tw`
        flex
        mt-4
        md:pr-4
        pr-2
    `}
  img {
    width: auto;
    height: 2rem;
    @media (min-width: ${SCREENS.sm}) {
      height: 4rem;
    }
  }
  a {
    text-decoration: none;
  }
`;

const TopVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 2,
    },
  },
};

const LeftVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      delay: 4,
    },
  },
};

const RightVariants = {
  hidden: {
    opacity: 0.3,
    x: -300,
    y: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 4,
      delay: 0.8,
    },
  },
};

function TopSection() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  return (
    <TopSectionContainer
      id="home"
      variants={TopVariants}
      initial={isMobile ? "" : "hidden"}
      animate={isMobile ? "" : "visible"}
    >
      <LeftContainer variants={LeftVariants}>
        <Slogan>We are the walking partner of your dog.</Slogan>
        <Description>
          Are you looking to travel and need someone to take care of your pet?
          Do you need to be away for longer than expected and need someone to
          provide company for your pet? Would you like your pet to exercise or
          socialize more?{" "}
          <CapitalizeDescription>i can help you!</CapitalizeDescription>
        </Description>
        <IconsContainer className="icons">
          <IconsText>Follow us on: </IconsText>
          <IconsF className="icon-link">
            <a href="https://www.instagram.com/betafolks/">
              <img src={LogoFace} alt="" className="icon" />
            </a>
          </IconsF>
          <Icons className="icon-link">
            <a href="https://www.instagram.com/betafolks/">
              <img src={LogoInsta} alt="" className="icon" />
            </a>
          </Icons>
        </IconsContainer>
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
