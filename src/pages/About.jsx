import React, { Component } from 'react';
import addAPICall from 'HOC/addAPICall';
import LoadingImg from '../components/LoadingImg';

class About extends Component {
  render() {
    let { data } = { ...this.props };

    return (
      <div>
        <h1>About Page</h1>
        {data.about.map(card => {
          return (
            <div key={card.key}>
              <LoadingImg src={card.src} />
              <h3>{card.name}</h3>
              <p>{card.desc}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const AboutPage = addAPICall(About, 'http://localhost:9000/about');

export default AboutPage;
