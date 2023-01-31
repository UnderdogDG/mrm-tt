import { createGlobalStyle } from 'styled-components';

export const theme = {
    color: {
        primary: '',
        secondary: '',
    },

    header:{
        size: '30px',
        weight: '600'
    },

    container: {
        color: '#fffde7'
    },

    form: {
        border: {
            color: "#e0e0e0",
            width: "1px"

        }
    },

    input:{
        border: {
            color: '#c0ca33',
            width: '1px'
        },
        bg: '#FFF'
    },

    button:{
        bg: '#c0ca33',

    }
}

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: Montserrat, Roboto, sans-serif;
        font-weight: normal;
        background-color: #fafafa;
    }

    *{
        box-sizing: border-box;
    }
`;