import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Puja Chaudhury', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Puja Chaudhury',
  subtitle: 'I am a Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Puja Chaudhury. I am a Front End Engineer currently in Bangalore. I would like to think of myself as a motivated developer who loves to code and create beautiful and functional websites.',
  paragraphTwo: 'I am very fond of the Developer community and I try to learn new things in the devspace every day. I believe and contribute to open source as it helps me grow as a developer and I like to build in public as well. Currently I am attempting the #100daysOCode Challenge. You can track my progress on Twitter! ',
  paragraphThree: 'Frontend Skills: React, Javascript, jQuery',
  paragraphFour: 'Backend Skills: Nodejs, Expressjs',
  resume: 'https://github.com/catplotlib', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Stardew Valley',
    info: 'A mini-project developed from scratch showcasing information about the RPG game-Stardew Valley. Made completely in React and styled in CSS.',
    info2: '',
    url: 'https://stardew-valley.netlify.app/',
    repo: 'https://github.com/catplotlib/Stardew-Valley', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'BarTinder',
    info: 'A completely responsive and dynamic Full stack Express.js Webapp that recommends cocktails based on filters!',
    info2: '',
    url: 'https://bar-tinder.herokuapp.com/',
    repo: 'https://github.com/catplotlib/Bar-Tinder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Product Catalogue',
    info: 'A demo webapp to display and filter products based on their categories.',
    info2: '',
    url: 'https://my-shein-catalogue.netlify.app/',
    repo: 'https://github.com/catplotlib/ReactProductCatalogue', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Notebook styled Shopping List',
    info: 'A notebook-style shopping list app with edit and delete features, made in react.',
    info2: '',
    url: 'https://our-shopping-list.netlify.app/',
    repo: 'https://github.com/catplotlib/ReactShoppingList', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'contact.pujachaudhury@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/CatPlotLib',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@catplotlib',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/catplotlib/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/catplotlib',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
