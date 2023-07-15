import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

// images from the asset folder in the image file
import {
  ticket,
  nextjs,
  invitation,
  products,
} from '../../assets/images'

// projects' id, name, stacks, icon and url data
export const projects = [
  {
    id: 1,
    name: 'Ticket',
    desc:
      'The Ticket part of a huge project(exwino.com) that you can add ticket, see ticket answers, have a chat with admin and remove the whole ticket',
    stack: 'React Js, Formik',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/soleymaniyasaman/ticket',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://soleymaniyasaman.github.io/ticket/',
    },
    imgUrl: ticket,
  },
  {
    id: 2,
    name: 'NextJS',
    desc: 'NextJS first page is created with TailwindCSS and NextJS',
    stack: 'Next JS, Tailwind CSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/soleymaniyasaman/Next_first_page',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://soleymaniyasaman.github.io/Next_first_page/',
    },
    imgUrl: nextjs,
  },
  {
    id: 3,
    name: 'Invitation Card',
    desc: 'An online invitation card that comprises information of the enterprise',
    stack: 'React JS, TailwindCSS',

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/soleymaniyasaman/invitation-card',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://soleymaniyasaman.github.io/invitation-card/',
    },
    imgUrl: invitation,
  },
  {
    id: 4,
    name: 'Product List',
    desc: 'A product list which handles POST, GET, DELETE, UPDATE',
    stack: 'React JS, Axios, Redux',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/soleymaniyasaman/Product-list',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://soleymaniyasaman.github.io/Product-list/',
    },
    imageUrl: products,
  }

  // {
  //   id: 5,
  //   name: 'Rest Country API',
  //   desc: 'A project that displays all information about a country',
  //   stack: 'React JS',
  //   gitHubUrl: {
  //     icon: <GrGithub />,
  //     url: 'https://github.com/Almarex-Web-Dev/rest-countries-api-project',
  //   },
  //   website: {
  //     icon: <TbWorld />,
  //     url: 'https://rest-countries-web-app-project.netlify.app/',
  //   },
  //   imgUrl: restCOuntry,
  // },
  // {
  //   id: 6,
  //   name: 'Huddle Landing Page',
  //   desc: 'A simple landing page website',
  //   stack: 'React js, SCSS',
  //   gitHubUrl: {
  //     icon: <GrGithub />,
  //     url: 'https://github.com/Almarex-Web-Dev/Huddle-landing-page',
  //   },
  //   website: {
  //     icon: <TbWorld />,
  //     url: 'https://huddle-website-project.netlify.app/',
  //   },
  //   imgUrl: huddle,
  // },
  // {
  //   id: 4,
  //   name: 'Hotel Booking Project',
  //   desc: 'A complicated project that enhanced my skills a lot',
  //   stack: 'React JS',
  //   gitHubUrl: {
  //     icon: <GrGithub />,
  //     url: 'https://github.com/Almarex-Web-Dev/React-booking-project',
  //   },
  //   website: {
  //     icon: <TbWorld />,
  //     url: 'https://react-booking-project.netlify.app/',
  //   },
  //   imgUrl:
  //     'https://cdn.dribbble.com/userupload/2512424/file/original-03f9f265f9a4adbd54644841930518a1.png?compress=1&resize=320x240&vertical=top',
  // },
  // {
  //   id: 2,
  //   name: 'Restaurant Website',
  //   desc: 'A Responsive restaurant website design with great UI Effect',
  //   stack: 'React JS',
  //   gitHubUrl: {
  //     icon: <GrGithub />,
  //     url: 'https://github.com/Almarex-Web-Dev/Restaurant-Website-project',
  //   },
  //   website: {
  //     icon: <TbWorld />,
  //     url: 'https://gericht-restaurant-website.netlify.app/',
  //   },
  //   imgUrl: gericht,
  // },
]
