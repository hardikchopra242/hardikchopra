import { styled } from './../../styles/theme.config.js'

export const Container = styled('div', {
  display        : 'flex',
  margin         : '5em 5em',
  '@media only screen and (max-width : 600px)' : {
    justifyContent : 'center',
    alignItems     : 'center',
    margin : '2em 2em',
  }
})

export const Content = styled('div', {
  display          : 'flex',
  flexDirection    : 'column',
  maxWidth         : '100vw'  ,
  '@media only screen and (max-width : 900px)' : {
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
  margin : '4em 0em',
  width : '100%',

  '@media only screen and (max-width : 900px)' : {
    justifyContent : 'center',
    alignItems     : 'center',
    flexDirection : 'column',
    width : '100%',
    margin : '2em 0',

  }
})

export const ProjectInfo = styled('div' , {
  display : 'flex',
  justifyContent : 'flex-start',
  alignItems : 'flex-start',
  flexDirection : 'column',
  background : '$primary_light',
  padding  : '2em',
  height : '100%',
  width : '50%',
  zIndex : 99,
  borderRadius : '10px',
  boxShadow: 'rgb(0 0 0 / 5%) 0px 5px 10px',

  '@media only screen and (max-width : 900px)' : {
    justifyContent : 'center',
    alignItems : 'center',
    width : '100%',
    padding : '1em',
  },
  '@media only screen and (min-width : 900px)' : {
    transform : 'translate(3em, -3em)',
  },
})

export const ProjectHeader = styled('h1', {
  fontSize : '$5',
  marginBottom : '0.5em',
  fontFamily : '$secondary'
})

export const Description = styled('p' , {
  fontFamily : '$secondary',
  color : '$white',
  paddingRight : '5em',
  '@media only screen and (max-width : 900px)' : {
    textAlign : 'center',
    paddingRight : '1em',
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
    boxShadow: 'rgb(0 0 0 / 2%) 0px 2px 5px',
})

export const ButtonContainer = styled('div' , {

})

export const Button = styled('a' , {

  textDecoration : 'none',
  color : '$font',
  margin : '1em 1em 0 0',
  '@media only screen and (min-width : 900px)' : {
    '&:hover' : {
      color : '$white',
    }
  }
})

export const ProjectImage = styled('div' , {
  zIndex : 999,
  width : '50vw',
  boxShadow: 'rgb(0 0 0 / 5%) 0px 5px 10px',
  transition : '0.3s',
  '@media only screen and (min-width:900px)': {
    '&:hover' : {
      transform : 'translateY(-1em)',
    }
  }
})

export const Image = styled('img' , {
  borderRadius : '10px',
  userSelect : 'none',
})
