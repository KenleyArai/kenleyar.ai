import React from 'react';
import MarkdownRenderer from 'react-markdown-renderer';
import addGETCall from 'HOC/addGETCall';
import StyledPostTitle from 'components/styled/PostTitle';
const MDPost = ({ data }) => {
  return (
    <React.Fragment>
      <StyledPostTitle>{data.title}</StyledPostTitle>
      <MarkdownRenderer markdown={data.post} />
    </React.Fragment>
  );
};

const MDPostGETCall = addGETCall(MDPost);

export default MDPostGETCall;
