"use client";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import React from "react";

interface SectionProps {
  className?: string;
}

function ServicesSection({ className }: SectionProps) {
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
          <div className="flex flex-row w-full h-[31.25rem] justify-start items-start gap-[1.875rem]">
            <div className="relative flex flex-col h-full px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center overflow-hidden">
              <div className="flex flex-col h-full justify-start items-start gap-[2rem]">
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
                <div className="grow shrink basis-0 p-6 rounded-xl border border-ash-10/10 flex-col justify-start items-start gap-6 flex">
                  <div className="h-[137px] justify-start items-start gap-6 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-[18px] inline-flex">
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-6 h-6 justify-center items-center flex">
                          <div className="w-6 h-6 relative"></div>
                        </div>
                        <div className="grow shrink basis-0 text-ash text-xs font-semibold font-['Nunito'] leading-[18px]">
                          Instagram
                        </div>
                      </div>
                      <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                        <div className="text-ash text-2xl font-bold font-['Nunito'] leading-[1.875rem]">
                          420K
                        </div>
                        <div className="justify-start items-start gap-1 inline-flex">
                          <div className="opacity-70 text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                            Followers
                          </div>
                          <div className="grow shrink basis-0 h-[18px] justify-start items-center gap-[3px] flex">
                            <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex" />
                            <div className="grow shrink basis-0 text-goldenbrown text-xs font-semibold font-['Nunito'] leading-[18px]">
                              20%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-[18px] inline-flex">
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="grow shrink basis-0 text-ash text-xs font-semibold font-['Nunito'] leading-[18px]">
                          Facebook
                        </div>
                      </div>
                      <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                        <div className="text-ash text-2xl font-bold font-['Nunito'] leading-[1.875rem]">
                          30K
                        </div>
                        <div className="justify-start items-start gap-1 inline-flex">
                          <div className="opacity-70 text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                            Followers
                          </div>
                          <div className="grow shrink basis-0 h-[18px] justify-start items-center gap-[3px] flex">
                            <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex" />
                            <div className="text-goldenbrown text-xs font-semibold font-['Nunito'] leading-[18px]">
                              53%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[137px] justify-start items-start gap-6 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-[18px] inline-flex">
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-6 h-6 pl-[1.40px] pr-[1.50px] py-[0.05px] justify-center items-center flex">
                          <div className="w-[21.10px] h-[23.90px] relative">
                            <div className="w-[18.34px] h-[22.82px] left-[2.77px] top-[1.08px] absolute"></div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0 text-ash text-xs font-semibold font-['Nunito'] leading-[18px]">
                          Tiktok
                        </div>
                      </div>
                      <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                        <div className="text-ash text-2xl font-bold font-['Nunito'] leading-[1.875rem]">
                          980K
                        </div>
                        <div className="justify-start items-start gap-1 inline-flex">
                          <div className="opacity-70 text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                            Followers
                          </div>
                          <div className="grow shrink basis-0 h-[18px] justify-start items-center gap-[3px] flex">
                            <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex" />
                            <div className="grow shrink basis-0 text-goldenbrown text-xs font-semibold font-['Nunito'] leading-[18px]">
                              12%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-[18px] inline-flex">
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="w-6 h-6 justify-center items-center flex" />
                        <div className="grow shrink basis-0 text-ash text-xs font-semibold font-['Nunito'] leading-[18px]">
                          LinkedIn
                        </div>
                      </div>
                      <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                        <div className="text-ash text-2xl font-bold font-['Nunito'] leading-[1.875rem]">
                          60K
                        </div>
                        <div className="justify-start items-start gap-0.5 inline-flex">
                          <div className="opacity-70 text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                            Connections
                          </div>
                          <div className="justify-start items-center gap-[3px] flex">
                            <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex" />
                            <div className="text-goldenbrown text-xs font-semibold font-['Nunito'] leading-[18px]">
                              25%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85%" />
            </div>
            <div className="relative flex flex-col w-full h-full px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center overflow-hidden">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[18px] flex">
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
                <div className="grow shrink basis-0 px-6 py-4 bg-white rounded-2xl border border-ash-10/10 flex-col justify-start items-start gap-5 flex">
                  <div className="justify-between items-center inline-flex">
                    <div className="text-ash text-xl font-bold font-['Nunito'] leading-7">
                      Scheduled Posts
                    </div>
                    <div className="w-[153px] flex-col justify-start items-start inline-flex">
                      <div className="h-[38px] flex-col justify-start items-start gap-0.5 flex">
                        <div className="px-3 py-2 bg-[#fafafb] rounded-lg border border-[#e5e6ea] justify-start items-center gap-2 inline-flex">
                          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            <div className="text-ash text-sm font-normal font-['Nunito'] leading-tight">
                              Weekly
                            </div>
                          </div>
                          <div className="w-[22px] h-[22px] px-[5.50px] py-[7.60px] justify-center items-center flex" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[798px] flex-col justify-start items-start gap-4 flex">
                    <div className="border-b border-[#e5e6ea] justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="h-11 px-4 py-3 justify-center items-center gap-1.5 inline-flex">
                          <div className="text-center text-goldenbrown text-sm font-semibold font-['Nunito'] leading-tight">
                            All
                          </div>
                        </div>
                        <div className="h-0.5 bg-goldenbrown rounded-tl rounded-tr" />
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="h-11 px-4 py-3 justify-center items-center gap-1.5 inline-flex">
                          <div className="text-center text-[#686d7d] text-sm font-semibold font-['Nunito'] leading-tight">
                            Instagram
                          </div>
                        </div>
                        <div className="h-0.5 opacity-0 bg-goldenbrown rounded-tl rounded-tr" />
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="h-11 px-4 py-3 justify-center items-center gap-1.5 inline-flex">
                          <div className="text-center text-[#686d7d] text-sm font-semibold font-['Nunito'] leading-tight">
                            Facebook
                          </div>
                        </div>
                        <div className="h-0.5 opacity-0 bg-goldenbrown rounded-tl rounded-tr" />
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="h-11 px-4 py-3 justify-center items-center gap-1.5 inline-flex">
                          <div className="text-center text-[#686d7d] text-sm font-semibold font-['Nunito'] leading-tight">
                            TikTok
                          </div>
                        </div>
                        <div className="h-0.5 opacity-0 bg-goldenbrown rounded-tl rounded-tr" />
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="h-11 px-4 py-3 justify-center items-center gap-1.5 inline-flex">
                          <div className="text-center text-[#686d7d] text-sm font-semibold font-['Nunito'] leading-tight">
                            LinkedIn
                          </div>
                        </div>
                        <div className="h-0.5 opacity-0 bg-goldenbrown rounded-tl rounded-tr" />
                      </div>
                    </div>
                    <div className="h-[736px] flex-col justify-start items-start gap-2 flex">
                      <div className="pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 inline-flex">
                        <div className="w-1 bg-goldenbrown rounded-2xl" />
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="justify-start items-start gap-[0.625rem] inline-flex">
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[0.625rem] inline-flex">
                              <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-4 h-4 justify-center items-center flex">
                                  <div className="w-4 h-4 relative"></div>
                                </div>
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-none">
                                  Instagram: @best_edmonton_realtor
                                </div>
                              </div>
                              <div className="text-ash text-sm font-normal font-['Nunito'] leading-snug">
                                Your dream home is closer than you think! 🏡
                                Explore our exclusive listings and book a
                                virtual tour today. DM us for more info!
                              </div>
                            </div>
                            <img
                              className="w-[70px] h-[70px] rounded-[5px] border border-white"
                              src="https://via.placeholder.com/70x70"
                            />
                          </div>
                          <div className="justify-between items-center inline-flex">
                            <div className="justify-center items-center flex">
                              <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                                <div className="w-4 h-4 p-[1.33px] justify-center items-center flex" />
                                <div className="text-center text-goldenbrown text-xs font-semibold font-['Nunito'] leading-[18px]">
                                  Schedule
                                </div>
                              </div>
                            </div>
                            <div className="px-1.5 py-1 bg-[#fafafb] rounded border border-[#e5e6ea] justify-start items-start gap-[19px] flex">
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 px-0.5 py-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                                  Jan 04, 2024
                                </div>
                              </div>
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 p-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                                  10:00AM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 inline-flex">
                        <div className="w-1 bg-goldenbrown rounded-2xl" />
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="justify-start items-start gap-[0.625rem] inline-flex">
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[0.625rem] inline-flex">
                              <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-4 h-4 pl-[0.93px] pr-px py-[0.03px] justify-center items-center flex">
                                  <div className="w-[14.07px] h-[15.93px] relative">
                                    <div className="w-[12.23px] h-[15.22px] left-[1.84px] top-[0.72px] absolute"></div>
                                  </div>
                                </div>
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-none">
                                  Tiktok: @best_edmonton_realtor
                                </div>
                              </div>
                              <div className="text-ash text-sm font-normal font-['Nunito'] leading-snug">
                                It’s not just yoga it’s a whole lifestyle.
                                Subscribe today for exclusive yoga classes,
                                photoshoots, and a lot of fun!
                              </div>
                            </div>
                            <img
                              className="w-[70px] h-[70px] rounded-[5px] border border-white"
                              src="https://via.placeholder.com/70x70"
                            />
                          </div>
                          <div className="justify-between items-center inline-flex">
                            <div className="justify-center items-center flex">
                              <div className="px-1 py-0.5 bg-[#e5f9ff] rounded justify-center items-center gap-1 flex">
                                <div className="text-center text-goldenbrown text-xs font-semibold font-['Nunito'] leading-[18px]">
                                  Schedule
                                </div>
                              </div>
                            </div>
                            <div className="px-1.5 py-1 bg-[#fafafb] rounded border border-[#e5e6ea] justify-start items-start gap-[19px] flex">
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 px-0.5 py-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                                  Jan 02, 2024
                                </div>
                              </div>
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 p-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                                  8:00PM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 inline-flex">
                        <div className="w-1 bg-goldenbrown rounded-2xl" />
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="justify-start items-start gap-[0.625rem] inline-flex">
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[0.625rem] inline-flex">
                              <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-4 h-4 pl-[0.93px] pr-px py-[0.03px] justify-center items-center flex">
                                  <div className="w-[14.07px] h-[15.93px] relative">
                                    <div className="w-[12.23px] h-[15.22px] left-[1.84px] top-[0.72px] absolute"></div>
                                  </div>
                                </div>
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-none">
                                  Tiktok: @skylar
                                </div>
                              </div>
                              <div className="text-ash text-sm font-normal font-['Nunito'] leading-snug">
                                It’s not just yoga it’s a whole lifestyle.
                                Subscribe today for exclusive yoga classes,
                                photoshoots, and a lot of fun!
                              </div>
                            </div>
                            <img
                              className="w-[42px] h-[70px] rounded-[5px] border border-white"
                              src="https://via.placeholder.com/42x70"
                            />
                          </div>
                          <div className="justify-between items-center inline-flex">
                            <div className="justify-center items-center flex">
                              <div className="px-1 py-0.5 bg-[#e5f9ff] rounded justify-center items-center gap-1 flex">
                                <div className="text-center text-goldenbrown text-xs font-semibold font-['Nunito'] leading-[18px]">
                                  Schedule
                                </div>
                              </div>
                            </div>
                            <div className="px-1.5 py-1 bg-[#fafafb] rounded border border-[#e5e6ea] justify-start items-start gap-[19px] flex">
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 px-0.5 py-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                                  Jan 01, 2024
                                </div>
                              </div>
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 p-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                                  9:00PM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 inline-flex">
                        <div className="w-1 bg-goldenbrown rounded-2xl" />
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="justify-start items-start gap-[0.625rem] inline-flex">
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[0.625rem] inline-flex">
                              <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-4 h-4 relative" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-none">
                                  Onlyfans: skylar
                                </div>
                              </div>
                              <div className="text-ash text-sm font-normal font-['Nunito'] leading-snug">
                                It’s not just yoga it’s a whole lifestyle.
                                Subscribe today for exclusive yoga classes,
                                photoshoots, and a lot of fun!
                              </div>
                            </div>
                            <img
                              className="w-20 h-[50px] rounded-[5px] border border-white"
                              src="https://via.placeholder.com/80x50"
                            />
                          </div>
                          <div className="justify-between items-center inline-flex">
                            <div className="justify-center items-center flex">
                              <div className="px-1 py-0.5 bg-[#e5ebfc] rounded justify-center items-center gap-1 flex">
                                <div className="text-center text-goldenbrown text-xs font-semibold font-['Nunito'] leading-[18px]">
                                  Schedule
                                </div>
                              </div>
                            </div>
                            <div className="px-1.5 py-1 bg-[#fafafb] rounded border border-[#e5e6ea] justify-start items-start gap-[19px] flex">
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 px-0.5 py-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                                  Dec 31, 2023
                                </div>
                              </div>
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 p-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                                  8:00PM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 inline-flex">
                        <div className="w-1 bg-[#1ebe41] rounded-2xl" />
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[0.625rem] inline-flex">
                              <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-4 h-4 relative" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-none">
                                  Youtube: @skylar
                                </div>
                              </div>
                              <div className="h-11 flex-col justify-start items-start gap-1.5 flex">
                                <div className="text-ash text-sm font-normal font-['Nunito'] leading-snug">
                                  It’s not just yoga it’s a whole lifestyle.
                                  Subscribe today for exclusive yoga classes,
                                  photoshoots, and a lot of fun!
                                </div>
                              </div>
                            </div>
                            <img
                              className="w-20 h-[50px] rounded-[5px] border border-white"
                              src="https://via.placeholder.com/80x50"
                            />
                          </div>
                          <div className="justify-between items-center inline-flex">
                            <div className="justify-center items-center flex">
                              <div className="px-1 py-0.5 bg-[#e6fbeb] rounded justify-center items-center gap-1 flex">
                                <div className="text-center text-[#1ebe41] text-xs font-semibold font-['Nunito'] leading-[18px]">
                                  Published
                                </div>
                              </div>
                            </div>
                            <div className="px-1.5 py-1 bg-[#fafafb] rounded border border-[#e5e6ea] justify-start items-start gap-[19px] flex">
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 px-0.5 py-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                                  Dec 26, 2023
                                </div>
                              </div>
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 p-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                                  5:00PM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 inline-flex">
                        <div className="w-1 bg-[#1ebe41] rounded-2xl" />
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="justify-start items-start gap-2 inline-flex">
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[0.625rem] inline-flex">
                              <div className="justify-start items-center gap-2 inline-flex">
                                <div className="w-4 h-4 pl-[0.93px] pr-px py-[0.03px] justify-center items-center flex">
                                  <div className="w-[14.07px] h-[15.93px] relative">
                                    <div className="w-[12.23px] h-[15.22px] left-[1.84px] top-[0.72px] absolute"></div>
                                  </div>
                                </div>
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-none">
                                  Tiktok: @skylar
                                </div>
                              </div>
                              <div className="h-11 flex-col justify-start items-start gap-1.5 flex">
                                <div className="text-ash text-sm font-normal font-['Nunito'] leading-snug">
                                  It’s not just yoga it’s a whole lifestyle.
                                  Subscribe today for exclusive yoga classes,
                                  photoshoots, and a lot of fun!
                                </div>
                              </div>
                            </div>
                            <img
                              className="w-[42px] h-[70px] rounded-[5px] border border-white"
                              src="https://via.placeholder.com/42x70"
                            />
                          </div>
                          <div className="justify-between items-center inline-flex">
                            <div className="justify-center items-center flex">
                              <div className="px-1 py-0.5 bg-[#e6fbeb] rounded justify-center items-center gap-1 flex">
                                <div className="text-center text-[#1ebe41] text-xs font-semibold font-['Nunito'] leading-[18px]">
                                  Published
                                </div>
                              </div>
                            </div>
                            <div className="px-1.5 py-1 bg-[#fafafb] rounded border border-[#e5e6ea] justify-start items-start gap-[19px] flex">
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 px-0.5 py-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                                  Dec 25, 2023
                                </div>
                              </div>
                              <div className="justify-start items-center gap-1 flex">
                                <div className="w-4 h-4 p-[1.33px] justify-center items-center flex" />
                                <div className="text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
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
              <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85%" />
            </div>
            <div className="relative flex flex-col h-full px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center overflow-hidden">
              <div className="flex-col justify-start items-start gap-[2rem] inline-flex">
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
                <div className="w-[298.68px] h-[264px] justify-center items-center inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="w-[299px] h-[264px] relative">
                      <div className="w-[264px] h-[264px] left-[18px] top-0 absolute bg-ash-5/5 rounded-[999px] justify-center items-center inline-flex">
                        <div className="w-[264px] h-[264px] rounded-[999px] border border-ash-10/10" />
                      </div>
                      <div className="w-52 h-52 left-[46px] top-[28px] absolute bg-goldenrod-25/25 rounded-[999px] justify-center items-center inline-flex">
                        <div className="w-52 h-52 rounded-[999px] border border-ash-10/10" />
                      </div>
                      <div className="pl-[75.16px] pr-[75.84px] py-2 left-0 top-[100px] absolute justify-center items-center inline-flex">
                        <div className="justify-start items-start inline-flex">
                          <img
                            className="w-12 h-12 relative rounded-[86px]"
                            src="https://via.placeholder.com/48x48"
                          />
                          <img
                            className="w-12 h-12 relative rounded-[86px]"
                            src="https://via.placeholder.com/48x48"
                          />
                          <img
                            className="w-12 h-12 relative rounded-[86px]"
                            src="https://via.placeholder.com/48x48"
                          />
                          <img
                            className="w-12 h-12 relative rounded-[86px]"
                            src="https://via.placeholder.com/48x48"
                          />
                          <img
                            className="w-12 h-12 relative rounded-[86px]"
                            src="https://via.placeholder.com/48x48"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full h-[31.25rem] justify-start items-start gap-[1.875rem]">
            <div className="relative flex flex-col w-full h-full px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center overflow-hidden">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
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
                <div className="grow shrink basis-0 p-6 rounded-xl border border-ash-10/10 flex-col justify-start items-start gap-5 flex">
                  <div className="justify-between items-center inline-flex">
                    <div className="text-ash text-xl font-bold font-['Nunito'] leading-7">
                      Followers
                    </div>
                    <div className="w-[150px] flex-col justify-start items-start inline-flex">
                      <div className="h-10 flex-col justify-start items-start gap-0.5 flex">
                        <div className="px-3 py-2 bg-white rounded-lg border border-ash-10/10 justify-start items-center gap-2 inline-flex">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative"></div>
                          </div>
                          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            <div className="text-ash text-sm font-normal font-['Nunito'] leading-tight">
                              Instagram
                            </div>
                          </div>
                          <div className="w-[22px] h-[22px] px-[5.50px] py-[7.60px] justify-center items-center flex" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-start gap-4 inline-flex">
                    <div className="flex-col justify-start items-start gap-px inline-flex">
                      <div className="text-ash text-base font-semibold font-['Nunito'] leading-snug">
                        Net Growth
                      </div>
                      <div className="text-charcoal text-xs font-normal font-['Nunito'] leading-snug">
                        Jun 2023 - Dec 2023
                      </div>
                    </div>
                    <div className="grow shrink basis-0 h-[70px] justify-start items-start gap-4 flex">
                      <div className="p-3 bg-ash rounded-lg justify-start items-start gap-2 flex">
                        <div className="flex-col justify-center items-start gap-1 inline-flex">
                          <div className="w-6 h-6 relative" />
                          <div className="text-white text-xs font-semibold font-['Nunito'] leading-[18px]">
                            Growth
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                          <div className="text-goldenbrown text-xs font-bold font-['Nunito'] leading-snug">
                            23,430
                          </div>
                          <div className="justify-start items-start gap-0.5 inline-flex">
                            <div className="opacity-70 text-white text-xs font-normal font-['Nunito'] leading-[18px]">
                              +412
                            </div>
                            <div className="justify-start items-center flex">
                              <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex" />
                              <div className="text-goldenbrown text-xs font-semibold font-['Nunito'] leading-[18px]">
                                23%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-ash-10/10 justify-start items-start gap-2 flex">
                        <div className="flex-col justify-center items-start gap-1 inline-flex">
                          <div className="w-6 h-6 justify-center items-center inline-flex">
                            <div className="w-6 h-6 relative"></div>
                          </div>
                          <div className="text-ash text-xs font-semibold font-['Nunito'] leading-[18px]">
                            Follow
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                          <div className="text-ash text-xs font-bold font-['Nunito'] leading-snug">
                            25,592
                          </div>
                          <div className="justify-start items-start gap-0.5 inline-flex">
                            <div className="opacity-70 text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                              +804
                            </div>
                            <div className="justify-start items-center flex">
                              <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex" />
                              <div className="text-goldenbrown text-xs font-semibold font-['Nunito'] leading-[18px]">
                                23%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-ash-10/10 justify-start items-start gap-2 flex">
                        <div className="flex-col justify-center items-start gap-1 inline-flex">
                          <div className="w-6 h-6 px-[1.45px] justify-center items-center inline-flex">
                            <div className="w-[21.09px] h-6 relative"></div>
                          </div>
                          <div className="text-ash text-xs font-semibold font-['Nunito'] leading-[18px]">
                            Unfollow
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                          <div className="text-ash text-xs font-bold font-['Nunito'] leading-snug">
                            100
                          </div>
                          <div className="justify-start items-start gap-0.5 inline-flex">
                            <div className="opacity-70 text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                              -4
                            </div>
                            <div className="justify-start items-center flex">
                              <div className="w-3.5 h-3.5 p-[2.62px] justify-center items-center flex" />
                              <div className="text-goldenbrown text-xs font-semibold font-['Nunito'] leading-[18px]">
                                2.2%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[300px] relative">
                    <div className="w-10 h-[273px] left-0 top-0 absolute">
                      <div className="left-[32px] top-[255px] absolute text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                        0
                      </div>
                      <div className="left-[9px] top-[204px] absolute text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                        1.500
                      </div>
                      <div className="left-[9px] top-[153px] absolute text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                        3000
                      </div>
                      <div className="left-[1px] top-[102px] absolute text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                        15.000
                      </div>
                      <div className="left-0 top-[51px] absolute text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                        25.000
                      </div>
                      <div className="left-0 top-0 absolute text-ash text-xs font-normal font-['Nunito'] leading-[18px]">
                        50.000
                      </div>
                    </div>
                    <div className="w-[694px] h-[255px] left-[63px] top-[7px] absolute" />
                    <div className="w-[0.625rem] px-0.5 left-[58px] top-[4px] absolute flex-col justify-center items-start gap-[45px] inline-flex">
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash-10/10" />
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash-10/10" />
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash-10/10" />
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash-10/10" />
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash-10/10" />
                      <div className="w-1.5 h-1.5 bg-ash-10/10 rounded-full border border-ash-10/10" />
                    </div>
                    <div className="w-[668px] left-[89px] top-[33px] absolute justify-start items-end gap-[75px] inline-flex">
                      <div className="w-[26px] h-[141px] bg-goldenbrown rounded-tl-2xl rounded-tr-2xl" />
                      <div className="w-[26px] h-[229px] bg-goldenbrown rounded-tl-[999px] rounded-tr-[999px]" />
                      <div className="w-[26px] h-[179px] bg-goldenbrown rounded-tl-2xl rounded-tr-2xl" />
                      <div className="w-[26px] h-[63px] bg-goldenbrown rounded-tl-2xl rounded-tr-2xl" />
                      <div className="w-[26px] h-[119px] bg-goldenbrown rounded-tl-2xl rounded-tr-2xl" />
                      <div className="w-[26px] h-[187px] bg-goldenbrown rounded-tl-2xl rounded-tr-2xl" />
                      <div className="w-[26px] h-[187px] bg-goldenbrown rounded-tl-2xl rounded-tr-2xl" />
                    </div>
                    <div className="left-[78px] top-[278px] absolute justify-start items-start gap-[62px] inline-flex">
                      <div className="text-charcoal text-xs font-normal font-['Nunito'] leading-[18px]">
                        Dec 18
                      </div>
                      <div className="text-center text-charcoal text-xs font-normal font-['Nunito'] leading-[18px]">
                        Dec 19
                      </div>
                      <div className="text-center text-charcoal text-xs font-normal font-['Nunito'] leading-[18px]">
                        Dec 20
                      </div>
                      <div className="text-center text-charcoal text-xs font-normal font-['Nunito'] leading-[18px]">
                        Dec 21
                      </div>
                      <div className="text-center text-charcoal text-xs font-normal font-['Nunito'] leading-[18px]">
                        Dec 22
                      </div>
                      <div className="text-center text-charcoal text-xs font-normal font-['Nunito'] leading-[18px]">
                        Dec 23
                      </div>
                      <div className="text-center text-charcoal text-xs font-normal font-['Nunito'] leading-[18px]">
                        Dec 24
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85%" />
            </div>
            <div className="group relative flex flex-col w-full h-full px-[1.5rem] py-[2rem] bg-transparent rounded-[1.875rem] outline-charcoal/50 outline-dashed justify-center items-center gap-[2.75rem] overflow-hidden hover:outline-goldenrod hover:bg-goldenrod/10 transition-all duration-300">
              <div className="flex flex-col justify-center items-center gap-[2.75rem] text-center text-ash">
                <div className="pn-bold-48">Optimized for <span className="group-hover:text-goldenbrown transition-all duration-300 group-hover:text-[3.25rem]">Scalability</span></div>
                <div className="pn-regular-22">
                  <span className="pn-semibold-22 italic">
                    Adapt as your business grows.
                  </span>
                  <br />
                  We provide scalable marketing solutions to support your
                  expanding real estate brand.
                </div>
              </div>
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
