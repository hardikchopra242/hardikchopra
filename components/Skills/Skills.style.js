import {styled} from './../../styles/theme.config.js'

export const Container = styled('div', {
  display        : 'flex',
  flexDirection : 'column',
  margin         : '5em 5em',
  '@media only screen and (max-width : 600px)' : {
    justifyContent : 'center',
    alignItems     : 'center',
    margin : '2em 2em',
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

export const Para = styled('p', {
  color      : '$white',
  fontSize   : '$2',
  fontFamily : '$secondary',
  margin     : '1em 0',
})

export const Header = styled('h1', {
  display  : 'flex',
  width    : 'fit-content',
  margin   : '1em 0'
})

export const CatContainer = styled('div' , {
  display : 'flex',
  flexDirection : 'column',
  '@media only screen and (max-width : 600px)' : {
    alignItems : 'center',
    justifyContent : 'center',
    textAlign : 'center',
  }
})

export const CatHeading = styled('h1' , {
  fontFamily : '$secondary',
  fontSize : '$3',
  margin : '1.5em 0 0 0',
})

export const IconContainer = styled('div' , {
  display : 'flex',
  flexWrap : 'wrap',
  '@media only screen and (max-width : 600px)' : {
    justifyContent : 'center',
    alignItems : 'center',
  }
})
export const Icon = styled('div' , {
  width : '3em',
  margin : '0.5em',
  transition : '0.3s',
  '@media only screen and (min-width : 600px)' : {
      '&:hover' : {
      transform : 'scale(1.1)',
    },
  }
})
