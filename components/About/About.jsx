import * as S from './About.style.js'
import favicon from './../../public/float.svg'
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
        <S.Header>
          About
        </S.Header>
        <S.Para>
          I am an undegraduate from National Institute of Technology, Jalandhar with an interest of learning new technologies and implementing them
          in real life.
        </S.Para>
        <S.Para>
          ..
        </S.Para>
        <S.Para>
          this is the about section of the website where i will tell you about myself
          this is the about section of the
        </S.Para>
        <S.Para>
          ..
        </S.Para>
        <S.Para>
          this is the about section of the website where i will tell you about myself
          this is the about section of the
        </S.Para>
      </S.Content>
      <div className = {"hideSmall"}>
            <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
              xFactor: 0.05,
              yFactor: 0.25,
              springSettings: {
              stiffness: 50,
              damping: 70
              }
            }}>
               <img src={favicon} alt="Parallax Layer" style = {{width : 400}}></img>
            </ParallaxMousemove.Layer>
      </div>
    </S.Container>
  )
}

export default About
