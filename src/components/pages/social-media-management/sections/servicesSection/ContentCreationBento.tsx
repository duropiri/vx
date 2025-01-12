
import Image from "next/image";
import React from "react";


import socmedPostImage from "@/../../public/assets/images/VirtualXposure-ExteriorImage.webp";

import instagramImage from "@/../../public/assets/svgs/instagram.svg";
import facebookImage from "@/../../public/assets/svgs/facebook.svg";
import tiktokImage from "@/../../public/assets/svgs/tiktok.svg";
import linkedinImage from "@/../../public/assets/svgs/linkedin.svg";
import chevdownImage from "@/../../public/assets/svgs/chevron-down.svg";
import infoImage from "@/../../public/assets/svgs/info.svg";
import calendarImage from "@/../../public/assets/svgs/calendar.svg";
import clockImage from "@/../../public/assets/svgs/clock.svg";
import ScaleInVisible from "@/components/animations/ScaleInVisible";

const ContentCreationBento = () => {

  return (
    <ScaleInVisible className="group relative flex flex-col size-full max-h-[31.25rem]">
      <div className="px-[1.5rem] py-[2rem] bg-white rounded-[1rem] shadow-customShadow justify-start items-center overflow-hidden size-full max-h-[31.25rem]">
        {/* Content */}
        <div className="h-full w-full flex-col justify-start items-start gap-2 flex relative">
          {/* Header */}
          <div className="flex flex-col justify-center items-center gap-[0.625rem] size-full">
            <div className="text-center text-ash pn-bold-24">
              All-Inclusive Content Creation
            </div>
            <p className="text-center text-ash pn-regular-16">
              <span className="pn-semibold-20 italic">
                Engage your audience with premium content.
              </span>
              <br />
              From scriptwriting to full media production, we create
              high-quality content tailored to your brand.
            </p>
          </div>
          {/* Graphic */}
          <div className="select-none transition-all duration-500 bg-white group-hover:scale-105 group-hover:shadow-customShadow group-hover:-translate-y-[1.5rem] mt-[1.5rem] pointer-events-none h-full px-6 py-4 rounded-2xl border border-ash/10 flex-col justify-start items-start gap-5 flex w-auto lg:w-full">
            <div className="w-full justify-between items-center flex">
              <div className="text-ash nu-bold-20">Scheduled Posts</div>
              <div className="w-[153px] flex-col justify-start items-start flex">
                <div className="h-[38px] w-full flex-col justify-start items-start gap-0.5 flex">
                  <div className="w-full px-3 py-2 bg-[#fafafb] rounded-lg border border-[#e5e6ea] justify-between items-center gap-2 flex">
                    <div className="flex-col justify-start items-start flex">
                      <div className="text-ash nu-regular-14">Weekly</div>
                    </div>
                    <div className="w-[22px] h-[22px] px-[5.50px] py-[7.60px] justify-center items-center flex">
                      <Image alt="chevron" src={chevdownImage} quality={75} />
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
                <div className="transition-all duration-500 pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 flex group-hover:-translate-y-[325%] group-hover:scale-[25%] w-full">
                  <div className="w-1 h-full bg-goldenbrown rounded-2xl" />
                  <div className="flex-col justify-start items-start gap-2 flex size-full">
                    <div className="justify-between items-start gap-[0.625rem] flex w-full">
                      <div className="flex-col justify-start items-start gap-[0.625rem] flex w-full">
                        <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                          <div className="w-4 h-4 justify-center items-center flex">
                            <Image
                              alt="instagram"
                              src={instagramImage}
                              quality={75}
                            />
                          </div>
                          <div className="text-ash nu-regular-12">
                            Instagram: @best_edmonton_realtor
                          </div>
                        </div>
                        <div className="text-ash nu-regular-14">
                          Your dream home is closer than you think! 🏡 Explore
                          our exclusive listings and book a virtual tour today.
                          DM us for more info!
                        </div>
                      </div>
                      <Image
                        className="w-[70px] h-[70px] rounded-[5px] border border-white"
                        src={socmedPostImage}
                        alt="post-image"
                        quality={75}
                      />
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="justify-center items-center flex">
                        <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                          <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                            <Image alt="info" src={infoImage} quality={75} />
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
                              quality={75}
                            />
                          </div>
                          <div className="text-ash nu-regular-12">
                            Jan 04, 2024
                          </div>
                        </div>
                        <div className="justify-start items-center gap-1 flex">
                          <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                            <Image alt="clock" src={clockImage} quality={75} />
                          </div>
                          <div className="text-ash nu-regular-12">10:00AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* FB */}
                <div className="transition-all duration-500 pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 flex group-hover:-translate-y-[325%] group-hover:scale-[50%] w-full">
                  <div className="w-1 h-full bg-goldenbrown rounded-2xl" />
                  <div className="flex-col justify-start items-start gap-2 flex size-full">
                    <div className="justify-between items-start gap-[0.625rem] flex w-full">
                      <div className="flex-col justify-start items-start gap-[0.625rem] flex w-full">
                        <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                          <div className="w-4 h-4 justify-center items-center flex">
                            <Image
                              alt="facebook"
                              src={facebookImage}
                              quality={75}
                            />
                          </div>
                          <div className="text-ash nu-regular-12">
                            Instagram: @best_edmonton_realtor
                          </div>
                        </div>
                        <div className="text-ash nu-regular-14">
                          Your dream home is closer than you think! 🏡 Explore
                          our exclusive listings and book a virtual tour today.
                          DM us for more info!
                        </div>
                      </div>
                      <Image
                        className="w-[70px] h-[70px] rounded-[5px] border border-white"
                        src={socmedPostImage}
                        alt="post-image"
                        quality={75}
                      />
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="justify-center items-center flex">
                        <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                          <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                            <Image alt="info" src={infoImage} quality={75} />
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
                              quality={75}
                            />
                          </div>
                          <div className="text-ash nu-regular-12">
                            Jan 04, 2024
                          </div>
                        </div>
                        <div className="justify-start items-center gap-1 flex">
                          <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                            <Image alt="clock" src={clockImage} quality={75} />
                          </div>
                          <div className="text-ash nu-regular-12">10:00AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* TikTok */}
                <div className="transition-all duration-500 pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 flex group-hover:-translate-y-[325%] group-hover:scale-[90%] w-full">
                  <div className="w-1 h-full bg-goldenbrown rounded-2xl" />
                  <div className="flex-col justify-start items-start gap-2 flex size-full">
                    <div className="justify-between items-start gap-[0.625rem] flex w-full">
                      <div className="flex-col justify-start items-start gap-[0.625rem] flex w-full">
                        <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                          <div className="w-4 h-4 justify-center items-center flex">
                            <Image
                              alt="tiktok"
                              src={tiktokImage}
                              quality={75}
                            />
                          </div>
                          <div className="text-ash nu-regular-12">
                            Instagram: @best_edmonton_realtor
                          </div>
                        </div>
                        <div className="text-ash nu-regular-14">
                          Your dream home is closer than you think! 🏡 Explore
                          our exclusive listings and book a virtual tour today.
                          DM us for more info!
                        </div>
                      </div>
                      <Image
                        className="w-[70px] h-[70px] rounded-[5px] border border-white"
                        src={socmedPostImage}
                        alt="post-image"
                        quality={75}
                      />
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="justify-center items-center flex">
                        <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                          <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                            <Image alt="info" src={infoImage} quality={75} />
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
                              quality={75}
                            />
                          </div>
                          <div className="text-ash nu-regular-12">
                            Jan 04, 2024
                          </div>
                        </div>
                        <div className="justify-start items-center gap-1 flex">
                          <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                            <Image alt="clock" src={clockImage} quality={75} />
                          </div>
                          <div className="text-ash nu-regular-12">10:00AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* LinkedIn */}
                <div className="transition-all duration-500 pb-3 border-b border-[#e5e6ea] justify-start items-start gap-3 flex group-hover:-translate-y-[325%] w-full">
                  <div className="w-1 h-full bg-goldenbrown rounded-2xl" />
                  <div className="flex-col justify-start items-start gap-2 flex size-full">
                    <div className="justify-between items-start gap-[0.625rem] flex w-full">
                      <div className="flex-col justify-start items-start gap-[0.625rem] flex w-full">
                        <div className="justify-start items-center gap-2 flex h-[1.125rem]">
                          <div className="w-4 h-4 justify-center items-center flex">
                            <Image
                              alt="linkedin"
                              src={linkedinImage}
                              quality={75}
                            />
                          </div>
                          <div className="text-ash nu-regular-12">
                            LinkedIn: Best Realtor
                          </div>
                        </div>
                        <div className="text-ash nu-regular-14">
                          Your dream home is closer than you think! 🏡 Explore
                          our exclusive listings and book a virtual tour today.
                          DM us for more info!
                        </div>
                      </div>
                      <Image
                        className="w-[70px] h-[70px] rounded-[5px] border border-white"
                        src={socmedPostImage}
                        alt="post-image"
                        quality={75}
                      />
                    </div>
                    <div className="w-full justify-between items-center flex">
                      <div className="justify-center items-center flex">
                        <div className="px-1 py-0.5 bg-goldenbrown-10/10 rounded justify-center items-center gap-1 flex">
                          <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                            <Image alt="info" src={infoImage} quality={75} />
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
                              quality={75}
                            />
                          </div>
                          <div className="text-ash nu-regular-12">
                            Jan 04, 2024
                          </div>
                        </div>
                        <div className="justify-start items-center gap-1 flex">
                          <div className="w-4 h-4 p-[1.33px] justify-center items-center flex">
                            <Image alt="clock" src={clockImage} quality={75} />
                          </div>
                          <div className="text-ash nu-regular-12">10:00AM</div>
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
    </ScaleInVisible>
  );
};

export default ContentCreationBento;
