import { createGlobalStyle } from 'styled-components'

import { mtsFont } from './styles/fonts'

export const GlobalStyles = createGlobalStyle`
  ${mtsFont}
  
  body {
    font-family: 'Roboto', sans-serif;
  }
  
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }
`
