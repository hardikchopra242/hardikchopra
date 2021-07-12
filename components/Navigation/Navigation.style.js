import { styled } from './../../styles/theme.config.js'

export const Nav = styled('nav', {
  position       : 'fixed',
  display        : 'flex',
  alignItems     : 'center',
  justifyContent : 'center',
  zIndex         : 1000,
  top            : 0,
  left           : 0,
  background     : '$primary',
  height         : '6em',
  width          : '100%',
})

export const Container = styled('div', {
  display        : 'flex',
  justifyContent : 'space-between',
  alignItems     : 'center',
  width          : '70vw',
  '@media only screen and (max-width : 600px)' :{
    width          : '85%',
    justifyContent : 'space-around',
  },
})

export const Icon = styled('h1' , {
  fontSize : '$5',
})

export const LinkContainer = styled('div', {
  display   : 'flex',
  '@media only screen and (max-width : 600px)' :{
    display : 'none',
  }
})

export const Link = styled('a', {
  color          : '$font',
  fontSize       : '$3',
  textDecoration : 'none',
  margin         : '0 0.5em',
  fontFamily     : '$secondary',
  '&:hover' : {
    color   : '$white',
  },
})

export const ThemeButton = styled('button', {
  display        : 'flex',
  justifyContent : 'center',
  alignItems     : 'center',
  background     : 'none',
  border         : 'none',
  color          : '$font',
  '&:hover' : {
    color   : '$white',
  }
})

export const MenuContainer = styled('div',{
  position       : 'fixed',
  zIndex         : 999999,
  height         : '100vh',
  width          : '100vw',
  display        : 'flex',
  justifyContent : 'center',
  alignItems     : 'flex-start',
  background     : '#2A2F3440',
})

export const Menu = styled('div', {
  display        : 'flex',
  justifyContent : 'center',
  flexDirection  : 'column',
  height         : '300',
  width          : '300',
  zIndex         : 9999999,
  background     : '$primary',
  padding        : '0.5em 0 1.5em 0',
  marginTop      : '20vh',
  borderRadius   : '5px',
})

export const MenuLink = styled('a', {
  color          : '$font',
  fontSize       : '$3',
  textDecoration : 'none',
  margin         : '0.5em 1.5em',
  width          : '200px',
  textAlign      : 'center',
  fontFamily     : '$primary',
})

export const MenuButton = styled('button',{
  display    : 'none',
  background : 'none',
  border     : 'none',
  '@media only screen and (max-width : 600px)' : {
    display  : 'block',
  }
})

export const Cross = styled('button', {
  background : 'none',
  border     : 'none',
  textAlign  : 'right',
  padding    : '0 0.5em',
})
