type TCompany = "ITBZ Inc" | "Panshilab" | "Prayers Connect" | "Airwrk";
type TMonth = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";
type TYear = 2021 | 2022 | 2023 | 2024 | 2025;
type TDurationStart = `${TMonth} ${TYear}`;
type TDurationEnd = `${TMonth} ${TYear}` | "Present";
type TDuration = `${TDurationStart} - ${TDurationEnd}`;

export type TExperience = {
  company: TCompany;
  position: string;
  responsibilities: string[];
  technologies: string[];
  duration: TDuration;
  location: string;
  additionalInfo?: string;
};

export const experiences: TExperience[] = [
  {
    company: 'ITBZ Inc',
    position: 'Fullstack Engineer',
    responsibilities: [
      "Build and maintain notification system using rabbitmq",
      'Building APIs with Nest.js.',
      'Building reusable UI components with react.js and typescript.',
      'Building shareable packages using Nx.dev',
      'Collaborating with team mates.',
    ],
    technologies: [
      "nx.dev",
      "rabbitmq",
      "signaldb",
      "socket.io",
      "tanstrck router",
      "ts-pattern",
      'jotai',
      'material ui',
      'nest.js',
      'postgresql',
      'react hook form',
      'tanstack query',
      'typeorm',
      'typescript',
      'zod'
    ],
    duration: 'August 2024 - Present',
    location: 'Florida, USA'
  },

  {
    company: 'Panshilab',
    position: 'Fullstack Engineer',
    responsibilities: [
      'Building reusable UI components with react.js and typescript.',
      'Building APIs with Nest.js.',
      'Building shareable packages in Turbo repo.',
      'Collaborating with team mates.'
    ],
    technologies: [
      'jotai',
      'material ui',
      'nest.js',
      'next.js',
      'postgresql',
      'react hook form',
      'turbo repo',
      'typeorm',
      'typescript',
      'zod'
    ],
    duration: 'November 2022 - August 2024',
    location: 'NYC, NY, USA'
  },
  {
    company: 'Prayers Connect',
    position: 'Team Lead, Project Web (Volunteer)',
    responsibilities: [
      'Helping hire interns, guiding them and training them.',
      'Working with team-mates.'
    ],
    technologies: [
      'jest',
      'jotai',
      'material ui',
      'next.js',
      'react query',
      'typescript'
    ],
    duration: 'November 2022 - Present',
    location: 'NYC, NY, USA'
  },
  {
    company: 'Airwrk',
    position: 'Frontend Engineer',
    responsibilities: [
      'Building UI interfaces with React.js.',
      'Code review.',
      'Maintaining clean code structure.',
      "Helping out team members when they're stuck."
    ],
    additionalInfo:
      "I've set the repository folder structure and coding conventions. Built custom hooks and modules (e.g API handers, file handlers, etc) / utility methods. Implemented and maintained Redux Toolkit Query to handle fetching data. Implemented and maintained the Redux Toolkit store.",
    technologies: [
      'formik',
      'git/github',
      'next.js',
      'react query',
      'react router dom',
      'react.js',
      'redux toolkit query',
      'redux toolkit',
      'tailwind css',
      'typescript',
      'zustand'
    ],
    duration: 'August 2022 - June 2023',
    location: 'Dhaka, Bangladesh'
  },
  {
    company: 'Prayers Connect',
    position: 'Software Engineer (Volunteer)',
    responsibilities: [
      'Developing UI interfaces, writing tests etc.',
      'Working with team-mates, guiding newcomers.',
      'Involved with the intern hiring process, reviewing projects & interviewing them.',
      'Involved with the QA team.'
    ],
    technologies: [
      'jest',
      'jotai',
      'material ui',
      'next.js',
      'react query',
      'typescript'
    ],
    duration: 'March 2022 - November 2022',
    location: 'NYC, NY, USA'
  },
  {
    company: 'Prayers Connect',
    position: 'Software Engineer Intern',
    responsibilities: [
      'Developed reusable UI components using Next.js & TypeScript.',
      'Reviewed codes.',
      'Integrated google maps api and created a map without using any google map library built for the React.js ecosystem.',
      'Fixed bugs.',
      'Added SSR for the pages.',
      'Reviewed codes on the daily basis, whenever there was/were any.',
      'Worked in an agile environment.',
      'Followed agile workflows.',
      'Attended weekly retrospective meetings.'
    ],
    additionalInfo:
      'I was involved in and responsible for writing unit tests, actively working with team-mates. Wrote unit tests for the components. I was also involved with the QA team. Helped my team to unblock themselves if there was any.',
    technologies: [
      'github ci/cd',
      'jest',
      'react-query',
      'sentry',
      'test-rail'
    ],
    duration: 'October 2021 - March 2022',
    location: 'NYC, NY, USA'
  }
];
