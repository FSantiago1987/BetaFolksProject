import React from 'react';
import { IService } from '../../../typings/service';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../button/Button';
import '../../pages/HomePage/styles.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ServiceModal from '../serviceModal/ServiceModal';


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
    const { name, thumbnailSrc, hourlyPrice, description } = props;
    const dummyDescription = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

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
            <ServiceModal 
              title={name}
              image={thumbnailSrc}
              description={dummyDescription}
            />
        </ServiceContainer>
    )
}

export default ServiceCard;
