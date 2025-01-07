/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import FAQSection from "@/components/pages/sections/faqSection";
import ContactSection from "@/components/pages/sections/contactSection";
import BasicHeroSection from "@/components/pages/sections/basicHeroSection";
import TestimonialsSection from "@/components/pages/sections/testimonialsSection";

import { allImagePaths } from "@/data/imageImports";
// import FloatingGallery from "@/components/pages/gallery/FloatingGallery";
// import DynamicGallery from "./DynamicGallery";
// import HypnoticGallery from "./HypnoticGallery";
// import HorizontalScroll from "./HorizontalGallery";
// import DraggableSlider from "./DraggableSlider";
// import ImageCarousel from "./ImageCarousel";
// import ThreeSlider from "./ThreeSlider";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ServiceIcons } from "@/data/serviceIcons";

import {
  Swiper,
  SwiperSlide,
  // EffectCards,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "@/utils/swiper";

function Body() {
  const [selectedImage, setSelectedImage] = useState<string>("");
  return (
    <>
      <BasicHeroSection
        className="overflow-hidden"
        heading="Gallery"
        subheading="Real Estate Photography"
        content={
          <>
            <div className="relative size-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-[1rem]">
              {allImagePaths.map((imagePath, index) => (
                <div
                  key={"photo-" + index}
                  className="relative group cursor-select-hover rounded-[1rem] overflow-hidden flex flex-col"
                  onClick={() => setSelectedImage(imagePath)}
                >
                  <div className="relative aspect-square">
                    <div className="flex flex-col size-full items-center justify-center overflow-hidden bg-ash pointer-events-none">
                      <div className="relative size-full">
                        <Image
                          src={imagePath}
                          alt="hero-image"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="w-full scale-125 group-hover:scale-110 opacity-100 group-hover:opacity-50 transition-all duration-500 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Modal */}
            <Dialog.Root
              open={!!selectedImage}
              onOpenChange={() => setSelectedImage("")}
            >
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99999] cursor-none-hover" />
                <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99999]">
                  <Dialog.Title className="hidden">Image Carousel</Dialog.Title>

                  {selectedImage && (
                    <Swiper
                      initialSlide={allImagePaths.indexOf(selectedImage)}
                      scrollbar={{ hide: true }}
                      modules={[Scrollbar]}
                      className="mySwiper relative w-[90vw] h-[90vh] bg-transparent"
                    >
                      {allImagePaths.map((imagePath, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            src={imagePath}
                            alt="Full size image"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            className="object-contain"
                            quality={75}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  <Dialog.Close className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors cursor-select-hover z-10">
                    <div className="size-6">{ServiceIcons.close}</div>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </>
        }
      />
      <TestimonialsSection
        noCarousel
        noAnimation
        className="!bg-white/20 backdrop-blur-sm"
      />
      <FAQSection vertical className="bg-white z-10" />
      <ContactSection className="bg-white z-10" />
      {/* <DynamicGallery images={allImagePaths} /> */}
      {/* <HypnoticGallery images={allImagePaths} /> */}
      {/* <HorizontalScroll images={allImagePaths} /> */}
      {/* <DraggableSlider images={allImagePaths} /> */}
      {/* <ImageCarousel images={allImagePaths} /> */}
      {/* <ThreeSlider images={allImagePaths} /> */}
      {/* <FloatingGallery images={allImagePaths} /> */}
    </>
  );
}

export default Body;
