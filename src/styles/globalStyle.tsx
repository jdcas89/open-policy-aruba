import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Theme } from 'styled-system';

export const GlobalStyles = () => {
  return <Styles />;
};

const Styles = createGlobalStyle<{ theme: Theme }>`
  html {
   font-size: 100%;
  }
  body {
      padding:0;
      margin:0;
      box-sizing: border-box;
      height: 100%;
  } 
  
  a {
     text-decoration: none;
  }
`;
