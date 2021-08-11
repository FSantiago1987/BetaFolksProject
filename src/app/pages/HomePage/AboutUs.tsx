import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import BlobAbout from "../../components/logo/BlobAbout";



const AboutContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-green-200
        bg-opacity-50
    `}
`;

const ImageContainer = styled.div`
  width: auto;
  height: 15rem;
  margin-left: -50px;
  img {
    width: auto;
    height: 80%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28rem;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30rem;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 32rem;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`;

const Title = styled.h1`
  ${tw`
        text-black
        text-2xl
        text-center
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`;

const InfoText = styled.p`
  ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        mt-4
        font-normal
        text-justify
        pl-3
        pr-3
    `}
`;

function AboutUs() {
  return (
    <AboutContainer id="about">
        <BlobAbout />
      <InfoContainer>
        <Title>About Me</Title>
        <InfoText>
          Hi! I’m Roberta, and I’ve been working with animal care in Toronto
          since the end of 2017. Since then, my clients and their dogs have
          became my family. This webpage is dedicated to all of them and the
          wonderful human and four legged friends we make daily.
          Come and join our daily walks, stays and visits.
        </InfoText>
      </InfoContainer>
    </AboutContainer>
  );
}

export default AboutUs;
