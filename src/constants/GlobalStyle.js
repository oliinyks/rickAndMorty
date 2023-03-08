import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	 background-color: rgba(255, 255, 255, 1);
	 color: rgba(110, 121, 140, 1);
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
