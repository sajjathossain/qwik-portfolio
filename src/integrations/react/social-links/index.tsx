/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { socialLinks } from '~/data/social-links';
import { cn } from '~/lib/utils';

export const SocialLinks = () => {
  return (
    <div className="flex h-full w-full items-center justify-evenly">
      {socialLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a href={item.link} target="_blank" rel="noreferrer" key={item.title}>
            <Icon className={cn('h-6 w-6', item.color)} />
          </a>
        );
      })}
    </div>
  );
};

export const QwikSocialLinks = qwikify$(SocialLinks);
