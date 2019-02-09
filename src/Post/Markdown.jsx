import React from 'react';
import MarkdownRenderer from 'react-markdown-renderer';

const Markdown = (title, markdown) => {
  return (
    <div>
      <h1>{title}</h1>
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
};

export default Markdown;
