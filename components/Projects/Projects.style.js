import { styled } from './../../styles/theme.config.js'

export const Container = styled('div', {
  display        : 'flex',
  justifyContent : 'center',
  alignItems     : 'center',
  zindex         : -1,
  margin         : '5em 5em',
  '@media only screen and (max-width : 600px)' : {
    margin : '2em 2em',
  }
})

export const Content = styled('div', {
  display          : 'flex',
  flexDirection    : 'column',
  maxWidth         : '100vw'  ,

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

export const ProjectContainer = styled('div' , {
  display : 'flex',
  justifyContent : 'space-between',
  alignItems : 'flex-start',
  margin : '4em 2em',
  width : '100%',
})

export const ProjectInfo = styled('div' , {
  display : 'flex',
  justifyContent : 'flex-start',
  alignItems : 'flex-start',
  flexDirection : 'column',
  margin : '1.5em 2em',
  '@media only screen and (max-width : 600px)' : {
    justifyContent : 'center',
    alignItems : 'center'
  }
})

export const ProjectHeader = styled('h1', {
  fontSize : '$5',
  marginBottom : '0.5em',
})

export const Description = styled('p' , {
  fontFamily : '$secondary',
  color : '$white',
  '@media only screen and (max-width : 600px)' : {
    textAlign : 'center'
  }
})

export const Skillset = styled('div' , {
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  fontFamily : '$secondary',
  color : '$white',
})

export const SkillBox = styled('div' , {
    background : '$secondary',
    color : '$white',
    fontFamily : '$code',
    fontSize : '$1',
    margin : '2em 1em 2em 0',
    borderRadius : '3px',
    padding : '0.3em 0.5em',
    userSelect : 'none',
})

export const ButtonContainer = styled('div' , {
})

export const Button = styled('a' , {
  textDecoration : 'none',
  color : '$font',
  margin : '1em 1em 0 0',
  '&:hover' : {
    color : '$white'
  }
})

export const ProjectImage = styled('div' , {
})

export const Image = styled('img' , {
  borderRadius : '10px',
})
