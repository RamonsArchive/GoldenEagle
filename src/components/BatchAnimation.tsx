import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

interface BatchAnimationConfig {
  cardSelectors: string[];
  textSelectors?: {
    titles: string[];
    descriptions: string[];
  };
  titleElements?: HTMLElement[];
  descElements?: HTMLElement[];
  titleSplits?: SplitText[];
  descSplits?: SplitText[];
  cardAnimation?: {
    startTrigger?: string;
    endTrigger?: string;
    scrub?: number | boolean;
    duration?: number;
    ease?: string;
  };
  textAnimation?: {
    startTrigger?: string;
    endTrigger?: string;
    scrub?: number | boolean;
    titleDuration?: number;
    descDuration?: number;
    titleStagger?: number;
    descStagger?: number;
  };
}

export const useBatchCardAnimation = (
  sectionName: string,
  config: BatchAnimationConfig
) => {
  useGSAP(() => {
    const {
      cardSelectors,
      textSelectors,
      titleElements,
      descElements,
      titleSplits,
      descSplits,
      cardAnimation = {},
      textAnimation = {},
    } = config;

    // Default card animation settings
    const {
      startTrigger = "top 90%",
      endTrigger = "top 60%",
      scrub = 1,
      duration = 1,
      ease = "power2.out",
    } = cardAnimation;

    // 1. BATCH ANIMATE CARDS
    ScrollTrigger.batch(cardSelectors, {
      onEnter: (elements) => {
        elements.forEach((element) => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration,
            ease,
            scrollTrigger: {
              trigger: element,
              start: startTrigger,
              end: endTrigger,
              scrub,
              toggleActions: "play none none reverse",
            },
          });
        });
      },
    });

    // 2. ANIMATE TEXT CONTENT IF PROVIDED
    if (textSelectors) {
      const { titles, descriptions } = textSelectors;

      if (cardSelectors.length > 0) {
        cardSelectors.forEach((cardSelector) => {
          let titleInCard: HTMLElement | null = null;
          let descInCard: HTMLElement | null = null;

          titles.forEach((titleSelector) => {
            const titleElement = document.querySelector(titleSelector);
            if (titleElement) {
              titleInCard = titleElement as HTMLElement;
            }
          });
          descriptions.forEach((descSelector) => {
            const descElement = document.querySelector(descSelector);
            if (descElement) {
              descInCard = descElement as HTMLElement;
            }
          });

          let titleSplit: SplitText | null = null;
          let descSplit: SplitText | null = null;

          titleElements?.forEach((titleEl: HTMLElement, index: number) => {
            if (titleEl === titleInCard) {
              titleSplit = titleSplits?.[index] || null;
            }
          });

          descElements?.forEach((descEl: HTMLElement, index: number) => {
            if (descEl === descInCard) {
              descSplit = descSplits?.[index] || null;
            }
          });

          const {
            startTrigger = "top 80%",
            endTrigger = "top 50%",
            scrub = 1.2,
            titleDuration = 0.8,
            descDuration = 0.6,
            titleStagger = 0.05,
            descStagger = 0.08,
          } = textAnimation;

          const textTl = gsap.timeline({
            scrollTrigger: {
              trigger: cardSelector,
              start: startTrigger,
              end: endTrigger,
              scrub,
              toggleActions: "play none none reverse",
            },
          });

          // animate title words if they exist

          if (titleSplit && (titleSplit as SplitText).words.length > 0) {
            textTl.fromTo(
              (titleSplit as SplitText).words,
              {
                opacity: 0,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: titleDuration,
                stagger: titleStagger,
                ease: "power2.out",
              }
            );
          }

          // animate description lines if they exist
          if (descSplit && (descSplit as SplitText).words.length > 0) {
            textTl.fromTo(
              (descSplit as SplitText).words,
              {
                opacity: 0,
                y: 20,
              },
              {
                opacity: 1,
                y: 0,
                duration: descDuration,
                stagger: descStagger,
                ease: "power2.out",
              },
              "-=0.4"
            );
          }
        });
      }
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars?.trigger &&
          typeof trigger.vars.trigger === "object" &&
          "closest" in trigger.vars.trigger &&
          (trigger.vars.trigger as HTMLElement).closest(
            `[class*="${sectionName}"]`
          ) !== null
        ) {
          trigger.kill();
        }
      });
    };
  }, [sectionName, config]);
};
