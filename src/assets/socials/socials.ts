/// <reference types="vite-plugin-svgr/client" />

import Github from '../images/socials/github.svg?react';
import LinkedIn from '../images/socials/linkedin.svg?react';
import Telegram from '../images/socials/telegram.svg?react';
import { ISocial } from '../../types/Social';

export const socials: ISocial[] = [
  {
    image: Github,
    link: 'https://github.com/Oleksii-Mishchenko',
  },
  {
    image: LinkedIn,
    link: 'https://www.linkedin.com/in/oleksii-mishchenko',
  },
  {
    image: Telegram,
    link: 'https://t.me/alexmishch',
  },
];
