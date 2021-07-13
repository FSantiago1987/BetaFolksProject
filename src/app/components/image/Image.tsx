import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ImageContainer = styled.div`
  width: 15rem;
  height: 100%;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `};
    img{
        margin-top:25px;
        width:85%;
        height:85%;
    }
`;



function Image(props: any) {
    const {image, alt} = props;
    return (
        <ImageContainer>
            <img src={image} alt={alt}/>
        </ImageContainer>
    )
}

export default Image;
