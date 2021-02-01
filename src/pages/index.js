import html from '../assets/html.svg'
import { Turn as Hamburger } from 'hamburger-react'
import info from '../../db'

import { 
  Container,
  Header,
  ContentHeader,
  Nav,
  Menu,
  MenuContent,
  ButtonMenu,
  ContentContainer,
  Content,
  DescriptionContairner,
  Techs,
  ProjectContainer,
  Projects,
  Project,
  Footer,
  FooterContent,
} from '../styles/pages/Home'

export default function Home() {
  const [isOpen, setOpen] = React.useState(false)
  const projects = React.useRef(null)
  const resume = React.useRef(null)
  const contact = React.useRef(null)

  const projectScroll = () => {
    setOpen(false)
    projects.current.scrollIntoView()
  } 

  const resumeScroll = () => {
    setOpen(false)
    resume.current.scrollIntoView()
  }

  const contactScroll = () => {
    setOpen(false)
    contact.current.scrollIntoView()
  }

  return (
    <Container>
      <Header >
        <ContentHeader>
          <img src={html} alt=""/>
          <Nav>
            <button onClick={resumeScroll}>Resumo</button>
            <button onClick={projectScroll}>Projetos</button>
            <button onClick={contactScroll}>Contato</button>
            <a href={info.contact.github}>Git Hub</a>
          </Nav>
          <Menu>
            <ButtonMenu>
              <Hamburger
                toggled={isOpen} toggle={setOpen}
              />
            </ButtonMenu>
            {isOpen
             &&
            <MenuContent>
              <button onClick={resumeScroll}>Resumo</button>
              <button onClick={projectScroll}>Projetos</button>
              <button onClick={contactScroll}>Contato</button>
              <a href={info.contact.github}>Git Hub</a>
            </MenuContent>}
          </Menu>
        </ContentHeader>
      </Header>

      <ContentContainer  ref={resume}>
        <Content>
          <DescriptionContairner>
            <h1>Edmilson Fonseca</h1>
            <p>Desenvolvedor fullstack </p>
            <p>com conhecimento nas principais técnologias utilizadas na construção aplicaçoes web. </p>
            <Techs>
              {info.techs.map(tech => (
                <img src={tech}></img>
              ))}
            </Techs>
          </DescriptionContairner>


          <ProjectContainer ref={projects}>
            <h2>Projetos</h2>
            <Projects>
              {info.projects.map(project => (
                <Project href={project.url}>
                  <img src={project.img}/>
                  <div> 
                    <strong>{project.name}</strong>
                    <p>{project.description}</p>
                  </div>
                </Project>
              ) )}
            </Projects>
          </ProjectContainer>
          
        </Content>
      </ContentContainer>

      <Footer ref={contact}>
        <FooterContent>
          <h3>Contato</h3>
          <div>
            <p>Email:{` `}{info.contact.email}</p>
            <p>whatsapp:{` `}{info.contact.whatsapp}</p>
            <a href={info.contact.github}>Git Hub</a>
          </div>
        </FooterContent>
      </Footer>

    </Container>
  )
}
