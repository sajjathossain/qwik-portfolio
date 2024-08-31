import { $, component$ } from '@builder.io/qwik';
import {
  Image,
  type ImageTransformerProps,
  useImageProvider
} from 'qwik-image';
import { cn } from '~/lib/utils';

type Props = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  classes?: string;
  resolutions?: number[];
};

export const OptimizedImage = component$((props: Props) => {
  const {
    src,
    width = 200,
    height = 200,
    alt = 'alt-text',
    classes,
    resolutions = [240]
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
    <Image
      layout="constrained"
      alt={alt}
      width={width}
      height={height}
      objectFit="fill"
      placeholder="#e6e6e6"
      src={src}
      class={cn(classes)}
    />
  );
});
