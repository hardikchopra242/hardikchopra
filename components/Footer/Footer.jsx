import * as S from './Footer.style.js'
import * as Icons from 'react-feather'

const Footer = () => {

  return(
    <S.Container>
      <S.Content>
        <S.Text>
          Made with
          <Icons.Heart style={{width:'1.5em'}} />
          +
          <Icons.Coffee style={{width:'1.5em'}} />
          +
          <S.Link href="https://nextjs.org/" target="_blank">
            Next.js
          </S.Link>
        </S.Text>
      </S.Content>

      <S.Content>
        <S.Text>
          © 2023 &nbsp; Hardik Chopra
          </S.Text>
          <S.IconContainer>
          <S.Link  href="https://github.com/hardikchopra242" target="_blank">
          <Icons.GitHub style={{width:'1.5em'}} />
          </S.Link>
          <S.Link  href="https://linkedin.com/in/hardikchopra242" target="_blank">
          <Icons.Linkedin style={{width:'1.5em'}} />
          </S.Link>
          <S.Link  href="mailto:hardikchopra242@gmail.com" target="_blank">
          <Icons.Mail style={{width:'1.5em'}} />
          </S.Link>
          </S.IconContainer>
      </S.Content>
    </S.Container>
  )
}

export default Footer
