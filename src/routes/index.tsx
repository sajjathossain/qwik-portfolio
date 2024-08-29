import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { QwikTypewriter } from '~/components';

export default component$(() => {
  return (
    <>
      <QwikTypewriter />
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
