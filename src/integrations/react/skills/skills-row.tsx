/** @jsxImportSource @emotion/react */

import type { TSkill } from '@/data/skills';
import { useEffect, useRef, type FC } from 'react';
import styled from '@emotion/styled';
import { qwikify$ } from '@builder.io/qwik-react';

const SajjatHossainSkills = styled.div`
  animation: skrill 20s linear infinite;

  &[data-direction='right-to-left'] {
    animation-direction: normal;
  }

  &[data-direction='left-to-right'] {
    animation-direction: reverse;
    animation-duration: 25s;
  }

  @keyframes skrill {
    to {
      transform: translate(calc(-50% - 2.5vw));
    }
  }
`;

type Props = {
  className?: string;
  skills: TSkill[];
  direction?: 'left-to-right' | 'right-to-left';
};

export const SkillsRow: FC<Props> = (props) => {
  const { skills, direction = 'right-to-left' } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const content = Array.from(element.children);

    content.forEach((item) => {
      const duplicate = item.cloneNode(true) as HTMLDivElement;
      duplicate.setAttribute('aria-hidden', 'true');
      element.appendChild(duplicate);
    });
  }, []);

  return (
    <SajjatHossainSkills
      className="grow-cursor flex h-fit w-max gap-[5vw] whitespace-nowrap text-[6vh] md:text-[5vw]"
      ref={ref}
      data-direction={direction}
    >
      {skills.map((skill) => {
        const Icon = skill.icon;

        return (
          <span
            key={skill.title}
            className="flex items-center gap-4 text-slate-400"
          >
            <Icon className={`h-12 w-12 md:h-20 md:w-20 ${skill.iconColor}`} />
            <p>{skill.title}</p>
          </span>
        );
      })}
    </SajjatHossainSkills>
  );
};

export const QSkillsRow = qwikify$(SkillsRow);
