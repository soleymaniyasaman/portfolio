import React from 'react'

// react-icons
import { FiGrid, FiLinkedin } from 'react-icons/fi'
import { VscProject } from 'react-icons/vsc'
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
  BsGoogle,
} from 'react-icons/bs'

import { RiContactsLine, RiReactjsLine } from 'react-icons/ri'
import {
  SiSass,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiChartdotjs,
  SiSocketdotio,
  SiMaterialdesign
} from 'react-icons/si'

import { GrGithub, GrInstagram } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaGit } from 'react-icons/fa'

// sidebar menu functionality
const sideBarMenu = [
  {
    text: 'Home',
    icon: <FiGrid className="link-icon" />,
    url: '/portfolio',
  },
  {
    text: 'About',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/portfolio/about',
  },
  {
    text: 'Projects',
    icon: <VscProject className="link-icon" />,
    url: '/portfolio/project',
  },

  {
    text: 'Contacts',
    icon: <RiContactsLine className="link-icon" />,
    url: '/portfolio/contact',
  },

]
// social media icons
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: 'https://github.com/soleymaniyasaman ',
  },
  {
    icon: <GrInstagram className="icon switch__color" />,
    url: 'https://instagram.com/_yas__sol__?igshid=MzNlNGNkZWQ4Mg==',
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'https://www.linkedin.com/in/yasaman-soleymanizade/',
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
