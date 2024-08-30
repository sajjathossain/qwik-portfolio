import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { AboutSection } from '~/components/sections';
import { ExperiencesSection } from '~/components/sections/experiences';
import { QwikSkills } from '~/integrations/react';
import LayoutRoot from './layout.root';

export default component$(() => {
  return (
    <>
      <LayoutRoot>
        <AboutSection />
        <ExperiencesSection />
        <QwikSkills />
      </LayoutRoot>
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
