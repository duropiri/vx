"use client";
import Image from "next/image";
import React from "react";

interface SectionProps {
  className?: string;
}

function RoadmapSection({ className }: SectionProps) {
  return (
    <div className={`section-container !flex-row ${className}`}>
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[3.75rem]">
        <div
          className={`flex flex-col items-center justify-center w-full gap-y-[0.75rem]`}
        >
          <span className="inline-block pn-semibold-16 uppercase bg-goldenbrown/25 text-ash px-[0.625rem] py-[0.5rem] rounded-[0.75rem]">
            Roadmap
          </span>
          <h2 className="pn-semibold-48 capitalize text-ash leading-snug">
            Your <span className="text-goldenbrown">90-Day Growth Plan</span>
          </h2>
          <p className="pn-regular-16 max-w-[43.75rem] text-center">
            At Virtual Xposure, we specialize in building your brand&apos;s
            digital presence, empowering realtors to thrive in today&apos;s
            competitive online marketplace. Our services cover everything from
            content creation to full-scale social media management, all backed
            by data-driven strategies to ensure results that matter.
          </p>
        </div>

        <div className="relative flex flex-col size-full items-center justify-center min-h-[73.563rem]">
          <div className="pointer-events-none absolute z-10 top-0 w-full h-[7.5rem] bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute z-10 bottom-0 w-full h-[7.5rem] bg-gradient-to-t from-white to-transparent" />
          <svg
            width="1410"
            height="1165"
            viewBox="0 0 1410 1165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute -top-[1.75rem] left-0 text-goldenbrown w-full h-full"
          >
            <path
              d="M705 0V168C705 190.091 722.909 208 745 208H1365C1387.09 208 1405 225.909 1405 248V367C1405 389.091 1387.09 407 1365 407H45C22.9086 407 5 424.909 5 447V567.5C5 589.591 23.0206 607.5 45.112 607.5C553.807 607.5 856.193 607.5 1364.89 607.5C1386.98 607.5 1405 625.409 1405 647.5V767.5C1405 789.591 1387.09 807.5 1365 807.5H45C22.9086 807.5 5 825.409 5 847.5V970C5 992.091 22.9086 1010 45 1010H665C687.091 1010 705 1027.89 705 1049.98C705 1074.91 705 1112.32 705 1164.5"
              stroke="currentColor"
              stroke-width="10"
            />
          </svg>


          <div className="flex flex-col size-full items-start justify-start py-[9.375rem]">
            <div className="flex flex-col size-full items-start justify-start py-[4.688rem] gap-[0.6rem]">
              {/* Step 1 */}
              <div className="flex flex-row size-full items-center justify-between pl-[2.5rem] gap-[6.25rem]">
                <div className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]">
                  <h1 className="text-ash pn-regular-16 uppercase leading-normal">
                    Step 1
                  </h1>
                  <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                    <h2 className="text-ash pn-bold-28">The Instant Launch</h2>
                    <div className="flex p-[0.625rem] justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.5812 0H1.26717V3.60553H16.5168L0.53125 19.8303L3.04317 22.3798L19.0289 6.15482V21.6331H22.5812V0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-ash pn-regular-16">
                    We kick things off immediately. Your invoice is sent, and
                    you&apos;ll get a streamlined welcome email laying out your
                    next moves, so you can hit the ground running with a clear
                    plan in place.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden bg-ash rounded-r-[2.5rem]">
                  <Image
                    src=""
                    alt=""
                    className="pointer-events-none size-full object-cover"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-row-reverse size-full items-center justify-between pr-[2.5rem] gap-[6.25rem]">
                <div className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]">
                  <h1 className="text-ash pn-regular-16 uppercase leading-normal">
                    Step 1
                  </h1>
                  <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                    <h2 className="text-ash pn-bold-28">The Instant Launch</h2>
                    <div className="flex p-[0.625rem] justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.5812 0H1.26717V3.60553H16.5168L0.53125 19.8303L3.04317 22.3798L19.0289 6.15482V21.6331H22.5812V0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-ash pn-regular-16">
                    We kick things off immediately. Your invoice is sent, and
                    you&apos;ll get a streamlined welcome email laying out your
                    next moves, so you can hit the ground running with a clear
                    plan in place.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden bg-ash rounded-l-[2.5rem]">
                  <Image
                    src=""
                    alt=""
                    className="pointer-events-none size-full object-cover"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-row size-full items-center justify-between pl-[2.5rem] gap-[6.25rem]">
                <div className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]">
                  <h1 className="text-ash pn-regular-16 uppercase leading-normal">
                    Step 1
                  </h1>
                  <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                    <h2 className="text-ash pn-bold-28">The Instant Launch</h2>
                    <div className="flex p-[0.625rem] justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.5812 0H1.26717V3.60553H16.5168L0.53125 19.8303L3.04317 22.3798L19.0289 6.15482V21.6331H22.5812V0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-ash pn-regular-16">
                    We kick things off immediately. Your invoice is sent, and
                    you&apos;ll get a streamlined welcome email laying out your
                    next moves, so you can hit the ground running with a clear
                    plan in place.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden bg-ash rounded-r-[2.5rem]">
                  <Image
                    src=""
                    alt=""
                    className="pointer-events-none size-full object-cover"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-row-reverse size-full items-center justify-between pr-[2.5rem] gap-[6.25rem]">
                <div className="flex flex-col justify-start items-start gap-[0.438rem] max-w-[48ch]">
                  <h1 className="text-ash pn-regular-16 uppercase leading-normal">
                    Step 1
                  </h1>
                  <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                    <h2 className="text-ash pn-bold-28">The Instant Launch</h2>
                    <div className="flex p-[0.625rem] justify-start items-center">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.5812 0H1.26717V3.60553H16.5168L0.53125 19.8303L3.04317 22.3798L19.0289 6.15482V21.6331H22.5812V0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-ash pn-regular-16">
                    We kick things off immediately. Your invoice is sent, and
                    you&apos;ll get a streamlined welcome email laying out your
                    next moves, so you can hit the ground running with a clear
                    plan in place.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-[31.25rem] h-[11.875rem] overflow-hidden bg-ash rounded-l-[2.5rem]">
                  <Image
                    src=""
                    alt=""
                    className="pointer-events-none size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapSection;
