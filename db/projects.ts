// Image dimension ratios => 1.75
const projects = [
  {
    title: 'Amazon Clone',
    note: 'A full-stack e-commerce website inspired by the Amazon website',
    image: '/projects/amazon-clone.webp',
    imgDims: { width: '2760', height: '1577' },
    description: 'A Responsive Full-stack e-commerce website inspired by the Amazon website. Built with React, Redux, and Firebase. Including functionalities such as Creating/Signing in to an account, Adding items to the cart, Making payments and so on',
    stack: ['React', 'Redux', 'Firebase'],
    links: {
      github: 'https://github.com/OkoyeCharles/amazon-clone',
      live: 'https://clone-f50ae.web.app/',
    },
  },
  {
    title: 'Recipe App',
    note: 'A full-stack application that allows users to create and manage recipes.',
    image: '/projects/recipe-app.webp',
    imgDims: { width: '2465', height: '1409' },
    description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    stack: ['Rails', 'Ruby', 'JavaScript'],
    links: {
      github: 'https://github.com/OkoyeCharles/rails-recipe-app',
      live: 'https://frozen-mesa-28960.herokuapp.com/',
    },
  },
  {
    title: 'Lavish Cuisine',
    note: 'A meal-based website that gives you all the information you need about your favourite meals.',
    image: '/projects/lavish-cuisine.webp',
    imgDims: {
      width: '2377',
      height: '1358',
    },
    description: 'A meal-based website that gives you all the information you need about your favourite breakfast, lunch and dinner. built with react-typescript & redux.',
    stack: ['React', 'Redux'],
    links: {
      github: 'https://github.com/OkoyeCharles/lavish-cuisine',
      live: 'https://lavish-cuisine.web.app/',
    }
  },
  {
    title: 'Nethub',
    note: 'A Movie application that extracts information from the TV Maze API.',
    image: '/projects/nethub.webp',
    imgDims: {
      width: '2337',
      height: '1335',
    },
    description: 'A Movie WebApp that extracts information from the TV Maze API. Including functionalities like comments, likes, search, categories, and extra app info.',
    stack: ['Webpack', 'JavaScript', 'TV Maze API'],
    links: {
      github: 'https://github.com/OkoyeCharles/Nethub',
      live: 'https://okoyecharles.github.io/Nethub/',
    },
  },
  {
    title: 'Wallet Detective',
    note: 'A full-stack application where you can manage your budget, where you have a list of payments associated with a category',
    image: '/projects/wallet-inspector.webp',
    imgDims: { width: '2742', height: '1576' },
    description: 'A full-stack application where you can manage your budget: you have a list of payments associated with a category, so you can see how much money you spent and on what',
    stack: ['Rails', 'Ruby', 'Javascript'],
    links: {
      github: 'https://github.com/OkoyeCharles/rails-budget-app',
      live: 'https://sleepy-hamlet-84522.herokuapp.com/',
    },
  },
  {
    title: 'Save A Child',
    note: 'A website built with JavaScript... focused on preserving the life of children who suffered during the COVID-19 outbreak.',
    image: '/projects/save-a-child.webp',
    imgDims: {
      width: '2337',
      height: '1335',
    },
    description: 'Save The Child is a project I built around the theme of a non-profit organization brought together solely for giving the youth from different continents who have been inflicted mentally, physically or psychologically by the COVID-19 Pandemeic.',
    stack: ['Webpack', 'JavaScript'],
    links: {
      github: 'https://github.com/OkoyeCharles/save-a-child',
      live: 'https://okoyecharles.github.io/save-a-child/',
    },
  },
  {
    title: 'Todo List',
    note: 'A Todo list website created with HTML, Sass and JavaScript that saves user\'s tasks in Local Storage.',
    image: '/projects/todo-list.webp',
    imgDims: {
      width: '2345',
      height: '1340',
    },
    description: 'A Todo list website created with HTML, Sass and JavaScript that saves user\'s tasks in Local Storage. This app also allows swapping/reordering of tasks implemented utilizing the Javascript Drag & Drop API',
    stack: ['JavaScript'],
    links: {
      github: 'https://github.com/OkoyeCharles/Todo-List',
      live: 'https://okoyecharles.github.io/Todo-List/',
    },
  },
];

export type projectType = typeof projects[0]

export default projects
