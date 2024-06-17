
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Vivekumar",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://medium.com/@vivek.nbcc5083",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Vivekkumar",
  description: "Third Year Computer Science Student with Minor in Business ",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1GfI9O1Fkvfs4gHC72ajHjPA-Lq-5swdROJIUYhIX2zE/edit",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "Welcome to my digital hub! A driven individual passionate about bridging the realms of finance and technology.",
    "My primary focus lies at the intersection of finance and computer science. This website serves as a platform to showcase my diverse skill set, ranging from computer science to finance, and to share my journey of leveraging technology to revolutionize the financial landscape.",
    "Join me as I explore innovative solutions and strive to make a meaningful impact in these dynamic fields.",
  ],
}

export const work = {
  title: "What I Love",
  cards: [
    {
      title: "Financial and Business Data Analysis",
      description: "Comprehensive financial and business data analyses to drive strategic decision-making and enhance operational efficiency.",
      icons: null,
    },
    {
      title: "Web and Software Development",
      description: "I create responsive static websites and develop software applications.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Social Media Platform",
      description: "A digital web platform that can connect Dalhousie Community.",
      /*icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ]*/
    },
    /*{
      title: "QuranTalk",
      description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        },
      ]
    {
      title: "Canada House Price Forcast Simulator",
      description: "Simulator that dynamically processes real-time data from Statistics Canada and the Canada Mortgage and Housing Corporation.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/vtech5083/Projects/tree/main/Canada_House_Price",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Feel free to reach out directly by email at vv405080@dal.ca",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:vv405080@dal.ca",
      isPrimary: true,
    },
    /*{
      title: "Schedule Meeting",
      link: "https://topmate.io/hashirshoaeb",
      isPrimary: false,
    },*/
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Vivekkumar Dudhat | Computer Science | CFA Level 1 Candidate | TGIT",
  description: "Third Year Computer Science student with minor in Business at Dalhousie University",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@vivekkumardudhat",
  description: "Computer Science | Financial Analyst | Software and Web Developer",
  cards: [
    {
      title: "My website",
      link: "https://vivekkumardudhatportfolio.netlify.app",
    },
    /*{
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },*/
    {
      title: "My GitHub",
      link: "https://github.com/vtech5083",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/vivek-dudhat/",
    },
  ]
}