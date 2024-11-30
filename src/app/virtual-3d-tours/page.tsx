/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
// import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
// import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";
import SectionHeader from "@/components/ui/sectionHeader";
import { motion } from "framer-motion";
import { ServiceIcons } from "@/data/serviceIcons";
import Image from "next/image";
import heroImage2 from "@/../../public/images/614d398d1a34a3bb1ceff8b1_Second-floor-Masterbedroom-cam-1-1-1.png";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Link from "next/link";
import arrowRedirect from "@/../../public/svgs/arrow-redirect-cta.svg";
import { useEffect } from "react";

const WhatIsItSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <div className="relative group flex size-full lg:h-[40rem] max-w-[--section-width] flex-col sm:flex-row items-end justify-end gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash pointer-events-none">
        <div data-speed={0.95} data-media-wrapper className="size-full">
          <Image
            src={heroImage2}
            alt="hero-image"
            width={1200}
            height={600}
            className="w-full h-[125%] scale-125 -translate-y-[10%] group-hover:scale-110 opacity-100 group-hover:opacity-50 transition-all duration-500 object-cover"
            quality={80}
          />
        </div>
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
          <SectionHeader
            heading="GROW WITH TECHNOLOGY"
            subheading="What is a Virtual 3D Tour?"
            className="text-black"
          />
          <p
            className={`pn-regular-16
              max-w-[43.75rem]`}
          >
            Step into a new era of real estate marketing with our 360° virtual
            tours! These immersive experiences bring listings to life,
            transforming how properties are showcased.
          </p>
          <p
            className={`pn-regular-16
              max-w-[43.75rem]`}
          >
            With Virtual 3D Tours, real estate agents can save time and money,
            move properties faster, impress prospective buyers, and win more
            listings. They help buyers build an immediate and lasting emotional
            connection to properties by offering an immersive, simulated
            experience.
          </p>
          <p
            className={`pn-regular-16
              max-w-[43.75rem]`}
          >
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

const BenefitsSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
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
          <motion.div
            key={index + 2}
            className="flex flex-col items-center justify-center gap-[0.625rem] mb-[0.625rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true, // Only animate once
              amount: 0.3, // Trigger when 30% of element is in view
              margin: "50px", // Start animation 50px before element enters viewport
            }}
            transition={{
              delay: (index + 2) * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
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
                <h1 className="text-goldenbrown pn-semibold-24">
                  {item.heading}
                </h1>
                <p className="pn-regular-16">{item.body}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* CTA */}
      <div className="flex justify-center w-full h-[3.313rem]">
        <div className="flex flex-col sm:flex-row gap-[1rem]">
          <motion.div
            className={`button group !p-0 h-full cursor-select-hover !bg-transparent shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-110 w-full`}
            style={{
              background: "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
              backgroundSize: "300% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <HoverWrapper className="flex size-full items-center px-[1.5rem] py-[0.5rem]">
              <Link
                href="https://listings.virtualxposure.com/order"
                className="flex size-full items-center gap-[1rem]"
                passHref
              >
                <FlipLink className={`flex items-center w-full`}>
                  Place An Order
                </FlipLink>

                <Image
                  alt="arrow"
                  src={arrowRedirect}
                  className="text-ash group-hover:rotate-45 transition-all duration-300"
                  quality={10}
                />
              </Link>
            </HoverWrapper>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

const AdvantageSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      center
      heading="Advantage"
      subheading="The 3D Advantage"
      className="text-black"
    />
    <div className="relative group flex size-full lg:h-[40rem] max-w-[--section-width] flex-col sm:flex-row items-end justify-start gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash pointer-events-none">
        <video
          src="/videos/virtual-3d-tours.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full opacity-100 group-hover:opacity-80 transition-opacity duration-500 object-cover"
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

const page = () => {
  // GSAP Animations
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Parallax effect
      const effectElements = gsap.utils.toArray("[data-speed]");
      (effectElements as HTMLElement[]).forEach((el: HTMLElement) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "0");
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onRefresh: (self) => {
                const start = Math.max(0, self.start); // ensure no negative values
                const distance = self.end - start;
                const end = start + distance / speed;
                (self as any).setPositions(start, end);
                if (self.animation) {
                  // Check if self.animation is defined
                  (self as any).animation.vars.y = (end - start) * (1 - speed);
                  self.animation
                    .invalidate()
                    .progress(1)
                    .progress(self.progress);
                }
              },
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    loadGSAP();
  }, []);

  return (
    <Page>
      <Body
        title="Virtual 3D Tours"
        copy="Showcase your property like never before with a Virtual 3D Tour! Highlight every aspect of the space, offering your audience an accurate and immersive experience that reveals the property's true character."
        detailList={[
          {
            icon: ServiceIcons.transaction,
            text: "Quick & Easy, No Additional Time Committment Required",
          },
          {
            icon: ServiceIcons.share,
            text: "Easily Share Over Social Media",
          },
          { icon: ServiceIcons.infinity, text: "Unlimited Revisions" },
          { icon: ServiceIcons.guarantee, text: "2X Money Back Guarantee" },
        ]}
        cta={{
          label: "Book Now",
          href: "https://listings.virtualxposure.com/order",
        }}
        src="/videos/virtual-3d-tours.mp4"
        whatisitSection={<WhatIsItSection />}
        benefitsSection={<BenefitsSection />}
        advantageSection={<AdvantageSection />}
        whyusSection
      />
    </Page>
  );
};

export default page;
