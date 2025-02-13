import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { AboutSection } from '~/components/sections';
import { ExperiencesSection } from '~/components/sections/experiences';
import { QwikSkills } from '~/integrations/react';

export default component$(() => {
  return (
    <>
      <AboutSection />
      <ExperiencesSection />
      <QwikSkills />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Sajjat Hossain',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ]
};
