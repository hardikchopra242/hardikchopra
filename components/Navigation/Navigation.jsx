import { useState } from 'react'

import * as Icons from 'react-feather'
import * as S from './Navigation.style.js'

import Animation from 'react-animate-on-scroll'


const Elements = [
  {
    link: '/#home',
    title:'Home',
  },
  {
    link: '/#about',
    title:'About',
  },

  {
    link: '/#projects',
    title:'Projects',
  },
  {
    link: '/#contact',
    title:'Contact',
  },
  {
    link: '/',
    title:'Temp',
  },
]

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const ToggleMenu = () => {
    setMenu(state => !state)
  }

  return (
    <>
      {/*Navigation Bar */}

      <S.Nav>
        <S.Container>
          <h1>HC</h1>
          <S.MenuButton  onClick = {ToggleMenu}>
            <Icons.Menu color='#5A606B'/>
          </S.MenuButton>
          <S.LinkContainer>
            {Elements.map((value, key) => (
                  <S.Link key={key} href={value.link}>
                    {value.title}
                  </S.Link> ))}
            <S.ThemeButton>
              <Icons.Sun/>
            </S.ThemeButton>
          </S.LinkContainer>
        </S.Container>
      </S.Nav>


      {/*Menu Box for small size screens*/}
      <S.MenuContainer className = {menu ? '' : 'clear'} >
        <S.Menu>
          <S.Cross onClick = {ToggleMenu}>
            <Icons.XCircle color='#5A606B'/>
          </S.Cross>
          {Elements.map((value, key) => (
                <S.MenuLink key={key} href={value.link}  onClick ={ToggleMenu}>
                  {value.title}
                </S.MenuLink> ))}
        </S.Menu>
      </S.MenuContainer>
    </>
  )
}

export default Navigation
