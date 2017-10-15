import React from 'react'
import styled from 'styled-components';

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 377px;
`;

const ModalHeader = styled.div`
    padding-bottom: 1rem;
`;

const ModalButton = styled.button`
    background: none;
    border: 3px solid rgb(250, 245, 229);
    border-radius: 5px;
    color: rgb(250, 245, 229);
    display: block;
    font-weight: bold;
    margin: .25rem auto;
    padding: 1em 3em;
    position: relative;
    text-transform: uppercase;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        top: 0;  left: 0;  right: 0;  bottom: 0;
        background: rgba(250, 245, 229, .25);
        transform: scaleX(0);
        transform-origin: 100% 0;
        transition: transform .1s ease-out;
    }
    &:hover:before{transform: scaleX(1)}
`;

const GalleryModalBody = ({clickHandler, img}) => (
        <ModalBody>
            <ModalHeader>
                <ModalButton onClick={ clickHandler } >
                    Close
                </ModalButton>
            </ModalHeader>
            <img alt='gallery-img' src={ img } />
        </ModalBody>
)

export default GalleryModalBody