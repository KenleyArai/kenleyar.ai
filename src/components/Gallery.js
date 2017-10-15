import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card';
import { css } from 'styled-components';

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

const GalleryTitle = styled.div`
    text-transform:capitalize;
    color: #1F2226;
    padding: 1rem;
    font-size: 3rem;
    
    ${media.desktop`

    `}
    ${media.tablet`
        
    `}
    ${media.phone`

    `}
`;

const MainGalleryContainer = styled.div`
    background-color: #FAF5E5;

    ${media.desktop`
        flex-direction: column;
        display: flex;
        width: 100%;
        min-width: 48rem;
        max-width: 70rem;
        margin: 0 auto;
    `}
    ${media.tablet`
        flex-direction: column;
        display: flex;
        width: 100%;
        min-width: 18rem;
        max-width: 40rem;
        margin: 0 auto;
    `}

    ${media.phone`
        width: 20rem;
    `}
`;
const GalleryContainer = styled.div`
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
        width: 20rem;
        display: flex;
        flex-wrap: wrap;
    `}
`;

const Gallery = ({title, projects, clickHandler}) => (
    <MainGalleryContainer>
        <GalleryTitle>{title}</GalleryTitle>
        <GalleryContainer>
            { 
                projects.map((project) => <Card key={project.key} clickHandler={clickHandler} {...project} />) 
            }
        </GalleryContainer>
    </MainGalleryContainer>
)

export default Gallery;