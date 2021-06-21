import "animate.css/animate.min.css";

import * as Icons from 'react-feather'
import * as S from './Introduction.style.js'
import * as T from './TextLarge.style.js'

const Introduction = () => {
  return(
    <S.Container id = "home">
      <S.Content>
          <S.TextSmall>Hey ! &nbsp;I 'am </S.TextSmall>
          <T.TextLarge data-letters="Hardik Chopra" > Hardik Chopra </T.TextLarge>
          <S.TextSmall> A Programmer and a Web Developer </S.TextSmall>
          <S.IconContainer>
            <S.Icon href = "https://github.com/hardikchopra242" target = '_blank'>
              <Icons.GitHub />
            </S.Icon>
            <S.Icon href = "https://www.linkedin.com/in/hardik-chopra-62b6771a8/" target = '_blank'>
              <Icons.Linkedin />
            </S.Icon>
            <S.Icon>
              <Icons.Mail />
            </S.Icon>
          </S.IconContainer>
          <S.ButtonContainer>
          <S.ButtonLink href = "#about">
            <S.Button>
              More About me
              <Icons.ChevronDown style = {{width : '20px', margin: '0 0 0 7px'}}/>
            </S.Button>
          </S.ButtonLink>
            <S.ButtonLink href="https://drive.google.com/file/d/15wrxyonWLzS_cmAY3GOq_q7CnDpLrxjz/view?usp=sharing" target =' _blank'>
              <S.Button>
                Resume
                <Icons.FileText style = {{width : '20px', margin: '0 0 0 7px'}}/>
              </S.Button>
            </S.ButtonLink>
          </S.ButtonContainer>
      </S.Content>
    </S.Container>
  )
}

export default Introduction
