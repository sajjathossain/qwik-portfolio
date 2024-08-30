/** @jsxImportSource react */
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
import type { FC } from 'react';
import { qwikify$ } from '@builder.io/qwik-react';

type TListItem = {
  title: string;
  href: `/${string}`;
};

export type TBreadcrumbList = TListItem[];

type Props = {
  list: TBreadcrumbList;
  classes?: ClassNameValue;
};

export const CustomBreadcrumb: FC<Props> = (props) => {
  const { list, classes } = props;
  const lastItemIndex = list.length - 1;

  return (
    <Breadcrumb className={cn(classes)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {list.map(({ title, href }, idx) => {
          if (idx === lastItemIndex) {
            return (
              <BreadcrumbItem key={title}>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            );
          }

          return (
            <>
              <BreadcrumbItem key={title}>
                <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export const QwikBreadcrumb = qwikify$(CustomBreadcrumb);
