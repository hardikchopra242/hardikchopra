import { createCss } from "@stitches/react";

export const { styled, css, global, getCssString, theme, keyframes } = createCss({
    theme: {
      colors: {
        black          : '#030303',
        white          : '#efefef',
        primary        : '#0c0e10',
        secondary      : '#34393E',
        font           : '#777f8d',
        main           : '#ba85fa',
      },
      fonts: {
        primary  : 'Raleway, sans-serif',
        secondary: 'Poppins,sans-serif',
        code     : 'Fira Code, monospace',
      },
      fontSizes: {
        1: '14px',
        2: '18px',
        3: '20px',
        4: '24px',
        5: '36px',
        6: '54px',
      },
    }
})

export const lightTheme = theme('light-theme  ', {
    colors:{
      primary        : 'red',
      secondary      : 'blue',
      font           : '#6a67ee',
      main           : '#ba85fa',
    },
})

export const Layout = styled('div',{
  position: 'relative',
  overflow: 'hidden'
})
