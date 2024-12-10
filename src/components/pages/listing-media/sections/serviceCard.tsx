import Image from "next/image";

import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import arrowRedirectWhite from "@/../../public/assets/svgs/arrow-redirect-cta-white.svg";

import { ParallaxSection } from "@/components/animations/SmoothScrolling";
import { TransitionLink } from "@/components/TransitionLink";
import SectionHeader from "@/components/ui/sectionHeader";

const ServiceCard = ({
  title,
  description,
  image,
  href,
  darkTheme,
  isRight,
}) => {
  const themeClasses = darkTheme
    ? {
        bg: "bg-ash/50 group-hover:bg-ash",
        text: "text-white",
        button: "!border-white",
        arrow: arrowRedirectWhite,
        shadow: "shadow-white/5",
      }
    : {
        bg: "bg-white group-hover:bg-white",
        text: "text-black",
        button: "",
        arrow: arrowRedirect,
        shadow: "shadow-ash/5",
      };

  return (
    <div
      className={`relative group flex size-full xl:h-[40rem] max-w-[--section-width] flex-col xl:flex-row ${
        isRight ? "justify-start" : "justify-end"
      } items-end gap-[3rem] xl:gap-0`}
    >
      {/* Background Image */}
      <div className="relative aspect-video xl:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash">
        <ParallaxSection
          speed={1 - 0.95}
          data-media-wrapper
          className="size-full pointer-events-none"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
            loading={false ? "eager" : "lazy"}
            className="w-full h-[125%] scale-125 -translate-y-[10%] sm:group-hover:scale-110 opacity-100 sm:group-hover:opacity-50 transition-all duration-500 object-cover"
            quality={75}
          />
        </ParallaxSection>
      </div>
      {/* Inverted Border Radius: Outside */}
      {!isRight && (
        <div className="relative hidden xl:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div
            className={`absolute top-0 left-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4`}
          />
        </div>
      )}

      {/* Body */}
      <div
        className={`relative flex flex-col items-${
          isRight ? "start" : "end"
        } size-auto justify-end max-h-full xl:max-h-[80%] xl:max-w-[90%] xl:max-w-auto`}
      >
        {/* Inverted Border Radius: Inside Left */}
        {isRight ? (
          <div className="relative hidden xl:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
            <div
              className={`absolute top-0 right-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-r-4`}
            />
          </div>
        ) : (
          <div className="relative hidden xl:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
            <div
              className={`absolute top-0 left-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4`}
            />
          </div>
        )}

        {/* Copy */}
        <div
          className={`${
            themeClasses.text
          } relative flex size-full flex-col items-start justify-start gap-[1.5rem] p-0 xl:p-[2rem] ${
            themeClasses.bg
          } backdrop-blur-sm transition-all duration-500 rounded-t${
            isRight ? "r" : "l"
          }-[1rem]`}
        >
          {/* Header */}
          <SectionHeader subheading={title} className={themeClasses.text} />
          {/* Body */}
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
          <p className="pn-regular-16 max-w-[43.75rem]">{description}</p>
          {/* </LetterRevealOnScroll> */}
          {/* CTA */}
          {darkTheme ? (
            <div className="flex justify-center xl:justify-start w-full">
              <HoverWrapper className={``}>
                <TransitionLink
                  href={href}
                  className="button pn-regular-16 group/cta cursor-select-hover !bg-transparent ${themeClasses.button} w-full xl:w-auto shadow-none ${themeClasses.shadow} hover:shadow-goldenrod/5"
                  passHref
                >
                  <FlipLink className="font-semibold">Learn More</FlipLink>
                  <Image
                    alt="arrow"
                    src={themeClasses.arrow}
                    className={`${themeClasses.text} group-hover/cta:rotate-45 transition-all duration-300`}
                    quality={75}
                  />
                </TransitionLink>
              </HoverWrapper>
            </div>
          ) : (
            <div className="flex justify-center xl:justify-start w-full">
              <div className="flex flex-col xl:flex-row gap-[1rem]">
                <HoverWrapper className="">
                  <TransitionLink
                    href={href}
                    className="button pn-regular-16 group/cta h-full cursor-select-hover !bg-transparent shadow-none shadow-ash/5 hover:shadow-goldenrod/5 w-full"
                    passHref
                  >
                    <FlipLink className={`flex items-center w-fit`}>
                      Learn More
                    </FlipLink>

                    <Image
                      alt="arrow"
                      src={themeClasses.arrow}
                      className={`${themeClasses.text} group-hover/cta:rotate-45 transition-all duration-300`}
                      quality={75}
                    />
                  </TransitionLink>
                </HoverWrapper>
              </div>
            </div>
          )}
        </div>
      </div>
      {isRight && (
        <div className="relative hidden xl:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div
            className={`absolute top-0 right-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-r-4`}
          />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;