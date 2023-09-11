"use strict";
exports.__esModule = true;
// Image dimension ratios => 1.75
var projects = [
    {
        title: 'Amazon Clone',
        note: 'A full-stack e-commerce website inspired by the Amazon website',
        image: '/projects/amazon-clone.webp',
        imgDims: { width: '2760', height: '1577' },
        description: 'A Responsive Full-stack e-commerce website inspired by <a href="https://amazon.com" rel="noreferrer noopener" target="_blank">the amazon website</a>. Built with React, Redux, and Firebase. Including functionalities such as Creating/Signing in to an account, Adding items to the cart, Making payments and so on',
        stack: ['React', 'Redux', 'Firebase'],
        links: {
            github: 'https://github.com/okoyecharles/amazon-clone',
            live: 'https://clone-f50ae.web.app'
        }
    },
    {
        title: 'Lavish Cuisine',
        note: 'A meal-based website that gives you all the information you need about your favourite meals',
        image: '/projects/lavish-cuisine.webp',
        imgDims: {
            width: '2377',
            height: '1358'
        },
        description: 'A meal-based website that gives you all the information you need about your favourite breakfast, lunch and dinner. built with react-typescript & redux.',
        stack: ['React', 'Redux', 'TypeScript'],
        links: {
            github: 'https://github.com/okoyecharles/lavish-cuisine',
            live: 'https://lavish-cuisine.web.app'
        }
    },
    {
        title: 'Nethub',
        note: 'A Movie application that extracts information from the TV Maze API',
        image: '/projects/nethub.webp',
        imgDims: {
            width: '2337',
            height: '1335'
        },
        description: 'A Movie website that displays an arranged list of movies and related information on each one. A place to go when you need to get extra info and discuss with others on a movie.',
        stack: ['Webpack', 'JavaScript', 'TV Maze API'],
        links: {
            github: 'https://github.com/okoyecharles/Nethub',
            live: 'https://okoyecharles.github.io/Nethub'
        }
    },
    {
        title: 'Save A Child',
        note: 'A website focused on preserving the life of sick children',
        image: '/projects/save-a-child.webp',
        imgDims: {
            width: '2337',
            height: '1335'
        },
        description: 'Save The Child is a project I built around the theme of a non-profit organization brought together solely for giving the youth from different continents who have been inflicted mentally, physically or psychologically by the COVID-19 Pandemeic.',
        stack: ['Webpack', 'JavaScript'],
        links: {
            github: 'https://github.com/okoyecharles/save-a-child',
            live: 'https://okoyecharles.github.io/save-a-child'
        }
    },
    {
        title: 'Todo List',
        note: 'A Todo list website that saves user\'s tasks in Local Storage',
        image: '/projects/todo-list.webp',
        imgDims: {
            width: '2345',
            height: '1340'
        },
        description: 'A Todo list website created with HTML, Sass and JavaScript that saves user\'s tasks in Local Storage. This app also allows swapping/reordering of tasks implemented utilizing the Javascript Drag & Drop API',
        stack: ['JavaScript'],
        links: {
            github: 'https://github.com/okoyecharles/Todo-List',
            live: 'https://okoyecharles.github.io/Todo-Lis'
        }
    },
    {
        title: 'Portfolio v1',
        note: 'A website where you can learn about Okoye Charles and what he does',
        image: '/projects/portolio-v1.webp',
        imgDims: {
            width: '2751 ',
            height: '1572'
        },
        description: 'This is the first version of my portfolio, it served as a collection of my most recent, expertly crafted, and innovative projects, as well as a base of knowledge concerning the things I do.',
        stack: ['React', 'TypeScript', 'Sass'],
        links: {
            github: 'https://github.com/okoyecharles/portfolio',
            live: 'https://okoyecharles.netlify.app'
        }
    },
    {
        title: 'Space Traveler Hub',
        note: 'A web application that provides commercial and scientific space travel services',
        image: '/projects/space-traveler-hub.webp',
        imgDims: {
            width: '2835',
            height: '1620'
        },
        description: 'A web application for a company that provides commercial and scientific space travel services, utilizing information from the SpaceX API.',
        stack: ['React', 'Redux', 'SpaceX API'],
        links: {
            github: 'https://github.com/okoyecharles/space-travelers-hub',
            live: 'https://charles-space-travelers.netlify.app'
        }
    },
    {
        title: 'Decrypt',
        note: 'A crypto-based application that displays real-time data on cryptocurrencies and stocks',
        image: '',
        imgDims: {
            width: '',
            height: ''
        },
        description: 'A crypto-API based mobile application that displays real-time data on all crypto-currencies and stocks, also including a display page that gets main information for a single crypto currency.',
        stack: ['React', 'Redux', 'Sass'],
        links: {
            github: 'https://github.com/okoyecharles/decrypt',
            live: 'https://charles-decrypt.netlify.app'
        }
    },
    {
        title: 'Type Effect Library',
        note: 'A light-weight, open-source typing-effect library that enables potential users to add a typing effect to mere DOM elements',
        image: '',
        imgDims: {
            width: '',
            height: ''
        },
        descrription: 'A light-weight, open-source typing-effect library that enables potential users to add a typing effect to mere DOM elements, including features for optimizing typing behavior and speed',
        stack: ['JavaScript', 'HTML5'],
        links: {
            github: 'https://github.com/okoyecharles/Type-Effect-Library',
            live: 'https://okoyecharles.github.io/Type-Effect-Library'
        }
    }
];
exports["default"] = projects;
