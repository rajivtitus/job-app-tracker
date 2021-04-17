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
          font-size: 1.95rem;
        }

        h4 {
          font-size: 1.45rem;
        }

        h5 {
          font-size: 1.25rem;
          color: gray;
        }

        p, li, label {
          font-size: 1.40rem;
          line-height: 145%; 
        }

        input, textarea, button {
          border: none;
          outline: none;
          font-family: 'Roboto', sans-serif;
          font-size: 1.35rem;
          padding: 0.45rem;
          border-radius: 0.5rem;
          &:focus {
            border-bottom: 1px solid gray;
          }
        }    

        button {
          cursor: pointer;
          font-weight: 600;
        }
    }
}

`;

export default GlobalStyle;
