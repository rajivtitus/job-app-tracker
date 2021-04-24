import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

html {
    @media (min-width:1925px) and (max-width:2560px) {
      font-size: 115%;
      }

    @media (max-width:1750px){
      font-size: 90%;
    }

    @media (max-width:1550px){
      font-size: 78%;
    }

    ::-webkit-scrollbar {
      width: 10px;
      }
    ::-webkit-scrollbar-thumb {
      background: #6a7a8b;
      border-radius: 5px;
      &:hover {
        background: #475360;
        }
      }
    ::-webkit-scrollbar-track {
      background: white;
      border-radius: 5px;
      }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #f3e6e8;
        background-image: linear-gradient(315deg, #f3e6e8 0%, #c0bec4 74%);

        h1 {
          font-size: 3rem;
        }

        h2 {
          font-size: 2.35rem;
        }

        h3 {   
          font-size: 1.75rem;
        }

        h4 {
          font-size: 1.45rem;
          font-weight: normal;
        }

        h5 {
          font-size: 1.25rem;
          color: #60666d;
        }

        p, li, label, select {
          font-size: 1.40rem;
          line-height: 135%; 
        }

        input, textarea, button {
          border: 1px solid transparent;
          outline: none;
          font-family: 'Roboto', sans-serif;
          font-size: 1.35rem;
          padding: 0.45rem;
          border-radius: 0.5rem;
          &:focus {
            border: 1px solid black;
          }
        }    

        button, select {
          cursor: pointer;
        }

        svg {
          margin-right: 0.5rem;
        }
    }
}

`;

export default GlobalStyle;
