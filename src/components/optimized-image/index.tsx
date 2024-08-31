import { $, component$ } from '@builder.io/qwik';
import type { ImageProps } from 'qwik-image';
import {
  Image,
  type ImageTransformerProps,
  useImageProvider
} from 'qwik-image';
import { cn } from '~/lib/utils';

type TImageProps = Partial<Omit<ImageProps, 'src' | 'class'>>;

type Props = TImageProps & {
  src: string;
  classes?: string;
  resolutions?: number[];
};

export const OptimizedImage = component$((props: Props) => {
  const {
    classes,
    resolutions = [240],
    layout = 'constrained',
    ...rest
  } = props;
  const imageTransformer$ = $(
    ({ src, width, height }: ImageTransformerProps): string => {
      return `${src}?height=${height}&width=${width}&format=webp&fit=fill`;
    }
  );

  useImageProvider({
    resolutions,
    imageTransformer$
  });

  return (
    <Image layout={layout} placeholder="blur" {...rest} class={cn(classes)} />
  );
});
