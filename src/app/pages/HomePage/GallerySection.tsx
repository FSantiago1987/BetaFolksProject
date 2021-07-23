import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";

import Img1 from "../../../Assets/Images/img1.jpg";
import Img2 from "../../../Assets/Images/img2.jpg";
import Img3 from "../../../Assets/Images/img3.jpg";
import Img4 from "../../../Assets/Images/img4.jpg";
import Img5 from "../../../Assets/Images/img5.jpg";
import Img6 from "../../../Assets/Images/img6.jpg";
import Img7 from "../../../Assets/Images/img7.jpg";
import Img8 from "../../../Assets/Images/img8.jpg";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import Image from "../../components/image/Image";

const GalleryContainer = styled.div`
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
  margin-top: -1rem;
  ${tw`
        text-2xl
        lg:text-4xl
        text-black
        font-extrabold
        text-black
    `}
`;




function GallerySection() {
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const images = [
    <Image image={Img1} alt="Image1" />,
    <Image image={Img2} alt="Image2" />,
    <Image image={Img3} alt="Image3" />,
    <Image image={Img4} alt="Image4" />,
    <Image image={Img5} alt="Image5" />,
    <Image image={Img6} alt="Image6" />,
    <Image image={Img7} alt="Image7" />,
    <Image image={Img8} alt="Image8" />
  ];

  const numberOfDots = isMobile
  ? images.length
  : Math.ceil(images.length - 2);

  return (
    <GalleryContainer>
      <Title>🐱 Happy Customers 🐶</Title>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={images}
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
    </GalleryContainer>
  );
}

export default GallerySection;
