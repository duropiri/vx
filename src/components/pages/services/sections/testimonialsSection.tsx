import SectionHeader from "@/components/ui/sectionHeader";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import { testimonials } from "@/data/testimonials";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import { renderStars } from "@/components/ui/renderStars";
import { Reveal } from "@/components/animations/Reveal";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Image from "next/image";
import arrowRedirect from "@/../../public/svgs/arrow-redirect-cta.svg";

interface SectionProps {
  className?: string;
  scrollYProgress?: MotionValue<number>; // Proper type for scrollYProgress
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

function TestimonialsSection({ className }: SectionProps) {
  return (
    <div
      id="services"
      className={`section-container !flex-col ${className} bg-white  overflow-x-hidden`}
    >
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[1.5rem] lg:gap-[3.75rem]">
        {/* Header */}
        <SectionHeader
          center
          heading="Testimonials"
          subheading="Here's what real estate professionals are saying"
          body="Not yet 100% convinced? Hear what a few of the top real estate professionals have to say about us."
        />
      </div>
      <div className="flex flex-col size-full mt-[5rem]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Pagination, Navigation]}
          className="mySwiper max-w-[65vw] w-full lg:w-[34rem] h-[32rem] lg:h-[24rem]"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="border-b cursor-swipe-hover bg-ash text-white border-goldenbrown border rounded-[1rem] shadow-customShadow transition-all duration-300 hover:shadow-goldenbrown/25 hover:scale-[1.0125] flex items-center justify-between text-sm font-medium pn-regular-32 text-start hover:no-underline py-[2.5rem] px-[2rem]"
            >
              <div className="flex flex-col items-center justify-start size-full">
                <div className="size-[3rem]">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.67,26.06c.09,0,8.77-.14,8.77-11.89A7.22,7.22,0,1,0,5.67,20.9v4.16A1,1,0,0,0,6.67,26.06ZM3,14.17a5.22,5.22,0,1,1,10.44,0c0,7.5-3.88,9.31-5.77,9.75V20.17a1,1,0,0,0-.75-1A5.21,5.21,0,0,1,3,14.17Z" />
                    <path d="M22.22,26.06c.09,0,8.78-.14,8.78-11.89a7.22,7.22,0,1,0-9.78,6.73v4.16A1,1,0,0,0,22.22,26.06ZM18.56,14.17a5.22,5.22,0,1,1,10.44,0c0,7.5-3.89,9.31-5.78,9.75V20.17a1,1,0,0,0-.75-1A5.21,5.21,0,0,1,18.56,14.17Z" />
                  </svg>
                </div>
                <p className="my-auto text-center pn-regular-16">
                  {item.quote}
                </p>
                <div className="flex flex-row gap-[0.3rem] text-goldenbrown my-auto">
                  {renderStars(item.rating)}
                </div>
                <p className="text-center pn-bold-28">{item.author}</p>
                <p className="pn-regular-16">{item.company}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex h-[3.313rem] mt-[4rem]">
        <div className="flex flex-col lg:flex-row gap-[1rem]">
          <motion.div
            className={`button group !p-0 h-full cursor-select-hover !bg-transparent shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-110 w-[15rem]`}
            style={{
              background: "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
              backgroundSize: "300% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <HoverWrapper
              href="/testimonials"
              className="flex w-full items-center px-[1.5rem] py-[0.5rem]"
            >
              <FlipLink className={`flex items-center w-full`}>
                View All Testimonials
              </FlipLink>

              <Image
                alt="arrow"
                src={arrowRedirect}
                className="text-ash group-hover:rotate-45 transition-all duration-300"
                quality={10}
              />
            </HoverWrapper>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
