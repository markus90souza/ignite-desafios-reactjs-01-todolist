import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Inter, sans-serif';
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body, html, textarea, input, button {
    font-family: 'Inter';
  }

  body {
  background: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.gray100};
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

  button {
    cursor: pointer;
  }

`
