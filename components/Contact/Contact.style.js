import { styled } from './../../styles/theme.config.js'

export const Container = styled('div', {
  display          : 'flex',
  flexDirection    : 'column',
  margin           : '5em 5em',

  '@media only screen and (max-width : 600px)' : {
    justifyContent : 'center',
    alignItems     : 'center',
    margin : '2em 2em',
  }
})

export const Header = styled('h1', {
  display  : 'flex',
  width    : 'fit-content',
  margin   : '1em 0'
})

export const Content = styled('div', {
    display        : 'flex',
    justifyContent : 'space-between',
    alignItems     : 'center',
    marginTop      : '4em',
    '@media only screen and (max-width : 900px)' : {
      flexDirection : 'column',
      marginTop : 0,
    }
})

export const Left = styled('div', {
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  flexDirection : 'column',

})

export const EmailContainer = styled('div',{
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  flexDirection: 'column',
  margin : '20px 0',
})

export const Email = styled('div', {
  display : 'flex',
  justifyContent : 'space-between',
  fontFamily : '$secondary',
  color : '$font',
  fontSize : '$2',
  background : '$secondary',
  padding : '15px 0 15px 15px',
  borderRadius : 5,
  boxShadow: 'rgb(0 0 0 / 5%) 0px 5px 10px',
})

export const CopyButton = styled('button', {
  background : 'none',
  border : 'none',
  outline : 'none',
  color : '$font',
  margin : '0px 15px',
  '&:hover' : {
    color : '$white',
  },
  '&:active' : {
    transform : 'scale(0.9)'
  },
})

export const SVGContainer = styled('div', {
  display : 'flex',
  justifyContent : 'center',
})

export const FormContainer = styled('form', {
  display        : 'flex',
  justifyContent : 'center',
  alignItems     : 'center',
  flexDirection  : 'column',
  padding        : '2em 3em',
  marginRight : '5em',
  borderRadius   : 10,
  background     : '$primary_light',
  boxShadow: 'rgb(0 0 0 / 5%) 0px 5px 10px',
  '@media only screen and (max-width : 600px)' : {
    margin       : '2em 2em',
    padding      : '20px 20px',
  }
})

export const Para = styled('p', {
  color      : '$white',
  fontSize   : '$4',
  fontFamily : '$secondary',
  margin     : '15px 0',
  '@media only screen and (max-width : 600px)' : {
    fontSize : '$3',
   }
})


export const Input = styled('input' , {
  background   : '$secondary !important',
  padding      : 10,
  outline      : 'none',
  border       : 'none',
  color        : '$white',
  fontSize     : '$1',
  fontFamily   : '$code',
  width        : 400,
  margin       : '20px 0',
  borderRadius : 3,
  '@media only screen and (max-width : 600px)' : {
      width    : '80vw',
  }
})

export const TextArea = styled('textarea', {
  background   : '$secondary',
  border       : 'none',
  padding      : 10,
  outline      : 'none',
  color        : '$white',
  fontSize     : '$1',
  fontFamily   : '$code',
  width        : 400,
  margin       : '20px 0',
  borderRadius : 3,
  resize       : 'none',
  '@media only screen and (max-width : 600px)' : {
      width    : '80vw',
  }
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
  padding        : '12px 30px',
  margin         : '15px 0',
  borderRadius   : 3,
  border         : '2px solid $secondary',
  fontWeight     : 'bold',
  transition     : '0.4s',

  '@media only screen and (min-width : 600px)' : {
    '&:hover'    : {
      background : '$white',
      color      : '$black',
      border     : '2px solid $white',
    }
  }
})
