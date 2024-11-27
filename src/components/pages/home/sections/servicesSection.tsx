import GsapMagnetic from "@/components/animations/GsapMagnetic";
import { Reveal } from "@/components/animations/Reveal";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import SectionHeader from "@/components/ui/sectionHeader";
import { MotionValue } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";

import socmedPostImage from "@/../../public/images/VirtualXposure-ExteriorImage.webp";
import person1Image from "@/../../public/images/team.webp";
import person2Image from "@/../../public/images/team_1.webp";
import person3Image from "@/../../public/images/team_2.webp";
import person4Image from "@/../../public/images/team_3.webp";
import person5Image from "@/../../public/images/team_4.webp";

import instagramImage from "@/../../public/svgs/instagram.svg";
import facebookImage from "@/../../public/svgs/facebook.svg";
import tiktokImage from "@/../../public/svgs/tiktok.svg";
import linkedinImage from "@/../../public/svgs/linkedin.svg";

import arrowURImage from "@/../../public/svgs/arrow-up-right.svg";
import arrowURBlackImage from "@/../../public/svgs/arrow-up-right-black.svg";
import chevdownImage from "@/../../public/svgs/chevron-down.svg";
import infoImage from "@/../../public/svgs/info.svg";
import calendarImage from "@/../../public/svgs/calendar.svg";
import clockImage from "@/../../public/svgs/clock.svg";
import growthImage from "@/../../public/svgs/growth.svg";
import followersImage from "@/../../public/svgs/followers.svg";
import unfollowImage from "@/../../public/svgs/unfollow.svg";

interface SectionProps {
  className?: string;
  scrollYProgress?: MotionValue<number>; // Proper type for scrollYProgress
}

function ServicesSection({ className }: SectionProps) {
  const [firstBentoHovered, setFirstBentoHovered] = useState(false);
  const [fourthBentoHovered, setFourthBentoHovered] = useState(false);

  return (
    <div
      id="services"
      className={`section-container !pt-[6rem] lg:!pt-[3.125rem] !flex-row ${className} bg-white`}
    >
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[1.5rem] lg:gap-[3.75rem]">
        {/* Header */}
        <SectionHeader
          center
          heading="Our Services"
          subheading="Here's what we do for our clients"
          body="At Virtual Xposure, we specialize in building your brand's
      digital presence, empowering realtors to thrive in today's
      competitive online marketplace. Our services cover everything from
      content creation to full-scale social media management, all backed
      by data-driven strategies to ensure results that matter."
        />

        <div className="relative flex flex-col w-full justify-start items-start gap-[1.875rem]">
          {/* Upper Bentos (3) */}
          <div className="relative flex flex-col lg:flex-row w-full lg:h-[31.25rem] justify-start items-start gap-[1.875rem]">
            {/* Bento 1 */}
            <Reveal
              once
              slide={false}
              xOverflow={false}
              yOverflow={false}
              duration={0.6}
              width="100%"
              className="group relative flex flex-col w-full lg:w-auto h-full max-h-[31.25rem]"
            >
              <div
                className="px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center size-full"
                onMouseEnter={() => setFirstBentoHovered(true)}
                onMouseLeave={() => setFirstBentoHovered(false)}
              >
                {/* Content */}
                <div className="flex flex-col size-full justify-start items-center lg:items-start gap-[2rem]">
                  {/* Header */}
                  <div className="flex flex-col justify-center items-center gap-[0.625rem]">
                    <div className="text-center text-ash pn-bold-20">
                      Data-Driven Social Media Strategy
                    </div>
                    <p className="text-center text-ash pn-regular-16">
                      <span className="text-ash pn-semibold-16 italic">
                        Make decisions backed by insights.
                      </span>
                      <br />
                      We optimize your social media with actionable analytics to
                      target your audience effectively.
                    </p>
                  </div>
                  {/* Graphic */}
                  <div className="select-none pointer-events-none transition-all duration-500 bg-white group-hover:scale-105 group-hover:shadow-customShadow group-hover:-translate-y-[1.5rem] mt-[1.5rem] size-full p-6 rounded-xl border border-ash/10 flex-col justify-start items-start gap-6 flex">
                    <div className="flex size-full justify-center items-start">
                      {/* Instagram Stats */}
                      <div className="w-1/2 flex-col justify-start items-center gap-[1.125rem] flex">
                        <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <Image
                              alt="instagram"
                              src={instagramImage}
                              
                              quality={80}
                              className="group-hover:animate-bounce"
                            />
                          </div>
                          <div className="text-ash nu-semibold-12">
                            Instagram
                          </div>
                        </div>
                        <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                          <div className="text-ash nu-bold-24 transition-all duration-500 group-hover:scale-125 group-hover:text-goldenbrown">
                            {firstBentoHovered ? (
                              <CountUp
                                start={350}
                                end={420}
                                duration={4}
                                separator=","
                              />
                            ) : (
                              "350"
                            )}
                            K
                          </div>
                          <div className="justify-start items-start gap-1 flex">
                            <div className="opacity-70 text-ash nu-regular-12">
                              Followers
                            </div>
                            <div className=" h-[1.125rem] justify-start items-center gap-[3px] flex">
                              <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex">
                                <Image
                                  alt="arrow"
                                  src={arrowURBlackImage}
                                  
                                  quality={80}
                                />
                              </div>
                              <div className="text-goldenbrown nu-semibold-12">
                                {firstBentoHovered ? (
                                  <CountUp
                                    start={0}
                                    end={2.0}
                                    duration={1.5}
                                    decimals={1}
                                    decimal=""
                                  />
                                ) : (
                                  "20"
                                )}
                                %
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[0.055rem] mx-[.5rem] h-full bg-ash/10" />
                      {/* Facebook Stats */}
                      <div className="w-1/2 flex-col justify-start items-center gap-[1.125rem] flex">
                        <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                          <Image
                            alt="facebook"
                            src={facebookImage}
                            
                            quality={80}
                            className="group-hover:animate-bounce"
                          />
                          <div className="text-ash nu-semibold-12">
                            Facebook
                          </div>
                        </div>
                        <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                          <div className="text-ash nu-bold-24 transition-all duration-500 group-hover:scale-125 group-hover:text-goldenbrown">
                            {firstBentoHovered ? (
                              <CountUp
                                start={19.6}
                                end={30}
                                duration={2}
                                decimals={1}
                                decimal="."
                              />
                            ) : (
                              "19.6"
                            )}
                            K
                          </div>
                          <div className="justify-start items-start gap-1 flex">
                            <div className="opacity-70 text-ash nu-regular-12">
                              Followers
                            </div>
                            <div className=" h-[1.125rem] justify-start items-center gap-[3px] flex">
                              <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex">
                                <Image
                                  alt="arrow"
                                  src={arrowURBlackImage}
                                  
                                  quality={80}
                                />
                              </div>
                              <div className="text-goldenbrown nu-semibold-12">
                                {firstBentoHovered ? (
                                  <CountUp
                                    start={0}
                                    end={5.3}
                                    duration={1.5}
                                    decimals={1}
                                    decimal=""
                                  />
                                ) : (
                                  "53"
                                )}
                                %
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex size-full justify-center items-start">
                      {/* TikTok Stats */}
                      <div className="w-1/2 flex-col justify-start items-center gap-[1.125rem] flex">
                        <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                          <div className="w-6 h-6 pl-[1.40px] pr-[1.50px] py-[0.05px] justify-center items-center flex">
                            <div className="w-[21.10px] h-[23.90px] relative">
                              <Image
                                alt="tiktok"
                                src={tiktokImage}
                                
                                quality={80}
                                className="group-hover:animate-bounce"
                              />
                            </div>
                          </div>
                          <div className="text-ash nu-semibold-12">Tiktok</div>
                        </div>
                        <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                          <div className="text-ash nu-bold-24 transition-all duration-500 group-hover:scale-125 group-hover:text-goldenbrown">
                            {firstBentoHovered ? (
                              <CountUp
                                start={875}
                                end={980}
                                duration={6}
                                separator=","
                              />
                            ) : (
                              "875"
                            )}
                            K
                          </div>
                          <div className="justify-start items-start gap-1 flex">
                            <div className="opacity-70 text-ash nu-regular-12">
                              Followers
                            </div>
                            <div className=" h-[1.125rem] justify-start items-center gap-[3px] flex">
                              <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex">
                                <Image
                                  alt="arrow"
                                  src={arrowURBlackImage}
                                  
                                  quality={80}
                                />
                              </div>
                              <div className="text-goldenbrown nu-semibold-12">
                                {firstBentoHovered ? (
                                  <CountUp
                                    start={0}
                                    end={1.2}
                                    duration={1.5}
                                    decimals={1}
                                    decimal=""
                                  />
                                ) : (
                                  "12"
                                )}
                                %
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[0.055rem] mx-[.5rem] h-full bg-ash/10" />
                      {/* Facebook Stats */}
                      <div className="w-1/2 flex-col justify-start items-center gap-[1.125rem] flex">
                        <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <Image
                              alt="linkedin"
                              src={linkedinImage}
                              
                              quality={80}
                              className="group-hover:animate-bounce"
                            />
                          </div>
                          <div className="text-ash nu-semibold-12">
                            LinkedIn
                          </div>
                        </div>
                        <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                          <div className="text-ash nu-bold-24 transition-all duration-500 group-hover:scale-125 group-hover:text-goldenbrown">
                            {firstBentoHovered ? (
                              <CountUp
                                start={48}
                                end={60}
                                duration={3}
                                decimals={1}
                                decimal="."
                              />
                            ) : (
                              "48.0"
                            )}
                            K
                          </div>
                          <div className="w-full justify-start items-start gap-0.5 flex relative">
                            <div className="opacity-70 text-ash nu-regular-12">
                              Connections
                            </div>
                            <div className="justify-start items-center gap-[3px] flex">
                              <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex">
                                <Image
                                  alt="arrow"
                                  src={arrowURBlackImage}
                                  
                                  quality={80}
                                />
                              </div>
                              <div className="text-goldenbrown nu-semibold-12">
                                {firstBentoHovered ? (
                                  <CountUp
                                    start={0}
                                    end={2.5}
                                    duration={1.5}
                                    decimals={1}
                                    decimal=""
                                  />
                                ) : (
                                  "25"
                                )}
                                %
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Gradient */}
                <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85% pointer-events-none rounded-b-[1.875rem] " />
              </div>
            </Reveal>
            {/* Bento 2 */}
            <Reveal
              once
              slide={false}
              xOverflow={false}
              yOverflow={false}
              duration={0.6}
              delay={0.25}
              width="100%"
              className="group relative flex flex-col size-full max-h-[31.25rem]"
            >
              <div className="px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center overflow-hidden size-full max-h-[31.25rem]">
                {/* Content */}
                <div className="h-full w-full flex-col justify-start items-start gap-[1.125rem] flex relative">
                  {/* Header */}
                  <div className="flex flex-col justify-center items-center gap-[0.625rem]">
                    <div className="text-center text-ash pn-bold-28">
                      All-Inclusive Content Creation
                    </div>
                    <p className="text-center text-ash pn-regular-22">
                      <span className="pn-semibold-22 italic">
                        Engage your audience with premium content.
                      </span>
                      <br />
                      From scriptwriting to full media production, we create
                      high-quality content tailored to your brand.
                    </p>
                  </div>
                  {/* Graphic */}
                  <div className="select-none transition-all duration-500 bg-white group-hover:scale-105 group-hover:shadow-customShadow group-hover:-translate-y-[1.5rem] mt-[1.5rem] pointer-events-none h-full px-6 py-4 rounded-2xl border border-ash/10 flex-col justify-start items-start gap-5 flex overflow-hidden">
                    <div className="w-full justify-between items-center flex">
                      <div className="text-ash nu-bold-20">Scheduled Posts</div>
                      <div className="w-[153px] flex-col justify-start items-start flex">
                        <div className="h-[38px] w-full flex-col justify-start items-start gap-0.5 flex">
                          <div className="w-full px-3 py-2 bg-[#fafafb] rounded-lg border border-[#e5e6ea] justify-between items-center gap-2 flex">
                            <div className="flex-col justify-start items-start flex">
                              <div className="text-ash nu-regular-14">
                                Weekly
                              </div>
                            </div>
                            <div className="w-[22px] h-[22px] px-[5.50px] py-[7.60px] justify-center items-center flex">
                              <Image
                                alt="chevron"
                                src={chevdownImage}
                                
                                quality={80}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-full w-full flex-col justify-start items-start flex">
                      <div className="w-full border-b border-[#e5e6ea] justify-between items-start flex">
                        <div className="flex-col justify-start items-start flex">
                          <div className="w-full h-11 px-4 py-3 justify-center items-center gap-1.5 flex">
                            <div className="text-center text-goldenbrown nu-semibold-14">
                              All
                            </div>
                          </div>
                          <div className="h-0.5 w-full bg-goldenbrown rounded-tl rounded-tr" />
                        </div>
                        <div className="flex-col justify-start items-start flex">
                          <div className="w-full h-11 px-4 py-3 justify-center items-center gap-1.5 flex">
                            <div className="text-center text-[#686d7d] nu-semibold-14">
                              Instagram
                            </div>
                          </div>
                          <div className="h-0.5 w-full opacity-0 bg-goldenbrown rounded-tl rounded-tr" />
                        </div>
                        <div className="flex-col justify-start items-start flex">
                          <div className="w-full h-11 px-4 py-3 justify-center items-center gap-1.5 flex">
                            <div className="text-center text-[#686d7d] nu-semibold-14">
                              Facebook
                            </div>
                          </div>
                          <div className="h-0.5 w-full opacity-0 bg-goldenbrown rounded-tl rounded-tr" />
                        </div>
                        <div className="flex-col justify-start items-start flex">
                          <div className="w-full h-11 px-4 py-3 justify-center items-center gap-1.5 flex">
                            <div className="text-center text-[#686d7d] nu-semibold-14">
                              TikTok
                            </div>
                          </div>
                          <div className="h-0.5 w-full opacity-0 bg-goldenbrown rounded-tl rounded-tr" />
                        </div>
                        <div className="flex-col justify-start items-start flex">
                          <div className="w-full h-11 px-4 py-3 justify-center items-center gap-1.5 flex">
                            <div className="text-center text-[#686d7d] nu-semibold-14">
                              LinkedIn
                            </div>
                          </div>
                          <div className="h-0.5 w-full opacity-0 bg-goldenbrown rounded-tl rounded-tr" />
                        </div>
                      </div>
                      <div className="pt-4 flex-col justify-start items-start gap-2 flex size-full overflow-hidden">
                        {/* IG */}
                        <div className="transition-all duration-500 pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 flex group-hover:-translate-y-[325%] group-hover:scale-[25%]">
                          <div className="w-1 h-full bg-goldenbrown rounded-2xl" />
                          <div className="flex-col justify-start items-start gap-2 flex size-full">
                            <div className="justify-start items-start gap-[0.625rem] flex">
                              <div className="flex-col justify-start items-start gap-[0.625rem] flex">
                                <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                                  <div className="w-4 h-4 justify-center items-center flex">
                                    <Image
                                      alt="instagram"
                                      src={instagramImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    Instagram: @best_edmonton_realtor
                                  </div>
                                </div>
                                <div className="text-ash nu-regular-14">
                                  Your dream home is closer than you think! 🏡
                                  Explore our exclusive listings and book a
                                  virtual tour today. DM us for more info!
                                </div>
                              </div>
                              <Image
                                className="w-[70px] h-[70px] rounded-[5px] border border-white"
                                src={socmedPostImage}
                                alt="post-image"
                                
                                quality={80}
                              />
                            </div>
                            <div className="w-full justify-between items-center flex">
                              <div className="justify-center items-center flex">
                                <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                                  <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="info"
                                      src={infoImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-center text-goldenbrown nu-semibold-12">
                                    Schedule
                                  </div>
                                </div>
                              </div>
                              <div className="px-1.5 py-1 bg-[#fafafb] rounded border border-[#e5e6ea] justify-start items-start gap-[19px] flex">
                                <div className="justify-start items-center gap-1 flex">
                                  <div className="w-4 h-4 px-0.5 py-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="calendar"
                                      src={calendarImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    Jan 04, 2024
                                  </div>
                                </div>
                                <div className="justify-start items-center gap-1 flex">
                                  <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="clock"
                                      src={clockImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    10:00AM
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* FB */}
                        <div className="transition-all duration-500 pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 flex group-hover:-translate-y-[325%] group-hover:scale-[50%]">
                          <div className="w-1 h-full bg-goldenbrown rounded-2xl" />
                          <div className="flex-col justify-start items-start gap-2 flex size-full">
                            <div className="justify-start items-start gap-[0.625rem] flex">
                              <div className="flex-col justify-start items-start gap-[0.625rem] flex">
                                <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                                  <div className="w-4 h-4 justify-center items-center flex">
                                    <Image
                                      alt="facebook"
                                      src={facebookImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    Instagram: @best_edmonton_realtor
                                  </div>
                                </div>
                                <div className="text-ash nu-regular-14">
                                  Your dream home is closer than you think! 🏡
                                  Explore our exclusive listings and book a
                                  virtual tour today. DM us for more info!
                                </div>
                              </div>
                              <Image
                                className="w-[70px] h-[70px] rounded-[5px] border border-white"
                                src={socmedPostImage}
                                alt="post-image"
                                
                                quality={80}
                              />
                            </div>
                            <div className="w-full justify-between items-center flex">
                              <div className="justify-center items-center flex">
                                <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                                  <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="info"
                                      src={infoImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-center text-goldenbrown nu-semibold-12">
                                    Schedule
                                  </div>
                                </div>
                              </div>
                              <div className="px-1.5 py-1 bg-[#fafafb] rounded border border-[#e5e6ea] justify-start items-start gap-[19px] flex">
                                <div className="justify-start items-center gap-1 flex">
                                  <div className="w-4 h-4 px-0.5 py-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="calendar"
                                      src={calendarImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    Jan 04, 2024
                                  </div>
                                </div>
                                <div className="justify-start items-center gap-1 flex">
                                  <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="clock"
                                      src={clockImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    10:00AM
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* TikTok */}
                        <div className="transition-all duration-500 pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 flex group-hover:-translate-y-[325%] group-hover:scale-[90%]">
                          <div className="w-1 h-full bg-goldenbrown rounded-2xl" />
                          <div className="flex-col justify-start items-start gap-2 flex size-full">
                            <div className="justify-start items-start gap-[0.625rem] flex">
                              <div className="flex-col justify-start items-start gap-[0.625rem] flex">
                                <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                                  <div className="w-4 h-4 justify-center items-center flex">
                                    <Image
                                      alt="tiktok"
                                      src={tiktokImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    Instagram: @best_edmonton_realtor
                                  </div>
                                </div>
                                <div className="text-ash nu-regular-14">
                                  Your dream home is closer than you think! 🏡
                                  Explore our exclusive listings and book a
                                  virtual tour today. DM us for more info!
                                </div>
                              </div>
                              <Image
                                className="w-[70px] h-[70px] rounded-[5px] border border-white"
                                src={socmedPostImage}
                                alt="post-image"
                                
                                quality={80}
                              />
                            </div>
                            <div className="w-full justify-between items-center flex">
                              <div className="justify-center items-center flex">
                                <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                                  <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="info"
                                      src={infoImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-center text-goldenbrown nu-semibold-12">
                                    Schedule
                                  </div>
                                </div>
                              </div>
                              <div className="px-1.5 py-1 bg-[#fafafb] rounded border border-[#e5e6ea] justify-start items-start gap-[19px] flex">
                                <div className="justify-start items-center gap-1 flex">
                                  <div className="w-4 h-4 px-0.5 py-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="calendar"
                                      src={calendarImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    Jan 04, 2024
                                  </div>
                                </div>
                                <div className="justify-start items-center gap-1 flex">
                                  <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="clock"
                                      src={clockImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    10:00AM
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* LinkedIn */}
                        <div className="transition-all duration-500 pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 flex group-hover:-translate-y-[325%]">
                          <div className="w-1 h-full bg-goldenbrown rounded-2xl" />
                          <div className="flex-col justify-start items-start gap-2 flex size-full">
                            <div className="justify-start items-start gap-[0.625rem] flex">
                              <div className="flex-col justify-start items-start gap-[0.625rem] flex">
                                <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                                  <div className="w-4 h-4 justify-center items-center flex">
                                    <Image
                                      alt="linkedin"
                                      src={linkedinImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    LinkedIn: Best Realtor
                                  </div>
                                </div>
                                <div className="text-ash nu-regular-14">
                                  Your dream home is closer than you think! 🏡
                                  Explore our exclusive listings and book a
                                  virtual tour today. DM us for more info!
                                </div>
                              </div>
                              <Image
                                className="w-[70px] h-[70px] rounded-[5px] border border-white"
                                src={socmedPostImage}
                                alt="post-image"
                                
                                quality={80}
                              />
                            </div>
                            <div className="w-full justify-between items-center flex">
                              <div className="justify-center items-center flex">
                                <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                                  <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="info"
                                      src={infoImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-center text-goldenbrown nu-semibold-12">
                                    Schedule
                                  </div>
                                </div>
                              </div>
                              <div className="px-1.5 py-1 bg-[#fafafb] rounded border border-[#e5e6ea] justify-start items-start gap-[19px] flex">
                                <div className="justify-start items-center gap-1 flex">
                                  <div className="w-4 h-4 px-0.5 py-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="calendar"
                                      src={calendarImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    Jan 04, 2024
                                  </div>
                                </div>
                                <div className="justify-start items-center gap-1 flex">
                                  <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                    <Image
                                      alt="clock"
                                      src={clockImage}
                                      
                                      quality={80}
                                    />
                                  </div>
                                  <div className="text-ash nu-regular-12">
                                    10:00AM
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gradient */}
                <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85% pointer-events-none rounded-b-[1.875rem] " />
              </div>
            </Reveal>

            {/* Bento 3 */}
            <Reveal
              once
              slide={false}
              xOverflow={false}
              yOverflow={false}
              duration={0.6}
              delay={0.5}
              width="100%"
              className="group relative flex flex-col w-full lg:w-auto h-full max-h-[31.25rem] justify-center lg:justify-start items-center lg:max-w-[21.875rem]"
            >
              <div className="px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow overflow-hidden h-full max-h-[31.25rem]">
                <div className="flex-col size-full justify-start items-center lg:items-start gap-[2rem] flex">
                  {/* Header */}
                  <div className="h-[126px] flex-col justify-center items-center gap-[0.625rem] flex">
                    <div className="text-center text-ash pn-bold-20">
                      Seamless Collaboration
                    </div>
                    <p className="text-center text-ash pn-regular-16">
                      <span className="text-ash pn-semibold-16 italic">
                        Stay connected with daily updates.
                      </span>
                      <br />
                      Our team integrates with yours to provide constant
                      communication and easy access to progress reports.
                    </p>
                  </div>

                  {/* Graphic */}
                  <div className="select-none pointer-events-none flex flex-col size-full items-center justify-center relative">
                    <div className="h-full aspect-square left-[1.125rem] bg-ash/5 rounded-full justify-center items-center flex">
                      <div className="flex flex-col items-center justify-center h-full aspect-square rounded-full border border-ash/10">
                        <div className="w-52 h-52 bg-goldenrod/25 rounded-full justify-center items-center flex">
                          <span className="group-hover:animate-ping absolute flex size-52 lg:size-full rounded-full group-hover:bg-indigo-300/25 bg-transparent" />
                          <div className="relative flex flex-col items-center justify-center w-52 h-52 rounded-full border border-ash/10">
                            <div className="justify-center items-center flex flex-row space-x-[-1.5rem]">
                              <Image
                                className="transition-all duration-500 w-12 h-12 relative rounded-full group-hover:translate-x-[-50%] group-hover:-rotate-45"
                                src={person1Image}
                                alt="team-image"
                                placeholder="blur"
                                quality={80}
                              />
                              <Image
                                className="transition-all duration-500 w-12 h-12 relative rounded-full group-hover:translate-x-[-25%] group-hover:-rotate-12 group-hover:translate-y-[-25%]"
                                src={person2Image}
                                alt="team-image"
                                placeholder="blur"
                                quality={80}
                              />
                              <Image
                                className="transition-all duration-500 w-12 h-12 relative rounded-full group-hover:translate-y-[-35%]"
                                src={person3Image}
                                alt="team-image"
                                placeholder="blur"
                                quality={80}
                              />
                              <Image
                                className="transition-all duration-500 w-12 h-12 relative rounded-full group-hover:translate-x-[25%] group-hover:rotate-12 group-hover:translate-y-[-25%]"
                                src={person4Image}
                                alt="team-image"
                                placeholder="blur"
                                quality={80}
                              />
                              <Image
                                className="transition-all duration-500 w-12 h-12 relative rounded-full group-hover:translate-x-[50%] group-hover:rotate-45"
                                src={person5Image}
                                alt="team-image"
                                placeholder="blur"
                                quality={80}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Lower Bentos (2) */}
          <div className="flex flex-col lg:flex-row w-full lg:h-[31.25rem] justify-start items-start gap-[1.875rem]">
            {/* Bento 4 */}
            <Reveal
              once
              slide={false}
              xOverflow={false}
              yOverflow={false}
              duration={0.6}
              width="100%"
              className="group relative size-full max-h-[31.25rem]"
            >
              <div
                className="flex flex-col px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center overflow-hidden h-full max-h-[31.25rem]"
                onMouseEnter={() => setFourthBentoHovered(true)}
                onMouseLeave={() => setFourthBentoHovered(false)}
              >
                {/* Content */}
                <div className="flex-col justify-start items-start sm:items-center lg:items-start gap-2 flex size-full">
                  {/* Header */}
                  <div className="flex-col justify-start items-center lg:items-start gap-[0.625rem] flex text-center lg:text-start">
                    <div className="text-ash pn-bold-28">
                      Real Growth & Engagement
                    </div>
                    <p className="text-ash pn-regular-22">
                      <span className="pn-semibold-22 italic">
                        See results within 90 days.
                      </span>
                      <br />
                      We increase your social media engagement and organic
                      traffic with data-backed strategies.
                    </p>
                  </div>
                  {/* Graphic */}
                  <div className="select-none pointer-events-none transition-all duration-500 bg-white group-hover:scale-105 sm:w-full group-hover:shadow-customShadow group-hover:-translate-y-[1rem] mt-[2rem] p-6 rounded-xl border border-ash/10 flex-col justify-start items-start gap-5 flex">
                    <div className="w-full justify-between items-center flex">
                      <div className="text-ash nu-bold-20">Followers</div>
                      <div className="flex-col justify-start items-start flex">
                        <div className="w-full h-10 flex-col justify-start items-start gap-0.5 flex">
                          <div className="size-full px-3 py-2 bg-white rounded-lg border border-ash/10 justify-start items-center gap-2 flex">
                            <div className="w-6 h-6 justify-center items-center flex">
                              <Image
                                alt="instagram"
                                src={instagramImage}
                                
                                quality={80}
                              />
                            </div>
                            <div className="flex-col justify-start items-start flex">
                              <div className="text-ash nu-regular-14">
                                Instagram
                              </div>
                            </div>
                            <div className="w-[22px] h-[22px] px-[5.50px] py-[7.60px] justify-center items-center flex">
                              <Image
                                alt="chevron"
                                src={chevdownImage}
                                
                                quality={80}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row w-full justify-start items-start gap-4">
                      <div className="flex flex-col w-[10ch] lg:w-full justify-start items-start gap-px">
                        <div className="text-ash nu-semibold-16">
                          Net Growth
                        </div>
                        <div className="text-charcoal nu-regular-12">
                          Jun 2025 - Dec 2025
                        </div>
                      </div>
                      <div className="flex size-full justify-center items-start gap-2 lg:gap-4">
                        <div className="p-3 bg-ash rounded-lg justify-start items-start gap-2 flex min-w-[30%]">
                          <div className="flex-col justify-center items-start gap-1 flex">
                            <div className="transition-all duration-500 group-hover:scale-125 w-6 h-6 relative">
                              <Image
                                alt="growth"
                                src={growthImage}
                                
                                quality={80}
                              />
                            </div>
                            <div className="text-white nu-semibold-12">
                              Growth
                            </div>
                          </div>
                          <div className="flex-col justify-start items-start gap-1 flex">
                            <div className="text-goldenbrown nu-bold-12 transition-all duration-500 group-hover:scale-125">
                              {fourthBentoHovered ? (
                                <CountUp
                                  start={23018}
                                  end={23430}
                                  duration={4}
                                  separator=","
                                />
                              ) : (
                                "23,430"
                              )}
                            </div>
                            <div className="justify-start items-start gap-0.5 flex">
                              <div className="opacity-70 text-white nu-regular-12">
                                +412
                              </div>
                              <div className="justify-start items-center flex">
                                <div className="group-hover:animate-bounce w-3.5 h-3.5 p-[2.62px] justify-center items-center flex">
                                  <Image
                                    alt="arrow"
                                    src={arrowURImage}
                                    
                                    quality={80}
                                  />
                                </div>
                                <div className="text-goldenbrown nu-semibold-12">
                                  {fourthBentoHovered ? (
                                    <CountUp
                                      start={0}
                                      end={2.3}
                                      duration={1.5}
                                      decimals={1}
                                      decimal=""
                                    />
                                  ) : (
                                    "23"
                                  )}
                                  %
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-white rounded-lg border border-ash/10 justify-start items-start gap-2 flex min-w-[30%]">
                          <div className="flex-col justify-center items-start gap-1 flex">
                            <div className="w-6 h-6 justify-center items-center flex">
                              <div className="transition-all duration-500 group-hover:scale-125 w-6 h-6 relative">
                                <Image
                                  alt="followers"
                                  src={followersImage}
                                  
                                  quality={80}
                                />
                              </div>
                            </div>
                            <div className="text-ash nu-semibold-12">
                              Follow
                            </div>
                          </div>
                          <div className="flex-col justify-start items-start gap-1 flex">
                            <div className="text-ash nu-bold-12 transition-all duration-500 group-hover:scale-125">
                              {fourthBentoHovered ? (
                                <CountUp
                                  start={24788}
                                  end={25592}
                                  duration={3}
                                  separator=","
                                />
                              ) : (
                                "25,592"
                              )}
                            </div>
                            <div className="justify-start items-start gap-0.5 flex">
                              <div className="opacity-70 text-ash nu-regular-12">
                                +804
                              </div>
                              <div className="justify-start items-center flex">
                                <div className="group-hover:animate-bounce w-3.5 h-3.5 p-[2.62px] justify-center items-center flex">
                                  <Image
                                    alt="arrow"
                                    src={arrowURBlackImage}
                                    
                                    quality={80}
                                  />
                                </div>
                                <div className="text-goldenbrown nu-semibold-12">
                                  {fourthBentoHovered ? (
                                    <CountUp
                                      start={0}
                                      end={2.3}
                                      duration={1.5}
                                      decimals={1}
                                      decimal=""
                                    />
                                  ) : (
                                    "23"
                                  )}
                                  %
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-white rounded-lg border border-ash/10 justify-start items-start gap-2 flex min-w-[30%]">
                          <div className="flex-col justify-center items-start gap-1 flex">
                            <div className="w-6 h-6 px-[1.45px] justify-center items-center flex">
                              <div className="transition-all duration-500 group-hover:scale-125 w-[21.09px] h-6 relative">
                                <Image
                                  alt="unfollow"
                                  src={unfollowImage}
                                  
                                  quality={80}
                                />
                              </div>
                            </div>
                            <div className="text-ash nu-semibold-12">
                              Unfollow
                            </div>
                          </div>
                          <div className="flex-col justify-start items-start gap-1 flex">
                            <div className="text-ash nu-bold-12 transition-all duration-500 group-hover:scale-125">
                              {fourthBentoHovered ? (
                                <CountUp
                                  start={104}
                                  end={100}
                                  duration={2}
                                  separator=","
                                />
                              ) : (
                                "100"
                              )}
                            </div>
                            <div className="justify-start items-start gap-0.5 flex">
                              <div className="opacity-70 text-ash nu-regular-12">
                                -4
                              </div>
                              <div className="justify-start items-center flex">
                                <div className="group-hover:animate-bounce w-3.5 h-3.5 p-[2.62px] justify-center items-center flex">
                                  <Image
                                    alt="arrow"
                                    src={arrowURBlackImage}
                                    
                                    quality={80}
                                  />
                                </div>
                                <div className="text-goldenbrown nu-semibold-12">
                                  {fourthBentoHovered ? (
                                    <CountUp
                                      start={0}
                                      end={2.2}
                                      duration={1.5}
                                      decimals={1}
                                      decimal="."
                                    />
                                  ) : (
                                    "2.2"
                                  )}
                                  %
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[300px] relative flex flex-row justify-end">
                      <div className="w-10 h-[273px] left-0 top-0 absolute">
                        <div className="left-[32px] top-[255px] absolute text-ash nu-regular-12">
                          0
                        </div>
                        <div className="left-[9px] top-[204px] absolute text-ash nu-regular-12">
                          1.500
                        </div>
                        <div className="left-[9px] top-[153px] absolute text-ash nu-regular-12">
                          3000
                        </div>
                        <div className="left-[0.055rem] top-[102px] absolute text-ash nu-regular-12">
                          15.000
                        </div>
                        <div className="left-0 top-[51px] absolute text-ash nu-regular-12">
                          25.000
                        </div>
                        <div className="left-0 top-0 absolute text-ash nu-regular-12">
                          50.000
                        </div>
                      </div>
                      <div className="w-[0.625rem] px-0.5 left-[58px] top-[4px] absolute flex-col justify-center items-start gap-[45px] flex">
                        <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                        <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                        <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                        <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                        <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                        <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                      </div>
                      <div className="mt-[2.5rem] right-0 w-[90%] h-[10.688rem] justify-between items-end flex">
                        <div className="transition-all duration-500 group-hover:-translate-y-[40%] w-[1.625rem] h-[6.563rem] bg-goldenbrown rounded-t-full" />
                        <div className="transition-all duration-500 group-hover:-translate-y-[10%] w-[1.625rem] h-[10.688rem] bg-goldenbrown rounded-t-full" />
                        <div className="transition-all duration-500 group-hover:-translate-y-[50%] w-[1.625rem] h-[8.375rem] bg-goldenbrown rounded-t-full" />
                        <div className="transition-all duration-500 group-hover:-translate-y-[200%] w-[1.625rem] h-[2.938rem] bg-goldenbrown rounded-t-full" />
                        <div className="transition-all duration-500 group-hover:-translate-y-[70%] w-[1.625rem] h-[5.563rem] bg-goldenbrown rounded-t-full" />
                        <div className="transition-all duration-500 group-hover:-translate-y-[10%] w-[1.625rem] h-[8.75rem] bg-goldenbrown rounded-t-full" />
                        <div className="transition-all duration-500 group-hover:-translate-y-[40%] w-[1.625rem] h-[8.75rem] bg-goldenbrown rounded-t-full" />
                      </div>
                      <div className="left-[78px] top-[278px] absolute justify-start items-start gap-[62px] flex">
                        <div className="text-charcoal nu-regular-12">
                          Dec 18
                        </div>
                        <div className="text-center text-charcoal nu-regular-12">
                          Dec 19
                        </div>
                        <div className="text-center text-charcoal nu-regular-12">
                          Dec 20
                        </div>
                        <div className="text-center text-charcoal nu-regular-12">
                          Dec 21
                        </div>
                        <div className="text-center text-charcoal nu-regular-12">
                          Dec 22
                        </div>
                        <div className="text-center text-charcoal nu-regular-12">
                          Dec 23
                        </div>
                        <div className="text-center text-charcoal nu-regular-12">
                          Dec 24
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Gradient */}
                <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85% pointer-events-none rounded-b-[1.875rem]" />
              </div>
            </Reveal>
            {/* Bento 5 */}
            <Reveal
              once
              slide={false}
              xOverflow={false}
              yOverflow={false}
              duration={0.6}
              delay={0.25}
              width="100%"
              className="group relative size-full max-h-[31.25rem]"
            >
              <div className="flex flex-col px-[1.5rem] py-[2rem] bg-transparent rounded-[1.875rem] outline-charcoal/50 outline-dashed justify-center items-center gap-[2.75rem] overflow-hidden hover:outline-goldenrod hover:bg-goldenrod/10 transition-all duration-500 h-full">
                {/* Content */}
                <div className="flex flex-col justify-center items-center gap-[2.75rem] text-center text-ash">
                  {/* Header */}
                  <div className="pn-bold-48">
                    <span className="group-hover:text-charcoalNavy transition-all duration-500">
                      Optimized
                    </span>{" "}
                    for <br />
                    <span className="group-hover:text-goldenbrown transition-all duration-500 group-hover:text-[3.25rem]">
                      Scalability
                    </span>
                  </div>
                  {/* Body */}
                  <div className="pn-regular-22">
                    <span className="pn-semibold-22 italic">
                      Adapt as your business grows.
                    </span>
                    <br />
                    We provide scalable marketing solutions to support your
                    expanding real estate brand.
                  </div>
                </div>
                {/* CTA */}
                <GsapMagnetic speed={0.5}>
                  <div className="h-[60px] flex-col justify-center items-center flex">
                    <HoverWrapper
                      href="/"
                      className="button cursor-select-hover !rounded-full !w-[18.75rem] !py-[1.25rem] !bg-transparent !border-charcoal/50 group-hover:!border-goldenbrown group-hover:text-goldenbrown"
                    >
                      <FlipLink className="pn-semibold-16 leading-[1rem]">
                        Get Started
                      </FlipLink>
                    </HoverWrapper>
                  </div>
                </GsapMagnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
