"use client";
import { ServicesData } from "@/lib/globalTypes";
import Image from "next/image";
import React from "react";
import TextCard from "./TextCard";
import ServicesCarousel from "./ServicesCarousel";
import LazyImage from "./LazyImage";
import { useBatchCardAnimation } from "./BatchAnimation";

const Services = ({ servicesData }: { servicesData: ServicesData }) => {
  const { servicesBackdrop, awsServicesImages } = servicesData;

  console.log("This is the services data", servicesData);
  console.log("This is the services backdrop", servicesBackdrop);

  useBatchCardAnimation({
    sectionName: "services",
    cardSelectors: [".text-card-services"],
    textSelectors: {
      titles: [".text-card-title-services"],
      descriptions: [".text-card-description-services"],
    },
  });

  return (
    <main
      id="services"
      className="relative flex flex-col md:flex-row w-full min-h-screen py-15"
      style={{
        contain: "layout style paint",
        contentVisibility: "auto",
      }}
    >
      <LazyImage
        src={servicesBackdrop.url}
        alt={servicesBackdrop.alt}
        sizes="100vw"
        isFill={true}
        containerClassName="w-full h-full opacity-15"
        imageClassName="object-cover object-top opacity-15 z-15"
        skipIntersectionObserver={true}
      />

      <div className="flex flex-col md:hidden w-full h-full p-5 gap-10">
        <TextCard
          id="services-mobile"
          className="text-card-services"
          title="Services"
          description={
            <>
              From foundation to finish, we bring your{" "}
              <span className="text-primary-400">vision</span> to life. No
              project too big, no detail too small.
            </>
          }
          titleStyle="text-card-title-services z-25"
          descriptionStyle="text-card-description-services z-25"
        />

        <ServicesCarousel servicesData={servicesData} />
      </div>
    </main>
  );
};

export default Services;
