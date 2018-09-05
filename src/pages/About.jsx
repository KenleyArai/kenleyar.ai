import React from 'react';
import addAPICall from 'HOC/addAPICall';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

const AboutPage = addAPICall(About, 'http://localhost:9000/about');

export default AboutPage;
