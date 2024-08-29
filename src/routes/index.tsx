import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { AboutSection } from '~/components/sections/about';

export default component$(() => {
  return (
    <>
      <AboutSection />
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
