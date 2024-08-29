import type { TExperience } from '@/data/experiences';
import { cn } from '@/lib/utils';
import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type Props = {
  experience: TExperience;
  isLast: boolean;
};

export const Experience = component$((props: Props) => {
  const { experience, isLast } = props;
  const {
    company,
    position,
    location,
    duration,
    responsibilities,
    technologies,
    additionalInfo
  } = experience;

  useOnDocument(
    'DOMContentLoaded',
    $(() => {
      gsap.registerPlugin(ScrollTrigger);
    })
  );

  const experienceRef = useSignal<HTMLDivElement>();
  const experienceProgressRef = useSignal<HTMLDivElement>();
  const experienceProgressIconRef = useSignal<SVGPathElement>();
  const experienceInfomationsRef = useSignal<HTMLDivElement>();

  useOnDocument(
    'DOMContentLoaded',
    $(() => {
      if (
        !experienceRef.value ||
        !experienceProgressRef.value ||
        !experienceProgressIconRef.value ||
        !experienceInfomationsRef.value
      )
        return;

      const commonScrollTriggerProperties: gsap.DOMTarget | ScrollTrigger.Vars =
        {
          trigger: experienceRef.value,
          start: 'clamp(top 85% bottom 75%)',
          end: 'clamp(top 30% bottom 75%)',
          scrub: true
        };

      const barTL = gsap.timeline({
        scrollTrigger: commonScrollTriggerProperties
      });
      const informationTL = gsap.timeline({
        scrollTrigger: commonScrollTriggerProperties
      });

      barTL
        .to(experienceRef.value, {
          opacity: 1
        })
        .to(experienceProgressIconRef.value, {
          strokeWidth: 1.5,
          opacity: 1,
          duration: 1,
          rotateZ: '360deg'
        })
        .to(experienceProgressRef.value, {
          height: '100%',
          borderRadius: 0
        });

      informationTL.from(experienceInfomationsRef.value, {
        translateY: 75,
        opacity: 0.15
      });
    })
  );

  return (
    <>
      <div
        ref={experienceRef}
        class="flex h-fit w-full items-start justify-start gap-6 px-3 md:px-0"
      >
        <div
          class={`mt-1 h-full w-1 bg-gray-400 dark:bg-gray-600 ${isLast && 'rounded-md'} relative flex justify-center`}
        >
          <div
            ref={experienceProgressRef}
            class={`relative h-0 w-full rounded-md bg-blue-600 brightness-125 dark:bg-emerald-500`}
          ></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0"
            stroke="currentColor"
            ref={experienceProgressIconRef}
            class="absolute top-0 h-8 w-8 rotate-180 rounded-full bg-blue-600 text-gray-300 brightness-125 dark:bg-slate-800 dark:text-emerald-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
        </div>
        <div
          ref={experienceInfomationsRef}
          class={`flex flex-col gap-1 ${!isLast && 'pb-[6vh]'} w-full text-gray-700 dark:text-gray-300`}
        >
          <h1 class="mt-[5px] text-xl text-blue-600 dark:text-gray-300 md:text-2xl">
            {company}
          </h1>
          <h3 class="w-fit border-b-2 border-dotted text-sm text-gray-500 dark:text-gray-400">
            {position}
          </h3>
          <div class="flex gap-2">
            <p class="text-sm text-gray-500 dark:text-gray-400">{duration}</p>
            <p class="border-l-2 pl-2 text-sm text-gray-500 dark:text-gray-400">
              {location}
            </p>
          </div>
          <div>
            <p class="mb-2 text-base font-bold">Responsibilities:</p>
            <ul class="w-full list-inside list-disc text-gray-500 dark:text-gray-400">
              {responsibilities.map((responsibility) => (
                <li key={responsibility} class="text-sm md:text-base">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
          <div class="mb-3 w-full">
            <p class="mb-2 text-base font-bold">Technologies:</p>
            <ul class="grid w-full list-inside list-disc grid-cols-2 gap-3 text-gray-500 dark:text-gray-400 md:grid-cols-3 md:gap-2">
              {technologies.map((technology) => (
                <li key={technology} class="text-sm md:text-base">
                  {technology}
                </li>
              ))}
            </ul>
          </div>
          <p
            class={cn(
              'text-base',
              'dark:text-gray-300/65 text-gray-400',
              'hidden',
              {
                'inline-block': additionalInfo
              }
            )}
          >
            {additionalInfo}
          </p>
        </div>
      </div>
    </>
  );
});
