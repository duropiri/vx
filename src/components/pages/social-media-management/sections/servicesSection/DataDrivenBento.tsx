
import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";

import instagramImage from "@/../../public/assets/svgs/instagram.svg";
import facebookImage from "@/../../public/assets/svgs/facebook.svg";
import tiktokImage from "@/../../public/assets/svgs/tiktok.svg";
import linkedinImage from "@/../../public/assets/svgs/linkedin.svg";

import arrowURBlackImage from "@/../../public/assets/svgs/arrow-up-right-black.svg";
import ScaleInVisible from "@/components/animations/ScaleInVisible";

const DataDrivenBento = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScaleInVisible className="group relative flex flex-col w-full xl:w-auto h-full max-h-[31.25rem]">
      <div
        className="px-[1.5rem] py-[2rem] bg-white rounded-[1rem] shadow-customShadow justify-start items-center size-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Content */}
        <div className="flex flex-col size-full justify-start items-center lg:items-start gap-[2rem]">
          {/* Header */}
          <div className="flex flex-col justify-center items-center gap-[0.625rem] size-full">
            <div className="text-center text-ash pn-bold-20">
              Data-Driven Social Media Strategy
            </div>
            <p className="text-center text-ash pn-regular-16">
              <span className="text-ash pn-semibold-16 italic">
                Make decisions backed by insights.
              </span>
              <br />
              We optimize your social media with actionable analytics to target
              your audience effectively.
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
                      quality={75}
                      className="group-hover:animate-bounce"
                    />
                  </div>
                  <div className="text-ash nu-semibold-12">Instagram</div>
                </div>
                <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                  <div className="text-ash nu-bold-24 transition-all duration-500 group-hover:scale-125 group-hover:text-goldenbrown">
                    {isHovered ? (
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
                          quality={75}
                        />
                      </div>
                      <div className="text-goldenbrown nu-semibold-12">
                        {isHovered ? (
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
                    quality={75}
                    className="group-hover:animate-bounce"
                  />
                  <div className="text-ash nu-semibold-12">Facebook</div>
                </div>
                <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                  <div className="text-ash nu-bold-24 transition-all duration-500 group-hover:scale-125 group-hover:text-goldenbrown">
                    {isHovered ? (
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
                          quality={75}
                        />
                      </div>
                      <div className="text-goldenbrown nu-semibold-12">
                        {isHovered ? (
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
                        quality={75}
                        className="group-hover:animate-bounce"
                      />
                    </div>
                  </div>
                  <div className="text-ash nu-semibold-12">Tiktok</div>
                </div>
                <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                  <div className="text-ash nu-bold-24 transition-all duration-500 group-hover:scale-125 group-hover:text-goldenbrown">
                    {isHovered ? (
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
                          quality={75}
                        />
                      </div>
                      <div className="text-goldenbrown nu-semibold-12">
                        {isHovered ? (
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
                      quality={75}
                      className="group-hover:animate-bounce"
                    />
                  </div>
                  <div className="text-ash nu-semibold-12">LinkedIn</div>
                </div>
                <div className="h-[52px] flex-col justify-start items-start gap-1 flex">
                  <div className="text-ash nu-bold-24 transition-all duration-500 group-hover:scale-125 group-hover:text-goldenbrown">
                    {isHovered ? (
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
                          quality={75}
                        />
                      </div>
                      <div className="text-goldenbrown nu-semibold-12">
                        {isHovered ? (
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
    </ScaleInVisible>
  );
};

export default DataDrivenBento;
