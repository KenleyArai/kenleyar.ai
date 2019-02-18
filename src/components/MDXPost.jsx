import React from 'react';
import MarkdownRenderer from 'react-markdown-renderer';

//import { importMDX } from 'mdx.macro';

//const Content = file_import => lazy(() => importMDX(file_import));

const Markdown = (title, markdown) => {
  return (
    <div>
      <h1>{title}</h1>
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
};

export default Markdown;
