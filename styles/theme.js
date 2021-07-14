import { createGlobalStyle } from 'styled-components';

// Style values:
const buffer = 10;
const timing = '.15s';
const easing = 'ease-in-out';
const fontSize = 24;
const lineHeight = 18;

export const theme = {
  util: {
    buffer,
    radius: 4,
    timing,
    transition: `all ${timing} ${easing}`,
    zIndexTop: 3,
    zIndexMiddle: 2,
    zIndexBottom: 1,
    headerHeight: lineHeight*5,
    mobileHeaderHeight: lineHeight*3
  },
  breakpoint: {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 2000
  },
  color: {
    white: '#FFFFFF',
    black: '#22222A',
    gray: '#afafaf',
    lightGray: '#F7F8F9',
    blue: '#2F57E5',
    orange: '#FA9C2E',
    lightOrange: '#ffe1be',
    climateGreen: '#009681',
    innovationBlue: '#2F57E5',
    trustYellow: '#FFD600',
    impactBlue: '#A0CDDB',
    linkColor: '#e98dff',
    buildAqua: '#C0EAD8'
  },
  text: {
    size: fontSize,
    lineHeight: lineHeight,
    sizeMedium: fontSize * 2,
    lineHeightMedium: lineHeight * 2,
    sizeMediumMobile: fontSize * 1.5,
    lineHeightMediumMobile: lineHeight * 1.5,
    sizeLarge: fontSize * 2,
    lineHeightLarge: lineHeight * 5,
    sizeLargeMobile: fontSize * 2,
    lineHeightLargeMobile: lineHeight * 2,
    family: 'Soehne Buch, sans-serif',
    familyMedium: 'Soehne Halbfett, sans-serif',
    familyLight: 'Soehne Leicht, sans-serif',
    sizeSmall: 18
  }
};

// Global styles:
export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0 !important;
    -webkit-overflow-scrolling: touch;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${props => props.theme.text.family};
    color: ${props => props.theme.text.color};
    font-size: ${props => props.theme.text.size}px;
    font-weight: heavy;
  }
  * {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    font-family: ${({ theme }) => theme.text.family};
    text-decoration: none;
    color: ${({ theme }) => theme.color.linkColor};
    &:visited {
      color: ${({ theme }) => theme.color.linkColor};
    }
  }
`;

