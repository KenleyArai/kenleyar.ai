import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import GalleryImage from 'containers/GalleryImage';

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


const SlideShowContainer = styled.div`
    ${media.desktop`
        background-color: #FAF5E5;
        flex-direction: column;
        display: flex;
        width: 100%;
        min-width: 40rem;
        max-width: 62rem;
        margin: 0 auto;
    `}
    ${media.tablet`
        background-color: #FAF5E5;
        flex-direction: column;
        display: flex;
        width: 100%;
        min-width: 18rem;
        max-width: 40rem;
        margin: 0 auto;
    `}
    ${media.phone`
        background-color: #FAF5E5;
        width: 21rem;
        display: flex;
        flex-direction: column;
    `}
`;

const SlideShowHeader = styled.div`
    color: #1F2226;
    height: 2,5rem;
    font-size: 2.5rem;
    display: flex;
    justify-content: space-around;
    
    ${media.desktop`

    `}
    ${media.tablet`
        
    `}
    ${media.phone`

    `}
`;

const GoBackButton = styled.button`
    background: none;
    border: 3px solid rgb(31, 34, 38);
    border-radius: 5px;
    color: rgb(31, 34, 38);
    display: block;
    font-weight: bold;
    margin: .25rem auto;
    padding: .5em .5em;
    position: relative;
    text-transform: uppercase;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        top: 0;  left: 0;  right: 0;  bottom: 0;
        background: rgba(31, 34, 38, .25);
        transform: scaleX(0);
        transform-origin: 100% 0;
        transition: transform .1s ease-out;
    }
    &:hover:before{
        transform: scaleX(1)
    }
    ${media.desktop`

    `}
    ${media.tablet`
        
    `}
    ${media.phone`

    `}
`;

const ShowTitle = styled.div`
    text-transform: uppercase;
    flex: .8;
    ${media.desktop`

    `}
    ${media.tablet`
        
    `}
    ${media.phone`

    `}
`;

const PhotosContainer = styled.div`
    ${media.desktop`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        align-items: center;
        justify-content: space-around;
    `}
    ${media.tablet`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        align-items: center;
        justify-content: space-around;
    `}
    ${media.phone`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `}
`;

const Slideshow = ({slideshowTitle, photos, clickHandler, baseAddress}) => ( 
    <SlideShowContainer>
        <SlideShowHeader>
            <GoBackButton onClick={ () => clickHandler() } >
                Back
            </GoBackButton> 
            <ShowTitle>
                { slideshowTitle } 
            </ShowTitle>
        </SlideShowHeader>
        <PhotosContainer>
            { 
                photos.map((photo) => (
                    <GalleryImage dir={slideshowTitle} key={photo.jpgIndex} jpgIndex={photo.jpgIndex} baseAddress={photo.baseAddress} placeholder={photo.placeholder} />
                ))
            }
        </PhotosContainer>
    </SlideShowContainer>
)

export default Slideshow