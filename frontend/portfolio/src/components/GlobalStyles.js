import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: white;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    /* transition: all 0.50s linear; */
  }

  .ml-10{
    margin-right: 10px;
  }
  .m-only {
    @media (min-width: 768px) {
      display:none !important;
    }
  }
  `
