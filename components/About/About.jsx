import * as S from './About.style.js'
import balloon from './../../public/float.svg'
import ParallaxMousemove from 'react-parallax-mousemove'

const About = () => {

  const style = {
    bgLayerStyle: {
      position: 'relative',
      right : 0,
      zindex :99,
      transform: 'translate(35%, 0)',
    }
  }

  return (
    <S.Container id="about">
      <S.Content>
        <S.Header> About </S.Header>
        <S.Para>
          I am an undegraduate from National Institute of Technology, Jalandhar pursuing majors in Instrumentation and Control Engineering and minor in Computer Science Engineering.
          I have a great interest of learning new technologies and implementing them in real life.
        </S.Para>
        <S.Para>
           I am lean towards Full Stack Web Development and Competitive Programming as well
        </S.Para>
        <S.Para>
          Apart from programming I also like to program microcontrollers and tinker with them
        </S.Para>
      </S.Content>
      <div className = {"hideMedium"} >
              <S.ImageContainer>
               <img src={balloon} alt="Parallax Layer"></img>
              </S.ImageContainer>
      </div>
    </S.Container>
  )
}

export default About
