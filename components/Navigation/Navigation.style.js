import { styled } from './../../styles/theme.config.js'

export const Nav = styled('div', {
  position : 'fixed',
  display : 'flex',
  alignItems: 'center',
  justifyContent : 'center',
  zindex : 999,
  top: 0,
  left: 0,
  right: 0,
  background: '$primary',
  height: 100,
  width: '100vw',
})

export const Container = styled('div', {
  display: 'flex',
  justifyContent : 'space-between',
  alignItems : 'center',
  width : '70vw',

  '@media only screen and (max-width : 600px)' :{
    width : '85%',
    justifyContent : 'space-around',
  },
})

export const LinkContainer = styled('div', {
  display : 'flex',
  '@media only screen and (max-width : 600px)' :{
    display : 'none',
  }
})

export const Link = styled('a', {
  color : '$font',
  fontSize : '$3',
  textDecoration : 'none',
  margin : '0 10px',
  fontFamily : '$secondary',
  '&:hover' : {
    color : '$white',
  },
})

export const ThemeButton = styled('button', {
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  background: 'none',
  border : 'none',
  margin: '0 15px',
  color : '$font',
  '&:hover' : {
    color : '$white',
  }
})

export const MenuContainer = styled('div',{
  position : 'fixed',
  zindex : 999999,
  height : '100vh',
  width : '100vw',
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  background : '#2A2F3490',
})

export const Menu = styled('div', {
  display : 'flex',
  justifyContent : 'center',
  flexDirection : 'column',
  height: '300',
  width : '300',
  zindex : 9999999,
  background : '$primary',
  padding: '10px 0',
  borderRadius : '5px',
})

export const MenuLink = styled('a', {
  color : '$font',
  fontSize : '$3',
  textDecoration : 'none',
  margin : '10px 30px',
  width: '200px',
  textAlign: 'center',
  fontFamily : '$primary',
})

export const MenuButton = styled('button',{
  display: 'none',
  background: 'none',
  border: 'none',
  '@media only screen and (max-width : 600px)' : {
    display: 'block',
  }
})

export const Cross = styled('button', {
  background: 'none',
  border: 'none',
  textAlign : 'right',
  padding : '0 10px',
})
