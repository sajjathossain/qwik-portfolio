import { getPublicAssetPath } from '@/lib/get-asset-path';
import { component$ } from '@builder.io/qwik';
import { QwikTypewriter } from '~/components/animations';
import { Reveal } from '~/components/animations/reveal';
import { Container } from '~/components/container';
import { Section } from '~/components/section';

const profilePicture = getPublicAssetPath({
  filename: 'profile',
  type: 'jpeg'
});

const descriptions = [
  "I'm a self-taught developer who loves to code.",
  'I specialize in web technologies.'
];

export const AboutSection = component$(() => {
  return (
    <Container>
      <Section id="about">
        <div class="my-auto flex h-full w-full flex-col-reverse items-center justify-center gap-12 md:flex-row">
          <div class="grow-cursor flex w-full flex-col items-center justify-between gap-2 md:items-start md:gap-0">
            <QwikTypewriter />
            <div class="mt-2 flex w-full flex-col items-center gap-1 pr-2 text-center text-sm md:items-start md:pr-0 md:text-start md:text-base">
              {descriptions.map((description) => (
                <Reveal key={description}>
                  <p class="text-slate-400">{description}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <img
            src={profilePicture}
            alt="Profile picture"
            width={200}
            height={200}
            class="aspect-square w-52 rounded-xl outline outline-2 outline-offset-4 outline-slate-700 md:w-64 md:rounded-full"
          />
        </div>
      </Section>
    </Container>
  );
});