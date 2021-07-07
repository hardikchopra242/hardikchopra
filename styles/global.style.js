import { global, lightTheme } from './theme.config.js'

const globalStyle = global({

  '*' : {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },

  html : {
    overflowX : 'hidden',
  },

  body : {
    background: '$primary',
    overflowX : 'hidden',
  },

  '::selection' : {
    background : '#ba85fa50',
    color : '$white',
  },

  img : {
    userSelect : 'none',
  },

'input:-webkit-autofill ,   input:-webkit-autofill:hover , input:-webkit-autofill:focus, input:-webkit-autofill:active' : {
 '-webkit-box-shadow': '0 0 0 30px #34393E inset !important',
 '-webkit-text-fill-color' : '#efefef',
},

  'body::-webkit-scrollbar' : {
    width : 12,
  },

  '*:hover::-webkit-scrollbar' : {

   },

  'body::-webkit-scrollbar-track' : {
    background : '#5A606B',
  },

  'body::-webkit-scrollbar-thumb' : {
    background : '$secondary',
    borderRadius : '2px',
    border : '2px solid #5A606B',
  },

  'body::-webkit-scrollbar-thumb:hover' : {
    background : '$secondary',
  },

  'code, pre' : {
    fontFamily: '$code',
  },

  h1 : {
    color:'$main',
    fontFamily: '$primary',
    userSelect : 'none',
    fontSize : '$6'
  },

  '.clear' : {
    display : 'none !important',
  },

  '.hideSmall' : {
    '@media only screen and (max-width : 600px)' : {
      display : 'none',
    },
  },

  '.hideMedium' : {
    '@media only screen and (max-width : 900px)' : {
      display : 'none !important',
    },
  },

})

export default globalStyle
