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
  titleSplit?: SplitText,
  titleDuration?: number,
  titleStagger?: number,
  descSplit?: SplitText,
  descDuration?: number,
  descStagger?: number
) => {
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

    console.log(`[${sectionName}] Found card elements:`, cardElements);

    // Set initial states
    gsap.set(cardElements, {
      opacity: 0,
      y: 50,
    });

    // 2. HANDLE TEXT ANIMATIONS IF SPECIFIED
    let titleSplits: SplitText[] = [];
    let descriptionSplits: SplitText[] = [];

    if (textSelectors) {
      // Query text elements
      const titleElements = Array.from(
        document.querySelectorAll(textSelectors.titles.join(", "))
      ) as HTMLElement[];

      const descriptionElements = Array.from(
        document.querySelectorAll(textSelectors.descriptions.join(", "))
      ) as HTMLElement[];

      console.log(`[${sectionName}] Title elements:`, titleElements);
      console.log(
        `[${sectionName}] Description elements:`,
        descriptionElements
      );

      // Create SplitText instances for titles
      titleElements.forEach((titleEl) => {
        const split = new SplitText(titleEl, { type: "words" });
        titleSplits.push(split);
        gsap.set(split.words, {
          opacity: 0,
          y: 30,
        });
      });

      // Create SplitText instances for descriptions
      descriptionElements.forEach((descEl) => {
        const split = new SplitText(descEl, { type: "lines" });
        descriptionSplits.push(split);
        gsap.set(split.lines, {
          opacity: 0,
          y: 20,
        });
      });

      console.log(
        `[${sectionName}] Created ${titleSplits.length} title splits`
      );
      console.log(
        `[${sectionName}] Created ${descriptionSplits.length} description splits`
      );
    }

    // 3. ANIMATE CARDS (Batch approach for performance)
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

    // 4. ANIMATE TEXT CONTENT
    if (textSelectors && titleSplits.length > 0) {
      // Find all text cards for this section
      const textCards = cardElements.filter((element) =>
        element.classList.toString().includes("text-card")
      );

      const imageCards = cardElements.filter((element) =>
        element.className.toString().includes("image-card")
      );

      const beforeAfterCards = cardElements.filter((element) =>
        element.className.toString().includes("before-after-card")
      );

      const textToAnimate = [...textCards, ...imageCards, ...beforeAfterCards];

      textToAnimate.forEach((card) => {
        const isBeforeAfterCard = card.className
          .toString()
          .includes("before-after-card");
        // Find text elements within this specific card
        let titleInCard: HTMLElement | null | NodeListOf<HTMLElement> = null;
        let descInCard: HTMLElement | null | NodeListOf<HTMLElement> = null;

        if (isBeforeAfterCard) {
          console.log("before-after-card");
          titleInCard = card.querySelectorAll(
            textSelectors.titles.join(", ")
          ) as NodeListOf<HTMLElement>;
          console.log("titleInCard", titleInCard);

          descInCard = card.querySelectorAll(
            textSelectors.descriptions.join(", ")
          ) as NodeListOf<HTMLElement>;
        } else {
          titleInCard = card.querySelector(
            textSelectors.titles.join(", ")
          ) as HTMLElement;
          console.log("titleInCard", titleInCard);
          descInCard = card.querySelector(
            textSelectors.descriptions.join(", ")
          ) as HTMLElement;

          if (!titleInCard && !descInCard) return;
        }

        // Find corresponding SplitText instances
        let titleSplit: SplitText | null = null;
        let descSplit: SplitText | null = null;

        // Match title element to its SplitText instance
        if (titleInCard) {
          const titleElements = Array.from(
            document.querySelectorAll(textSelectors.titles.join(", "))
          ) as HTMLElement[];
          if (isBeforeAfterCard) {
            console.log("titleInCard is an array");
            (titleInCard as NodeListOf<HTMLElement>).forEach((title) => {
              const titleIndex = titleElements.findIndex((el) => el === title);
              if (titleIndex !== -1 && titleSplits[titleIndex]) {
                titleSplit = titleSplits[titleIndex];
                animateText(
                  card,
                  textStart,
                  textEnd,
                  scrub,
                  titleSplit as SplitText,
                  titleDuration,
                  titleStagger,
                  descSplit as SplitText,
                  descDuration,
                  descStagger
                );
              }
            });
          } else {
            const titleIndex = titleElements.findIndex(
              (el) => el === titleInCard
            );
            if (titleIndex !== -1 && titleSplits[titleIndex]) {
              titleSplit = titleSplits[titleIndex];
            }
          }
        }

        // Match description element to its SplitText instance
        if (descInCard) {
          const descElements = Array.from(
            document.querySelectorAll(textSelectors.descriptions.join(", "))
          ) as HTMLElement[];
          if (isBeforeAfterCard) {
            (descInCard as NodeListOf<HTMLElement>).forEach((desc) => {
              const descIndex = descElements.findIndex((el) => el === desc);
              if (descIndex !== -1 && descriptionSplits[descIndex]) {
                descSplit = descriptionSplits[descIndex];
                animateText(
                  card,
                  textStart,
                  textEnd,
                  scrub,
                  titleSplit as SplitText,
                  titleDuration,
                  titleStagger,
                  descSplit as SplitText,
                  descDuration,
                  descStagger
                );
              }
            });
          } else {
            const descIndex = descElements.findIndex((el) => el === descInCard);
            if (descIndex !== -1 && descriptionSplits[descIndex]) {
              descSplit = descriptionSplits[descIndex];
            }
          }
        }

        animateText(
          card,
          textStart,
          textEnd,
          scrub,
          titleSplit as SplitText,
          titleDuration,
          titleStagger,
          descSplit as SplitText,
          descDuration,
          descStagger
        );
      });
    }

    // animate images

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
      titleSplits.forEach((split) => split.revert());
      descriptionSplits.forEach((split) => split.revert());
    };
  }, [sectionName, ...dependencies]);
};
