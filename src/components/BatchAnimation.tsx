import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

interface AnimationConfig {
  sectionName: string;
  cardSelectors: string[];
  textSelectors?: {
    titles: string[];
    descriptions: string[];
  };
  imageSelectors?: string[];
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
  imageAnimation?: {
    startTrigger?: string;
    endTrigger?: string;
    scrub?: number | boolean;
    duration?: number;
    ease?: string;
    imageStagger?: number;
  };
  dependencies?: any[]; // For useGSAP dependency array
}

const animateText = (
  card: Element,
  textStart: string,
  textEnd: string,
  scrub: number | boolean,
  titleSplit?: SplitText | null,
  titleDuration?: number,
  titleStagger?: number,
  descSplit?: SplitText | null,
  descDuration?: number,
  descStagger?: number
) => {
  //console.log([`Animating [${card.className}]`]);
  //console.log(`animating titleSplit`, titleSplit);
  //console.log(`animating descSplit`, descSplit);
  const textTl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: textStart,
      end: textEnd,
      scrub,
      toggleActions: "play none none reverse",
    },
  });

  // Animate title words
  if (titleSplit && titleSplit.words.length > 0) {
    textTl.fromTo(
      titleSplit.words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: titleDuration,
        stagger: titleStagger,
        ease: "power2.out",
      }
    );
  }

  // Animate description lines
  if (descSplit && descSplit.lines.length > 0) {
    textTl.fromTo(
      descSplit.lines,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: descDuration,
        stagger: descStagger,
        ease: "power2.out",
      },
      titleSplit ? "-=0.4" : 0 // Offset only if title exists
    );
  }
};

export const useBatchCardAnimation = (config: AnimationConfig) => {
  const {
    sectionName,
    cardSelectors,
    textSelectors,
    imageSelectors,
    cardAnimation = {},
    textAnimation = {},
    imageAnimation = {},
    dependencies = [],
  } = config;

  useGSAP(() => {
    // Default card animation settings
    const {
      startTrigger = "top 90%",
      endTrigger = "top 60%",
      scrub = 1,
      duration = 1,
      ease = "power2.out",
    } = cardAnimation;

    const {
      startTrigger: textStart = "top 80%",
      endTrigger: textEnd = "top 50%",
      scrub: textScrub = 1.2,
      titleDuration = 0.8,
      descDuration = 0.6,
      titleStagger = 0.05,
      descStagger = 0.08,
    } = textAnimation;

    const {
      startTrigger: imageStart = "top 80%",
      endTrigger: imageEnd = "top 50%",
      scrub: imageScrub = 1.2,
      duration: imageDuration = 0.6,
      ease: imageEase = "power2.out",
    } = imageAnimation;

    // 1. SETUP - Query DOM elements (they exist now)
    const cardElements = cardSelectors
      .map((selector) => {
        if (selector.startsWith(".")) {
          return Array.from(document.querySelectorAll(selector));
        } else {
          // Handle single element selectors or DOM elements
          const element = document.querySelector(selector);
          return element ? [element] : [];
        }
      })
      .flat();

    // Set initial states
    gsap.set(cardElements, {
      opacity: 0,
      y: 50,
    });

    // 2. ANIMATE CARDS (Batch approach for performance)
    ScrollTrigger.batch(cardElements, {
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

    // 3. ANIMATE TEXT CONTENT
    // Replace your text animation section with this improved logic:

    let titleSplitMap = new Map<HTMLElement, SplitText>();
    let descSplitMap = new Map<HTMLElement, SplitText>();

    // During SplitText creation, store the mapping
    if (textSelectors) {
      cardElements.forEach((card, cardIndex) => {
        const titleElements = Array.from(
          card.querySelectorAll(textSelectors.titles.join(", "))
        ) as HTMLElement[];

        const descriptionElements = Array.from(
          card.querySelectorAll(textSelectors.descriptions.join(", "))
        ) as HTMLElement[];

        // Create SplitText instances for titles and store mapping
        titleElements.forEach((titleEl, titleIndex) => {
          try {
            const split = new SplitText(titleEl, { type: "words" });
            titleSplitMap.set(titleEl, split); // Store the relationship
            gsap.set(split.words, {
              opacity: 0,
              y: 30,
            });
          } catch (error) {
            console.error(
              `[${sectionName}] Error creating title split:`,
              error
            );
          }
        });

        // Create SplitText instances for descriptions and store mapping
        descriptionElements.forEach((descEl) => {
          try {
            const split = new SplitText(descEl, { type: "lines" });
            descSplitMap.set(descEl, split); // Store the relationship
            gsap.set(split.lines, {
              opacity: 0,
              y: 20,
            });
          } catch (error) {
            console.error(`[${sectionName}] Error creating desc split:`, error);
          }
        });
      });

      // Now animate each card's text using the maps
      cardElements.forEach((card, cardIndex) => {
        const titleElementsInCard = Array.from(
          card.querySelectorAll(textSelectors.titles.join(", "))
        ) as HTMLElement[];

        const descElementsInCard = Array.from(
          card.querySelectorAll(textSelectors.descriptions.join(", "))
        ) as HTMLElement[];

        // Get splits for this card using the maps
        const cardTitleSplits = titleElementsInCard
          .map((titleEl) => titleSplitMap.get(titleEl))
          .filter(Boolean) as SplitText[];

        const cardDescSplits = descElementsInCard
          .map((descEl) => descSplitMap.get(descEl))
          .filter(Boolean) as SplitText[];

        // Only create timeline if we have splits to animate
        if (cardTitleSplits.length > 0 || cardDescSplits.length > 0) {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: textStart,
              end: textEnd,
              scrub: scrub,
              toggleActions: "play none none reverse",
            },
          });

          // Animate titles if they exist
          if (cardTitleSplits.length > 0) {
            timeline.to(
              cardTitleSplits.flatMap((split) => split.words),
              {
                opacity: 1,
                y: 0,
                duration: titleDuration,
                stagger: titleStagger,
                ease: "power2.out",
              }
            );
          }

          // Animate descriptions if they exist
          if (cardDescSplits.length > 0) {
            timeline.to(
              cardDescSplits.flatMap((split) => split.lines),
              {
                opacity: 1,
                y: 0,
                duration: descDuration,
                stagger: descStagger,
                ease: "power2.out",
              },
              cardTitleSplits.length > 0 ? "-=0.4" : "0" // Only offset if titles exist
            );
          }
        }
      });
    }

    // 4. ANIMATE IMAGES

    if (imageSelectors) {
      // Use cardSelectors to find image cards, not imageSelectors
      const imageCards = cardElements.filter((element) =>
        element.className.includes("image-card-about")
      );

      imageCards.forEach((card) => {
        // Now use imageSelectors to find the actual image within the card
        const image = card.querySelector(
          imageSelectors.join(", ")
        ) as HTMLElement;

        if (image) {
          gsap.fromTo(
            image,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: imageDuration,
              ease: imageEase,
              scrollTrigger: {
                trigger: card,
                start: imageStart,
                end: imageEnd,
                scrub: imageScrub,
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }

    // 5. CLEANUP
    return () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        // Only kill triggers related to this section
        const triggerElement = trigger.trigger;
        if (
          triggerElement &&
          (cardElements.includes(triggerElement) ||
            triggerElement.closest(`[class*="${sectionName}"]`))
        ) {
          trigger.kill();
        }
      });

      // Revert SplitText instances
      titleSplitMap.forEach((split) => split.revert());
      descSplitMap.forEach((split) => split.revert());
    };
  }, [sectionName, ...dependencies]);
};
