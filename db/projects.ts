// Image dimension ratios => 1.75
const projects = [
  {
    title: 'Buggo',
    note: 'A real-time issue tracking software. For efficient management and tracking of software issues.',
    image: '/projects/buggo.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'A real-time issue tracking software. For efficient management and tracking of software issues.',
    stack: ['Next.js', 'Redux', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/okoyecharles/buggo',
      live: 'https://buggo.vercel.app',
    },
  },
  {
    title: 'Amazon Clone',
    note: 'An extensively-featured, full-stack Amazon clone.',
    image: '/projects/amazon-clone.webp',
    imgDims: { width: '1380', height: '788.5' },
    description: 'A full-stack Amazon clone. Including functionalities such as user authentication, managing state using the cart, and payments.',
    stack: ['React', 'Redux', 'Firebase'],
    links: {
      github: 'https://github.com/okoyecharles/amazon-clone',
      live: 'https://clone-f50ae.web.app',
    },
  },
  {
    title: 'Lavish Cuisine',
    note: 'A food-based website, which presents you with all the information you need about your favourite meals.',
    image: '/projects/lavish-cuisine.webp',
    imgDims: {
      width: '2377',
      height: '1358',
    },
    description: 'A food-based website, which presents you with all the information you need about your favourite meals.',
    stack: ['React', 'Redux', 'TypeScript'],
    links: {
      github: 'https://github.com/okoyecharles/lavish-cuisine',
      live: 'https://lavish-cuisine.web.app',
    }
  },
  {
    title: 'Nethub',
    note: 'An informational movie website. A categorised grid of movie titles, ratings, descriptions, and more.',
    image: '/projects/nethub.webp',
    imgDims: {
      width: '2337',
      height: '1335',
    },
    description: 'An informational movie website. A categorised grid of movie titles, ratings, descriptions, and more.',
    stack: ['Webpack', 'JavaScript', 'TV Maze API'],
    links: {
      github: 'https://github.com/okoyecharles/Nethub',
      live: 'https://okoyecharles.github.io/Nethub',
    },
  },
  {
    title: 'Save A Child',
    note: 'A project built on the theme of supporting children around the world. Children who have suffered injuries, diseases, and poverty.',
    image: '/projects/save-a-child.webp',
    imgDims: {
      width: '2337',
      height: '1335',
    },
    description: 'A project built on the theme of supporting children around the world. Children who have suffered injuries, diseases, and poverty.',
    stack: ['Webpack', 'JavaScript'],
    links: {
      github: 'https://github.com/okoyecharles/save-a-child',
      live: 'https://okoyecharles.github.io/save-a-child',
    },
  },
  {
    title: 'To-do List',
    note: 'A fully functional to-do list. It utilises local storage, and the drag-and-drop API in saving, and reordering todos.',
    image: '/projects/todo-list.webp',
    imgDims: {
      width: '2345',
      height: '1340',
    },
    description: 'A fully functional to-do list. It utilises local storage, and the drag-and-drop API in saving, and reordering todos.',
    stack: ['JavaScript', 'HTML5'],
    links: {
      github: 'https://github.com/okoyecharles/Todo-List',
      live: 'https://okoyecharles.github.io/Todo-List',
    },
  },
  {
    title: 'Portfolio v1',
    note: 'My first portfolio.',
    image: '/projects/portolio-v1.webp',
    imgDims: {
      width: '2751 ',
      height: '1572',
    },
    description: 'My first portfolio.',
    stack: ['React', 'TypeScript', 'Sass'],
    links: {
      github: 'https://github.com/okoyecharles/portfolio',
      live: 'https://okoyecharles.github.io/portfolio'
    }
  },
  {
    title: 'Space Traveler Hub',
    note: 'A web application that provides commercial and scientific space travel services.',
    image: '/projects/space-traveler-hub.webp',
    imgDims: {
      width: '2835',
      height: '1620'
    },
    description: 'A web application that provides commercial and scientific space travel services.',
    stack: ['React', 'Redux', 'SpaceX API'],
    links: {
      github: 'https://github.com/okoyecharles/space-travelers-hub',
      live: 'https://charles-space-travelers.netlify.app'
    }
  },
  {
    title: 'Type Effect Library',
    note: 'A light-weight, open-source typing-effect library. It enables users to add typing effects to DOM elements.',
    image: '/projects/type-effect-library.webp',
    imgDims: {
      width: '2300',
      height: '1314'
    },
    description: 'A light-weight, open-source typing-effect library that enables users to add typing effects to DOM elements.',
    stack: ['JavaScript', 'HTML5'],
    links: {
      github: 'https://github.com/okoyecharles/Type-Effect-Library',
      live: 'https://okoyecharles.github.io/Type-Effect-Library'
    }
  },
  {
    title: 'Decrypt',
    note: 'An informational crypto application. It displays the latest data—retrieved from an API—on crypto-currencies.',
    image: '/projects/decrypt.webp',
    imgDims: {
      width: '2880',
      height: '1645'
    },
    description: 'AAn informational crypto application. It displays the latest data—retrieved from an API—on crypto-currencies.',
    stack: ['React', 'Redux', 'Sass'],
    links: {
      github: 'https://github.com/okoyecharles/decrypt',
      live: 'https://charles-decrypt.netlify.app'
    }
  },
];

export type projectType = typeof projects[0];

export default projects
