import SectionHeader from "@/components/ui/sectionHeader";
import { ServiceIcons } from "@/data/serviceIcons";
import Image from "next/image";
import whatisitImage from "@/../../public/assets/portfolio/images/interior/Virtual_Xposure_-_Interior_Image_-_(5).webp";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import FadeInUp from "@/components/animations/FadeInUp";
import { ParallaxSection } from "@/components/animations/SmoothScrolling";
import { TransitionLink } from "@/components/TransitionLink";

export const WhatIsItSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <div className="relative group flex size-full sm:pt-[5rem] max-w-[--section-width] flex-col-reverse sm:flex-row items-end justify-end gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash">
        <ParallaxSection
          speed={1 - 0.95}
          data-media-wrapper
          className="size-full min-h-[30vh] pointer-events-none"
        >
          <Image
            src={whatisitImage}
            alt="what-is-it-image"
            fill
            sizes="(max-width: 640px) 100vw, 1200px"
            priority={false}
            loading={false ? "eager" : "lazy"}
            className="w-full h-[125%] scale-125 -translate-y-[10%] sm:group-hover:scale-110 opacity-100 sm:group-hover:opacity-50 transition-all duration-500 object-cover"
            quality={75}
          />
        </ParallaxSection>
      </div>
      {/* Inverted Border Radius */}
      <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 flex flex-col bg-white backdrop-blur-lg transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4 " />
      </div>
      <div className="relative flex flex-col items-end h-full justify-end max-h-full sm:max-h-[80%] sm:max-w-[40%]">
        {/* Inverted Border Radius */}
        <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 flex flex-col bg-white backdrop-blur-lg transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4 " />
        </div>
        <div className="relative flex size-full flex-col items-start justify-start gap-[1.5rem] p-0 sm:p-[2rem] bg-white backdrop-blur-lg transition-all duration-500 rounded-tl-[1rem]">
          <SectionHeader noAnimation
            heading="GROW WITH TECHNOLOGY"
            subheading="What is a Virtual 3D Tour?"
            className="text-black"
          />
          <p className={`pn-regular-16 max-w-[43.75rem]`}>
            Step into a new era of real estate marketing with our 360° virtual
            tours! These immersive experiences bring listings to life,
            transforming how properties are showcased.
          </p>

          <p className={`pn-regular-16 max-w-[43.75rem]`}>
            With Virtual 3D Tours, real estate agents can save time and money,
            move properties faster, impress prospective buyers, and win more
            listings. They help buyers build an immediate and lasting emotional
            connection to properties by offering an immersive, simulated
            experience.
          </p>

          <p className={`pn-regular-16 max-w-[43.75rem]`}>
            Plus, with faster internet speeds and higher-resolution displays,
            virtual tours are now more convenient and accessible than ever
            before. Whether you have a smartphone or a tablet, you can explore
            properties from anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const BenefitsSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader noAnimation
      center
      heading="Why's & What's"
      subheading="What are the Benefits?"
      className="text-black"
    />
    <div className="relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-[3rem] sm:gap-[3.75rem]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-[2.5rem] sm:mt-[5rem]">
        {[
          {
            icon: ServiceIcons.rocket,
            heading: "Generate faster and more sales",
            body: "When your listing features a Virtual 3D Tour, it offers a unique perspective that helps customers quickly grasp key property details. This not only boosts their trust but also encourages faster purchase decisions, as they gain a clear and precise image of what they're buying.",
          },
          {
            icon: ServiceIcons.eye,
            heading: "Easier to grab attention",
            body: "A Virtual 3D Tour allows the potential buyers to have an immersive experience of how the property looks. This helps your property stand out and attract more leads as the buyers naturally tend to feel more affinity with what they can see and imagine.",
          },
          {
            icon: ServiceIcons.satisfiedcustomer,
            heading: "Provide a realistic experience",
            body: "With Virtual 3D Tours, it's always open house! Potential clients can explore your property anytime, anywhere—whether they're at the office, at home, or on the go. This technology creates an instant sense of ownership, helping buyers envision themselves living in the space.",
          },
          {
            icon: ServiceIcons.share,
            heading: "Share the virtual tour with anyone, anywhere",
            body: "There's no limit to where you can share your virtual tour! Our Virtual 3D Tours can be easily shared on Facebook, Instagram, Twitter, Google, or sent via email, WhatsApp, and any other messaging app.",
          },
          {
            icon: ServiceIcons.clock,
            heading: "Minimizes the bounce rate",
            body: "The presence of Virtual 3D Tours on your website encourage visitors to spend more time exploring properties independently, boosting user engagement. This results in a lower bounce rate, increased traffic, and improved search engine rankings.",
          },
          {
            icon: ServiceIcons.moneybag,
            heading: "Saves money and time",
            body: "Virtual 3D Tours provide viewers with an instant preview of the property, helping them narrow down their favorites for in-person viewings. This saves time and money for both agents and clients.",
          },
        ].map((item, index) => (
          <FadeInUp
            key={index + 2}
            className="flex flex-col items-center justify-center gap-[0.625rem] mb-[0.625rem]"
          >
            <div className="cursor-select-hover group flex flex-grow flex-col items-center p-4 hover:-translate-y-1 transition-all duration-200 w-full self-stretch">
              <div
                className={`flex flex-col ${
                  index % 2
                    ? "items-end text-end sm:text-start sm:items-start"
                    : "items-start"
                } justify-start gap-[2rem]`}
              >
                <div className="flex flex-col p-[1rem] w-[5rem] h-[5rem] items-center justify-center rounded-full bg-white text-goldenbrown shadow-ash/5 shadow-customShadow">
                  {item.icon}
                </div>
                <h1 className="text-goldenbrown pn-semibold-32">
                  {item.heading}
                </h1>
                <p className="pn-regular-16">{item.body}</p>
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
      {/* CTA */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col sm:flex-row gap-[1rem]">
          <HoverWrapper className="group/cta cursor-select-hover">
            <TransitionLink
              href="https://listings.virtualxposure.com/order"
              className="button gold pn-regular-16 h-full !bg-transparent shadow-customShadow shadow-ash/5 group-hover/cta:shadow-goldenrod/5 w-full"
              passHref
            >
              <FlipLink className={`flex items-center w-fit`}>
                Place An Order
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

export const AdvantageSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader noAnimation
      center
      heading="Advantage"
      subheading="The 3D Advantage"
      className="text-black"
    />
    <div className="relative group flex size-full xl:h-[40rem] max-w-[--section-width] flex-col sm:flex-row items-end justify-start gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash">
        <video
          src="/assets/videos/virtual-3d-tours.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full opacity-100 group-hover:opacity-80 transition-opacity duration-500 object-cover pointer-events-none"
        />
      </div>

      <div className="relative flex flex-col items-start h-full justify-end max-h-full sm:max-h-[80%] sm:max-w-[40%]">
        {/* Inverted Border Radius */}
        <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 flex flex-col bg-white backdrop-blur-lg transition-all duration-500 size-[5rem] inv-rad inv-rad-t-r-4 " />
        </div>
        <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem] p-0 sm:p-[2rem] bg-white backdrop-blur-lg transition-all duration-500 rounded-tr-[1rem]">
          {[
            {
              text: "Real estate listings with a virtual home tour get 87% more views",
            },
            {
              text: "Potential buyers spend 5-10 times longer on websites with a virtual tour than those without",
            },
            {
              text: "54% of buyers won’t even consider seeing a house if it doesn’t include a virtual tour",
            },
            {
              text: "Homes sold with virtual tours sold for 9% more on average than those homes without one",
            },
            {
              text: "Listings with virtual tours closed 31% quicker than those not featuring a tour",
            },
            {
              text: "90% of prospective buyers said they would more likely buy a property if the listing included a virtual tour",
            },
            {
              text: "25% of home sellers prefer to work with a real estate agent that uses virtual tours for marketing their houses",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]"
            >
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* Inverted Border Radius */}
      <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 flex flex-col bg-white backdrop-blur-lg transition-all duration-500 size-[5rem] inv-rad inv-rad-t-r-4 " />
      </div>
    </div>
  </div>
);
