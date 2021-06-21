import { styled } from './../../styles/theme.config.js'


export const TextLarge = styled('h1', {
  width    : 'fit-content',
  color    : '$white',
  fontSize : '$6',
  margin   : '30px 0',
  zindex  : -1,

  '@media only screen and (min-width : 601px)' : {



    '&:hover' : {
      position  : 'relative',
      color : '$white',
    },

    '&::after' : {
      content : "",
      position : 'absolute',
      height : '8px',
      width : '100%',
      top : '50%',
      marginTop : '-2px',
      right : '0',
      background : '$primary',
      '&::-webkit-transform': 'translate3d(-100%, 0, 0)',
      transform: 'translate3d(-100%, 0, 0)',
      '&::-webkit-transition': '-webkit-transform 0.4s',
      transition: 'transform 0.4s',
      '&::-webkit-transition-timing-function': 'cubic-bezier(0.7, 0, 0.3, 1)',
      'transition-timing-function': 'cubic-bezier(0.7, 0, 0.3, 1)',

    },

    '&:hover::after ' : {
      '-webkit-transform': 'translate3d(100%, 0, 0)',
      transform: 'translate3d(100%, 0, 0)',
    },

    '&::before': {
      content: 'attr(data-letters)',
      position: 'absolute',
      zindex: 2,
      overflow: 'hidden',
      color: '$main',
      background: 'linear-gradient(to bottom right, #BB85FA, #4802E5)',
       '-webkit-text-fill-color': 'transparent',
       '-webkit-background-clip': 'text',
      whiteSpace : 'nowrap',
      width: '0%',
      '-webkit-transition' : 'width 0.4s 0.2s',
      transition: 'width 0.4s 0.2s',
    },

    '&:hover::before' : {
      width: '100%',
    },
  },

  '@media only screen and (max-width : 600px)' : {
    fontSize : '$5',
  },

})
