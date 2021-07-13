import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import LogoAnimation from './LogoAnimation';
import {motion} from 'framer-motion';
import './Logo.css';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import BLogo from '../../../Assets/Images/BLogo.png';

interface ILogoProps {
    color?: "white" | "default";
}

const textVariants = {
    hidden:{
        opacity: 0,
        x:-200
    },
    visible:{
        opacity: 1,
        x:0,
        transition:{
            type: "spring",
            delay: 3.45,
            stiffness: 400
        }
    }
}

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled(motion.div)`
    ${tw`
        text-xl
        md:text-5xl
        font-bold
        text-black
    `}
    font-family: 'Concert One', sans-serif;
    color: #BE185D;
    font-weight:bold;
    ${({color} : any) => color === "white" ? tw`text-white` : "#BE185D" }
` as any;

const Image = styled.div`
    width: auto;
    ${tw`
        h-6
        md:h-14
    `}
    svg{
        width: auto;
        height: 100%;
    }
    img{
        width: auto;
        height: 100%; 
    }
`;

function Logo(props: ILogoProps) {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
    const  {color} = props;
    return (
        <LogoContainer>
            <Image>
                {!isMobile ? (<LogoAnimation />) : 
                (<img src={BLogo}  alt=""/>)}
            </Image>
            <LogoText variants={textVariants} initial={isMobile ? "" : "hidden"} animate={isMobile ? "" : "visible"} className="LogoText">ETA FOLKS</LogoText>
        </LogoContainer>
    )
}

export default Logo
