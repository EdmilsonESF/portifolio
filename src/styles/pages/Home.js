import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: rgb(18, 18, 20);
  
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 2;

  height: 60px;
  background: rgb(32, 32, 36);
  width: 100%;

`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 1200px;
  height: 100%;

  img {
    width: 90px;
  }
`;

export const Nav = styled.nav`
  width: 70%;
  max-width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #ffff;
  }

  button {
    background: none;
    color: #ffff;
    font-size: 17px;
    outline-style: none;
  }

  @media(max-width: 560px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: none;

  @media(max-width: 560px) {
    display:block;
  }
`;

export const ButtonMenu = styled.div`
  div {
    z-index: 40;
  }
`;

export const MenuContent = styled.div`
  width: 100%;
  height: 110vh;
  background-color: rgba(0,0,0,0.97);
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  padding: 60px 0 0 30px;

  a {
    font-size: 24px;
    line-height: 60px;
    color: #fff;
  }

  button {
    font-size: 24px;
    line-height: 60px;
    color: #fff;
    background: none; 
    display: flex;

    align-items: start;   
  }
`;


export const ContentContainer = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  max-width: 1200px;

`;

export const DescriptionContairner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 100px;

  h1 {
    margin-bottom: 90px;
  }

  p {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Techs = styled.div`
  width: 70%;
  margin-top: 30px;
  gap: 10px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));

  img {
    background: rgba(255, 255,255, 0.96);
    border-radius: 6px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;
  
  h2{
    font-size: 30px;
  }
`;

export const Projects = styled.div`
  width: 100%;
  margin-top: 70px;
  gap: 80px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  @media (max-width: 1000px) {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

export const Project = styled.a`
  display: flex;
  background: rgba(255, 255,255, 0.05);
  height: 300px;
  padding: 10px;
  border-radius: 8px;

  color: #ffff;

  >div {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    text-align: center;
    padding: 10px;
     justify-content: space-between;
  }

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TechUsed = styled.div`
  width: 90%;
  /* margin-top: 30px; */
  gap: 5px 5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));

  

  img {
    width: 25px;
    height: 25px;
    background: rgba(255, 255,255, 0.87);
    border-radius: 3px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 200px;

  height: 280px;
  width: 100%;
  background: rgb(32, 32, 36);

  border-radius: 40px 40px 0 0;

`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;

  width: 90%;
  max-width: 1200px;
  height: 100%;

  h3 {
    font-size: 30px;
  }

  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 80px;
    margin-top: 40px;

    justify-content: space-between;
    
    a {
    color: #fff;
    }
  }
`;
