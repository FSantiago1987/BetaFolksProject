import React from "react";
import Popup from "reactjs-popup";
import './modal.css';
import 'reactjs-popup/dist/index.css';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SCREENS } from '../responsive';

const Button = styled.button`
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
        flex
        items-center
        border-pink-700
        text-pink-700
        bg-transparent
        hover:bg-pink-700
        hover:text-white
        hover:border-transparent
    `}
    @media (max-width: ${SCREENS.sm}) {
    min-width: 115px;
  }
`;

function ServiceModal({title, description, image}) {
  return (
    <Popup
      trigger={<Button className="button"> Read More </Button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> {title} </div>
          <img src={image} alt={title} className="image-popupbox" />
          <div className="content">
            {" "}
            {description}
          </div>
        </div>
      )}
    </Popup>
  );
}

export default ServiceModal;
