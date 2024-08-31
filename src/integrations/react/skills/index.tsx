/** @jsxImportSource react */

import { ReactSection } from '../section';

import { skills } from '@/data/skills';
import { SkillsRow } from './skills-row';
import styled from '@emotion/styled';
import { qwikify$ } from '@builder.io/qwik-react';

const SkillsContainer = styled.div`
  --mask-color: white;
  --mask-deg: 90deg;
  --mask-end-percentage: calc(100% - var(--mask-start-percentage));
  --mask-from-and-end-color: transparent;
  --mask-start-percentage: 10%;

  --mask-property: linear-gradient(
    var(--mask-deg),
    var(--mask-from-and-end-color),
    var(--mask-color) var(--mask-start-percentage),
    var(--mask-color) var(--mask-end-percentage),
    var(--mask-from-and-end-color)
  );

  -webkit-mask: var(--mask-property);
  mask: var(--mask-property);
`;

const { row1, row2 } = skills;

export const Skills = () => (
  <ReactSection classes="w-full h-screen" id="skills">
    <SkillsContainer
      className="mx-auto flex h-full w-[90dvw] items-center overflow-hidden"
      data-skills-container
    >
      <div className="my-auto flex  w-full flex-col gap-8">
        <SkillsRow skills={row1} direction="right-to-left" />
        <SkillsRow skills={row2} direction="left-to-right" />
      </div>
    </SkillsContainer>
  </ReactSection>
);

export const QwikSkills = qwikify$(Skills, { eagerness: 'visible' });
