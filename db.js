import css3 from './src/assets/techs/css3.svg'
import docker from './src/assets/techs/docker.svg'
import express from './src/assets/techs/express.svg'
import git from './src/assets/techs/git.svg'
import html5 from './src/assets/techs/html5.svg'
import javascript from './src/assets/techs/javascript.svg'
import mongodb from './src/assets/techs/mongodb.svg'
import mysql from './src/assets/techs/mysql.svg'
import nodejs from './src/assets/techs/nodejs.svg'
import npm from './src/assets/techs/npm.svg'
import postgresql from './src/assets/techs/postgresql.svg'
import react from './src/assets/techs/react.svg'
import redux from './src/assets/techs/redux.svg'
import typescript from './src/assets/techs/typescript.svg'
import yarn from './src/assets/techs/yarn.svg'
import nextjs from './src/assets/techs/nextjs.svg'

import landingpage from './src/assets/projects/landingpage.png'
import quiz from './src/assets/projects/quiz.png'
import gitexplorer from './src/assets/projects/gitexplorer.png'

const info = {
  techs: [
    css3, html5, javascript, typescript, react, nextjs, redux, nodejs, express, git, mongodb, mysql, postgresql, docker, npm, yarn
  ],
  projects : [
    {
      name: "DataWarehouse",
      description: "Landingpage fictícia de um banco de armazenamento de dados, totalmente responsiva ",
      img: landingpage,
      url: "https://landing-page-save-storage.vercel.app/",
      techs: [css3, html5, javascript, nextjs, react],
    },
    {
      name: "Quiz",
      description: "Um quiz criado durante um evento sobre NextJs e ReactJs. ",
      img: quiz,
      url: "https://quiz.edmilsonesf.vercel.app/",
      techs: [css3, html5, javascript, nextjs, react],
    },
    {
      name: "Github Explorer",
      description: "Explorador de repositorios, usando API publica do Github",
      img: gitexplorer,
      url: "https://github-explorer-alpha-rosy.vercel.app/",
      techs: [css3, html5, typescript, react],
    },
    
  ],
  contact: {
    email: "ef.edmilsonfonseca@gmail.com",
    whatsapp: "(12)99670-5285",
    github: "https://github.com/EdmilsonESF",
  }
}

export default info;