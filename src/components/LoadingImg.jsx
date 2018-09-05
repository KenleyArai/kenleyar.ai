import React from 'react';
import Img from 'react-image';
import Loading from './Loading';

const LoadingImg = ({ src }) => <Img src={[src]} loader={<Loading />} />;

export default LoadingImg;
