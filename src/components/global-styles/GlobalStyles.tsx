import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    font-family: 'Kanit', sans-serif;
    background: rgb(74,82,218);
    background: radial-gradient(circle, rgba(74,82,218,1) 0%, rgba(189,205,223,1) 100%);
    min-height: 90vh;
  }

`

export default GlobalStyles
