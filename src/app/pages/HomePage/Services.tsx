import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { IService } from "../../../typings/service";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import Boarding from "../../../Assets/Images/boarding.jpg";
import Daycare from "../../../Assets/Images/daycare.jpg";
import Visit from "../../../Assets/Images/visit.jpg";
import Walk from "../../../Assets/Images/walk.jpg";

const Container = styled.div`
  ${tw`
    max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10        
    `}
`;

const Title = styled.h2`
  ${tw`
        text-3xl
        lg:text-4xl
        font-extrabold
        text-black
    `}
`;

const ServicesContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `}
`;

function Services() {
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const service1: IService = {
    name: "Visits",
    thumbnailSrc:"https://i.ibb.co/dLXymK0/visit.jpg",
    hourlyPrice: 20,
    dailyPrice: 70,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, urna nec tempor posuere.",
  };

  const service2: IService = {
    name: "Walks",
    thumbnailSrc:"https://i.ibb.co/tDtqXQ4/walk.jpg",
    hourlyPrice: 20,
    dailyPrice: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, urna nec tempor posuere.",
  };

  const service3: IService = {
    name: "Daycare",
    thumbnailSrc:"https://i.ibb.co/jzLn21x/daycare.jpg",
    hourlyPrice: 30,
    dailyPrice: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, urna nec tempor posuere.",
  };

  const service4: IService = {
    name: "Boarding Service",
    thumbnailSrc:"https://i.ibb.co/HqM47Dv/boarding.jpg",
    hourlyPrice: 40,
    dailyPrice: 120,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, urna nec tempor posuere.",
  };

  const services = [
    <ServiceCard {...service1} />,
    <ServiceCard {...service2} />,
    <ServiceCard {...service3} />,
    <ServiceCard {...service4} />,
  ];
  const numberOfDots = isMobile
    ? services.length
    : Math.ceil(services.length / 3);

  return (
    <Container>
      <Title>Explore Our Services</Title>
      <ServicesContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={services}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </ServicesContainer>
    </Container>
  );
}

export default Services;
