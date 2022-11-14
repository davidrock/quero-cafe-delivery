import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple']};
  }
  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${(props)=> props.theme['base-title']};
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
  }
  h2 {
    font-family: 'Baloo 2', cursive;
    color: ${(props)=> props.theme['base-subtitle']};
    font-weight: 800;
    font-size: 32px;
  }
  h3 {
    color: ${(props)=> props.theme['base-subtitle']};
    font-weight: 700;
    font-size: 20px;
  }
  h4 {
    color: ${(props)=> props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 20px;
  }
`;