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
  paragraphOne:
    'My name is Puja Chaudhury. I am a Front End Engineer currently in Bangalore. I would like to think of myself as a motivated developer who loves to code and create beautiful and functional websites.',
  paragraphTwo:
    'I am very fond of the Developer community and I try to learn new things in the devspace every day. I believe and contribute to open source as it helps me grow as a developer and I like to build in public as well. Currently I am attempting the #100daysOCode Challenge. You can track my progress on Twitter! ',
  paragraphThree: 'Frontend Skills: React, React Native, Javascript, jQuery, Gatsby, Next, Tailwind, SCSS',
  paragraphFour: 'Backend Skills: Nodejs, Expressjs, MongoDB, Python, Django',
  resume: 'https://pdfhost.io/v/bLzL0FE~i_Pujas_Resume_1.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project8.png',
    title: 'Newsletter (React+django)',
    info: 'A fullstack application that lets the users to join a newsletter by through their email address. Frontend is made in react and Tailwindcss and backend is made using Django Rest Framework.',
    info2: '',
    repo: 'https://github.com/catplotlib/Newsletter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project6.png',
    title: 'Aximos-The Adventure Game (React)',
    info: 'This is a choose your own story, text based game. Made completely in React and deployed using netlify. I used useState to set up the states of the players choices and carried them forward in their next choices.',
    info2: '',
    url: 'https://text-based-adventure-game.netlify.app/',
    repo: 'https://github.com/catplotlib/Adventure-based-Text-game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project7.png',
    title: 'The Movie Quiz (React-Native)',
    info: 'A simple app with minimal UI for a quiz application on movies.',
    info2: '',
    url: 'https://expo.dev/@catplotlib/moviequiz',
    repo: 'https://github.com/catplotlib/MovieQuiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Stardew Valley (React)',
    info: 'A mini-project developed from scratch showcasing information about the RPG game-Stardew Valley. Made completely in React and styled in CSS.',
    info2: '',
    url: 'https://stardew-valley.netlify.app/',
    repo: 'https://github.com/catplotlib/Stardew-Valley', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'BarTinder (ejs)',
    info: 'A completely responsive and dynamic Full stack Express.js Webapp that recommends cocktails based on filters!',
    info2: '',
    url: 'https://bar-tinder.herokuapp.com/',
    repo: 'https://github.com/catplotlib/Bar-Tinder', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Product Catalogue (React)',
    info: 'A demo webapp to display and filter products based on their categories.',
    info2: '',
    url: 'https://my-shein-catalogue.netlify.app/',
    repo: 'https://github.com/catplotlib/ReactProductCatalogue', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Notebook styled Shopping List (React)',
    info: 'A notebook-style shopping list app with edit and delete features, made in react.',
    info2: '',
    url: 'https://our-shopping-list.netlify.app/',
    repo: 'https://github.com/catplotlib/ReactShoppingList', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project5.png',
  //   title: 'Text Generator',
  //   info: 'A placeholder text generator where the user can set the number of paragraphs they need. Handled the edge cases as well! Used a sort of stitching effect as my CSS.',
  //   info2: '',
  //   url: 'https://lorem-ipsum-replacer.netlify.app/',
  //   repo: 'https://github.com/catplotlib/ReactText-Generator', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Medium',
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
