import { styled } from './../../styles/theme.config.js'

export const Container = styled('div', {
  display        : 'flex',
  justifyContent : 'center',
  alignItems     : 'center',
  flexDirection  : 'column',
  height         : '100vh',
  width          : '110vw',
  zindex         : -1,
})

export const Content = styled('div', {
  display        : 'flex',
  justifyContent : 'center',
  flexDirection  : 'column',
  '@media only screen and (max-width : 600px)' : {
    margin       : '0 50px',
  }
})

export const TextSmall = styled('p', {
  color      : '$white',
  fontSize   : '$4',
  fontFamily : '$secondary',
  maxWidth   : '90vw',
  width      : 'fit-content',
  '@media only screen and (max-width : 600px)' : {
    fontSize : '$3',
  }
})

export const IconContainer = styled('div', {
  display : 'flex',
  margin  : '40px 0',
})

export const Icon = styled('a', {
  display   : 'flex',
  color     : '$font',
  margin    : '0 20px 0 0',
  '&:hover' :{
    color   : '$white',
  },
})

export const ButtonContainer = styled('div', {
  display : 'flex',
})

export const ButtonLink = styled('a', {
  margin         : '0 20px 0 0',
  outline        : 'none',
  display        : 'flex',
  textDecoration : 'none',
})

export const Button = styled('button', {
  background     : 'none',
  display        : 'flex',
  justifyContent : 'center',
  alignItems     : 'center',
  border         : 'none',
  color          : '$white',
  fontFamily     : '$code',
  fontSize       : '$1',
  width          : 'fit-content',
  padding        : 10,
  borderRadius   : 3,
  border         : '2px solid $secondary',
  fontWeight     : 'bold',
  transition : '0.4s',
  '@media only screen and (min-width : 600px)' : {
    '&:hover'    : {
      background : '$white',
      color      : '$black',
      border     : '2px solid $white',
    }
  }
})
