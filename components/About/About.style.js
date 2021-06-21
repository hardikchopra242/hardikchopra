import { styled } from './../../styles/theme.config.js'

export const Container = styled('div', {

  display        : 'flex',
  justifyContent : 'center',
  alignItems     : 'center',
  zindex : -1,
  margin         : '100px 100px',
  '@media only screen and (max-width: 1024px)' : {
    margin       : '100px 0',
  },
})

export const Content = styled('div', {
  display       : 'flex',
  flexDirection : 'column',
  maxWidth      : '100vw',
  width         : 600,
  marginRight   : '200',
})

export const Header = styled('h1', {
  display  : 'flex',
  width    : 'fit-content',
  fontSize : '$5',
  margin   : '25px 0'
})

export const Para = styled('p', {
  color      : '$white',
  fontSize   : '$2',
  fontFamily : '$secondary',
  margin     : '15px 0'
})

export const ImageContainer = styled('div',{
  display : 'flex',
  width   : 300,

})
