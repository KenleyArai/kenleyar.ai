import React from 'react';
import styled from 'styled-components';
import {css} from 'styled-components';
import ProgressiveImage from 'react-progressive-bg-image';

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 376
}

// iterate through the sizes and create a media template
export const media = Object
    .keys(sizes)
    .reduce((accumulator, label) => {
        // use em in breakpoints to work properly cross-browser and support users
        // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
        const emSize = sizes[label] / 16
        accumulator[label] = (...args) => css `
        @media (max-width: ${emSize}em) {
        ${css(...args)}
        }
    `
        return accumulator
    }, {})

const CardContainer = styled.button `
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: 288px;
    color: hsla(214, 10%, 14%);
    background-color: hsl(46, 68%, 94%);
    text-decoration:  none;
    box-shadow: 0 4px 8px 0 rgba(31, 34, 38, .2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(31, 34, 38, .7);
    }
    &:active {
        box-shadow: 0 2px 4px 0 rgba(31, 34, 38, .2);
    }

    ${media.desktop `

    `}
    ${media.tablet `
        
    `}
    ${media.phone `

    `}
`;

const StyledProgressiveImage = styled(ProgressiveImage)`
    width: 288px;
    height: 128px;
    background-size: contain;
    background-position: center center;
    text-decoration:  none;
    box-shadow: 0 4px 8px 0 rgba(31, 34, 38, .2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(31, 34, 38, .7);
    }
    &:active {
        box-shadow: 0 2px 4px 0 rgba(31, 34, 38, .2);
    }
`;

const CardTitle = styled.div `
    background-color: hsla(214, 10%, 14%, .7);
    height: 4rem;
    margin-top: -4rem;
    font-size: 2rem;
    align-self: flex-end;
    color: hsl(46, 68%, 94%);
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    text-align: left;
    text-transform: capitalize;
    ${media.desktop `

    `}
    ${media.tablet `
        
    `}
    ${media.phone `

    `}
`;

const Card = ({title, img_url, placeholder, clickHandler}) => (
    <CardContainer onClick={() => clickHandler(title)}>
        <StyledProgressiveImage src={img_url} placeholder={placeholder}/>
        <CardTitle>{title}</CardTitle>
    </CardContainer>
)

export default Card;