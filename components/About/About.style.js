import { styled } from './../../styles/theme.config.js'

export const Container = styled('div', {
  display        : 'flex',
  flexDirection : 'column',
  zindex         : -1,
  padding : '7em 3em',
  background : '$primary_light',
  '@media only screen and (max-width : 600px)' : {
    justifyContent : 'center',
    alignItems     : 'center',
  }
})

export const Content = styled('div', {
  display          : 'flex',
  flexDirection : 'column',
  '@media only screen and (max-width : 600px)' : {
    justifyContent : 'center',
    alignItems     : 'center',
  }
})

export const InnerContainer = styled('div', {
  display          : 'flex',
  '@media only screen and (max-width : 600px)' : {
    justifyContent : 'center',
    alignItems     : 'center',
  }
})

export const Header = styled('h1', {
  display  : 'flex',
  width    : 'fit-content',
  margin   : '1em 0'
})

export const Left = styled('div' , {
  display : 'flex',
  flexDirection  : 'column',
})

export const Para = styled('p', {
  color      : '$white',
  fontSize   : '$2',
  fontFamily : '$secondary',
  margin     : '1em 0',
})

export const ImageContainer = styled('div',{
    display        : 'flex',
    justifyContent : 'flex-end',
    alignItems     : 'center',
    img : {
      width : '80%',
    },
    '@media only screen and (max-width : 1000px)' : {
      img : {
      }
    }
})

export const Link = styled('a',{
  color : '$font',
  textDecoration : 'none',
  color : '$main',
  '@media only screen and (min-width : 800px)' : {
    flexDirection : 'column',

    '&:hover' : {
      textDecoration : 'underline',
    }
  },

  '@media only screen and (max-width : 450px)' : {
    margin : '0 3px',
  }

})
