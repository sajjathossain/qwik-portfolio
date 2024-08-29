export type TActiveSection =
  | 'about'
  | 'experiences'
  | 'skills'
  | 'projects'
  | 'blogs'
  | 'contact';

export type TNavItem = {
  title: string;
  href: string;
  active: TActiveSection;
  targetBlank?: boolean;
};
export const navItems: TNavItem[] = [
  {
    title: 'About',
    href: '#about',
    active: 'about'
  },
  {
    title: 'Experiences',
    href: '#experiences',
    active: 'experiences'
  },
  {
    title: 'Skills',
    href: '#skills',
    active: 'skills'
  },
  {
    title: 'Projects',
    href: '#projects',
    active: 'projects'
  },
  {
    title: 'Blog',
    href: 'blogs/',
    active: 'blogs',
    targetBlank: true
  },
  {
    title: 'Contact',
    href: '#contact',
    active: 'contact'
  }
];
