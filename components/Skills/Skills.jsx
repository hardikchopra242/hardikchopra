import * as S from './Skills.style.js'

import Animation from 'react-animate-on-scroll'

import arduino from './../../public/skills/arduino.js'
import c from './../../public/skills/c.js'
import cpp from './../../public/skills/cpp.js'
import css from './../../public/skills/css.js'
import express from './../../public/skills/express.js'
import git from './../../public/skills/git.js'
import heroku from './../../public/skills/heroku.js'
import html from './../../public/skills/html.js'
import javascript from './../../public/skills/javascript.js'
import linux from './../../public/skills/linux.js'
import mysql from './../../public/skills/mysql.js'
import next from './../../public/skills/next.js'
import node from './../../public/skills/node.js'
import postgres from './../../public/skills/postgres.js'
import postman from './../../public/skills/postman.js'
import python from './../../public/skills/python.js'
import react from './../../public/skills/react.js'
import sass from './../../public/skills/sass.js'


const Skills = () => {

  const SkillMap = [
    {
      title : 'Programming',
      skills : [javascript, cpp, c, python],
    },

    {
      title : 'Development',
      skills : [react, next, node, express, sass, html, css,mysql, postgres, linux, git, heroku]
    },
  ]

  return(
    <div style={{display:'flex'}}>

    <S.Container id="skills">
      <Animation animateIn="animate__bounceInRight" animateOnce={true}>
        <S.Header>
          Skills
        </S.Header>
      </Animation>
      <S.Content>
        <Animation animateIn="animate__fadeInUp" animateOnce={true}>
        <S.Para>
          Have a look at my skillset 🚀
        </S.Para>
        </Animation>
        <S.CatContainer>
          {SkillMap.map((skill,index) => (
            <>
            <Animation animateIn="animate__flipInX" animateOnce={true} delay={200}>
              <S.CatHeading>
                {skill.title}
              </S.CatHeading>
              <S.IconContainer>
                {skill.skills.map(x => (
                  <S.Icon>
                   {x}
                  </S.Icon>
                ))}
              </S.IconContainer>
              </Animation>
            </>
          ))}
        </S.CatContainer>
      </S.Content>
    </S.Container>
    </div>
  )
}

export default Skills
