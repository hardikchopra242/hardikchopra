import * as S from './Projects.style.js'
import * as Icon from 'react-feather'

import Animation from 'react-animate-on-scroll'

import Detectsy from './../../public/projects/Detectsy.png'
import RGBeX from './../../public/projects/RGBeX.png'
import Virtuo from './../../public/projects/Virtuo.png'

const Projects = () => {

  const ProjectMap = [
    {
      title : 'Detectsy',
      image : Detectsy,
      description : 'A Fullstack Face Detection Webapp',
      skills : ['React', 'Node', 'Express', 'Postgres'],
      link : 'http://detectsy.vercel.app/',
    },

    {
      title : 'RGBeX',
      image : RGBeX,
      description : 'An online tool to convert Hex and RGB values interchangeably',
      skills : ['Javascript', 'SASS'],
      link : 'https://hardikchopra242.github.io/RGBeX/',
    },

    {
      title : 'Virtuo',
      image : Virtuo,
      description : 'Play piano and drums together virtually using Virtuo',
      skills : ['Javascript', 'CSS'],
      link : 'https://hardikchopra242.github.io/Virtuo/',
    },
  ]

  return(
    <S.Container id="projects">
      <S.Content>
        <Animation animateIn="animate__bounceInRight" animateOnce={true}>
          <S.Header>
            Projects
          </S.Header>
        </Animation>
        {ProjectMap.map((project,index) => (
          <Animation animateIn="animate__fadeInUp" animateOnce={true}>
            <S.ProjectContainer key={index}>
              <S.ProjectInfo>
                <S.ProjectHeader> {project.title} </S.ProjectHeader>
                <S.Description> {project.description} </S.Description>
                <S.Skillset>
                  {project.skills.map(x => (
                    <S.SkillBox>
                      {x}
                    </S.SkillBox>
                  ))}
                </S.Skillset>
                <S.ButtonContainer>
                  <S.Button
                    href = {project.link}
                    target = '_blank'
                  >
                    <Icon.Link />
                  </S.Button>
                  <S.Button
                    href = {`https://github.com/hardikchopra242/${project.title}`}
                    target = '_blank'
                  >
                    <Icon.GitHub />
                  </S.Button>
                </S.ButtonContainer>
              </S.ProjectInfo>
              <S.ProjectImage>
                <S.Image
                  src = {project.image}
                  width = '100%'
                  className = 'hideMedium'
                />
              </S.ProjectImage>
            </S.ProjectContainer>
          </Animation>
        ))}
      </S.Content>
    </S.Container>
  )
}

export default Projects
