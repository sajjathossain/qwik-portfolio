import { component$ } from '@builder.io/qwik';

import { experiences } from '@/data/experiences';
import { Container } from '~/components/container';
import { Section } from '~/components/section';
import { Experience } from './experience';
import { Header } from '~/components/header';

export const ExperiencesSection = component$(() => {
  return (
    <Container classes="h-full">
      <Section classes="h-auto" id="experiences">
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
