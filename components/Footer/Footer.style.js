import {styled} from './../../styles/theme.config.js'

export const Container = styled('div',{
  display         : 'flex',
  justifyContent  : 'space-between',
  alignItems      : 'center',
  margin          : '0 30px',
  '@media only screen and (max-width : 800px)' : {
    flexDirection : 'column',
  }
})

export const Content = styled('div',{
  display:'flex',
  justifyContent: 'center',
  alignItems : 'center',
  margin : '25px',
  '@media only screen and (max-width : 800px)' : {
    margin : '5px 20px',
  }
})

export const Text = styled('p', {
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  color : '$font',
  fontFamily : '$secondary',
  fontSize : '$3',
  margin : '0 30px 0 0',
  svg : {
    margin : '0 10px',
  },
  '@media only screen and (max-width : 800px)' : {
    fontSize : '$2',
    margin : '0 20px 0 0',
  },
  '@media only screen and (max-width : 450px)' : {
    fontSize : '$1',
    margin : '0 10px 0 0',
  }
})

export const Link = styled('a',{
  color : '$font',
  textDecoration : 'none',
  margin : '0 10px',

  '@media only screen and (min-width : 800px)' : {
    flexDirection : 'column',

    '&:hover' : {
      color : '$white',
      textDecoration : 'underline',
    }
  },

  '@media only screen and (max-width : 450px)' : {
    margin : '0 3px',
  }

})
