import React from 'react';
import { IService } from '../../../typings/service';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../button/Button';

interface IServiceProps extends IService {}

const ServiceContainer = styled.div`
  width: 16.5em;
  min-height: 23em;
  max-height: 30em;
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
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 12rem;
  max-height: 12rem;  
  img {
      border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;

const ServiceName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-green-700
    mt-3
    mb-0
  `};
`;


const PricesContainer = styled.div`
max-height: 3rem;
  ${tw`
    w-full
    flex
    items-center
    justify-end
    mt-1
  `};
`;

const HourlyPrice = styled.h5`
  ${tw`
    text-green-700
    font-semibold
    text-lg
    mr-3
  `};
`;

const DailyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `};
`;

const SmallText = styled.p`
  ${tw`
    inline-flex
    text-xs
    font-thin
    text-gray-500
  `};
`;


const ServiceDescriptionContainer = styled.div`
max-height: 5rem;
  ${tw`
    flex
    w-full
    justify-between
  `};
`;


const ServiceDescription = styled.p`
  ${tw`
    text-gray-400
    text-xs
  `};
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-1
    mb-1
  `};
`;

const SelectButton = styled(Button)`
  ${tw`
    min-w-full
    mt-6
  `};
`;



function ServiceCard(props: IServiceProps) {
    const { name, thumbnailSrc, hourlyPrice, dailyPrice, description } = props;
    return (
        <ServiceContainer>
            <ServiceThumbnail>
                <img src={thumbnailSrc} alt={name} />
            </ServiceThumbnail>
            <ServiceName>{name}</ServiceName>
            <ServiceDescriptionContainer>
                <ServiceDescription>
                    {description}
                </ServiceDescription>
            </ServiceDescriptionContainer>
            <Seperator />
            <PricesContainer>
                <HourlyPrice>
                  <SmallText>Starting at </SmallText>
                    <span>  ${hourlyPrice} </span>
                    <SmallText>/hour</SmallText>
                </HourlyPrice>
            </PricesContainer>
            <SelectButton text="Book Now" theme="filled"/>
        </ServiceContainer>
    )
}

export default ServiceCard;
