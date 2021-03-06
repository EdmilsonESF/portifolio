import html from '../assets/html.svg'
import certificateGostack from '../assets/certificado-gostack.png'
import certificateIgniteNodejs from '../assets/certificado-ignite-nodejs.png'
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
  DescriptionContainer,
  Techs,
  ContainerCertificate,
  Certificate,
  ProjectContainer,
  Projects,
  Project,
  TechUsed,
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
          <DescriptionContainer>
            <h1>Edmilson Fonseca</h1>
            <p>Desenvolvedor fullstack </p>
            <p>com conhecimento nas principais técnologias utilizadas na construção de aplicaçoes web. </p>
            <Techs>
              {info.techs.map(tech => (
                <img key={tech} src={tech}></img>
              ))}
            </Techs>

            <ContainerCertificate>
              <h2>Certificados</h2>
              <Certificate>
                <img src={certificateGostack} alt=""/>
                <img src={certificateIgniteNodejs} alt=""/>
              </Certificate>
            </ContainerCertificate>
            
          </DescriptionContainer>


          <ProjectContainer ref={projects}>
            <h2>Projetos</h2>
            <Projects>
              {info.projects.map(project => (
                <Project key={project.url} href={project.url}>
                  <img src={project.img}/>
                  <div> 
                    <strong>{project.name}</strong>
                    <p>{project.description}</p>
                    <TechUsed>
                      {project.techs.map(tech => (
                        <img key={tech} src={tech}></img>
                      ))}
                    </TechUsed>
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
            <a href={`mailto:${info.contact.email}`} >Email:{` `}{info.contact.email}</a>
            <a href={`https://web.whatsapp.com/send?phone=${info.contact.whatsapp}`}>whatsapp:{` `}{info.contact.whatsapp}</a>
            <a href={info.contact.github}>Git Hub</a>
          </div>
        </FooterContent>
      </Footer>

    </Container>
  )
}
