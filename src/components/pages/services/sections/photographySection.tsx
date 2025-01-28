"use client";
import * as Tabs from "@radix-ui/react-tabs";
// import * as Tooltip from "@radix-ui/react-tooltip";
import * as Dialog from "@radix-ui/react-dialog";

import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import { useState } from "react";

import {
  Swiper,
  SwiperSlide,
  // EffectCards,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "@/utils/swiper";

import ScaleInVisible from "@/components/animations/ScaleInVisible";
import { useViewport } from "@/contexts/ViewportContext";
import { ServiceIcons } from "@/data/serviceIcons";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { TransitionLink } from "@/components/TransitionLink";

import { allImagePaths } from "@/data/imageImports";

// Create a mapping of all images using the imported assets
const PORTFOLIO_IMAGES = {
  interior: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/assets/portfolio/images/interior/Virtual_Xposure_-_Interior_Image_-_(${
      i + 1
    }).webp`,
  })),
  exterior: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/assets/portfolio/images/exterior/Virtual_Xposure_-_Exterior_Image_-_(${
      i + 1
    }).webp`,
  })),
  "aerial drone": Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/assets/portfolio/images/aerial drone/Virtual_Xposure_-_Aerial_Drone_Image_-_(${
      i + 1
    }).webp`,
  })),
};

const PhotographySection = ({ dark = true }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const { isMobile } = useViewport();

  // Create category data using the image mapping
  const categoryData = Object.entries(PORTFOLIO_IMAGES).reduce(
    (acc, [category, images]) => {
      acc[category] = images.map(({ id, src }) => ({
        id,
        title: `${
          category.charAt(0).toUpperCase() + category.slice(1)
        } Photo ${id}`,
        image: src,
      }));
      return acc;
    },
    {} as Record<string, { id: number; title: string; image: string }[]>
  );

  // Create the all category
  const allCategory = Object.entries(categoryData).flatMap(
    ([category, items]) =>
      items.map((item) => ({
        ...item,
        category,
      }))
  );

  const caseStudies = {
    all: allCategory,
    ...categoryData,
  };

  const renderCaseStudyCard = (study) => (
    <ScaleInVisible
      key={"case-study-" + study.id}
      className="relative group cursor-select-hover rounded-[1rem] overflow-hidden flex flex-col"
      onClick={() => setSelectedImage(study.image)}
    >
      <div className="relative aspect-square">
        <div className="flex flex-col size-full items-center justify-center overflow-hidden bg-ash pointer-events-none">
          <div className="relative size-full">
            <Image
              src={study.image}
              alt={study.title}
              fill
              sizes="(max-width: 640px) 50vw, 500px"
              priority={false}
              loading={false ? "eager" : "lazy"}
              className="w-full scale-125 group-hover:scale-110 opacity-100 group-hover:opacity-50 transition-all duration-500 object-cover"
              quality={75}
            />
          </div>
        </div>
      </div>
      {study.description && (
        <div className="absolute bottom-0 bg-white/75 opacity-0 p-[2rem] pn-regular-16 group-hover:opacity-100 transition-all duration-500">
          <p className="pn-semibold-40 font-bold mb-[1rem]">{study.title}</p>
          <p className="mb-[2rem] text-white/80">{study.description}</p>
          {study.challenge && (
            <div className="mb-2">
              <strong>Challenge:</strong> {study.challenge}
            </div>
          )}
          {study.solution && (
            <div>
              <strong>Solution:</strong> {study.solution}
            </div>
          )}
        </div>
      )}
    </ScaleInVisible>
  );

  const renderSwiperContent = (studies) => {
    return (
      <div className="pb-[5rem]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={16}
          loop={true}
          slidesPerView={isMobile ? 2 : 6}
          slidesPerGroup={isMobile ? 2 : 6}
          pagination={{
            dynamicBullets: true,
          }}
          className={`overflow-visible relative flex flex-col !pb-[4rem] 
              [&_.swiper-pagination-bullet]:!w-[1.5rem] 
              [&_.swiper-pagination-bullet]:!h-[1.5rem]
              ${dark && "[&_.swiper-pagination-bullet]:bg-white"} 
              [&_.swiper-pagination]:!-mt-[5rem]
              [&_.swiper-pagination-bullet-active]:!bg-goldenbrown
              [&_.swiper-pagination]:!top-auto
            `}
        >
          {studies.map((study) => (
            <SwiperSlide
              key={`study-slide-${study.id}-${study.title}`}
              className="!h-auto"
            >
              {renderCaseStudyCard(study)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <>
      <div
        id="photography"
        className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center xl:items-start justify-center"
      >
        <SectionHeader
          noAnimation
          noCenter
          dark={dark}
          heading="Photography"
          subheading="Professionally Enhanced Photos"
          noBodyAnimation
          body="From stunning interiors to sweeping aerial views, our professional photography services capture your property in its best light. Every shot is carefully composed and expertly edited to showcase your property's unique features and appeal to potential buyers."
          className="text-black mb-[2rem] xl:mb-[6rem]"
        />
        <div className="relative flex size-full max-w-[--section-width] flex-col xl:flex-row items-center justify-center gap-[3rem] xl:gap-[3.75rem]">
          <Tabs.Root
            defaultValue="all"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col size-full"
          >
            <Tabs.List className="pn-semibold-40 flex flex-col xl:flex-row items-start justify-between py-[2rem] border-b mb-[2rem]">
              {["all", "interior", "exterior", "aerial drone"].map((tab) => (
                <Tabs.Trigger
                  key={"tab-" + tab}
                  value={tab}
                  className={`cursor-select-hover px-4 py-2 transition-all duration-500 ${
                    dark ? "text-white" : "text-black"
                  } ${
                    activeTab === tab
                      ? "opacity-100 underline! underline-offset-[1rem] decoration-ash gold-text font-bold"
                      : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {tab === "aerial drone"
                    ? "Drone"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {Object.keys(caseStudies).map((category) => (
              <Tabs.Content key={category} value={category} className="w-full">
                {renderSwiperContent(caseStudies[category])}
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>

        {/* CTA */}
        <div className="flex justify-center w-full">
          <div className="flex flex-col sm:flex-row gap-[1rem]">
            <HoverWrapper className="group/cta cursor-select-hover">
              <TransitionLink
                href="/case-studies/gallery"
                className="button !bg-goldenbrown text-white !border-none pn-regular-16 h-full shadow-customShadow shadow-ash/5 group-hover/cta:shadow-goldenrod/5 w-fit"
                passHref
              >
                <FlipLink className={`flex items-center w-fit`}>
                  See More
                </FlipLink>

                <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                  {ServiceIcons.arrow}
                </div>
              </TransitionLink>
            </HoverWrapper>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog.Root
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay
            className="fixed inset-0 bg-black/75 [backdrop-filter:_saturate(180%)_blur(20px)] cursor-none-hover pointer-events-none"
            style={{ zIndex: 99999999 }}
          >
            <Dialog.Close className="absolute inset-0 cursor-none-hover cursor-none">
              <Dialog.Close className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors cursor-select-hover z-10">
                <div className="size-6">{ServiceIcons.close}</div>
              </Dialog.Close>
              <Dialog.Content
                className="fixed size-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                // style={{ zIndex: 99999999 }}
              >
                <Dialog.Title className="hidden">Image Carousel</Dialog.Title>
                <div className="relative w-[100vw] h-full bg-transparent">
                  {selectedImage && (
                    <Swiper
                      initialSlide={allImagePaths.indexOf(selectedImage)}
                      scrollbar={{ hide: true }}
                      modules={[Scrollbar]}
                      className="mySwiper relative size-full p-[2rem] [&_.swiper-scrollbar]:mb-[2rem] [&_.swiper-scrollbar]:!h-[1rem] [&_.swiper-scrollbar>.swiper-scrollbar-drag]:!bg-goldenbrown"
                    >
                      {allImagePaths.map((imagePath, index) => (
                        <SwiperSlide key={index} className="">
                          <Image
                            src={imagePath}
                            alt="Full size image"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            className="object-contain !size-[95%] md:!size-[75%] cursor-drag-hover place-self-center"
                            quality={75}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>
              </Dialog.Content>
            </Dialog.Close>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default PhotographySection;
