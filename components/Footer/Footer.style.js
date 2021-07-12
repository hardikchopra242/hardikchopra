import {styled} from './../../styles/theme.config.js'

export const Container = styled('div',{
  display         : 'flex',
  justifyContent  : 'space-between',
  alignItems      : 'center',
  margin          : '0 2em',
  '@media only screen and (max-width : 800px)' : {
    flexDirection : 'column',
  }
})

export const Content = styled('div',{
  display:'flex',
  justifyContent: 'center',
  alignItems : 'center',
  margin : '2em',
  '@media only screen and (max-width : 800px)' : {
    margin : '0.5em 1.5em',
  },
  '@media only screen and (max-width : 450px)': {
    flexDirection : 'column'
  }
})

export const Text = styled('p', {
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  color : '$font',
  fontFamily : '$secondary',
  fontSize : '$3',
  marginRight : '2em',
  svg : {
    margin : '0 0.5em',
  },
  '@media only screen and (max-width : 800px)' : {
    fontSize : '$2',
    marginRight : '1em',
  },
  '@media only screen and (max-width : 450px)' : {
    fontSize : '$1',
    marginRight : '0.5em',
  }
})

export const Link = styled('a',{
  color : '$font',
  textDecoration : 'none',
  marginLeft : '0.5em',
  '@media only screen and (min-width : 800px)' : {
    flexDirection : 'column',
    '&:hover' : {
      color : '$white',
      textDecoration : 'underline',
    }
  },
  '@media only screen and (max-width : 450px)' : {
    margin : '0 0.5em',
  }

})

export const IconContainer = styled('div' , {
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  'a' : {
    margin : '0.5em '
  },
  '@media only screen and (max-width : 450px)' : {
    marginTop : '0.5em',
    fontSize : '$1',
  }
})
