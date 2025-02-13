export type TExperience = {
  company: string;
  position: string;
  responsibilities: string[];
  technologies: string[];
  duration: `${string} - ${string}`;
  location: string;
  additionalInfo?: string;
};

export const experiences: TExperience[] = [
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
      'Firebase',
      'Jotai',
      'Material UI',
      'Nest.js',
      'Next.js',
      'PostgreSQL',
      'React Hook Form',
      'Turbo repo',
      'TypeORM',
      'TypeScript',
      'Zod'
    ],
    duration: 'November 2022 - Present',
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
      'Jest',
      'Jotai',
      'Material UI',
      'Next.js',
      'React Query',
      'TypeScript'
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
      'Formik',
      'Git/Github',
      'Next.js',
      'React Query',
      'React Router DOM',
      'React.js',
      'Redux Toolkit Query',
      'Redux toolkit',
      'Tailwind CSS',
      'TypeScript',
      'Zustand'
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
      'Jest',
      'Jotai',
      'Material UI',
      'Next.js',
      'React Query',
      'TypeScript'
    ],
    duration: 'March 2022 - November 2020',
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
      'Github CI/CD',
      'Jest',
      'React-query',
      'Sentry',
      'Test-rail'
    ],
    duration: 'October 2021 - March 2022',
    location: 'NYC, NY, USA'
  }
];
