import { component$ } from '@builder.io/qwik';
import { Container } from '~/components/container';
import { QwikBreadcrumb, type TBreadcrumbList } from '~/integrations/react';
import { BlogCard } from '~/components/blog/card';
import { frontmatterSchema, type TFrontmatterSchema } from '~/lib/types';
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city';

export type TBlogFrontmatter = TFrontmatterSchema & { slug: string };

export const useLoadData = routeLoader$(async () => {
  const pathImports = import.meta.glob('/src/routes/blogs/**/index.md');

  const blogs: TBlogFrontmatter[] = [];

  for (const imp in pathImports) {
    const res = (await pathImports[imp]()) as {
      frontmatter: TFrontmatterSchema;
    };
    const parsed = frontmatterSchema.parse(res.frontmatter);
    console.log({ parsed });
    const folderName = imp.split('/').at(-2);

    blogs.push({
      ...parsed,
      slug: folderName || ''
    });
  }

  return blogs;
});

export default component$(() => {
  const data = useLoadData();
  const blogs = data.value;
  const breadcrumbList: TBreadcrumbList = [
    {
      title: 'Blogs',
      href: '/blogs'
    }
  ];

  const sortedBlogs = blogs.sort((a, b) => {
    const isGreater =
      new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf();
    return isGreater > 0 ? 1 : -1;
  });

  return (
    <Container classes="py-6 h-dvh w-full px-2 md:px-0 grid grid-rows-[100% 1fr]">
      <div>
        <div class="mb-3 flex w-full items-center justify-between">
          <h1 class="text-center text-3xl md:text-left">Blogs</h1>
          <div class="flex items-center gap-4">
            <p class="text-center text-xs text-gray-400 md:text-left md:text-sm">
              {blogs.length} blogs
            </p>
          </div>
        </div>
        <QwikBreadcrumb classes="my-2" list={breadcrumbList} />
        <hr class="bg-emerald-500/35 my-2 h-[2px] md:my-4" />
        <div data-pagefind-ui></div>
      </div>
      <div
        data-blog-container
        class="grid max-h-full grid-cols-1 gap-4 overflow-y-auto no-scrollbar"
      >
        {sortedBlogs.map((blog) => {
          return <BlogCard key={blog.slug} blog={blog} />;
        })}
      </div>
    </Container>
  );
});

export const head: DocumentHead = {
  title: 'Sajjat Hossain | Blogs',
  meta: [
    {
      name: 'description',
      content: 'Blogs by Sajjat Hossain'
    }
  ]
};
