import { component$, Fragment, Slot } from '@builder.io/qwik';
import { useDocumentHead } from '@builder.io/qwik-city';
import type { TDocumentHeadSchema } from '~/lib/types';
import { QwikBreadcrumb, type TBreadcrumbList } from '~/integrations/react';
import { OptimizedImage } from '~/components/optimized-image';
import { QwikBlogsSideNav } from '~/integrations/react/animations/blogs-side-nav';

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
    <Fragment>
      <QwikBlogsSideNav />
      <div class="relative grid  h-fit w-full gap-2 border-b-2 border-slate-800 p-2 py-4 md:w-[65vw] md:pt-4">
        <OptimizedImage
          classes="rounded-sm"
          src={`/assets/blogs/${frontmatter.image}?jsx`}
          width={1200}
          height={250}
          alt={document.title}
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
        <div class="prose mx-auto w-full px-3 py-3 dark:prose-invert prose-h1:text-xl prose-h1:font-bold prose-p:text-justify prose-a:text-emerald-500 prose-img:rounded-xl md:max-w-[65vw] md:px-0">
          <Slot />
        </div>
      </div>
    </Fragment>
  );
});
