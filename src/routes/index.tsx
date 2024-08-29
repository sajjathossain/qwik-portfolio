import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { AboutSection } from '~/components/sections';
import { ExperiencesSection } from '~/components/sections/experiences';

export default component$(() => {
  return (
    <>
      <AboutSection />
      <ExperiencesSection />
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
