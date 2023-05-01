import { project_1, project_2, project_3, project_4 } from "../assets/project";

export const navLinks = [
  {
    id: "/",
    title: "Home",
    icon: "streamline:interface-home-1-home-house-map-roof",

  },
  {
    id: "about",
    title: "About",
    icon: "streamline:interface-user-profile-focus-close-geometric-human-person-profile-focus-user",
  },
  {
    id: "project",
    title: "Project",
    icon: "streamline:interface-setting-tool-box-box-briefcase-tool-settings",
  },
  {
    id: "articles",
    title: "Articles",
    icon: "streamline:entertainment-news-paper-newspaper-periodical-fold-content",
  },
  {
    id: "#",
    icon: "line-md:sunny-outline-to-moon-loop-transition",
    class: "-top-36 group-hover:translate-y-[5.5rem]"
  },
];

export const sosMed = [
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/edi-winarno",
    icon: "uil:linkedin-alt",
    color: "#14b8a6",
    margin: "right-7"
  },
  {
    id: "github",
    link: "https://github.com/WinzArt",
    icon: "uil:github-alt",
    color: "#14b8a6",
    margin: "right-2"
  },
  {
    id: "instagram",
    link: "https://www.instagram.com/winz.art_",
    icon: "il:instagram",
    color: "#14b8a6",
    margin: "right-1"
  },
  {
    id: "mail",
    link: "mailto:edie.winz@gmail.com",
    icon: "mingcute:mail-send-line",
    color: "#14b8a6",
    margin: "right-4"
  },
]

export const darkMode = [
  {
    id: "darkMode",
    icon: "line-md:sunny-outline-to-moon-loop-transition",
    class: "dark:flex hidden"
  },
  {
    id: "lightMode",
    icon: "line-md:moon-to-sunny-outline-loop-transition",
    class: "dark:hidden flex "
  },
]

// export const darkMode = [
//   {
//     id: 'toggleMode',
//     icon: theme === 'dark' ? 'line-md:moon-to-sunny-outline-loop-transition' : 'line-md:sunny-outline-to-moon-loop-transition',
//     class: '',
//   },
// ];

export const menuIcon = [
  {
    id: "closeMenu",
    icon: "line-md:close-to-menu-transition",
  },
  {
    id: "openMenu",
    icon: "line-md:menu-to-close-transition",
  },
]

export const project = [
  {
    id: "project_1",
    image: project_1,
    title: "Digital Invitation",
    desc: "Web"
  },
  {
    id: "project_2",
    image: project_2,
    title: "PCB Design",
    desc: "Design"
  },
  {
    id: "project_3",
    image: project_3,
    title: "Dashboard UI",
    desc: "Web"
  },
  {
    id: "project_4",
    image: project_4,
    title: "Arduino Project",
    desc: "Microcontroller"
  },
  {
    id: "project_5",
    image: project_2,
    title: "Title 5",
    desc: "Desc"
  },

]