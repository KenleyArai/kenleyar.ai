import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Photo from 'components/Photo';
import GalleryModalBody from 'components/GalleryModalBody';
import MediaQuery from 'react-responsive';
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

const GalleryImageContainer = styled.div`
    overflow: hidden;
    color: hsla(214, 10%, 14%);
    background-color: hsl(46, 68%, 94%);
    text-decoration:  none;
    box-shadow: 0 4px 8px 0 rgba(31, 34, 38, .5);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(31, 34, 38, .7);
    }
    &:active {
        box-shadow: 0 2px 4px 0 rgba(31, 34, 38, .2);
    }

    ${media.desktop`
        width: 19rem;
        height: 19rem;
        margin: 1rem;
    `}
    ${media.tablet`
        width: 12rem;
        height: 12rem;
        margin: .25rem;
    `}
    ${media.phone`
        width: 9rem;
        height: 9rem;
        margin: .25rem;
    `}
`;

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#1F2226'
    }
};

class GalleryImage extends Component {

    constructor(props) {
        super(props);

        this.state = { show_modal: false }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.get_phone_url = this.get_phone_url.bind(this);
        this.get_tablet_url = this.get_tablet_url.bind(this);
        this.get_desktop_url = this.get_desktop_url.bind(this);
    }

    componentDidMount() {
        this.setState({ ...this.props })
    }

    openModal() {
        this.setState({show_modal: true});
    }

    closeModal() {
        this.setState({show_modal: false});
    }

    get_phone_url() {
        return this.state.baseAddress + "phone/" +  this.state.dir + "/slideshow/" + this.state.jpgIndex + ".jpg"
    }

    get_desktop_url() {
        return this.state.baseAddress + "desktop/" +  this.state.dir + "/slideshow/" + this.state.jpgIndex + ".jpg"
    }

    get_tablet_url() {
        return this.state.baseAddress + "tablet/" +  this.state.dir + "/slideshow/" + this.state.jpgIndex + ".jpg"
    }

    render() {
        return (
            <GalleryImageContainer>
                <span onClick={ () => this.openModal() } >
                <MediaQuery query="(max-device-width: 376px)">
                    <Photo src={this.get_phone_url()} placeholder={this.state.placeholder} />
                </MediaQuery>
                <MediaQuery query="(min-device-width: 377px)">
                    <MediaQuery query="(max-device-width: 768px)">
                        <Photo src={this.get_tablet_url()} placeholder={this.state.placeholder} />
                    </MediaQuery>
                </MediaQuery>
                <MediaQuery query="(min-device-width: 769px)">
                    <Photo src={this.get_desktop_url()} placeholder={this.state.placeholder} />
                </MediaQuery>
                </span>
                <Modal 
                    style={customStyles}
                    isOpen={this.state.show_modal}
                    onRequestClose={this.closeModal}
                >
                    <GalleryModalBody clickHandler={this.closeModal} img={this.get_phone_url()}/>
                </Modal>
            </GalleryImageContainer>
        );
    }
}

export default GalleryImage;
