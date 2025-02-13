import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';

const texts = ['am Sajjat Hossain', 'am a fullstack developer', 'work with'];

const techs = [
  'Next.js',
  'Nest.js',
  'Typescript',
  'Zod',
  'Github CI/CD',
  'Turborepo',
  'Nx.dev',
  'etc.'
];

gsap.registerPlugin(TextPlugin);

export const QwikTypewriter = component$(() => {
  const typewritterCursor = useSignal<HTMLDivElement>();
  const typewritterText = useSignal<HTMLDivElement>();
  const typewritterTechstack = useSignal<HTMLDivElement>();

  const animateCursor = $((cursorTL: gsap.core.Timeline) => {
    if (!typewritterCursor.value) return;
    cursorTL.to(typewritterCursor.value, {
      repeat: -1,
      opacity: 0,
      duration: 0.35,
      ease: 'power1.inOut',
      yoyo: true
    });
  });

  const showCursor = $((cursorTL: gsap.core.Timeline) => {
    cursorTL.restart().play();
  });

  const animateTechstack = $(
    ({
      masterTL,
      masterTechstackTL,
      textTL
    }: {
      cursorTL: gsap.core.Timeline;
      masterTL: gsap.core.Timeline;
      masterTechstackTL: gsap.core.Timeline;
      textTL: gsap.core.Timeline;
    }) => {
      techs.forEach((tech, idx) => {
        if (!typewritterTechstack.value) return;
        const techstackTL = gsap.timeline({
          repeat: 1,
          repeatDelay: 0.5,
          yoyo: true
        });

        techstackTL
          .to(typewritterTechstack.value, {
            text: tech,
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut'
            /* y: '-1vh' */
          })
          .eventCallback('onComplete', () => {
            if (idx === techs.length - 1) {
              if (!typewritterTechstack.value) return;

              typewritterTechstack.value.classList.add('hidden');

              gsap.globalTimeline.restart().play();
              textTL.play();
              masterTL.play();
              masterTechstackTL.clear();
            }
          });

        masterTechstackTL.add(techstackTL);
      });
    }
  );

  const animateText = $(
    ({
      masterTL,
      cursorTL
    }: {
      masterTL: gsap.core.Timeline;
      cursorTL: gsap.core.Timeline;
    }) => {
      texts.forEach((text, index) => {
        const textTL = gsap.timeline({
          repeat: 1,
          repeatDelay: 0.5,
          yoyo: true
        });
        if (!typewritterText.value) return;

        textTL
          .to(typewritterText.value, {
            text: text,
            duration: 1,
            ease: 'power1.inOut'
          })
          .eventCallback('onRepeat', () => {
            const masterTechstackTL = gsap.timeline({
              repeat: 1,
              repeatDelay: 0.5
            });

            if (index === texts.length - 1) {
              textTL.pause();
              masterTL.pause();

              typewritterTechstack.value?.classList.remove('hidden', '-z-10');

              animateTechstack({
                cursorTL,
                masterTL,
                masterTechstackTL,
                textTL
              });
            }
          })
          .eventCallback('onComplete', () => {
            if (index === texts.length - 1) {
              gsap.globalTimeline.restart().play();
              showCursor(cursorTL);
              textTL.play();
              masterTL.play();
            }
          });

        masterTL.add(textTL);
      });
    }
  );

  useOnDocument(
    'DOMContentLoaded',
    $(() => {
      const cursorTL = gsap.timeline();
      const masterTL = gsap.timeline({
        repeat: -1
      });

      animateCursor(cursorTL);
      animateText({ masterTL: masterTL, cursorTL: cursorTL });
    })
  );

  return (
    <span class="relative flex text-[2.5vh] md:text-[3vw] lg:text-[2vw]">
      <h1>Hi, I</h1>
      <div ref={typewritterText} class="ml-2" />
      <div ref={typewritterTechstack} class="ml-1 hidden md:ml-2" />
      <div ref={typewritterCursor} class="ml-1 md:ml-2">
        _
      </div>
    </span>
  );
});
