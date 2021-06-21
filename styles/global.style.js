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
  },

  '.clear' : {
    display : 'none !important',
  },

})

export default globalStyle
