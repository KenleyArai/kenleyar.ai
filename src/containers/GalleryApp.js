import React, {Component} from 'react';
import styled from 'styled-components';

import Gallery from 'components/Gallery';
import Slideshow from 'components/Slideshow';

import mock_state from './gallery_data';

const Wrapper = styled.div `
  margin: 0;
  padding: 0;
`;

class GalleryApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...mock_state
        };

        this.gallery_helper = this
            .gallery_helper
            .bind(this);
        this.gallery_selector = this
            .gallery_selector
            .bind(this);
        this.go_home = this
            .go_home
            .bind(this);
        this.create_cards = this
            .create_cards
            .bind(this);
        this.create_slides_helper = this
            .create_slides_helper
            .bind(this);
    }

    gallery_helper(new_state) {
        this.setState({current_state: new_state, title: new_state});
    }

    go_home() {
        this.setState({current_state: 'gallery', title: 'Gallery'});
    }

    create_cards(projects, screen_type) {
        return projects.map((project) => ({
            img_url: this.state.baseAddress + screen_type + '/' + project.project_dir + '/header.jpg',
            ...project
        }))
    }

    create_slides_helper(project_dir, slide_show_length) {
        // img key placeholder per slide
        var return_list = []
        for (var i = 0; i < slide_show_length; i++) {
            return_list.push({jpgIndex: i, baseAddress: this.state.baseAddress, dir: 'cdc', placeholder: this.state.placeholder})
        }
        return return_list
    }

    gallery_selector() {
        return this.state.current_state === 'gallery'
            ? <Gallery
                    clickHandler={this.gallery_helper}
                    title={this.state.current_state}
                    projects={this.create_cards(this.state[this.state.current_state], 'phone')}/>
            : <Slideshow
                slideshowTitle={this.state.current_state}
                clickHandler={this.go_home}
                photos={this.create_slides_helper(this.state[this.state.current_state], this.state[this.state.current_state].length)}
                baseAddress={this.state.base_address}/>;
    }

    render() {
        return (
            <Wrapper>
                {this.gallery_selector()}
            </Wrapper>
        );
    }
}

export default GalleryApp;
