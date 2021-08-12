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
    name: "Walks",
    thumbnailSrc:"https://i.ibb.co/tDtqXQ4/walk.jpg",

    hourlyPrice: 20,
    dailyPrice: 70,
    description:
      "Walking not only gets your pet exercising, it also teaches him to bond with other pets while reducing anxiety and frustration. At the end of the day, your pet will be more tired and happier!",
  };

  const service2: IService = {
    name: "Daycare",
    thumbnailSrc:"https://i.ibb.co/jzLn21x/daycare.jpg",
    hourlyPrice: 20,
    dailyPrice: 50,
    description:
      "This is a great solution if you don't want to leave your pet alone for many hours, or even need time to concentrate without interruptions. What do you think?",
  };

  const service3: IService = {
    name: "Visits",
    thumbnailSrc:"https://i.ibb.co/ZNMVKZV/visit.jpg",
    hourlyPrice: 30,
    dailyPrice: 100,
    description:
      "We know that some pets cannot leave their house. No worries! Our pack has members who only need a visit while enjoying their space.",
  };

  const service4: IService = {
    name: "Boarding Service",
    thumbnailSrc:"https://i.ibb.co/Bt45Yhj/boarding.jpg",
    hourlyPrice: 40,
    dailyPrice: 120,
    description:
      "Are you going to travel and need to know that your pet will be fine while you are gone? I will take care of your pet as it were mine! We will go out together and play with several friends every day.",
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
    <Container id="services">
      <Title>Explore Our Services</Title>
      <ServicesContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={services}
          plugins={[
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
