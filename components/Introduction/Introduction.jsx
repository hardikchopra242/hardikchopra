import * as Icons from 'react-feather'
import * as S from './Introduction.style.js'
import * as T from './TextLarge.style.js'

import "animate.css/animate.min.css";
import Animation from 'react-animate-on-scroll'

const Introduction = () => {
  return(
    <S.Container id = "home">
      <S.Content>
        <Animation animateIn="animate__fadeInUp" animateOnce={true} delay={1200}>
          <S.TextSmall>Hey ! &nbsp;I 'am </S.TextSmall>
        </Animation>
        <Animation animateIn="animate__bounceInRight" animateOnce={true} delay={1400}>
          <T.TextLarge data-letters="Hardik Chopra" > Hardik Chopra </T.TextLarge>
        </Animation>
        <Animation animateIn="animate__fadeInUp" animateOnce={true} delay={1600}>
          <S.TextSmall> A Programmer and a Web Developer </S.TextSmall>
        </Animation>
        <Animation animateIn="animate__fadeInUp" animateOnce={true} delay={1800}>
          <S.IconContainer>
            <S.Icon href = "https://github.com/hardikchopra242" target = '_blank'>
              <Icons.GitHub />
            </S.Icon>
            <S.Icon href = "https://www.linkedin.com/in/hardik-chopra-62b6771a8/" target = '_blank'>
              <Icons.Linkedin />
            </S.Icon>
            <S.Icon href="mailto:hardikchopra242@gmail.com" target = '_blank'>
              <Icons.Mail />
            </S.Icon>
          </S.IconContainer>
        </Animation>
          <S.ButtonContainer>
          <S.ButtonLink href = "#about">
            <Animation animateIn="animate__flipInX" animateOnce={true} delay={2000}>
              <S.Button>
                <span className='hideSmall'>More‎&nbsp;</span>
                About me
                <Icons.ChevronsDown
                  className = 'hideSmall'
                  style = {{width : '20px', margin: '0 0 0 10px'}}
                />
              </S.Button>
            </Animation>
          </S.ButtonLink>
            <S.ButtonLink href="https://drive.google.com/file/d/15wrxyonWLzS_cmAY3GOq_q7CnDpLrxjz/view?usp=sharing" target =' _blank'>
              <Animation
                animateIn="animate__flipInX"
                animateOnce={true}
                delay={2000}>
                <S.Button>
                  Resume
                  <Icons.FileText
                    className = 'hideSmall'
                    style = {{width : '20px', margin: '0 0 0 10px'}}
                  />
                </S.Button>
              </Animation>
            </S.ButtonLink>
          </S.ButtonContainer>
      </S.Content>
    </S.Container>
  )
}

export default Introduction
