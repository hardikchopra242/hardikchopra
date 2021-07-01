import { styled } from './../../styles/theme.config.js'

export const Container = styled('div', {
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  width : '100vw',
  height : '85vh',
  flexDirection : 'column',
})

export const Content = styled('div',{
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  flexDirection : 'column',
  margin : '1rem auto',
})

export const Header = styled('h1', {
  fontSize : '$6',
})

export const Para = styled('p',{
  color : '$white',
  fontFamily : '$secondary',
  fontSize : '$3',
  textAlign : 'center',
  margin : '2em auto',
})

export const Link = styled('a',{
  textDecoration : 'none',
  color : '$font',
  '@media only screen and (min-width : 600px)' : {
    '&:hover' : {
      textDecoration : 'underline',
    }
  }

})
