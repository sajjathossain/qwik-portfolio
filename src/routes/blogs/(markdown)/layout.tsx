import { component$, Slot } from '@builder.io/qwik';
import { useDocumentHead, type RequestHandler } from '@builder.io/qwik-city';
import type { TDocumentHeadSchema } from '~/lib/types';
import { QwikBreadcrumb, type TBreadcrumbList } from '~/integrations/react';
import LayoutBlog from '~/routes/blogs/(blogs)/layout';
import { OptimizedImage } from '~/components/optimized-image';

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
  const document = useDocumentHead<TDocumentHeadSchema>();
  const { frontmatter } = document;

  const breadcrumbList: TBreadcrumbList = [
    {
      title: 'Blogs',
      href: '/blogs'
    },
    {
      title: document.title,
      href: `/${document.title}`
    }
  ];

  const date = new Date(frontmatter.pubDate);

  return (
    <>
      <LayoutBlog>
        <div class="relative grid  h-fit w-full gap-2 border-b-2 border-slate-800 p-2 py-4 md:w-[65vw] md:pt-4">
          <OptimizedImage
            classes="rounded-sm"
            src={`/assets/blogs/${frontmatter.image}?jsx`}
            width={1200}
            height={250}
            alt={frontmatter.title}
            layout="fixed"
          />
          <QwikBreadcrumb classes="my-1 px-2" list={breadcrumbList} />
          <h1 class="px-2 text-left text-3xl font-semibold md:px-0">
            {document.title}
          </h1>
          <div class="flex flex-wrap items-center justify-between gap-2 px-2 text-sm text-gray-400 md:px-0">
            <time dateTime={date.toISOString()}>
              {date.toLocaleDateString(undefined, {
                dateStyle: 'medium',
                timeZone: 'UTC'
              })}
            </time>
            <div class="flex items-center gap-1">
              {frontmatter.tags.map((item) => (
                <p key={item} class="rounded-sm bg-blue-900 p-1 text-gray-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="prose mx-auto w-full px-3 py-3 dark:prose-invert prose-h1:text-xl prose-h1:font-bold prose-p:text-justify prose-a:text-blue-600 prose-img:rounded-xl md:max-w-[65vw] md:px-0">
            <Slot />
          </div>
        </div>
      </LayoutBlog>
    </>
  );
});
