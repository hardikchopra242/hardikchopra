import * as S from './Footer.style.js'
import * as Icons from 'react-feather'

const Footer = () => {

  return(
    <S.Container>
      <S.Content>
        <S.Text>
          Made with  <Icons.Heart />   +    <Icons.Coffee /> +
          <S.Link href="https://nextjs.org/" target="_blank">
            Next.js
          </S.Link>
        </S.Text>
      </S.Content>

      <S.Content>
        <S.Text>
          © 2021 &nbsp; Hardik Chopra
          </S.Text>
          <S.Link  href="https://github.com/hardikchopra242" target="_blank">
            <Icons.GitHub />
          </S.Link>
          <S.Link  href="https://www.linkedin.com/in/hardik-chopra-62b6771a8/" target="_blank">
            <Icons.Linkedin />
          </S.Link>
          <S.Link  href="" target="_blank">
            <Icons.Mail />
          </S.Link>
      </S.Content>
    </S.Container>
  )
}

export default Footer
