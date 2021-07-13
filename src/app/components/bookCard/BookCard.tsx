import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';
import { Marginer } from '../marginer';
import Button from '../button/Button';

import Calendar from 'react-calendar';
import { TimePicker } from 'antd';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { SCREENS } from '../responsive';

const CardContainer = styled.div`
    min-height: 4.3rem;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-12
        md:pr-12
    `}
`;

const ItemContainer = styled.div`
    ${tw`flex relative`};
`;

const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-600
        fill-current
        text-xs
        md:text-base
        ml-1
    `}
`;

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `}
`;

// const LineSeparator = styled.span`
//     width: 2px;
//     height: 45%;
//     ${tw`
//         bg-gray-300
//         mr-2
//         ml-2
//         md:mr-5
//         md:ml-5
//     `}
// `;

const DateCalendar = styled(Calendar)<{ offset: boolean }>`
    position: absolute;
    max-width:none;
    user-select: none;
    top:3rem;
    left:-3rem;

    ${({ offset }) => offset && css`
        left: -6rem;
    `};

    @media (min-width: ${SCREENS.md}) {
    top: 4rem;
    left: -2rem;
  }
`;

function BookCard() {
    const [startDate, setStartDate] = useState(new Date());
    const [isStarCalenderOpen, setStartCalendarOpen] = useState(false);


    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStarCalenderOpen);
    }


    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name onClick={toggleStartDateCalendar}>Select Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isStarCalenderOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
                {isStarCalenderOpen && <DateCalendar offset={false} value={startDate} onChange={setStartDate} />}
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em" />
            <Button text="Book Service" theme="filled" />
        </CardContainer>
    )
}

export default BookCard
