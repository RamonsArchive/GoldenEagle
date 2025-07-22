"use client";
import React, { useEffect, useState } from "react";
import { AboutData } from "@/lib/globalTypes";
import Image from "next/image";
import TextCard from "./TextCard";
import BeforeAfterCard from "./BeforeAfterCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = ({ aboutData }: { aboutData: AboutData }) => {
  const { aboutBackdrop, aboutGallery } = aboutData;
  const [imageAspectRatio, setImageAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    if (aboutGallery[0]) {
      const img = new window.Image();
      img.onload = () => {
        const ratio = img.naturalWidth / img.naturalHeight;
        setImageAspectRatio(ratio);
      };
      img.src = aboutGallery[0].url;
    }
  }, [aboutGallery]);

  useGSAP(() => {
    // 1. INITIAL SETUP - Set cards to invisible and offset

    const isMobile = window.innerWidth < 768;
    const beforeAfterCardSection = isMobile
      ? document.querySelector(".before-after-card-mobile")
      : document.querySelector(".before-after-card");

    gsap.set([".text-card", ".image-card", beforeAfterCardSection], {
      opacity: 0,
      y: 50, // Use 'y' instead of 'yPercent'
    });

    // 2. Wait for DOM to be ready, then create SplitText
    // Get all text elements
    const titleElements = document.querySelectorAll(".text-card-title");
    const descriptionElements = document.querySelectorAll(
      ".text-card-description"
    );

    // Create arrays to store SplitText instances
    const titleSplits: SplitText[] = [];
    const descriptionSplits: SplitText[] = [];

    // Create SplitText for each title
    titleElements.forEach((titleEl, index) => {
      const split = new SplitText(titleEl, { type: "words" });
      titleSplits.push(split);

      // Set initial state for words
      gsap.set(split.words, {
        opacity: 0,
        y: 30,
      });
    });

    // Create SplitText for each description
    descriptionElements.forEach((descEl, index) => {
      const split = new SplitText(descEl, { type: "lines" });
      descriptionSplits.push(split);

      // Set initial state for lines
      gsap.set(split.lines, {
        opacity: 0,
        y: 20,
      });
    });

    // 3. ANIMATE CARDS WITH SCROLL-CONTROLLED SCRUB
    ScrollTrigger.batch([".text-card", ".image-card", beforeAfterCardSection], {
      onEnter: (elements) => {
        elements.forEach((element, index) => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          });
        });
      },
    });

    // 4. ANIMATE TEXT CONTENT - Using the stored SplitText instances
    const textCards = document.querySelectorAll(".text-card");
    textCards.forEach((card, cardIndex) => {
      // Find the corresponding SplitText instances for this card
      const titleInCard = card.querySelector(".text-card-title");
      const descriptionInCard = card.querySelector(".text-card-description");

      let titleSplit: SplitText | null = null;
      let descriptionSplit: SplitText | null = null;

      // Find the matching SplitText instances
      titleElements.forEach((titleEl, index) => {
        if (titleEl === titleInCard) {
          titleSplit = titleSplits[index];
        }
      });

      descriptionElements.forEach((descEl, index) => {
        if (descEl === descriptionInCard) {
          descriptionSplit = descriptionSplits[index];
        }
      });

      // Create timeline for this card's text animation
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: 1.2,
          toggleActions: "play none none reverse",
        },
      });

      // Animate title words if they exist
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
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.out",
          }
        );
      }

      // Animate description lines if they exist
      if (
        descriptionSplit &&
        (descriptionSplit as SplitText).lines.length > 0
      ) {
        textTl.fromTo(
          (descriptionSplit as SplitText).lines,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }
    });

    // 5. SPECIAL HANDLING FOR IMAGE CARDS
    const imageCards = document.querySelectorAll(".image-card");
    imageCards.forEach((element) => {
      const title = element.querySelector(".text-card-title");
      const imageContainer = element.querySelector(".image-container");

      if (title && imageContainer) {
        // Create SplitText for this specific image card title
        let titleSplitLocal: SplitText | null = null;
        titleElements.forEach((splitEl, index) => {
          if (splitEl === title) {
            titleSplitLocal = titleSplits[index];
          }
        });

        const imageTl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });

        if (
          titleSplitLocal &&
          (titleSplitLocal as SplitText).words.length > 0
        ) {
          imageTl
            .fromTo(
              (titleSplitLocal as SplitText).words,
              {
                opacity: 0,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.out",
              }
            )
            .fromTo(
              imageContainer,
              {
                opacity: 0,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
              },
              "-=0.3"
            );
        }
      }
    });

    // 6. SPECIAL HANDLING FOR BEFORE-AFTER CARD
    if (beforeAfterCardSection) {
      const titles =
        beforeAfterCardSection.querySelectorAll(".text-card-title");
      const beforeImage = beforeAfterCardSection.querySelector("#before-image");
      const afterImage = beforeAfterCardSection.querySelector("#after-image");
      console.log("found before image", beforeImage);
      console.log("found after image", afterImage);
      console.log("found titles", titles);

      const splitTitles: SplitText[] = [];
      titleElements.forEach((titleEl, index) => {
        if (Array.from(titles).includes(titleEl)) {
          splitTitles.push(titleSplits[index]);
        }
      });
      console.log("split titles", splitTitles);

      if (splitTitles.length > 0) {
        const beforeAfterTl = gsap.timeline({
          scrollTrigger: {
            trigger: beforeAfterCardSection,
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });

        splitTitles.forEach((split) => {
          beforeAfterTl.fromTo(
            (split as SplitText).words,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.05,
              ease: "power2.out",
            }
          );
        });

        beforeAfterTl.fromTo(
          beforeImage,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );

        beforeAfterTl.fromTo(
          afterImage,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [aboutGallery]);

  return (
    <main
      id="about"
      className="relative flex flex-col md:flex-row w-full min-h-screen py-15"
    >
      <Image
        src={aboutBackdrop.url}
        alt="about backdrop"
        sizes="100vw"
        fill
        className="object-cover object-top opacity-10"
      />

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden w-full h-full p-5">
        <div className="flex flex-col w-full h-full gap-10">
          <TextCard
            id="promise-mobile"
            title="Our Promise"
            description={
              <>
                "To deliver exceptional, high-quality work that lets you{" "}
                <span className="text-primary-400">soar</span>—not just in your{" "}
                <span className="text-primary-400">dreams</span>, but in{" "}
                <span className="text-primary-400">reality</span>."
                <br />
                <span className="block mt-2">
                  – The <span className="text-primary-400">Aguilar's</span>
                </span>
              </>
            }
            titleStyle="text-card-title"
            descriptionStyle="text-card-description"
          />

          <div className="image-card flex flex-col flex-center w-full p-10 gap-10 bg-slate-900/60 rounded-xl shadow-lg z-10">
            <h1 className="text-card-title">
              Meet the <span className="text-primary-400">Aguilar's</span>
            </h1>
            <div
              className="image-container relative flex flex-center w-full"
              style={{
                aspectRatio: imageAspectRatio ? imageAspectRatio : "4/3",
              }}
            >
              <Image
                src={aboutGallery[0].url}
                alt="about gallery"
                width={500}
                height={400}
                className="object-contain object-top rounded-xl shadow-lg"
              />
            </div>
          </div>

          <BeforeAfterCard
            id="before-after-card-mobile"
            beforeImage={aboutGallery[2].url}
            afterImage={aboutGallery[1].url}
            imageStyles="h-[250px] sm:h-[300px] w-full rounded-xl shadow-lg"
            isMobile={true}
          />

          <TextCard
            id="experience-location-mobile"
            title="Experience & Location"
            description={
              <>
                "The <span className="text-primary-400">Aguilar's</span> have
                proudly served the{" "}
                <span className="text-primary-400">El Dorado Hills</span>{" "}
                community for over{" "}
                <span className="text-primary-400">15 years</span>. From{" "}
                <span className="text-primary-400">Cameron Park</span> to{" "}
                <span className="text-primary-400">Lake Tahoe</span>, we've
                built lasting relationships alongside lasting structures. We're
                honored to call this place home and to be your trusted local
                construction partner."
              </>
            }
            titleStyle="text-card-title"
            descriptionStyle="text-card-description"
          />

          <TextCard
            id="credentials-trust-mobile"
            title="Credentials & Trust"
            description={
              <>
                <span className="text-primary-400">
                  Golden Eagle Estates LLC
                </span>{" "}
                is fully licensed (
                <span className="text-primary-400">Lic. #140069</span>
                ), bonded, and insured for your complete protection. With 15
                years of proven{" "}
                <span className="text-primary-400">excellence</span> in El
                Dorado County, we stand behind every project with professional{" "}
                <span className="text-primary-400">accountability</span> and
                guaranteed{" "}
                <span className="text-primary-400">satisfaction</span>.
              </>
            }
            titleStyle="text-card-title"
            descriptionStyle="text-card-description"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex w-[40%] h-full p-10">
        <div className="flex flex-col w-full h-full gap-10">
          <TextCard
            id="promise-desktop"
            title="Our Promise"
            description={
              <>
                "To deliver exceptional, high-quality work that lets you{" "}
                <span className="text-primary-400">soar</span>—not just in your{" "}
                <span className="text-primary-400">dreams</span>, but in{" "}
                <span className="text-primary-400">reality</span>."
                <br />
                <span className="block mt-2">
                  – The <span className="text-primary-400">Aguilar's</span>
                </span>
              </>
            }
            titleStyle="text-card-title"
            descriptionStyle="text-card-description"
          />

          <TextCard
            id="experience-location-desktop"
            title="Experience & Location"
            description={
              <>
                "The <span className="text-primary-400">Aguilar's</span> have
                proudly served the{" "}
                <span className="text-primary-400">El Dorado Hills</span>{" "}
                community for over{" "}
                <span className="text-primary-400">15 years</span>. From{" "}
                <span className="text-primary-400">Cameron Park</span> to{" "}
                <span className="text-primary-400">Lake Tahoe</span>, we've
                built lasting relationships alongside lasting structures. We're
                honored to call this place home and to be your trusted local
                construction partner."
              </>
            }
            titleStyle="text-card-title"
            descriptionStyle="text-card-description"
          />

          <TextCard
            id="credentials-trust-desktop"
            title="Credentials & Trust"
            description={
              <>
                <span className="text-primary-400">
                  Golden Eagle Estates LLC
                </span>{" "}
                is fully licensed (
                <span className="text-primary-400">Lic. #140069</span>
                ), bonded, and insured for your complete protection. With 15
                years of proven{" "}
                <span className="text-primary-400">excellence</span> in El
                Dorado County, we stand behind every project with professional{" "}
                <span className="text-primary-400">accountability</span> and
                guaranteed{" "}
                <span className="text-primary-400">satisfaction</span>.
              </>
            }
            titleStyle="text-card-title"
            descriptionStyle="text-card-description"
          />
        </div>
      </div>

      <div className="hidden md:flex flex-1 flex-col gap-10 items-start p-10">
        <div className="image-card flex flex-col w-full p-10 gap-10 bg-slate-900/60 rounded-xl shadow-lg z-10">
          <h1 className="text-card-title">
            Meet the <span className="text-primary-400">Aguilar's</span>
          </h1>
          <div
            className="image-container relative flex w-full"
            style={{
              aspectRatio: imageAspectRatio ? imageAspectRatio : "4/3",
            }}
          >
            <Image
              src={aboutGallery[0].url}
              alt="about gallery"
              width={1000}
              height={800}
              className="object-contain object-top rounded-xl shadow-lg"
            />
          </div>
        </div>

        <BeforeAfterCard
          id="before-after-card"
          beforeImage={aboutGallery[2].url}
          afterImage={aboutGallery[1].url}
          imageStyles="h-[300px] lg:h-[400px] w-full rounded-xl shadow-lg"
        />
      </div>
    </main>
  );
};

export default About;
