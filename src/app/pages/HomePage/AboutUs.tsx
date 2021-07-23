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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
          massa commodo sapien elementum dignissim. Pellentesque quis luctus
          eros. Aenean in convallis diam. Quisque dignissim dignissim lobortis.
          Quisque quis urna aliquet, aliquam arcu sit amet, vulputate risus. Sed
          dui lectus, blandit in velit quis, placerat porttitor urna. Duis eu
          imperdiet ligula. Nulla feugiat quam at pharetra consectetur. Aenean
          rutrum libero ut lectus bibendum ultrices. dui lectus, blandit in velit quis, 
          placerat porttitor urna. Duis eu
          imperdiet ligula. Nulla feugiat quam at pharetra consectetur. Aenean
          rutrum libero ut lectus bibendum ultrices.
        </InfoText>
      </InfoContainer>
    </AboutContainer>
  );
}

export default AboutUs;
