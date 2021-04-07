import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(165deg, rgba(192,192,192, 0.5), rgba(176,224,230, 0.7));
    }

    h1, li {
        font-family: 'Kiwi Maru', serif;
    }

`;

export default GlobalStyle;
