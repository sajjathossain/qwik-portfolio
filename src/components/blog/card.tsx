import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type { TFrontmatterSchema } from '~/lib/types';
import { OptimizedImage } from '../optimized-image';

type Props = {
  blog: TFrontmatterSchema & {
    slug: string;
  };
};

export const BlogCard = component$((props: Props) => {
  const { blog } = props;

  const { pubDate, tags, image, slug, title } = blog;

  const link = `/blogs/${slug}`;
  return (
    <article class="h-fit w-full rounded-md bg-slate-800 outline outline-2 outline-emerald-500/25">
      <OptimizedImage
        layout="fixed"
        width={1000}
        height={420}
        classes="rounded-t-sm"
        src={`/assets/blogs/${image}?jsx`}
        alt={slug}
      />
      <div class="grid h-fit gap-3 px-3 py-4 md:gap-2">
        <div class="grid gap-1 md:gap-2">
          <Link href={link}>
            <h1 class="text-xl">{title}</h1>
          </Link>
          {/* {description && <p class="card-description">{description}</p>} */}

          <div class="flex flex-col flex-wrap items-start justify-between gap-3 text-sm text-gray-400 md:flex-row md:items-center md:gap-0">
            <time dateTime={new Date(pubDate).toISOString()}>
              {new Date(pubDate).toLocaleDateString(undefined, {
                dateStyle: 'medium',
                timeZone: 'UTC'
              })}
            </time>
            <div class="flex items-center gap-1 text-xs md:text-sm">
              {tags?.map((item: string) => (
                <p key={item} class="rounded-sm bg-blue-900 p-1 text-gray-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <a
          href={`/blogs/${slug}`}
          class="hidden w-fit rounded-sm bg-blue-500 p-1 text-sm text-white md:block md:p-2"
        >
          Read more
        </a>
      </div>
    </article>
  );
});
