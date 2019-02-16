import BannerContainer from './styled/BannerContainer';
import React from 'react';

const PageBanner = ({ header }) => {
  return <BannerContainer>{header}</BannerContainer>;
};

export default PageBanner;
