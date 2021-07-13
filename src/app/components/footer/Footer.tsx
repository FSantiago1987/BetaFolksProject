import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import LogoFooter from "../../../Assets/Images/BetaFooter.png";
import LogoFooterBW from "../../../Assets/Images/bw-beta.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marginer } from "../marginer";
import { faFacebook, faInstagram, faInstagramSquare, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 270px;
  display: flex;
  flex-direction: column;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgba(0, 0, 0, 0.3);

  @media screen and (max-width: ${SCREENS.sm}) {
    border-top: 0;
    padding: 0;
    min-height: 20px;
  }
`;

const TopContainer = styled.div`
  min-height: 30vh;
  ${tw`
        w-full
        flex
        justify-between
        items-center
    `}
`;


const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgba(0, 0, 0, 0.3);
  padding: 0 10px;

  @media screen and (max-width: ${SCREENS.sm}) {
    height: 20px;
    padding: 10px 10px;
  }
`;

const RightContainer = styled.div`
  ${tw`
    flex
  `}
`;

const LeftContainer = styled.div`
    ${tw`
    flex
    items-center
  `}
`;

const ImgFooter = styled.img`
        width: auto;
        max-height: 250px;
        margin-left: 200px;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 17px;

  @media screen and (max-width: ${SCREENS.sm}) {
    font-size: 13px;
  }
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
  @media screen and (max-width: ${SCREENS.sm}) {
    margin-right: 0;
    width: 100%;
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-black
    mb-3
  `};
`;

const FooterLink = styled.a`
  text-decoration: none;
  transition: background-color, 200ms ease-in-out;
  ${tw`
    text-gray-500
    cursor-pointer
    font-normal
    text-sm
  `}

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  &:hover {
    color: #777777;
  }

  @media screen and (max-width: ${SCREENS.sm}) {
    font-size: 12px;
    align-items: flex-start;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 11px;
  margin-left: 10px;
  font-weight: 400;

  @media screen and (max-width: ${SCREENS.sm}) {
    font-size: 8px;
    font-weight: 300;
  }
`;

const SocialIcon = styled.div`
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #777777;
  }

  @media screen and (max-width: ${SCREENS.sm}) {
    margin-right: 2px;
    font-size: 14px;
  }
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-pink-700
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-gray-500
  `};
`;

const BWImgContainer = styled.div`
    height: auto;
    width: 130px;
    ${tw`
        flex
    `}
    img{
        width: 100%;
        height: 100%;
    }
`;   


function Footer() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  return (
    <FooterContainer>
      {!isMobile && (
        <TopContainer>
          <LeftContainer>
              <ImgFooter src={LogoFooter} alt="" />
                        </LeftContainer>
          <RightContainer>
            <SectionContainer>
              <HeaderTitle>Company</HeaderTitle>
              <FooterLink>About</FooterLink>
            </SectionContainer>
            <SectionContainer>
              <HeaderTitle>Our Links</HeaderTitle>
              <FooterLink>How it works</FooterLink>
              <FooterLink>Our Services</FooterLink>
              <FooterLink>Gallery</FooterLink>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Call Now</HeaderTitle>
              <HorizontalContainer>
                <RedIcon>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </RedIcon>
                <SmallText>+1 226-448-6267</SmallText>
              </HorizontalContainer>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Mail</HeaderTitle>
              <HorizontalContainer>
                <RedIcon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </RedIcon>
                <SmallText>hello@betafolks.com</SmallText>
              </HorizontalContainer>
            </SectionContainer>
          </RightContainer>
        </TopContainer>
      )}
      {!isMobile && <Marginer direction="vertical" margin={40} />}
      <BottomContainer>
        <LeftContainer>
            <BWImgContainer>
                <img src={LogoFooterBW} alt="" />
            </BWImgContainer>
          <PrivacyText> &#169; {new Date().getFullYear()} - Created by Fabio Luiz. All Rights Reserved. {new Date().getFullYear()}</PrivacyText>
        </LeftContainer>
        <RightContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </SocialIcon>
        </RightContainer>
      </BottomContainer>
    </FooterContainer>
  );
}

export default Footer;
