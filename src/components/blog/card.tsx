import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { OptimizedImage } from '../optimized-image';
import type { TBlogFrontmatter } from '~/lib/types';

type Props = {
  blog: TBlogFrontmatter;
};

export const BlogCard = component$((props: Props) => {
  const { blog } = props;

  const { pubDate, tags, image, slug, title, description } = blog;

  const link = `/blogs/${slug}`;
  return (
    <article class="h-full w-full overflow-hidden rounded-md bg-slate-800">
      <OptimizedImage
        layout="fixed"
        width={1000}
        height={420}
        src={`/assets/blogs/${image}?jsx`}
        alt={slug}
      />
      <div class="grid h-fit w-full gap-3 px-3 py-4 md:gap-2">
        <div class="grid gap-2">
          <h1 class="truncate whitespace-nowrap text-lg md:text-xl">{title}</h1>
          {description && <p class="text-sm text-gray-400">{description}</p>}

          <div class="grid w-full grid-cols-[auto_1fr] items-center text-sm text-gray-400 md:items-center md:gap-0">
            <time
              class="flex w-fit flex-shrink"
              dateTime={new Date(pubDate).toISOString()}
            >
              {new Date(pubDate).toLocaleDateString(undefined, {
                dateStyle: 'medium',
                timeZone: 'UTC'
              })}
            </time>
            <div class="flex items-center justify-end gap-1 text-xs md:text-sm">
              {tags?.map((item: string) => (
                <p key={item} class="rounded-sm bg-blue-900 p-1 text-gray-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link
          href={link}
          class="w-full rounded-sm bg-blue-500 p-2 text-center text-sm text-white md:w-fit"
        >
          Read more
        </Link>
      </div>
    </article>
  );
});
