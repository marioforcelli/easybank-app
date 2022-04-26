import { createGlobalStyle } from 'styled-components'
import { Colors as c } from './constants'


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0%;
        padding: 0;
        box-sizing: border-box;

    }

    *, button, html{
        font-family: 'Public Sans', sans-serif;
        font-size: 18px;
    }

    button {
        background: linear-gradient(45deg, ${c.primary.limeGreen}, ${c.primary.brightCyan});
        border: none;
    }


    html, body, #root {
        height: 100%;
        margin: auto;
    }



`