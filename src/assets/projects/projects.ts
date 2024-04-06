/* eslint-disable max-len */
import soloAgency from '/src/assets/images/projects/soloagency.jpg';
import gadget from '/src/assets/images/projects/gadget.jpg';
import game from '/src/assets/images/projects/2048-game.jpg';
import air from '/src/assets/images/projects/air.jpg';
import olufsen from '/src/assets/images/projects/bang-olufsen.jpg';
import { IProject } from '../../types/Project';

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Solo agency',
    description:
      'The website for the real event agency. It was developed by a team of 4 specialists: front-end and back-end developers, designer and QA engineer.',
    detail: 'Team project',
    photo: soloAgency,
    info: {
      year: 2024,
      role: 'Front-end Developer',
      client: 'Solo Agency Lviv',
    },
    links: [
      {
        style: 'project',
        name: 'view project',
        path: 'https://soloagency.org/',
      },
      {
        style: 'github',
        name: 'see on github',
        path: 'https://github.com/Oleksii-Mishchenko/SoloAgency',
      },
    ],
  },

  {
    id: 2,
    name: 'E-commerce Gadget store',
    description:
      'The multi-page online store for selling phones, tablets, and accessories.',
    detail: 'Graduation project',
    photo: gadget,
    info: {
      year: 2023,
      role: 'Front-end Developer',
    },
    links: [
      {
        style: 'project',
        name: 'live demo',
        path: 'https://phone-catalog-oleksii-mishchenko.netlify.app',
      },
      {
        style: 'github',
        name: 'see on github',
        path: 'https://github.com/Oleksii-Mishchenko/phone_catalog',
      },
    ],
  },

  {
    id: 3,
    name: '2048 Game',
    description:
      'The game "2048" is a puzzle game where the player combines numbers to achieve higher values, aiming to reach the number 2048.',
    detail: 'Graduation project',
    photo: game,
    info: {
      year: 2023,
      role: 'Front-end Developer',
    },
    links: [
      {
        style: 'project',
        name: 'live demo',
        path: 'https://2048-game-oleksii-mishchenko.netlify.app',
      },
      {
        style: 'github',
        name: 'see on github',
        path: 'https://github.com/Oleksii-Mishchenko/2048_game',
      },
    ],
  },

  {
    id: 4,
    name: 'Air. Strategic agency',
    description:
      'This landing page showcases the fictitious Strategic Agency that offers a range of services with a focus on creativity and human relationships.',
    detail: 'Landing page',
    photo: air,
    info: {
      year: 2023,
      role: 'Front-end Developer',
    },
    links: [
      {
        style: 'project',
        name: 'live demo',
        path: 'https://air-landing-oleksii-mishchenko.netlify.app',
      },
      {
        style: 'github',
        name: 'see on github',
        path: 'https://github.com/Oleksii-Mishchenko/Air-strategic-agency',
      },
    ],
  },

  {
    id: 5,
    name: 'Bang & Olufsen',
    description:
      "This landing page presents Bang & Olufsen, showcasing its premium audio products and emphasizes the brand's commitment to delivering exceptional sound quality and innovative technologies.",
    detail: 'Landing page',
    photo: olufsen,
    info: {
      year: 2023,
      role: 'Front-end Developer',
    },
    links: [
      {
        style: 'project',
        name: 'live demo',
        path: 'https://bang-oluf-landing-oleksii-mishchenko.netlify.app',
      },
      {
        style: 'github',
        name: 'see on github',
        path: 'https://github.com/Oleksii-Mishchenko/bang-olufsen_landing',
      },
    ],
  },
];
