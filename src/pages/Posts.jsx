import PageContainer from './../components/styled/PageContainer';
import React from 'react';
import PageBanner from 'components/PageBanner';
import Post from './Post';

const Posts = ({ match }) => {
  let P = Post('http://localhost:5000/post/' + match.params.post);

  return (
    <PageContainer>
      <PageBanner header={'Posts Page'} />
      <P />
    </PageContainer>
  );
};

export default Posts;
