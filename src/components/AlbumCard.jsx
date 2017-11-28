import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "components/Button";

const Card = styled.div`
  background-color: #faf5e5;
  border-radius: 2px;
  transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  width: auto
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: .5rem;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const CardPhoto = styled.img`
  width: auto;
  height: 16rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const CardTitle = styled.div``;

const CardDesc = styled.div``;

const CardButton = Button.extend``;

const CardLink = styled.a`
  display: inline-block;
  padding: 0.5rem;
  align-text: center;
  background-color: #cae7b9;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.3),
      0 14px 12px 0 rgba(0, 0, 0, 0.17);
  }

  &:visited {
    color: #faf5e5;
  }
`;

export default class AlbumCard extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    desc: PropTypes.string,
    title: PropTypes.string.isRequired,
    count: PropTypes.number,
    clickHandler: PropTypes.func
  };

  get_temp_header(url) {
    return url + "0.jpg";
  }

  render() {
    var { url, link, desc, title, count, clickHandler } = { ...this.props };

    if (count) {
      return (
        <Card>
          <CardPhoto srcSet={this.get_temp_header(url)} />
          <CardTitle>{title}</CardTitle>
          <CardDesc>{desc}</CardDesc>
          <CardButton onClick={() => clickHandler(url, count)}>
            Open Gallery
          </CardButton>
        </Card>
      );
    }
    return (
      <Card>
        <CardPhoto srcSet={url} />
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
        <CardLink href={link}>Go to Site</CardLink>
      </Card>
    );
  }
}
