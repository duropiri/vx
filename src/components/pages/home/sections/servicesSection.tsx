"use client";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";

interface SectionProps {
  className?: string;
}

function ServicesSection({ className }: SectionProps) {
  const [firstBentoHovered, setFirstBentoHovered] = useState(false);
  const [fourthBentoHovered, setFourthBentoHovered] = useState(false);

  return (
    <div className={`section-container !flex-row ${className}`}>
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[3.75rem]">
        <div
          className={`flex flex-col items-center justify-center w-full gap-y-[0.75rem]`}
        >
          <span className="inline-block pn-semibold-16 uppercase bg-goldenbrown/25 text-ash px-[0.625rem] py-[0.5rem] rounded-[0.75rem]">
            Our Services
          </span>
          <h2 className="pn-semibold-48 capitalize text-ash leading-snug">
            Here&apos;s What We Do For Our Clients
          </h2>
          <p className="pn-regular-16 max-w-[43.75rem] text-center">
            At Virtual Xposure, we specialize in building your brand&apos;s
            digital presence, empowering realtors to thrive in today&apos;s
            competitive online marketplace. Our services cover everything from
            content creation to full-scale social media management, all backed
            by data-driven strategies to ensure results that matter.
          </p>
        </div>

        <div className="flex flex-col w-full h-[62.5rem] justify-start items-start gap-[1.875rem]">
          {/* Upper Bentos (3) */}
          <div className="flex flex-row w-full h-[31.25rem] justify-start items-start gap-[1.875rem]">
            {/* Bento 1 */}
            <div
              className="group relative flex flex-col h-full px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center overflow-hidden"
              onMouseEnter={() => setFirstBentoHovered(true)}
              onMouseLeave={() => setFirstBentoHovered(false)}
            >
              {/* Content */}
              <div className="flex flex-col w-full h-full justify-start items-start gap-[2rem]">
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
                <div className="blur-[0.5px] transition-all duration-500 bg-white group-hover:scale-105 group-hover:shadow-customShadow group-hover:-translate-y-[1.5rem] mt-[1.5rem] w-full p-6 rounded-xl border border-ash/10 flex-col justify-start items-start gap-6 flex">
                  <div className="flex w-full h-[137px] justify-center items-start">
                    {/* Instagram Stats */}
                    <div className="w-1/2 flex-col justify-start items-start gap-[18px] flex">
                      <div className="justify-start items-center gap-2 flex">
                        <div className="w-6 h-6 justify-center items-center flex">
                          <Image
                            alt="instagram"
                            src="/svgs/instagram.svg"
                            height={24}
                            width={24}
                            className="group-hover:animate-bounce"
                          />
                        </div>
                        <div className="text-ash nu-semibold-12">Instagram</div>
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
                          <div className=" h-[18px] justify-start items-center gap-[3px] flex">
                            <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex group-hover:animate-bounce">
                              <Image
                                alt="arrow"
                                src="/svgs/arrow-up-right.svg"
                                height={24}
                                width={24}
                              />
                            </div>
                            <div className="text-goldenbrown nu-semibold-12">
                              {firstBentoHovered ? (
                                <CountUp
                                  start={0}
                                  end={20}
                                  duration={1.5}
                                  separator=","
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
                    <div className="w-[0.063rem] mx-[.5rem] h-full bg-ash/10" />
                    {/* Facebook Stats */}
                    <div className="w-1/2 flex-col justify-start items-start gap-[18px] flex">
                      <div className="justify-start items-center gap-2 flex">
                        <Image
                          alt="facebook"
                          src="/svgs/facebook.svg"
                          height={24}
                          width={24}
                          className="group-hover:animate-bounce"
                        />
                        <div className="text-ash nu-semibold-12">Facebook</div>
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
                          <div className=" h-[18px] justify-start items-center gap-[3px] flex">
                            <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex group-hover:animate-bounce">
                              <Image
                                alt="arrow"
                                src="/svgs/arrow-up-right.svg"
                                height={24}
                                width={24}
                              />
                            </div>
                            <div className="text-goldenbrown nu-semibold-12">
                              {firstBentoHovered ? (
                                <CountUp
                                  start={0}
                                  end={53}
                                  duration={1.5}
                                  separator=","
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
                  <div className="flex w-full h-[137px] justify-center items-start">
                    {/* TikTok Stats */}
                    <div className="w-1/2 flex-col justify-start items-start gap-[18px] flex">
                      <div className="justify-start items-center gap-2 flex">
                        <div className="w-6 h-6 pl-[1.40px] pr-[1.50px] py-[0.05px] justify-center items-center flex">
                          <div className="w-[21.10px] h-[23.90px] relative">
                            <Image
                              alt="tiktok"
                              src="/svgs/tiktok.svg"
                              height={24}
                              width={24}
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
                          <div className=" h-[18px] justify-start items-center gap-[3px] flex">
                            <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex group-hover:animate-bounce">
                              <Image
                                alt="arrow"
                                src="/svgs/arrow-up-right.svg"
                                height={24}
                                width={24}
                              />
                            </div>
                            <div className="text-goldenbrown nu-semibold-12">
                              {firstBentoHovered ? (
                                <CountUp
                                  start={0}
                                  end={12}
                                  duration={1.5}
                                  separator=","
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
                    <div className="w-[0.063rem] mx-[.5rem] h-full bg-ash/10" />
                    {/* Facebook Stats */}
                    <div className="w-1/2 flex-col justify-start items-start gap-[18px] flex">
                      <div className="justify-start items-center gap-2 flex">
                        <div className="w-6 h-6 justify-center items-center flex">
                          <Image
                            alt="linkedin"
                            src="/svgs/linkedin.svg"
                            height={24}
                            width={24}
                            className="group-hover:animate-bounce"
                          />
                        </div>
                        <div className="text-ash nu-semibold-12">LinkedIn</div>
                      </div>
                      <div className="w-full h-[52px] flex-col justify-start items-start gap-1 flex">
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
                            <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex group-hover:animate-bounce">
                              <Image
                                alt="arrow"
                                src="/svgs/arrow-up-right.svg"
                                height={24}
                                width={24}
                              />
                            </div>
                            <div className="text-goldenbrown nu-semibold-12 absolute right-0  ">
                              {firstBentoHovered ? (
                                <CountUp
                                  start={0}
                                  end={25}
                                  duration={1.5}
                                  separator=","
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
              <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85% pointer-events-none" />
            </div>

            {/* Bento 2 */}
            <div className="group relative flex flex-col w-full h-full px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center overflow-hidden">
              {/* Content */}
              <div className="h-full flex-col justify-start items-start gap-[18px] flex relative">
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
                <div className="transition-all duration-500 bg-white group-hover:scale-105 group-hover:shadow-customShadow group-hover:-translate-y-[1.5rem] mt-[1.5rem] pointer-events-none blur-[0.5px] h-full px-6 py-4 rounded-2xl border border-ash/10 flex-col justify-start items-start gap-5 flex overflow-hidden">
                  <div className="w-full justify-between items-center flex">
                    <div className="text-ash nu-bold-20">Scheduled Posts</div>
                    <div className="w-[153px] flex-col justify-start items-start flex">
                      <div className="h-[38px] w-full flex-col justify-start items-start gap-0.5 flex">
                        <div className="w-full px-3 py-2 bg-[#fafafb] rounded-lg border border-[#e5e6ea] justify-between items-center gap-2 flex">
                          <div className="flex-col justify-start items-start flex">
                            <div className="text-ash nu-regular-14">Weekly</div>
                          </div>
                          <div className="w-[22px] h-[22px] px-[5.50px] py-[7.60px] justify-center items-center flex">
                            <Image
                              alt="chevron"
                              src="/svgs/chevron-down.svg"
                              height={24}
                              width={24}
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
                    <div className="pt-4 flex-col justify-start items-start gap-2 flex overflow-hidden">
                      {/* IG */}
                      <div className="transition-all duration-500 pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 flex group-hover:-translate-y-[325%] group-hover:scale-[25%]">
                        <div className="w-1 h-full bg-goldenbrown rounded-2xl" />
                        <div className="flex-col justify-start items-start gap-2 flex">
                          <div className="justify-start items-start gap-[0.625rem] flex">
                            <div className="flex-col justify-start items-start gap-[0.625rem] flex">
                              <div className="justify-start items-center gap-2 flex">
                                <div className="w-4 h-4 justify-center items-center flex">
                                  <Image
                                    alt="instagram"
                                    src="/svgs/instagram.svg"
                                    height={24}
                                    width={24}
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
                            <img
                              className="w-[70px] h-[70px] rounded-[5px] border border-white"
                              src="/images/Virtual Xposure - Exterior Image - (12).png"
                            />
                          </div>
                          <div className="w-full justify-between items-center flex">
                            <div className="justify-center items-center flex">
                              <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                                <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                  <Image
                                    alt="info"
                                    src="/svgs/info.svg"
                                    height={24}
                                    width={24}
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
                                    src="/svgs/calendar.svg"
                                    height={24}
                                    width={24}
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
                                    src="/svgs/clock.svg"
                                    height={24}
                                    width={24}
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
                      <div className="transition-all duration-500 pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 flex group-hover:-translate-y-[325%]  group-hover:scale-[50%]">
                        <div className="w-1 h-full bg-goldenbrown rounded-2xl" />
                        <div className="flex-col justify-start items-start gap-2 flex">
                          <div className="justify-start items-start gap-[0.625rem] flex">
                            <div className="flex-col justify-start items-start gap-[0.625rem] flex">
                              <div className="justify-start items-center gap-2 flex">
                                <div className="w-4 h-4 justify-center items-center flex">
                                  <Image
                                    alt="facebook"
                                    src="/svgs/facebook.svg"
                                    height={24}
                                    width={24}
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
                            <img
                              className="w-[70px] h-[70px] rounded-[5px] border border-white"
                              src="/images/Virtual Xposure - Exterior Image - (12).png"
                            />
                          </div>
                          <div className="w-full justify-between items-center flex">
                            <div className="justify-center items-center flex">
                              <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                                <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                  <Image
                                    alt="info"
                                    src="/svgs/info.svg"
                                    height={24}
                                    width={24}
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
                                    src="/svgs/calendar.svg"
                                    height={24}
                                    width={24}
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
                                    src="/svgs/clock.svg"
                                    height={24}
                                    width={24}
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
                      <div className="transition-all duration-500 pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 flex group-hover:-translate-y-[325%]  group-hover:scale-[90%]">
                        <div className="w-1 h-full bg-goldenbrown rounded-2xl" />
                        <div className="flex-col justify-start items-start gap-2 flex">
                          <div className="justify-start items-start gap-[0.625rem] flex">
                            <div className="flex-col justify-start items-start gap-[0.625rem] flex">
                              <div className="justify-start items-center gap-2 flex">
                                <div className="w-4 h-4 justify-center items-center flex">
                                  <Image
                                    alt="tiktok"
                                    src="/svgs/tiktok.svg"
                                    height={24}
                                    width={24}
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
                            <img
                              className="w-[70px] h-[70px] rounded-[5px] border border-white"
                              src="/images/Virtual Xposure - Exterior Image - (12).png"
                            />
                          </div>
                          <div className="w-full justify-between items-center flex">
                            <div className="justify-center items-center flex">
                              <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                                <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                  <Image
                                    alt="info"
                                    src="/svgs/info.svg"
                                    height={24}
                                    width={24}
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
                                    src="/svgs/calendar.svg"
                                    height={24}
                                    width={24}
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
                                    src="/svgs/clock.svg"
                                    height={24}
                                    width={24}
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
                        <div className="flex-col justify-start items-start gap-2 flex">
                          <div className="justify-start items-start gap-[0.625rem] flex">
                            <div className="flex-col justify-start items-start gap-[0.625rem] flex">
                              <div className="justify-start items-center gap-2 flex">
                                <div className="w-4 h-4 justify-center items-center flex">
                                  <Image
                                    alt="linkedin"
                                    src="/svgs/linkedin.svg"
                                    height={24}
                                    width={24}
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
                            <img
                              className="w-[70px] h-[70px] rounded-[5px] border border-white"
                              src="/images/Virtual Xposure - Exterior Image - (12).png"
                            />
                          </div>
                          <div className="w-full justify-between items-center flex">
                            <div className="justify-center items-center flex">
                              <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                                <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                                  <Image
                                    alt="info"
                                    src="/svgs/info.svg"
                                    height={24}
                                    width={24}
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
                                    src="/svgs/calendar.svg"
                                    height={24}
                                    width={24}
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
                                    src="/svgs/clock.svg"
                                    height={24}
                                    width={24}
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
              <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85% pointer-events-none" />
            </div>

            {/* Bento 3 */}
            <div className="group relative flex flex-col h-full px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center overflow-hidden">
              <div className="flex-col w-full h-full justify-start items-start gap-[2rem] flex">
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
                <div className="pointer-events-none flex flex-col size-full items-center justify-center relative">
                  <div className="w-[264px] h-[264px] left-[18px] bg-ash/5 rounded-full justify-center items-center flex">
                    <div className="flex flex-col items-center justify-center w-[264px] h-[264px] rounded-full border border-ash/10">
                      <div className="w-52 h-52 bg-goldenrod/25 rounded-full justify-center items-center flex">
                        <span className="group-hover:animate-ping absolute inline-flex h-full w-full rounded-full group-hover:bg-goldenrod/25 bg-transparent opacity-75"></span>
                        <div className="relative flex flex-col items-center justify-center w-52 h-52 rounded-full border border-ash/10">
                          <div className="justify-center items-center flex flex-row space-x-[-1.5rem]">
                            <img
                              className="transition-all duration-500 w-12 h-12 relative rounded-[86px] group-hover:translate-x-[-50%] group-hover:-rotate-45"
                              src="/images/team.png"
                            />
                            <img
                              className="transition-all duration-500 w-12 h-12 relative rounded-[86px] group-hover:translate-x-[-25%] group-hover:-rotate-12 group-hover:translate-y-[-25%]"
                              src="/images/team_1.png"
                            />
                            <img
                              className="transition-all duration-500 w-12 h-12 relative rounded-[86px] group-hover:translate-y-[-35%]"
                              src="/images/team_2.png"
                            />
                            <img
                              className="transition-all duration-500 w-12 h-12 relative rounded-[86px] group-hover:translate-x-[25%] group-hover:rotate-12 group-hover:translate-y-[-25%]"
                              src="/images/team_3.png"
                            />
                            <img
                              className="transition-all duration-500 w-12 h-12 relative rounded-[86px] group-hover:translate-x-[50%] group-hover:rotate-45"
                              src="/images/team_4.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Bentos (2) */}
          <div className="flex flex-row w-full h-[31.25rem] justify-start items-start gap-[1.875rem]">
            {/* Bento 4 */}
            <div
              className="group relative flex flex-col w-full h-full px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center overflow-hidden"
              onMouseEnter={() => setFourthBentoHovered(true)}
              onMouseLeave={() => setFourthBentoHovered(false)}
            >
              {/* Content */}
              <div className="flex-col justify-start items-start gap-2 flex">
                {/* Header */}
                <div className="h-40 flex-col justify-start items-start gap-[0.625rem] flex">
                  <div className="text-ash pn-bold-28">
                    Real Growth & Engagement
                  </div>
                  <p className="text-ash pn-regular-22">
                    <span className="pn-semibold-22 italic">
                      See results within 90 days.
                    </span>
                    <br />
                    We increase your social media engagement and organic traffic
                    with data-backed strategies.
                  </p>
                </div>
                {/* Graphic */}
                <div className="blur-[0.5px] transition-all duration-500 bg-white group-hover:scale-105 group-hover:shadow-customShadow group-hover:-translate-y-[1rem] mt-[2rem] p-6 rounded-xl border border-ash/10 flex-col justify-start items-start gap-5 flex w-full">
                  <div className="w-full justify-between items-center flex">
                    <div className="text-ash nu-bold-20">Followers</div>
                    <div className="w-[150px] flex-col justify-start items-start flex">
                      <div className="w-full h-10 flex-col justify-start items-start gap-0.5 flex">
                        <div className="w-full px-3 py-2 bg-white rounded-lg border border-ash/10 justify-start items-center gap-2 flex">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <Image
                              alt="instagram"
                              src="/svgs/instagram.svg"
                              height={24}
                              width={24}
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
                              src="/svgs/chevron-down.svg"
                              height={24}
                              width={24}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-start gap-4 flex">
                    <div className="flex-col justify-start items-start gap-px flex">
                      <div className="text-ash nu-semibold-16">Net Growth</div>
                      <div className="text-charcoal nu-regular-12">
                        Jun 2025 - Dec 2025
                      </div>
                    </div>
                    <div className="h-[70px] justify-center items-start gap-4 flex">
                      <div className="p-3 bg-ash rounded-lg justify-start items-start gap-2 flex min-w-[30%]">
                        <div className="flex-col justify-center items-start gap-1 flex">
                          <div className="transition-all duration-500 group-hover:scale-125 w-6 h-6 relative">
                            <Image
                              alt="growth"
                              src="/svgs/growth.svg"
                              height={24}
                              width={24}
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
                                  src="/svgs/arrow-up-right.svg"
                                  height={24}
                                  width={24}
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
                                src="/svgs/followers.svg"
                                height={24}
                                width={24}
                              />
                            </div>
                          </div>
                          <div className="text-ash nu-semibold-12">Follow</div>
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
                                  src="/svgs/arrow-up-right.svg"
                                  height={24}
                                  width={24}
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
                                src="/svgs/unfollow.svg"
                                height={24}
                                width={24}
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
                                  src="/svgs/arrow-up-right.svg"
                                  height={24}
                                  width={24}
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
                  <div className="w-full h-[300px] relative">
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
                      <div className="left-[1px] top-[102px] absolute text-ash nu-regular-12">
                        15.000
                      </div>
                      <div className="left-0 top-[51px] absolute text-ash nu-regular-12">
                        25.000
                      </div>
                      <div className="left-0 top-0 absolute text-ash nu-regular-12">
                        50.000
                      </div>
                    </div>
                    <div className="w-[694px] h-[255px] left-[63px] top-[7px] absolute" />
                    <div className="w-[0.625rem] px-0.5 left-[58px] top-[4px] absolute flex-col justify-center items-start gap-[45px] flex">
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash/10" />
                    </div>
                    <div className="absolute top-[2.5rem] right-0 w-[498px] h-[171px] justify-between items-end flex">
                      <div className="transition-all duration-500 group-hover:-translate-y-[40%] w-[26px] h-[105px] bg-goldenbrown rounded-t-full" />
                      <div className="transition-all duration-500 group-hover:-translate-y-[10%] w-[26px] h-[171px] bg-goldenbrown rounded-t-full" />
                      <div className="transition-all duration-500 group-hover:-translate-y-[50%] w-[26px] h-[134px] bg-goldenbrown rounded-t-full" />
                      <div className="transition-all duration-500 group-hover:-translate-y-[200%] w-[26px] h-[47px] bg-goldenbrown rounded-t-full" />
                      <div className="transition-all duration-500 group-hover:-translate-y-[70%] w-[26px] h-[89px] bg-goldenbrown rounded-t-full" />
                      <div className="transition-all duration-500 group-hover:-translate-y-[10%] w-[26px] h-[140px] bg-goldenbrown rounded-t-full" />
                      <div className="transition-all duration-500 group-hover:-translate-y-[40%] w-[26px] h-[140px] bg-goldenbrown rounded-t-full" />
                    </div>
                    <div className="left-[78px] top-[278px] absolute justify-start items-start gap-[62px] flex">
                      <div className="text-charcoal nu-regular-12">Dec 18</div>
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
              <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85% pointer-events-none" />
            </div>
            {/* Bento 5 */}
            <div className="group relative flex flex-col w-full h-full px-[1.5rem] py-[2rem] bg-transparent rounded-[1.875rem] outline-charcoal/50 outline-dashed justify-center items-center gap-[2.75rem] overflow-hidden hover:outline-goldenrod hover:bg-goldenrod/10 transition-all duration-500">
              {/* Content */}
              <div className="flex flex-col justify-center items-center gap-[2.75rem] text-center text-ash">
                {/* Header */}
                <div className="pn-bold-48">
                  <span className="group-hover:text-charcoalNavy transition-all duration-500">
                    Optimized
                  </span>{" "}
                  for{" "}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
