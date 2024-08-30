import { cn } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '~/integrations/react/ui/breadcrumb';
import type { ClassNameValue } from 'tailwind-merge';
import { component$ } from '@builder.io/qwik';
import { qwikify$ } from '@builder.io/qwik-react';
import { Link } from '@builder.io/qwik-city';

const QwikBreadcrumb = qwikify$(Breadcrumb);
const QwikBreadcrumbList = qwikify$(BreadcrumbList);
const QwikBreadcrumbItem = qwikify$(BreadcrumbItem);
const QwikBreadcrumbLink = qwikify$(BreadcrumbLink);
const QwikBreadcrumbPage = qwikify$(BreadcrumbPage);
const QwikBreadcrumbSeparator = qwikify$(BreadcrumbSeparator);

type TListItem = {
  title: string;
  href: `/${string}`;
};

export type TBreadcrumbList = TListItem[];

type Props = {
  list: TBreadcrumbList;
  classes?: ClassNameValue;
};

export const QwikCustomBreadcrumb = component$((props: Props) => {
  const { list, classes } = props;
  const lastItemIndex = list.length - 1;

  return (
    <QwikBreadcrumb classes={cn(classes)}>
      <QwikBreadcrumbList>
        <QwikBreadcrumbItem>
          <QwikBreadcrumbLink>
            <Link href="/">Home</Link>
          </QwikBreadcrumbLink>
        </QwikBreadcrumbItem>
        <QwikBreadcrumbSeparator />
        {list.map(({ title, href }, idx) => {
          if (idx === lastItemIndex) {
            return (
              <QwikBreadcrumbItem key={title}>
                <QwikBreadcrumbPage>{title}</QwikBreadcrumbPage>
              </QwikBreadcrumbItem>
            );
          }

          return (
            <>
              <QwikBreadcrumbItem key={title}>
                <QwikBreadcrumbLink>
                  <Link href={href}>{title}</Link>
                </QwikBreadcrumbLink>
              </QwikBreadcrumbItem>
              <QwikBreadcrumbSeparator />
            </>
          );
        })}
      </QwikBreadcrumbList>
    </QwikBreadcrumb>
  );
});
