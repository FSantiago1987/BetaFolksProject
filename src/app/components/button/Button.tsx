import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../responsive';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IButtonProps {
    theme?: "filled" | "outlined";
    text: string;
    icon?:boolean;
}

const BaseButton = styled.div`
    ${tw`
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        cursor-pointer
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1
    `}
    @media (max-width: ${SCREENS.sm}) {
    min-width: 115px;
  }
`;

const OutlinedButton = styled(BaseButton)`
    ${tw`
        bg-green-700
        hover:bg-transparent
        hover:text-green-700
        hover:border-green-700
    `}
`;

const OutlinedIconButton = styled(BaseButton)`
    ${tw`
        flex
        items-center
        bg-blue-700
        hover:bg-transparent
        hover:text-blue-700
        hover:border-blue-700
    `}
`;



const FilledButton = styled(BaseButton)`
    ${tw`
        flex
        items-center
        border-pink-700
        text-pink-700
        bg-transparent
        hover:bg-pink-700
        hover:text-white
        hover:border-transparent
    `}
`;

const IconContainer = styled.div`
    ${tw`
        pl-2
        text-base
        md:text-lg
    `}
`;

function Button(props: IButtonProps) {

    const {theme, text, icon} = props;
    if(icon && theme === "outlined"){
        return <OutlinedIconButton>{ text } <IconContainer><FontAwesomeIcon icon={faFacebook} /></IconContainer></OutlinedIconButton>
    }
    else if(icon && theme === "filled"){
        return <FilledButton>{ text } <IconContainer><FontAwesomeIcon icon={faInstagram} /></IconContainer></FilledButton>
    }
    if(theme === "filled")
        return <FilledButton>{ text }</FilledButton>
    else
        return <OutlinedButton>{ text }</OutlinedButton>
}

export default Button;