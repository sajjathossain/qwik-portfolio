import { component$ } from '@builder.io/qwik';

import { experiences } from '@/data/experiences';
import { Container } from '~/components/container';
import { Section } from '~/components/section';
import { Experience } from './experience';
import { Header } from '~/components/header';

export const ExperiencesSection = component$(() => {
  return (
    <Container classes="relative h-screen">
      <Section classes="h-full" id="experiences">
        <Header title="Experiences" />
        <div class="flex h-full w-full flex-col">
          {experiences.map((experience, idx) => (
            <Experience
              key={experience.duration}
              experience={experience}
              isLast={idx === experiences.length - 1}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
});
