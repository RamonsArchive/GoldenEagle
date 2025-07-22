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
  console.log(aboutData);
  const { aboutBackdrop, aboutGallery } = aboutData;
  const [imageAspectRatio, setImageAspectRatio] = useState<number | null>(null);
  useEffect(() => {
    if (aboutGallery[0]) {
      const img = new window.Image();
      img.onload = () => {
        const ratio = img.naturalWidth / img.naturalHeight;
        console.log(ratio);
        setImageAspectRatio(ratio);
      };
      img.src = aboutGallery[0].url;
    }
  }, [aboutGallery]);

  useGSAP(() => {}, []);

  return (
    <main className="relative flex flex-col md:flex-row w-full min-h-screen py-15">
      <Image
        src={aboutBackdrop.url}
        alt="about backdrop"
        fill
        className="object-cover object-top opacity-10"
      />
      <div className="flex flex-col md:hidden w-full h-full p-5">
        <div className="flex flex-col w-full h-full gap-10">
          <TextCard
            id="promise"
            title="Our Promise"
            description={
              <>
                “To deliver exceptional, high-quality work that lets you{" "}
                <span className="text-primary-400">soar</span>—not just in your{" "}
                <span className="text-primary-400">dreams</span>, but in{" "}
                <span className="text-primary-400">reality</span>.”
                <br />
                <span className="block mt-2">
                  – The <span className="text-primary-400">Aguilar’s</span>
                </span>
              </>
            }
            titleStyle="text-card-title"
            descriptionStyle="text-card-description"
          />
          <div className="flex flex-col flex-center w-full p-10 gap-10 bg-slate-900/60 rounded-xl shadow-lg z-10">
            <h1 className="text-card-title">
              Meet the <span className="text-primary-400">Aguilar's</span>
            </h1>
            <div
              className="relative flex flex-center w-full"
              style={{
                aspectRatio: imageAspectRatio ? imageAspectRatio : "4/3",
              }}
            >
              <Image
                src={aboutGallery[0].url}
                alt="about gallery"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>
          <TextCard
            id="experience-location"
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
            id="credentials-trust"
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

      <div className="hidden md:flex w-[40%] h-full p-10">
        <div className="flex flex-col w-full h-full gap-10">
          <TextCard
            id="promise"
            title="Our Promise"
            description={
              <>
                “To deliver exceptional, high-quality work that lets you{" "}
                <span className="text-primary-400">soar</span>—not just in your{" "}
                <span className="text-primary-400">dreams</span>, but in{" "}
                <span className="text-primary-400">reality</span>.”
                <br />
                <span className="block mt-2">
                  – The <span className="text-primary-400">Aguilar’s</span>
                </span>
              </>
            }
            titleStyle="text-card-title"
            descriptionStyle="text-card-description"
          />
          <TextCard
            id="experience-location"
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
            id="credentials-trust"
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
        <div className="flex flex-col w-full p-10 gap-10 bg-slate-900/60 rounded-xl shadow-lg z-10">
          <h1 className="text-card-title">
            Meet the <span className="text-primary-400">Aguilar's</span>
          </h1>
          <div
            className="relative flex w-full"
            style={{
              aspectRatio: imageAspectRatio ? imageAspectRatio : "4/3",
            }}
          >
            <Image
              src={aboutGallery[0].url}
              alt="about gallery"
              fill
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
