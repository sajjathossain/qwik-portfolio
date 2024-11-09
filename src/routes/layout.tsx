import { Slot, component$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  if (process.env.NODE_ENV === 'production') {
    cacheControl({
      // Always serve a cached response by default, up to an hour stale
      staleWhileRevalidate: 60 * 60,
      // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
      maxAge: 5
    });
  }
};

export default component$(() => {
  return <Slot />;
});
