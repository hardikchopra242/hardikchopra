import * as S from './Contact.style.js'
import * as Icons from 'react-feather'

import { copyToClipboard } from "copy-lite"

import img from './../../public/mail.svg'

import Animation from 'react-animate-on-scroll'


const Contact = () => {
  return(
    <S.Container id = "contact">
      <Animation animateIn="animate__bounceInRight" animateOnce={true}>
        <S.Header> Let's Talk </S.Header>
      </Animation>
      <S.Content>
        <S.Left>
          <S.SVGContainer className = {"hideMedium"} >
            <img src = {img} width = {250}/>
          </S.SVGContainer>
          <S.EmailContainer>
            <S.Para>Or Mail Me</S.Para>
            <Animation animateIn="animate__flipInX" animateOnce={true} delay={200}>
              <S.Email>
                hardikchopra242@gmail.com
                <S.CopyButton
                onClick={() => copyToClipboard("hardikchopra242@gmail.com")}
                >
                  <Icons.Clipboard />
                </S.CopyButton>
              </S.Email>
            </Animation>
          </S.EmailContainer>
        </S.Left>
        <Animation animateIn="animate__zoomIn" animateOnce={true}>

        <S.FormContainer
          action="https://formspree.io/f/mknkbdar"
          autoComplete = "off"
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
        </Animation>
      </S.Content>
    </S.Container>
  )
}

export default Contact
