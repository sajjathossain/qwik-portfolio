import type { IconType } from 'react-icons';
import { FaTwitter } from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import type { ClassNameValue } from 'tailwind-merge';

export type TSocilaLink = {
  title: string;
  link: string;
  icon: IconType;
  color: ClassNameValue;
};

export const socialLinks: TSocilaLink[] = [
  {
    title: 'GitHub',
    link: 'https://github.com/sajjathossain',
    icon: SiGithub,
    color: 'text-black dark:text-white'
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/sajjat_hossain_',
    icon: FaTwitter,
    color: 'text-blue-500'
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sajjathossainofficial/',
    icon: SiLinkedin,
    color: 'text-blue-800'
  },
  {
    title: 'Email',
    link: 'mailto:sajjathossain.official@gmail.com',
    icon: SiGmail,
    color: 'text-red-500'
  }
];
