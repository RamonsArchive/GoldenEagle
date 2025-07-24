"use client";
import { ServicesData } from "@/lib/globalTypes";
import Image from "next/image";
import React from "react";
import TextCard from "./TextCard";
import ServicesCarousel from "./ServicesCarousel";
import LazyImage from "./LazyImage";

const Services = ({ servicesData }: { servicesData: ServicesData }) => {
  const { servicesBackdrop, awsServicesImages } = servicesData;

  console.log("This is the services data", servicesData);
  console.log("This is the services backdrop", servicesBackdrop);

  return (
    <main
      id="services"
      className="relative flex flex-col md:flex-row w-full min-h-screen py-15"
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
          title="Services"
          description={
            <>
              From foundation to finish, we bring your{" "}
              <span className="text-primary-400">vision</span> to life. No
              project too big, no detail too small.
            </>
          }
          titleStyle="text-card-title z-20"
          descriptionStyle="text-card-description z-20"
        />

        <div className="flex flex-col w-full h-full gap-5">
          <div className="flex flex-col w-full h-full gap-5"></div>
        </div>
        <ServicesCarousel servicesData={servicesData} />
      </div>
    </main>
  );
};

export default Services;
