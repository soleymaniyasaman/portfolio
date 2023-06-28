import React from 'react'

// react-icons
import { FiGrid, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { ImBlogger } from 'react-icons/im'
import { VscProject } from 'react-icons/vsc'
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
  BsGoogle,
} from 'react-icons/bs'

import { RiContactsLine, RiReactjsLine } from 'react-icons/ri'
import {
  SiFuturelearn,
  SiSass,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiChartdotjs,
  SiSocketdotio,
  SiMaterialdesign
} from 'react-icons/si'

import { GrGithub, GrTwitter, GrInstagram } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript, IoLogoGameControllerB } from 'react-icons/io'
import { FaGit } from 'react-icons/fa'

// sidebar menu functionality
const sideBarMenu = [
  {
    text: 'Home',
    icon: <FiGrid className="link-icon" />,
    url: '/',
  },
  {
    text: 'About',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/about',
  },
  {
    text: 'Projects',
    icon: <VscProject className="link-icon" />,
    url: '/project',
  },
  {
    text: 'Blog',
    icon: (
      <ImBlogger
        className="link-icon"
        style={{ fill: 'current', stroke: 'current' }}
      />
    ),
    url: '/blog',
  },
  {
    text: 'Contacts',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contact',
  },
  {
    text: 'Tutorials',
    icon: <SiFuturelearn className="link-icon" />,
    url: '/tutorial',
  },
  {
    text: 'Gaming',
    icon: <IoLogoGameControllerB className="link-icon" />,
    url: '/gaming',
  },
]
// social media icons
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: 'https://github.com/Almarex-Web-Dev ',
  },
  {
    icon: <FiYoutube className="icon switch__color" />,
    url: 'https://www.youtube.com/c/AlmarexWebDev',
  },
  {
    icon: <GrTwitter className="icon switch__color" />,
    url: 'https://twitter.com/almarexwebdev',
  },
  {
    icon: <GrInstagram className="icon switch__color" />,
    url: 'https://www.instagram.com/almarexwebdev1/',
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'https://www.linkedin.com/in/almarex/',
  },
]
// skills card
const skillSet = [
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: 'JAVASCRIPT',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: 'SASS',
    url: '',
  },

  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: 'BOOTSTRAP',
    url: '',
  },
  {
    icon: <SiTailwindcss className="skills-icon switch__color" />,
    spanText: 'TAILWIND CSS',
    url: 'https://tailwindcss.com/',
  },
  {
    icon: <SiMaterialdesign className="skills-icon switch__color" />,
    spanText: 'MATERIAL DESIGN',
    url: 'https://m3.material.io/',
  },
  {
    icon: <SiChartdotjs className="skills-icon switch__color" />,
    spanText: 'CHART JS',
    url: 'https://www.chartjs.org/',
  },

  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: 'GIT',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: 'GITHUB',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: 'REACT JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
  },
  {
    icon: <SiNextdotjs className="skills-icon switch__color" />,
    spanText: 'NEXT JS',
    url:
      'https://nextjs.org/',
  },
  {
    icon: <SiSocketdotio className="skills-icon switch__color" />,
    spanText: 'SOCKET IO',
    url:
      'https://socket.io/',
  },

  {
    icon: <SiRedux className="skills-icon switch__color" />,
    spanText: 'Redux',
    url: 'https://redux.js.org/introduction/getting-started',
  },

  {
    icon: <BsGoogle className="skills-icon switch__color" />,
    spanText: 'Googling',
    url: 'https://google.com',
  },
]

export { sideBarMenu, socialIcons, skillSet }
