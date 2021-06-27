import * as S from './Contact.style.js'
import * as Icons from 'react-feather'
import img from './../../public/mail.svg'
import { copyToClipboard } from "copy-lite"

const Contact = () => {
  return(
    <S.Container id = "contact">
      <S.Header> Let's Talk </S.Header>
      <S.Content>
        <S.Left>
          <S.SVGContainer className = {"hideMedium"} >
            <img src = {img} width = {250}/>
          </S.SVGContainer>
          <S.EmailContainer>
            <S.Para>Or Mail Me</S.Para>
            <S.Email>
              hardikchopra242@gmail.com
              <S.CopyButton
              onClick={() => copyToClipboard("hardikchopra242@gmail.com")}
              >
                <Icons.Clipboard />
              </S.CopyButton>
            </S.Email>
          </S.EmailContainer>
        </S.Left>
        <S.FormContainer
          action="https://formspree.io/f/mknkbdar"
          autocomplete = "off"
          method="POST"
        >
          <S.Para> Send me a message 😃 </S.Para>
          <S.Input
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <S.Input
            style = {{textTransform : 'capitalize'}}
            placeholder="Name"
            type="text"
            name="name"
            required
          />
          <S.TextArea
            placeholder="Your Message"
            name="message"
            required
          />
          <S.Button
            as="button"
            type="submit"
            value="send"
          >
            Send
          </S.Button>
        </S.FormContainer>
      </S.Content>
    </S.Container>
  )
}

export default Contact
