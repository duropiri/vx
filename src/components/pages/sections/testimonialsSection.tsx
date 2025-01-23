"use client";
import SectionHeader from "@/components/ui/sectionHeader";
import React, { useEffect } from "react";
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
import { useViewport } from "@/contexts/ViewportContext";
import { ReactGoogleReviews } from "react-google-reviews";
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
  const { windowWidth } = useViewport();
  useEffect(() => {
    const nextButton = document.querySelector(".swiper-button-next");
    const prevButton = document.querySelector(".swiper-button-prev");
    if (nextButton && prevButton) {
      nextButton.classList.add("cursor-select-hover");
      prevButton.classList.add("cursor-select-hover");
    }
  }, [, windowWidth]);

  return (
    <div
      id="testimonials"
      className={`${className} section-container !flex-col bg-white overflow-hidden`}
    >
      <div
        className={`flex size-full sm:max-w-[--section-width] flex-col items-center sm:items-start justify-between gap-[1.5rem] sm:gap-[3.75rem]`}
      >
        {/* Header */}
        {!noHeader && (
          <SectionHeader
            noCenter
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
          <div
            className={`flex flex-col size-full mt-[5rem] [&_.css-1uyvnff]:contents`}
          >
            <ReactGoogleReviews
              layout="custom"
              featurableId={`7d474d03-83fb-40bc-8b16-a5fb73d658fa`}
              renderer={(reviews) => {
                return (
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards, Pagination, Navigation]}
                    className="mySwiper max-w-[65vw] w-full sm:w-[50rem] h-[30rem] sm:h-[35rem]"
                  >
                    {reviews
                      .slice(0, 6)
                      .map(
                        ({
                          reviewId,
                          reviewer,
                          comment,
                          starRating,
                          createTime,
                        }) => (
                          <SwiperSlide
                            key={reviewId}
                            className="cursor-swipe-hover bg-ash text-white rounded-[1rem] shadow-customShadow transition-all duration-300 hover:shadow-goldenbrown/25 hover:scale-[1.0125] flex items-center justify-between text-sm font-medium pn-regular-32 text-start hover:no-underline py-[2.5rem] px-[2rem]"
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
                                {comment}
                              </p>
                              <div className="flex flex-col items-center justify-center gap-y-[0.5rem]">
                                <div className="flex flex-row gap-[0.3rem] text-goldenbrown my-auto">
                                  {renderStars(starRating)}
                                </div>
                                <p className="text-center pn-bold-24">
                                  {reviewer.displayName}
                                </p>
                                <p className="pn-regular-14">
                                  {createTime &&
                                    new Date(createTime).toLocaleDateString(
                                      "en-US",
                                      {
                                        month: "long", // Full month name
                                        day: "numeric", // Numeric day
                                        year: "numeric", // Full year
                                      }
                                    )}
                                </p>
                                <div className="size-[2rem] mt-[1rem]">
                                  {ServiceIcons.google}
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      )}
                  </Swiper>
                );
              }}
            />
          </div>
        )}

        {!noCarousel && noCards && (
          <div
            className={`flex flex-col items-start justify-center size-full mt-[5rem] !w-[100vw] -mx-[2rem] md:-mx-[calc(5rem)] min-[1920px]:-mx-[calc(6rem)] overflow-hidden [&_.css-1uyvnff]:contents`}
          >
            <ReactGoogleReviews
              layout="custom"
              featurableId={`7d474d03-83fb-40bc-8b16-a5fb73d658fa`}
              renderer={(reviews) => {
                return (
                  <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="mySwiper !px-[2rem] sm:!px-[6rem] !w-full h-[30rem] sm:h-[35rem] !mx-0"
                  >
                    {reviews
                      .slice(0, 6)
                      .map(
                        ({
                          reviewId,
                          reviewer,
                          comment,
                          starRating,
                          createTime,
                        }) => (
                          <SwiperSlide
                            key={reviewId}
                            className="max-w-[80vw] sm:max-w-[50vw] cursor-swipe-hover bg-ash text-white rounded-[1rem] shadow-customShadow transition-all duration-300 hover:shadow-goldenbrown/25 hover:scale-[1.0125] flex items-center justify-between text-sm font-medium pn-regular-32 text-start hover:no-underline py-[2.5rem] px-[2rem]"
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
                                {comment}
                              </p>
                              <div className="flex flex-col items-center justify-center gap-y-[0.5rem]">
                                <div className="flex flex-row gap-[0.3rem] text-goldenbrown my-auto">
                                  {renderStars(starRating)}
                                </div>
                                <p className="text-center pn-bold-24">
                                  {reviewer.displayName}
                                </p>
                                <p className="pn-regular-14">
                                  {createTime &&
                                    new Date(createTime).toLocaleDateString(
                                      "en-US",
                                      {
                                        month: "long", // Full month name
                                        day: "numeric", // Numeric day
                                        year: "numeric", // Full year
                                      }
                                    )}
                                </p>
                                <div className="size-[2rem] mt-[1rem]">
                                  {ServiceIcons.google}
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      )}
                  </Swiper>
                );
              }}
            />
          </div>
        )}

        {noCarousel && !noCards && (
          <div
            className={`flex flex-col items-start justify-center size-full mt-[5rem] !w-[100vw] -mx-[2rem] md:-mx-[calc(5rem)] min-[1920px]:-mx-[calc(6rem)] overflow-visible [&_.css-1uyvnff]:contents`}
          >
            {/* <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={15}
              grabCursor={true}
              modules={[Pagination, Navigation]}
              navigation={true}
              slideToClickedSlide={false} // Ensure smooth navigation
              loop={true}
              className="mySwiper flex !relative !px-[2rem] sm:!px-[6rem] !w-full h-[30rem] sm:h-[35rem] !mx-0 !overflow-visible
              
              after:pointer-events-none
              after:bg-gradient-to-l 
              after:from-white/20 
              after:to-transparent 
              after:absolute 
              after:top-0 
              after:right-0 
              after:z-10 
              after:h-full 
              after:w-1/12

              before:pointer-events-none
              before:bg-gradient-to-r 
              before:from-white/20 
              before:to-transparent 
              before:absolute 
              before:top-0 
              before:left-0 
              before:z-10 
              before:h-full 
              before:w-1/12

              [&_.swiper-button-prev]:hidden
              [&_.swiper-button-prev]:md:flex
              [&_.swiper-button-prev]:z-20
              [&_.swiper-button-prev]:translate-y-[22.6rem]
              [&_.swiper-button-prev]:translate-x-[calc(50vw-100%-8.5rem)]
              [&_.swiper-button-prev]:text-white 
              [&_.swiper-button-prev]:bg-goldenbrown
              [&_.swiper-button-prev]:rounded-full 
              [&_.swiper-button-prev]:aspect-square
              [&_.swiper-button-prev]:[padding:_0.625rem_1.25rem]  
              [&_.swiper-button-prev]:after:content-['prev'] 
              [&_.swiper-button-prev]:after:scale-[0.3]
              
              [&_.swiper-button-next]:hidden
              [&_.swiper-button-next]:md:flex
              [&_.swiper-button-next]:z-20
              [&_.swiper-button-next]:translate-y-[22.6rem]
              [&_.swiper-button-next]:-translate-x-[calc(50vw-100%-8.5rem)]
              [&_.swiper-button-next]:text-white 
              [&_.swiper-button-next]:bg-goldenbrown 
              [&_.swiper-button-next]:rounded-full 
              [&_.swiper-button-next]:aspect-square
              [&_.swiper-button-next]:[padding:_0.625rem_1.25rem]  
              [&_.swiper-button-next]:after:content-['next'] 
              [&_.swiper-button-next]:after:scale-[0.3]"
            >
              {testimonials.slice(0,6).map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="max-w-[80vw] sm:max-w-[50vw] bg-ash text-white rounded-[1rem] shadow-customShadow transition-all duration-300 hover:shadow-goldenbrown/25 hover:scale-[1.0125] flex items-center justify-between text-sm font-medium pn-regular-32 text-start hover:no-underline py-[2.5rem] px-[2rem]"
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
            </Swiper> */}
            <ReactGoogleReviews
              layout="custom"
              featurableId={`7d474d03-83fb-40bc-8b16-a5fb73d658fa`}
              renderer={(reviews) => {
                return (
                  <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={15}
                    grabCursor={true}
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    slideToClickedSlide={false} // Ensure smooth navigation
                    loop={true}
                    className="mySwiper flex !relative !px-[2rem] sm:!px-[6rem] !w-full h-[30rem] sm:h-[35rem] !mx-0 !overflow-visible
              
              after:pointer-events-none
              after:bg-gradient-to-l 
              after:from-white/20 
              after:to-transparent 
              after:absolute 
              after:top-0 
              after:right-0 
              after:z-10 
              after:h-full 
              after:w-1/12

              before:pointer-events-none
              before:bg-gradient-to-r 
              before:from-white/20 
              before:to-transparent 
              before:absolute 
              before:top-0 
              before:left-0 
              before:z-10 
              before:h-full 
              before:w-1/12

              [&_.swiper-button-prev]:hidden
              [&_.swiper-button-prev]:md:flex
              [&_.swiper-button-prev]:z-20
              [&_.swiper-button-prev]:translate-y-[22.6rem]
              [&_.swiper-button-prev]:translate-x-[calc(50vw-100%-8.5rem)]
              [&_.swiper-button-prev]:text-white 
              [&_.swiper-button-prev]:bg-goldenbrown
              [&_.swiper-button-prev]:rounded-full 
              [&_.swiper-button-prev]:aspect-square
              [&_.swiper-button-prev]:[padding:_0.625rem_1.25rem]  
              [&_.swiper-button-prev]:after:content-['prev'] 
              [&_.swiper-button-prev]:after:scale-[0.3]
              
              [&_.swiper-button-next]:hidden
              [&_.swiper-button-next]:md:flex
              [&_.swiper-button-next]:z-20
              [&_.swiper-button-next]:translate-y-[22.6rem]
              [&_.swiper-button-next]:-translate-x-[calc(50vw-100%-8.5rem)]
              [&_.swiper-button-next]:text-white 
              [&_.swiper-button-next]:bg-goldenbrown 
              [&_.swiper-button-next]:rounded-full 
              [&_.swiper-button-next]:aspect-square
              [&_.swiper-button-next]:[padding:_0.625rem_1.25rem]  
              [&_.swiper-button-next]:after:content-['next'] 
              [&_.swiper-button-next]:after:scale-[0.3]"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 size-full gap-[1rem]">
                      {reviews
                        .slice(0, 6)
                        .map(
                          ({
                            reviewId,
                            reviewer,
                            comment,
                            starRating,
                            createTime,
                          }) => (
                            <SwiperSlide
                              key={reviewId}
                              className="max-w-[80vw] sm:max-w-[50vw] bg-ash text-white rounded-[1rem] shadow-customShadow transition-all duration-300 hover:shadow-goldenbrown/25 hover:scale-[1.0125] flex items-center justify-between text-sm font-medium pn-regular-32 text-start hover:no-underline py-[2.5rem] px-[2rem]"
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
                                  {comment}
                                </p>
                                <div className="flex flex-col items-center justify-center gap-y-[0.5rem]">
                                  <div className="flex flex-row gap-[0.3rem] text-goldenbrown my-auto">
                                    {renderStars(starRating)}
                                  </div>
                                  <p className="text-center pn-bold-24">
                                    {reviewer.displayName}
                                  </p>
                                  <p className="pn-regular-14">
                                    {createTime &&
                                      new Date(createTime).toLocaleDateString(
                                        "en-US",
                                        {
                                          month: "long", // Full month name
                                          day: "numeric", // Numeric day
                                          year: "numeric", // Full year
                                        }
                                      )}
                                  </p>
                                  <div className="size-[2rem] mt-[1rem]">
                                    {ServiceIcons.google}
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                        )}
                    </div>
                  </Swiper>
                );
              }}
            />
          </div>
        )}

        {/* CTA */}
        <div className="flex justify-center w-full">
          <div className="flex flex-col sm:flex-row gap-[1rem]">
            <HoverWrapper className="group/cta cursor-select-hover">
              <TransitionLink
                href="/testimonials"
                className="button !bg-goldenbrown text-white !border-none pn-regular-16 h-full shadow-customShadow shadow-ash/5 group-hover/cta:shadow-goldenrod/5 w-fit"
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
