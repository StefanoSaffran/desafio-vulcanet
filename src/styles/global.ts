import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #00A6CE;
    --secondary: #43B998;
    --tertiary: rgba(0, 0, 0, 0.8);
    --quaternary: #4A507B;
    --quinary: #222;
    --senary: #F5F5F5;

    --background: #E5E5E5;
    --buttonBackground: #f4f7fc;
    --white: #fff;
    --gray: #999;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root, body, html {
    height: 100vh;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: var(--background-color);
    color: var(--text-color);
  }

  *, body, input, button, input::placeholder, textarea::placeholder {
    font-family: Lato, Roboto, Arial, Helvetica, sans-serif;
    border: 0;
  }

  input::placeholder, textarea::placeholder {
    color: #A0A0B2;
  }

  h1, h2, h3, h4, h5, h5, strong {
    color: var(--title-color);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
