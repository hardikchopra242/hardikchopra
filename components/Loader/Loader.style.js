import { styled , keyframes } from './../../styles/theme.config.js'

export const Container = styled('div', {
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  height : '100vh',
  width : '100vw',
  background : '$primary',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 10000,

})

export const Content = styled('div',{
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  width: '10rem',
  margin: 'auto',
  flexDirection: 'column',


})

const move = keyframes({
  '0% , 80%, 100%' : {
    boxShadow : '0 0 ',
    height : '4em',
  },

  '40%' : {
    boxShadow : '0 -2em' ,
    height : '5em',
  }
});

export const Load = styled('div', {
  color      : '#ba85fa',
  textIndent :' -9999em',
  margin     : '88px auto',
  position   : 'relative',
  fontSize   : '11px',
  '-webkit-transform' : 'translateZ(0)',
  '-ms-transform'     : 'translateZ(0)',
  transform           : 'translateZ(0)',
  '-webkit-animation-delay' : '-0.16s',
  animationDelay      : '-0.16s',

  '&,&:before, &:after ' : {
    background: '#ba85fa',
    '-webkit-animation': `${move} 1s infinite ease-in-out`,
    animation: `${move} 1s infinite ease-in-out`,
    width: '1em',
    height: '4em',
  },

  '&:after, &:before' : {
    position: 'absolute',
    top: 0,
    content: '',
  },

  '&:before' : {
    left: '-1.5em',
    '-webkit-animation-delay' : '-0.16s',
    animationDelay: '-0.16s',
  },

  '&:after' : {
    left : '1.5em',
    '-webkit-animation-delay' : '0.16s',
    animationDelay: '0.16s',
  }

})
