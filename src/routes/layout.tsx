import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { Cursor, PageScrollDistance } from '~/components';
import { SideNavbar } from '~/integrations/react';
import { QwikTopNavbar } from '~/integrations/react/top-navbar';

export const onGet: RequestHandler = async (/* { cacheControl } */) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  /* if (process.env.NODE_ENV === 'production') {
    cacheControl({
      // Always serve a cached response by default, up to an hour stale
      staleWhileRevalidate: 60 * 60,
      // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
      maxAge: 5
    });
  } */
};

export default component$(() => {
  return (
    <>
      <PageScrollDistance />
      <Cursor />
      <QwikTopNavbar />
      <SideNavbar />
      <main class="relative flex  w-full flex-col items-center justify-center px-1 md:px-0">
        <Slot />
      </main>
    </>
  );
});
