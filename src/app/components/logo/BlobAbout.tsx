import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../responsive";

const Image = styled.div`
  width: auto;
  height: 20rem;
  margin-left: -50px;
  svg {
    width: auto;
    height: 100%;
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

function BlobAbout() {
  return (
    <Image>
      <svg
        id="10015.io"
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <clipPath id="blob">
          <path fill="#474bff" d="M452.5,275.5Q446,311,424.5,339Q403,367,377,388.5Q351,410,321,425Q291,440,256.5,446.5Q222,453,186,449.5Q150,446,116,428.5Q82,411,76.5,371.5Q71,332,45,304.5Q19,277,12.5,239Q6,201,32.5,171.5Q59,142,79,114.5Q99,87,129.5,72.5Q160,58,192,50.5Q224,43,258.5,37Q293,31,326,44.5Q359,58,381.5,85Q404,112,433,138Q462,164,460.5,202Q459,240,452.5,275.5Z" />
          </clipPath>
        </defs>
        <image
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#blob)"
          xlinkHref="https://i.ibb.co/h1zHFGp/aboutImg.jpg"
          preserveAspectRatio="xMidYMid slice"
        ></image>
      </svg>
    </Image>
  );
}

export default BlobAbout;
