import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import ProgressiveImage from 'react-progressive-bg-image';

const sizes = {
    tablet: 768,
    phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
            ${css(...args)}
        }
    `;
    accumulator['desktop'] = (...args) => css`
    @media(min-width: 769px) {
        ${css(...args)}
    }
    `;
    return accumulator
}, {})


const StyledProgressiveImage = styled(ProgressiveImage)`
    background-position: center center;

    ${media.desktop`
        width: 19rem;
        height: 19rem;
    `}
    ${media.tablet`
        width: 12rem;
        height: 12rem;
    `}
    ${media.phone`
        width: 9rem;
        height: 9rem;
    `}
`;

const Photo = ({src, placeholder}) => (
    <div>
        <StyledProgressiveImage src={src} placeholder={placeholder}/>
    </div>
)

export default Photo;