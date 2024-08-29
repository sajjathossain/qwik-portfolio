/** @jsxImportSource react */
import { socialLinks, type TSocilaLink } from '@/data/social-links';
import { cn } from '@/lib/utils';
import { type FC, memo } from 'react';
import type { ClassNameValue } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { ReactReveal } from '~/integrations/react/animations';

type TSocilaLinkItemProps = {
  socialLink: TSocilaLink;
  showTitle?: boolean;
};

export const SocialLinkItem: FC<TSocilaLinkItemProps> = memo((props) => {
  const { socialLink, showTitle = false } = props;
  const { link, icon, title } = socialLink;
  const Icon = icon;

  return (
    <li className="flex items-center gap-4 font-semibold text-blue-500 dark:text-emerald-500 dark:brightness-110 ">
      <a id={link} href={link} target="_blank" rel="noopener noreferrer">
        <Icon className={cn('h-full w-6')} />
        {showTitle && (
          <ReactReveal>
            <label
              htmlFor={link}
              className="text-slate-501 dark:text-slate-401 block text-2xl md:hidden"
            >
              {title}
            </label>
          </ReactReveal>
        )}
      </a>
    </li>
  );
});

type TProps = {
  className?: ClassNameValue;
};

export const SocialLinks: FC<TProps> = memo(({ className }) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn('hidden w-full gap-4 md:flex', className)}
    >
      {socialLinks.map((socialLink) => (
        <SocialLinkItem key={socialLink.link} socialLink={socialLink} />
      ))}
    </motion.ul>
  );
});
