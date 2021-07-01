import * as S from './About.style.js'
import balloon from './../../public/float.svg'

import ParallaxMousemove from 'react-parallax-mousemove'
import Animation from 'react-animate-on-scroll'

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
       <Animation animateIn="animate__bounceInRight" animateOnce={true}>
        <S.Header> About </S.Header>
       </Animation>
       <Animation animateIn="animate__flipInX" animateOnce={true} delay={200}>
        <S.Para>
          <span role='img' aria-label='sayHello'> 👋 </span>{' '}
          Hey, I am a Full Stack Web Developer and Programmer from Punjab, India.
        </S.Para>
       </Animation>
       <Animation animateIn="animate__flipInX" animateOnce={true} delay={200}>
        <S.Para>
          I am an undegraduate
          <span role='img' aria-label='alma-matter'> 👨‍🎓 </span>{' '}
          from
          <S.Link> National Institute of Technology, Jalandhar </S.Link>
          pursuing majors in Instrumentation and Control Engineering
          and minor in Computer Science Engineering. <br />
          I love to write clean and efficient code <span role='img' aria-label='coding'> 👨🏼‍💻 </span>. <br />
          I have a great interest in learning new technologies and implementing them in real life.
        </S.Para>
       </Animation>
       <Animation animateIn="animate__flipInX" animateOnce={true} delay={200}>
        <S.Para>
          Apart from development I like to program microcontrollers
          <span role='img' aria-label='robo'> 🤖 </span>{' '}
          and also do competitive programming
          <span role='img' aria-label='idea'> 💡 </span>{' '}
        </S.Para>
      </Animation>
      </S.Content>
      <S.ImageContainer className = {"hideMedium"}>
       <img src={balloon} alt="Parallax Layer"></img>
      </S.ImageContainer>
    </S.Container>
  )
}

export default About
