"use client";
import SectionHeader from "@/components/ui/sectionHeader";
import React from "react";
import { testimonials } from "@/data/testimonials";
import {
  Swiper,
  SwiperSlide,
  SwiperClass,
  Autoplay,
  Navigation,
  Pagination,
  A11y,
  EffectCards,
  Scrollbar,
} from "@/utils/swiper";
import { renderStars } from "@/components/ui/renderStars";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { TransitionLink } from "@/components/TransitionLink";
import { ServiceIcons } from "@/data/serviceIcons";
SwiperClass.use([
  Autoplay,
  Navigation,
  Pagination,
  A11y,
  EffectCards,
  Scrollbar,
]);

interface SectionProps {
  className?: string;
  noHeader?: boolean;
  noAnimation?: boolean;
  noSubheadingAnimation?: boolean;
  noCarousel?: boolean;
  noCards?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

function TestimonialsSection({
  className,
  noHeader = false,
  noAnimation = true,
  noSubheadingAnimation = false,
  noCarousel = false,
  noCards = false,
}: SectionProps) {
  return (
    <div
      id="testimonials"
      className={`${className} section-container !flex-col bg-white`}
    >
      <div
        className={`flex size-full sm:max-w-[--section-width] flex-col items-center sm:items-start justify-between gap-[1.5rem] sm:gap-[3.75rem]`}
      >
        {/* Header */}
        {!noHeader && (
          <SectionHeader
            center
            noAnimation={noAnimation}
            heading="Testimonials"
            noSubheadingAnimation={noSubheadingAnimation}
            subheading="Here's what real estate professionals are saying"
            noBodyAnimation
            body="Not yet 100% convinced? Hear what a few of the top real estate professionals have to say about us."
          />
        )}

        {/* Testimonial Carousel */}
        {!noCards && !noCarousel && (
          <div className={`flex flex-col size-full mt-[5rem]`}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Pagination, Navigation]}
              className="mySwiper max-w-[65vw] w-full sm:w-[50rem] h-[30rem] sm:h-[35rem]"
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
                    <p className="my-auto text-center pn-regular-24 max-w-[50ch] truncate text-wrap line-clamp-5">
                      {item.quote}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-y-[0.5rem]">
                      <div className="flex flex-row gap-[0.3rem] text-goldenbrown my-auto">
                        {renderStars(item.rating)}
                      </div>
                      <p className="text-center pn-bold-24">{item.author}</p>
                      <p className="pn-regular-14">{item.company}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {!noCarousel && noCards && (
          <div
            className={`flex flex-col items-start justify-center size-full mt-[5rem] !w-[100vw] -mx-[2rem] md:-mx-[calc(5rem)] min-[1920px]:-mx-[calc(6rem)] overflow-hidden`}
          >
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={30}
              grabCursor={true}
              modules={[Pagination]}
              className="mySwiper !px-[2rem] sm:!px-[6rem] !w-full h-[30rem] sm:h-[35rem] !mx-0"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="max-w-[80vw] sm:max-w-[50vw] border-b cursor-swipe-hover bg-ash text-white border-goldenbrown border rounded-[1rem] shadow-customShadow transition-all duration-300 hover:shadow-goldenbrown/25 hover:scale-[1.0125] flex items-center justify-between text-sm font-medium pn-regular-32 text-start hover:no-underline py-[2.5rem] px-[2rem]"
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
                    <p className="my-auto text-center pn-regular-24 max-w-[50ch] truncate text-wrap line-clamp-5">
                      {item.quote}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-y-[0.5rem]">
                      <div className="flex flex-row gap-[0.3rem] text-goldenbrown my-auto">
                        {renderStars(item.rating)}
                      </div>
                      <p className="text-center pn-bold-24">{item.author}</p>
                      <p className="pn-regular-14">{item.company}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* CTA */}
        <div className="flex justify-center w-full">
          <div className="flex flex-col sm:flex-row gap-[1rem]">
            <HoverWrapper className="group/cta cursor-select-hover">
              <TransitionLink
                href="/testimonials"
                className="button gold pn-regular-16 pn-regular-16 h-full !bg-transparent shadow-customShadow shadow-ash/5 group-hover/cta:shadow-goldenrod/5 w-fit"
                passHref
              >
                <FlipLink className={`flex items-center w-fit`}>
                  View All Testimonials
                </FlipLink>

                <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                  {ServiceIcons.arrow}
                </div>
              </TransitionLink>
            </HoverWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
