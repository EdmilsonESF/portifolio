import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

    @media (max-width: 768px) {

    }
  }

  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background: #F6FAFD;
    font-family: Lora, Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    color: #fff;
  }
`