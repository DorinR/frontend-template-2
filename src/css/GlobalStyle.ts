import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: aliceblue;
        font-family: 'Work Sans', sans-serif;
    }

    h1 {
        color: #1C2127;
    }

    .bp4-card {
        border-radius: 7px;
    }

    .bp4-button {
        border-radius: 5px;
    }

    // remove underline in navigation buttons
    a:hover {
        text-decoration: none;
    }

    // Kanban board
    div.ondragenter {
        border: 3px dotted #03B5AA;
        padding: 7px;
    }
`
