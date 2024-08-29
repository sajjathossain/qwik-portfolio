import {
  SiAstro,
  SiCsswizardry,
  SiHtml5,
  SiJest,
  SiLua,
  SiNestjs,
  SiPostgresql,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
  SiZod
} from 'react-icons/si';
import { VscSymbolMethod } from 'react-icons/vsc';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import type { IconType } from 'react-icons';
import type { ClassValue } from 'class-variance-authority/types';

export type TSkill = {
  title: string;
  description?: string;
  level: number;
  link: string;
  icon: IconType;
  iconColor: ClassValue;
};

const row1: TSkill[] = [
  {
    title: 'Astro.js',
    description: 'The web framework for content-driven websites',
    level: 3.5,
    link: 'https://astro.build',
    icon: SiAstro,
    iconColor: 'text-rose-500'
  },
  {
    title: 'HTML',
    description: 'Hypertext Markup Language',
    level: 5,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: SiHtml5,
    iconColor: 'text-orange-500'
  },
  {
    title: 'CSS 3',
    description: 'Cascading Style Sheets',
    level: 4.5,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: SiCsswizardry,
    iconColor: 'text-yellow-500'
  },
  {
    title: 'Lua',
    description: 'Lua is a lightweight, multi-paradigm programming language',
    level: 4.5,
    link: 'https://www.lua.org',
    icon: SiLua,
    iconColor: 'text-blue-700'
  },
  {
    title: 'Typescript',
    description:
      'TypeScript is a strongly typed programming language that builds on top of JavaScript, giving you better tooling at any scale',
    level: 4,
    link: 'https://typescriptlang.org',
    icon: SiTypescript,
    iconColor: 'text-blue-500'
  },
  {
    title: 'React.js',
    description: 'JavaScript library for building user interfaces',
    level: 4,
    link: 'https://react.dev',
    icon: FaReact,
    iconColor: 'text-blue-500'
  },
  {
    title: 'Next.js',
    description: 'Next.js is a meta framework built on top of React.js',
    level: 4,
    link: 'https://nextjs.org',
    icon: RiNextjsFill,
    iconColor: 'text-slate-900 dark:text-white'
  },
  {
    title: 'Nest.js',
    description: 'Nest.js is a JavaScript backedend framework',
    level: 4,
    link: 'https://docs.nestjs.com',
    icon: SiNestjs,
    iconColor: 'text-red-500'
  },
  {
    title: 'Zod',
    description: 'Nest.js is a JavaScript backedend framework',
    level: 4,
    link: 'https://zod.dev',
    icon: SiZod,
    iconColor: 'text-blue-500'
  }
];

const row2: TSkill[] = [
  {
    title: 'PostgresQL',
    description:
      'postgresql is a powerful, open source object-relational database system',
    level: 3.5,
    link: 'https://postgresql.org',
    icon: SiPostgresql,
    iconColor: 'text-blue-500'
  },
  {
    title: 'Jest',
    description: 'Jest is a JavaScript testing framework',
    level: 4,
    link: 'https://jestjs.io',
    icon: SiJest,
    iconColor: 'text-orange-500'
  },
  {
    title: 'Redux Toolkit',
    description:
      'Redux Toolkit is a library for building Redux-based applications',
    level: 4.5,
    link: 'https://redux-toolkit.js.org',
    icon: SiRedux,
    iconColor: 'text-purple-500'
  },
  {
    title: 'Tailwind CSS',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces',
    level: 4,
    link: 'https://tailwindcss.com',
    icon: SiTailwindcss,
    iconColor: 'text-blue-500'
  },
  {
    title: 'Turbo Repo',
    description: 'Turbo Repo is a tool for managing your monorepo',
    level: 4,
    link: 'https://turborepo.org',
    icon: SiTurborepo,
    iconColor: 'text-rose-500'
  },
  {
    title: 'React query',
    description:
      'React query is a library for managing asynchronous data fetching in React',
    level: 4,
    link: 'https://react-query.tanstack.com',
    icon: SiReactquery,
    iconColor: 'text-rose-500'
  },
  {
    title: 'React Hook Form',
    description: 'React Hook Form is a library for building forms in React',
    level: 4,
    link: 'https://react-hook-form.com',
    icon: SiReacthookform,
    iconColor: 'text-blue-500'
  },
  {
    title: 'Agile',
    description: 'Agile is a methodology for managing software development',
    level: 4,
    link: 'https://agilemanifesto.org',
    icon: VscSymbolMethod,
    iconColor: 'text-yellow-500'
  }
];

export const skills = {
  row1,
  row2
};
