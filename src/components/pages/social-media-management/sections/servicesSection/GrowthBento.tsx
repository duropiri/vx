import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";

import instagramImage from "@/../../public/assets/svgs/instagram.svg";

import arrowURImage from "@/../../public/assets/svgs/arrow-up-right.svg";
import arrowURBlackImage from "@/../../public/assets/svgs/arrow-up-right-black.svg";
import chevdownImage from "@/../../public/assets/svgs/chevron-down.svg";

import growthImage from "@/../../public/assets/svgs/growth.svg";
import followersImage from "@/../../public/assets/svgs/followers.svg";
import unfollowImage from "@/../../public/assets/svgs/unfollow.svg";
import ScaleInVisible from "@/components/animations/ScaleInVisible";

const GrowthBento = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScaleInVisible className="group flex relative size-full max-h-[31.25rem]">
      <div
        className="flex flex-col px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow justify-start items-center overflow-hidden size-full max-h-[31.25rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Content */}
        <div className="flex-col justify-start items-start lg:items-center gap-2 flex size-full">
          {/* Header */}
          <div className="flex-col w-full justify-start items-center lg:items-start gap-[0.625rem] flex text-center">
            <div className="text-ash pn-bold-24 w-full">
              Real Growth & Engagement
            </div>
            <p className="text-ash pn-regular-16 w-full">
              <span className="pn-semibold-20 italic">
                See results within 90 days.
              </span>
              <br />
              We increase your social media engagement and organic traffic with
              data-backed strategies.
            </p>
          </div>
          {/* Graphic */}
          <div className="select-none pointer-events-none transition-all duration-500 bg-white group-hover:scale-105 w-full group-hover:shadow-customShadow group-hover:-translate-y-[1rem] mt-[2rem] p-6 rounded-xl border border-ash/10 flex-col justify-start items-start gap-5 flex">
            <div className="w-full justify-between items-center flex">
              <div className="text-ash nu-bold-20">Followers</div>
              <div className="flex-col justify-start items-start flex">
                <div className="w-full h-10 flex-col justify-start items-start gap-0.5 flex">
                  <div className="size-full px-3 py-2 bg-white rounded-lg border border-ash/10 justify-start items-center gap-2 flex">
                    <div className="w-6 h-6 justify-center items-center flex">
                      <Image
                        alt="instagram"
                        src={instagramImage}
                        quality={75}
                      />
                    </div>
                    <div className="flex-col justify-start items-start flex">
                      <div className="text-ash nu-regular-14">Instagram</div>
                    </div>
                    <div className="w-[22px] h-[22px] px-[5.50px] py-[7.60px] justify-center items-center flex">
                      <Image alt="chevron" src={chevdownImage} quality={75} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full justify-start items-start gap-4">
              <div className="flex flex-col w-[10ch] lg:w-full justify-start items-start gap-px">
                <div className="text-ash nu-semibold-16">Net Growth</div>
                <div className="text-charcoal nu-regular-12">
                  Jun 2025 - Dec 2025
                </div>
              </div>
              <div className="flex size-full justify-center items-start gap-2 lg:gap-4">
                <div className="p-3 bg-ash rounded-lg justify-start items-start gap-2 flex min-w-[30%]">
                  <div className="flex-col justify-center items-start gap-1 flex">
                    <div className="transition-all duration-500 group-hover:scale-125 w-6 h-6 relative">
                      <Image alt="growth" src={growthImage} quality={75} />
                    </div>
                    <div className="text-white nu-semibold-12">Growth</div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="text-goldenbrown nu-bold-12 transition-all duration-500 group-hover:scale-125">
                      {isHovered ? (
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
                          <Image alt="arrow" src={arrowURImage} quality={75} />
                        </div>
                        <div className="text-goldenbrown nu-semibold-12">
                          {isHovered ? (
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
                          quality={75}
                        />
                      </div>
                    </div>
                    <div className="text-ash nu-semibold-12">Follow</div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="text-ash nu-bold-12 transition-all duration-500 group-hover:scale-125">
                      {isHovered ? (
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
                            quality={75}
                          />
                        </div>
                        <div className="text-goldenbrown nu-semibold-12">
                          {isHovered ? (
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
                          quality={75}
                        />
                      </div>
                    </div>
                    <div className="text-ash nu-semibold-12">Unfollow</div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="text-ash nu-bold-12 transition-all duration-500 group-hover:scale-125">
                      {isHovered ? (
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
                            quality={75}
                          />
                        </div>
                        <div className="text-goldenbrown nu-semibold-12">
                          {isHovered ? (
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
        <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85% pointer-events-none rounded-b-[1.875rem]" />
      </div>
    </ScaleInVisible>
  );
};

export default GrowthBento;
