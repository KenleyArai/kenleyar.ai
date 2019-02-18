import React from 'react';
import MarkdownRenderer from 'react-markdown-renderer';
import addGETCall from 'HOC/addGETCall';

const MDPost = ({ data }) => {
  return (
    <React.Fragment>
      <h1>{data.title}</h1>
      <MarkdownRenderer markdown={data.post} />
    </React.Fragment>
  );
};

const MDPostGETCall = addGETCall(MDPost);

export default MDPostGETCall;
