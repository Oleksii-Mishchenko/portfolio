/// <reference types="vite-plugin-svgr/client" />

import CSS from '../images/skills/css.svg?react';
import HTML from '../images/skills/html.svg?react';
import JS from '../images/skills/js.svg?react';
import React from '../images/skills/react.svg?react';
import Redux from '../images/skills/redux.svg?react';
import Typescript from '../images/skills/typescript.svg?react';
import Sass from '../images/skills/sass.svg?react';
import VSCode from '../images/skills/vscode.svg?react';
import Git from '../images/skills/git.svg?react';
import Github from '../images/skills/github.svg?react';
import Figma from '../images/skills/figma.svg?react';
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
    image: JS,
    label: 'Javascript',
  },
  {
    image: React,
    label: 'React',
  },
  {
    image: Typescript,
    label: 'Typescript',
  },
  {
    image: Redux,
    label: 'Redux',
  },
  {
    image: Sass,
    label: 'Sass',
  },
  {
    image: VSCode,
    label: 'VS Code',
  },
  {
    image: Git,
    label: 'Git',
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
