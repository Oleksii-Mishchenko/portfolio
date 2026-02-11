/// <reference types="vite-plugin-svgr/client" />

import CSS from '../images/skills/css.svg?react';
import HTML from '../images/skills/html.svg?react';
import JS from '../images/skills/js.svg?react';
import Typescript from '../images/skills/typescript.svg?react';
import React from '../images/skills/react.svg?react';
import NextJS from '../images/skills/next-js.svg?react';
import Redux from '../images/skills/redux.svg?react';
import Jotai from '../images/skills/jotai.svg?react';
import Sass from '../images/skills/sass.svg?react';
import Firebase from '../images/skills/firebase.svg?react';
import Jest from '../images/skills/jest.svg?react';
import Cypress from '../images/skills/cypress.svg?react';
import RHF from '../images/skills/react-hook-form.svg?react';
import Github from '../images/skills/github.svg?react';
import Figma from '../images/skills/figma.svg?react';
import Tailwind from '../images/skills/tailwind.svg?react';
import { ISkill } from '../../types/Skill';

export const skills: ISkill[] = [
  {
    image: HTML,
    label: 'HTML',
  },
  {
    image: CSS,
    label: 'CSS',
  },
  {
    image: Tailwind,
    label: 'Tailwind CSS',
  },
  {
    image: JS,
    label: 'Javascript',
  },
  {
    image: Typescript,
    label: 'Typescript',
  },
  {
    image: React,
    label: 'React',
  },
  {
    image: NextJS,
    label: 'Next.js',
  },
  {
    image: Redux,
    label: 'Redux',
  },
  {
    image: Jotai,
    label: 'Jotai',
  },
  {
    image: Sass,
    label: 'Sass',
  },
  {
    image: Firebase,
    label: 'Firebase',
  },
  {
    image: Jest,
    label: 'Jest',
  },
  {
    image: Cypress,
    label: 'Cypress',
  },
  {
    image: RHF,
    label: 'React hook form',
  },
  {
    image: Github,
    label: 'Github',
  },
  {
    image: Figma,
    label: 'Figma',
  },
];
