import React from 'react';
import MarkdownRenderer from 'react-markdown-renderer';

export default function Markdown(title, markdown) {
  return (
    <div>
      <h1>{title}</h1>
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
}
