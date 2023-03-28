import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { accent } from './theme';

const BodyStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 80px;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={accent}>
      <BodyStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
);
