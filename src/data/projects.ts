import type { TImage } from '@/lib/get-asset-path';
import type { IconType } from 'react-icons';
import type { ClassNameValue } from 'tailwind-merge';

export type TProject = {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  icon?: IconType;
  image?: string;
  imageFormat?: TImage;
  className?: ClassNameValue;
  additionalInfo?: string;
};

export const projects: TProject[] = [
  {
    title: 'Astro Portfolio',
    description:
      'This project is a portfolio website using Astro and Tailwind CSS and GSAP.',
    liveLink: 'https://sajjathossain-dev.vercel.app/',
    githubLink: 'https://sajjathossain-dev.vercel.app/',
    technologies: ['Astro', 'Tailwind', 'GSAP'],
    image: 'astro-portfolio',
    imageFormat: 'jpeg'
  },
  {
    title: 'Nvim NPM',
    description:
      'A Neovim plugin for JavaScript, TypeScript projects that provides a way to execute npm scripts without leaving the editor.',
    githubLink: 'https://github.com/sajjathossain/nvim-npm',
    technologies: ['lua', 'telescope'],
    image: 'nvim-npm',
    imageFormat: 'jpeg'
  },
  {
    title: 'Nvim Monorepos',
    description:
      'This is a simple file picker. It finds all the files matching a specific pattern of files in your sub directories and lists them using telescope.nvim.',
    githubLink: 'https://github.com/sajjathossain/nvim-monorepos',
    technologies: ['lua', 'telescope'],
    image: 'nvim-monorepos',
    imageFormat: 'jpeg'
  },
  {
    title: 'Posinic',
    description:
      "I worked on this project in my previous job. It's A POS application to manage your inventory and sales.",
    liveLink: 'https://posinic.com/',
    image: 'posinic',
    imageFormat: 'jpeg',
    technologies: ['Next.js', 'PostgreSQL', 'TypeScript', 'etc']
  },
  {
    title: 'PrayersConnect',
    description:
      'I work as volunteer at PrayersConnect. It is a website that helps people to find mosques and prayer centers in their area.',
    liveLink: 'https://prayersconnect.org/',
    image: 'prayersconnect',
    imageFormat: 'jpeg',
    technologies: ['Next.js', 'TypeScript', 'MaterailUI', 'etc']
  },
  {
    title: 'Airwrk',
    description:
      "I worked as a Frontend Developer at Airwork. It's a one stop talent shop.",
    image: 'airwork',
    imageFormat: 'jpeg',
    liveLink: 'https://app.airwrk.com/',
    technologies: ['React.js', 'TypeScript', 'MaterialUI', 'etc']
  }
];
