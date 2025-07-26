"use client";
import React, { useEffect, useState } from "react";
import { AboutData } from "@/lib/globalTypes";
import TextCard from "./TextCard";
import BeforeAfterCard from "./BeforeAfterCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import LazyImage from "./LazyImage";
import { useBatchCardAnimation } from "./BatchAnimation";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = ({ aboutData }: { aboutData: AboutData }) => {
  const { aboutBackdrop, aboutGallery } = aboutData;
  const [imageAspectRatio, setImageAspectRatio] = useState<number | null>(null);
  const isMobile = window.innerWidth < 768;
  const beforeAfterCardSectionClassName = isMobile
    ? ".before-after-card-about-mobile"
    : ".before-after-card-about";

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

  useBatchCardAnimation({
    sectionName: "about",
    cardSelectors: [
      ".text-card-about",
      ".image-card-about",
      beforeAfterCardSectionClassName,
    ],
    textSelectors: {
      titles: [".text-card-about-title"],
      descriptions: [".text-card-about-description"],
    },
    imageSelectors: [".image-container-about"],
    cardAnimation: {
      startTrigger: "top 90%",
      endTrigger: "top 60%",
      scrub: 1,
      duration: 1,
      ease: "power2.out",
    },
    textAnimation: {
      startTrigger: "top 80%",
      endTrigger: "top 50%",
      scrub: 1.2,
      titleDuration: 0.8,
      descDuration: 0.6,
      titleStagger: 0.05,
      descStagger: 0.08,
    },
  });

  useGSAP(() => {
    if (!isMobile) {
      const beforeAfterCardSection = document.querySelector(
        beforeAfterCardSectionClassName
      );

      if (!beforeAfterCardSection) {
        console.log("beforeAfterCardSection not found");
        return;
      }

      // Select elements WITHIN the card section (like your original)
      const beforeImage = beforeAfterCardSection.querySelector("#before-image");
      const afterImage = beforeAfterCardSection.querySelector("#after-image");

      console.log("beforeImage", beforeImage);
      console.log("afterImage", afterImage);

      if (!beforeImage || !afterImage) {
        console.log("Images not found within the card section");
        return;
      }

      const beforeAfterTl = gsap.timeline({
        scrollTrigger: {
          trigger: beforeAfterCardSection,
          start: "top 85%",
          end: "top 55%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      // Don't animate the container - let batch animation handle that
      // Just animate the images in sequence like your original
      beforeAfterTl.fromTo(
        beforeImage,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

      beforeAfterTl.fromTo(
        afterImage,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3" // This creates the stagger effect
      );
      return () => {
        beforeAfterTl.scrollTrigger?.kill();
        beforeAfterTl.kill();
      };
    } else {
      // Select elements WITHIN the card section (like your original)
      console.log(
        "beforeAfterCardSectionClassName",
        beforeAfterCardSectionClassName
      );
      const beforeAfterCardSection = document.querySelector(
        beforeAfterCardSectionClassName
      );

      if (!beforeAfterCardSection) {
        console.log("beforeAfterCardSection not found");
        return;
      }
      const beforeImage = beforeAfterCardSection.querySelector("#before-image");
      const afterImage = beforeAfterCardSection.querySelector("#after-image");

      gsap.fromTo(
        beforeImage,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: beforeImage,
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        afterImage,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: afterImage,
            start: "top 95%",
            end: "top 75%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        gsap.killTweensOf(beforeImage);
        gsap.killTweensOf(afterImage);
      };
    }
  }, []);

  return (
    <main
      id="about"
      className="relative flex flex-col md:flex-row w-full min-h-screen py-15"
      style={{
        contain: "layout style paint",
        contentVisibility: "auto",
      }}
    >
      <LazyImage
        src={aboutBackdrop.url}
        alt="about backdrop"
        sizes="100vw"
        isFill={true}
        containerClassName="w-full h-full opacity-15"
        imageClassName="object-cover object-top opacity-10"
        skipIntersectionObserver={true}
      />

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden w-full h-full p-5">
        <div className="flex flex-col w-full h-full gap-10">
          <TextCard
            id="promise-mobile"
            className="text-card-about"
            title="Our Promise"
            description={
              <>
                "To deliver exceptional, high-quality work that lets you{" "}
                <span className="text-primary-400">soar</span>—not just in your{" "}
                <span className="text-primary-400">dreams</span>, but in{" "}
                <span className="text-primary-400">reality</span>."
                <br />
                <span className="block mt-2">
                  - The <span className="text-primary-400">Aguilar's</span>
                </span>
              </>
            }
            titleStyle="text-card-about-title"
            descriptionStyle="text-card-about-description"
          />

          <div className="image-card-about flex flex-col flex-center w-full p-10 gap-10 bg-slate-900/60 rounded-xl shadow-lg z-10">
            <h1 className="text-card-about-title">
              Meet the <span className="text-primary-400">Aguilar's</span>
            </h1>
            <div
              className="image-container-about relative flex flex-center w-full"
              style={{
                aspectRatio: imageAspectRatio ? imageAspectRatio : "4/3",
              }}
            >
              <LazyImage
                src={aboutGallery[0].url}
                alt="about gallery"
                width={500}
                height={400}
                containerClassName="w-full h-full"
                imageClassName="real-image-about"
              />
            </div>
          </div>

          <BeforeAfterCard
            id="before-after-card-mobile"
            className="before-after-card-about-mobile"
            beforeImage={aboutGallery[2].url}
            afterImage={aboutGallery[1].url}
            imageStyles="h-[250px] sm:h-[300px] w-full rounded-xl shadow-lg"
            imageClassName="real-image-before-after-about"
            isMobile={true}
          />

          <TextCard
            id="experience-location-mobile"
            className="text-card-about"
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
            titleStyle="text-card-about-title"
            descriptionStyle="text-card-about-description"
          />

          <TextCard
            id="credentials-trust-mobile"
            className="text-card-about"
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
            titleStyle="text-card-about-title"
            descriptionStyle="text-card-about-description"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex w-[40%] h-full p-10">
        <div className="flex flex-col w-full h-full gap-10">
          <TextCard
            id="promise-desktop"
            className="text-card-about"
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
            titleStyle="text-card-about-title"
            descriptionStyle="text-card-about-description"
          />

          <TextCard
            id="experience-location-desktop"
            className="text-card-about"
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
            titleStyle="text-card-about-title"
            descriptionStyle="text-card-about-description"
          />

          <TextCard
            id="credentials-trust-desktop"
            className="text-card-about"
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
            titleStyle="text-card-about-title"
            descriptionStyle="text-card-about-description"
          />
        </div>
      </div>

      <div className="hidden md:flex flex-1 flex-col gap-10 items-start p-10">
        <div className="image-card-about flex flex-col w-full p-10 gap-10 bg-slate-900/60 rounded-xl shadow-lg z-10">
          <h1 className="text-card-about-title">
            Meet the <span className="text-primary-400">Aguilar's</span>
          </h1>
          <div
            className="image-container-about relative flex w-full"
            style={{
              aspectRatio: imageAspectRatio ? imageAspectRatio : "4/3",
            }}
          >
            <LazyImage
              src={aboutGallery[0].url}
              alt="about gallery"
              width={1000}
              height={800}
              containerClassName="w-full h-full"
              imageClassName="real-image-about"
            />
          </div>
        </div>

        <BeforeAfterCard
          id="before-after-card"
          className="before-after-card-about"
          beforeImage={aboutGallery[2].url}
          afterImage={aboutGallery[1].url}
          imageStyles="h-[300px] lg:h-[400px] w-full rounded-xl shadow-lg"
          imageClassName="real-image-before-after-about"
        />
      </div>
    </main>
  );
};

export default About;
