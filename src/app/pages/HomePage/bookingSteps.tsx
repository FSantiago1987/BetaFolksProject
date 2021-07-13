import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarAlt,
  faCalendarCheck,
} from "@fortawesome/free-regular-svg-icons";
import Arrow, { DIRECTION, HEAD } from "react-arrows";

import "./styles.css";

const Container = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:pt-6
        lg:pb-6
    `}
`;

const Title = styled.h2`
    margin-top: -1rem;
  ${tw`
        text-3xl
        lg:text-4xl
        text-black
        font-extrabold
        text-black
    `}
`;

const SubTitle = styled.h4`
    ${tw`
        text-lg
        lg:text-xl
        text-pink-800
        font-semibold
    `}
`;

const StepsContainer = styled.div`
  ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `};
`;

const StepContainer = styled.div`
  ${tw`
        flex
        flex-col
        md:w-96
        items-center
        transition-colors
        hover:text-red-500
        m-3
    `}
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
        bg-pink-50
        hover:bg-pink-200
    `}
`;

const StepTitle = styled.h4`
  ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `}
`;

const StepDescription = styled.p`
  ${tw`
        w-10/12
        text-xs
        md:text-sm
        text-center
        text-gray-600
    `}
`;

const StepIcon = styled.span`
  ${tw`
        text-pink-800
        text-3xl
    `}
`;

function BookingSteps() {
  return (
    <Container>
                    <SubTitle>How it Works</SubTitle>
      <Title>Our Working Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step id="step1">
            <StepIcon>
              <FontAwesomeIcon icon={faDog} />
            </StepIcon>
          </Step>
          <StepTitle>Choose a Service</StepTitle>
          <StepDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
            massa commodo sapien elementum dignissim.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step id="step2">
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Select Date and Time</StepTitle>
          <StepDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
            massa commodo sapien elementum dignissim.
          </StepDescription>
        </StepContainer>
        <Arrow
          className="arrow"
          from={{
            direction: DIRECTION.BOTTOM_RIGHT,
            node: () => document.getElementById("step1"),
            translation: [0.8, 1.5],
          }}
          to={{
            direction: DIRECTION.TOP_LEFT,
            node: () => document.getElementById("step2"),
            translation: [-1, -2],
          }}
          head={HEAD.NONE}
        />
        <StepContainer>
          <Step id="step3">
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarCheck} />
            </StepIcon>
          </Step>
          <StepTitle>Book the service</StepTitle>
          <StepDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
            massa commodo sapien elementum dignissim.
          </StepDescription>
        </StepContainer>
        <Arrow
          className="arrow"
          from={{
            direction: DIRECTION.RIGHT,
            node: () => document.getElementById("step2"),
            translation: [0.5, -1],
          }}
          to={{
            direction: DIRECTION.TOP_LEFT,
            node: () => document.getElementById("step3"),
            translation: [-0.5, -2],
          }}
          head={HEAD.NONE}
        />
      </StepsContainer>
    </Container>
  );
}

export default BookingSteps;
