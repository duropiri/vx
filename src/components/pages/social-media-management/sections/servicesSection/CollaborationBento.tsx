
import Image from "next/image";
import React from "react";

import person1Image from "@/../../public/assets/images/team.webp";
import person2Image from "@/../../public/assets/images/team_1.webp";
import person3Image from "@/../../public/assets/images/team_2.webp";
import person4Image from "@/../../public/assets/images/team_3.webp";
import person5Image from "@/../../public/assets/images/team_4.webp";

import ScaleInVisible from "@/components/animations/ScaleInVisible";

const CollaborationBento = () => {
  return (
    <ScaleInVisible className="group flex relative flex-col w-full xl:w-auto h-full justify-center lg:justify-start items-center lg:max-w-[21.875rem]">
      <div className="px-[1.5rem] py-[2rem] bg-white rounded-[1rem] shadow-customShadow overflow-hidden size-full">
        <div className="flex-col size-full justify-center items-center lg:items-start gap-[2rem] flex">
          {/* Header */}
          <div className="h-full flex-col justify-center items-center gap-[0.625rem] flex">
            <div className="text-center text-ash pn-bold-20">
              Seamless Collaboration
            </div>
            <p className="text-center text-ash pn-regular-16">
              <span className="text-ash pn-semibold-16 italic">
                Stay connected with daily updates.
              </span>
              <br />
              Our team integrates with yours to provide constant communication
              and easy access to progress reports.
            </p>
          </div>

          {/* Graphic */}
          <div className="select-none pointer-events-none flex flex-col size-full max-h-[50%] items-center justify-center relative">
            <div className="h-full aspect-square left-[1.125rem] bg-ash/5 rounded-full justify-center items-center flex">
              <div className="flex flex-col items-center justify-center h-full aspect-square rounded-full border border-ash/10">
                <div className="size-[10rem] bg-goldenrod/25 rounded-full justify-center items-center flex">
                  <span className="group-hover:animate-ping absolute flex aspect-square rounded-full h-full group-hover:bg-indigo-300/25 bg-transparent" />
                  <div className="relative flex flex-col items-center justify-center size-[10rem] rounded-full border border-ash/10">
                    <div className="justify-center items-center flex flex-row space-x-[-1.5rem]">
                      <Image
                        className="transition-all duration-500 w-12 h-12 relative rounded-full group-hover:translate-x-[-50%] group-hover:-rotate-45"
                        src={person1Image}
                        alt="team-image"
                        placeholder="blur"
                        quality={75}
                      />
                      <Image
                        className="transition-all duration-500 w-12 h-12 relative rounded-full group-hover:translate-x-[-25%] group-hover:-rotate-12 group-hover:translate-y-[-25%]"
                        src={person2Image}
                        alt="team-image"
                        placeholder="blur"
                        quality={75}
                      />
                      <Image
                        className="transition-all duration-500 w-12 h-12 relative rounded-full group-hover:translate-y-[-35%]"
                        src={person3Image}
                        alt="team-image"
                        placeholder="blur"
                        quality={75}
                      />
                      <Image
                        className="transition-all duration-500 w-12 h-12 relative rounded-full group-hover:translate-x-[25%] group-hover:rotate-12 group-hover:translate-y-[-25%]"
                        src={person4Image}
                        alt="team-image"
                        placeholder="blur"
                        quality={75}
                      />
                      <Image
                        className="transition-all duration-500 w-12 h-12 relative rounded-full group-hover:translate-x-[50%] group-hover:rotate-45"
                        src={person5Image}
                        alt="team-image"
                        placeholder="blur"
                        quality={75}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScaleInVisible>
  );
};

export default CollaborationBento;
