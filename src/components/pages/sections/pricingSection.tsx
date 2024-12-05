import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import SectionHeader from "@/components/ui/sectionHeader";
import { Switch } from "@/components/ui/switch";
import React, { forwardRef, useRef, useState } from "react";
// import { Tilt } from "react-tilt";
import { AnimatePresence, motion, MotionValue } from "framer-motion";
// import { Reveal } from "@/components/animations/Reveal";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import {
  // EffectCards,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";
import ScaleInVisible from "@/components/animations/ScaleInVisible";

interface Feature {
  name: string;
  quantity?: string;
  value?: string;
  details?: string;
  inclusion?: boolean;
  free?: boolean;
}

interface BasePricingTier {
  name: string;
  features: Feature[];
  isPopular?: boolean;
  isPremium?: boolean;
  href?: string;
  cta?: string;
  billingCycle?: string;
}

interface SinglePriceTier extends BasePricingTier {
  price: string;
  commitment?: string;
}

interface DualPriceTier extends BasePricingTier {
  price: {
    monthly: string;
    yearly: string;
  };
  commitment: {
    monthly: string;
    yearly: string;
  };
}

type PricingTier = SinglePriceTier | DualPriceTier;

// Instead of defining each package, we use a more generic structure
interface PricingPackages {
  [key: string]: PricingTier;
}

interface SectionProps {
  className?: string;
  pricingPackages?: PricingPackages;
  noSwitch?: boolean;
  originalColor?: string;
  transitionColor?: string;
  scrollYProgress?: MotionValue<number>;
}

const PricingTier = ({ tier, isYearly, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  // const isPopular = tier.name === "Scaling Maestro";
  // const tier.isPremium = tier.name === "Absolute Domination";

  const hiddenFeatures = tier.features.slice(8);

  return (
    <motion.div
      // options={{ axis: "x", scale: 1.025, max: 8, reverse: true }}
      className={`pricing-box shadow-customShadow transition-all duration-300 hover:shadow-goldenbrown/50 hover:scale-105 hover:z-10 h-full ${
        tier.isPremium ? "bg-ash" : "bg-white"
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.05 : 1,
        zIndex: isHovered ? 10 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {tier.isPopular && (
        <div className="relative self-center lg:absolute lg:top-[1.5rem] lg:right-[1.5rem] flex px-[0.75rem] py-[0.5rem] mb-[2rem] -mt-[2rem] lg:mt-0 lg:mb-0 bg-ash rounded-b-[1rem] lg:rounded-full border border-goldenbrown justify-center items-center gap-[0.25rem]">
          <div className="flex flex-col size-[1rem] justify-center items-center text-goldenbrown">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0095 6.75457L10.1545 5.26508L8.75264 1.16914C8.6652 0.913522 8.50583 0.69269 8.29617 0.536638C8.08652 0.380585 7.83674 0.296875 7.58076 0.296875C7.32478 0.296875 7.075 0.380585 6.86535 0.536638C6.6557 0.69269 6.49633 0.913522 6.40889 1.16914L5.00701 5.26508L1.15201 6.75457C0.911428 6.84748 0.703587 7.01681 0.556714 7.23956C0.409841 7.46232 0.331055 7.72771 0.331055 7.99969C0.331055 8.27167 0.409841 8.53706 0.556714 8.75982C0.703587 8.98257 0.911428 9.1519 1.15201 9.24481L5.00701 10.7343L6.40889 14.8302C6.49633 15.0859 6.6557 15.3067 6.86535 15.4627C7.075 15.6188 7.32478 15.7025 7.58076 15.7025C7.83674 15.7025 8.08652 15.6188 8.29617 15.4627C8.50583 15.3067 8.6652 15.0859 8.75264 14.8302L10.1545 10.7343L14.0095 9.24481C14.2501 9.1519 14.4579 8.98257 14.6048 8.75982C14.7517 8.53706 14.8305 8.27167 14.8305 7.99969C14.8305 7.72771 14.7517 7.46232 14.6048 7.23956C14.4579 7.01681 14.2501 6.84748 14.0095 6.75457ZM9.53139 9.27801C9.35994 9.34404 9.20423 9.44927 9.07528 9.58629C8.94633 9.7233 8.84728 9.88873 8.78514 10.0709L7.58076 13.5904L6.37639 10.0709C6.31424 9.88873 6.2152 9.7233 6.08624 9.58629C5.95729 9.44927 5.80159 9.34404 5.63014 9.27801L2.31764 7.99969L5.63014 6.72004C5.80159 6.65401 5.95729 6.54878 6.08624 6.41176C6.2152 6.27475 6.31424 6.10932 6.37639 5.92715L7.58076 2.40762L8.78514 5.92715C8.84728 6.10932 8.94633 6.27475 9.07528 6.41176C9.20423 6.54878 9.35994 6.65401 9.53139 6.72004L12.8439 7.99969L9.53139 9.27801Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="w-12 flex flex-col justify-start items-start">
            <div className="text-goldenbrown pn-regular-14 font-medium">
              <motion.span className="text-goldenbrown gold-text font-bold">
                Popular
              </motion.span>
            </div>
          </div>
        </div>
      )}
      <div
        className={`flex flex-col w-full items-center justify-start gap-[1.5rem] ${
          tier.isPremium ? "text-white" : "text-ash"
        }`}
      >
        {/* Heading */}
        <div className="flex flex-col w-full items-center justify-start gap-[1rem] lg:gap-0">
          <h1
            className={`text-center pn-regular-32 ${
              tier.isPopular ? "text-goldenbrown" : ""
            }`}
          >
            {tier.isPopular ? (
              <motion.span className="text-goldenbrown gold-text font-bold">
                {tier.name}
              </motion.span>
            ) : (
              <span>{tier.name}</span>
            )}
          </h1>
          {tier.commitment && (
            <p className="text-center pn-regular-16">
              {isYearly
                ? tier.commitment.yearly || tier.commitment
                : tier.commitment.monthly || tier.commitment}
            </p>
          )}
        </div>
        <div
          className={`flex w-full h-[0.055rem] ${
            tier.isPremium ? "bg-white" : "bg-ash"
          }`}
        />
        {/* Price */}
        <div className="flex flex-row w-full items-end justify-center py-[1.25rem]">
          <h2 className="text-center pn-semibold-40">
            $
            {isYearly
              ? tier.price.yearly || tier.price
              : tier.price.monthly || tier.price}
          </h2>
          {tier.billingCycle && (
            <p className="text-center text-goldenbrown pn-semibold-16">
              /{tier.billingCycle}
            </p>
          )}
        </div>
        {/* Features */}
        <ul
          className={`custom-bullet-list ${
            tier.isPremium ? "light" : ""
          } flex flex-col w-full items-start justify-start gap-[1rem] !leading-[1.5rem] pn-regular-16`}
        >
          {(() => {
            const firstIncludedFeature = tier.features.find(
              (feature) => feature.inclusion
            );

            if (firstIncludedFeature) {
              return (
                <li className="w-full pn-bold-20 !leading-[2.25rem] !tracking-tight">
                  {firstIncludedFeature.name}&nbsp;
                  <span className="underline">
                    {firstIncludedFeature.details}
                  </span>
                  &nbsp;+
                </li>
              );
            }

            return null;
          })()}

          {tier.features.map((feature, index) => {
            const isVisible = index < 8;

            return (
              <AnimatePresence key={index}>
                {!feature.inclusion && (isVisible || isHovered) && (
                  <motion.li
                    initial={
                      !isVisible ? { height: 0, opacity: 0 } : { opacity: 1 }
                    }
                    animate={{ height: "auto", opacity: 1 }}
                    exit={!isVisible ? { height: 0, opacity: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: !isVisible ? (index - 8) * 0.1 : 0,
                    }}
                    className="list flex flex-col items-start justify-start gap-0 pn-regular-16 !text-[1.2rem]"
                  >
                    <p>
                      {feature.quantity && (
                        <span className="pn-bold-16 !text-[1.2rem]">
                          {feature.quantity}
                        </span>
                      )}{" "}
                      {feature.free && (
                        <span className="pn-bold-16 !text-[1.2rem]">
                          FREE BONUS
                        </span>
                      )}{" "}
                      {feature.name}
                      {feature.details && (
                        <span className="pn-bold-16 !text-[1.2rem]">
                          {" "}
                          {feature.details}
                        </span>
                      )}
                    </p>
                    {feature.value && (
                      <span className="li-subtext">
                        ({feature.value} value)
                      </span>
                    )}
                  </motion.li>
                )}
              </AnimatePresence>
            );
          })}

          {hiddenFeatures.length > 0 && !isHovered && (
            <AnimatePresence>
              <motion.li
                key="and-more"
                initial={{ height: "auto", opacity: 1 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-start justify-start gap-0 pn-regular-16 "
              >
                <p>and more...</p>
              </motion.li>
            </AnimatePresence>
          )}
        </ul>
      </div>

      {/* CTA */}
      {tier.isPremium ? (
        <div className="flex self-center items-center justify-center w-full hover:scale-110 transition-all duration-300 mt-[3rem]">
          <HoverWrapper
            href={tier.href || "/"}
            className={`button gold pn-regular-22 cursor-select-hover size-full xl:w-[18.75rem]`}
          >
            <FlipLink className={`leading-[1rem]`}>
              {tier.cta || "Get Started"}
            </FlipLink>
          </HoverWrapper>
        </div>
      ) : (
        <motion.div className="flex self-center items-center justify-center w-full hover:scale-110 transition-all duration-300 mt-[3rem]">
          <HoverWrapper
            href={tier.href || "/"}
            className={`button pn-regular-22 cursor-select-hover size-full xl:w-[18.75rem] ${
              tier.isPopular ? "dark !border-ash" : "!bg-white !border-ash"
            } shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5`}
          >
            <FlipLink
              className={`leading-[1rem] ${
                tier.isPopular ? "text-goldenbrown" : ""
              }`}
            >
              {tier.cta || "Get Started"}
            </FlipLink>
          </HoverWrapper>
        </motion.div>
      )}
    </motion.div>
  );
};

const PricingSection = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className,
      pricingPackages,
      noSwitch = false,
      originalColor,
      transitionColor,
    },
    forwardedRef
  ) => {
    const [isYearly, setIsYearly] = useState(false);
    const [color] = useState(originalColor);
    const containerRef =
      useRef() as React.MutableRefObject<HTMLDivElement | null>;
    // const stickyRef = useRef() as React.MutableRefObject<HTMLDivElement | null>;

    const togglePricing = () => {
      setIsYearly(!isYearly);
    };

    // Get packages safely
    const packages = pricingPackages ?? {};
    const packageCount = Object.keys(packages).length;

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          }
        }}
        id="pricing"
        className={`section-container !flex-row ${className}`}
        style={{ backgroundColor: color }}
        data-original-color={originalColor}
        data-transition-color={transitionColor}
      >
        <div className="relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-[1.5rem] lg:gap-[3.75rem] text-ash">
          {/* Header */}
          <SectionHeader
            center
            heading="Pricing"
            subheading="Find The Right Plan"
            body="To ensure we deliver top-tier quality designs on time, we work with a limited number of clients."
          />

          {/* Plan Switch */}
          {!noSwitch && (
            <div className="flex flex-row items-center justify-between bg-white mt-[3rem] px-[0.5rem] py-[0.375rem] shadow-customShadow rounded-[3rem] mx-auto pn-regular-16">
              <span className="py-[0.75rem] px-[1.375rem]">Monthly</span>

              <Switch
                id="toggle-pricing"
                onClick={togglePricing}
                className="cursor-select-hover"
              />

              <span className="py-[0.75rem] px-[1.375rem]">Yearly</span>

              <div
                className={`${
                  isYearly
                    ? "bg-goldenbrown text-white"
                    : "bg-ash text-white line-through"
                } py-[0.5rem] px-[0.5rem] lg:py-[0.75rem] lg:px-[1.375rem] rounded-[2.5rem] transition-all duration-300`}
              >
                17% Discount
              </div>
            </div>
          )}

          {/* Pricing Plans */}
          <div className="relative flex flex-col xl:flex-row h-full w-full justify-center items-center sm:items-start gap-[2rem]">
            {packageCount > 3 ? (
              <>
                <div className="hidden xl:contents">
                  <Swiper
                    effect={"fade"}
                    slidesPerView={4}
                    spaceBetween={30}
                    grabCursor={true}
                    scrollbar={{ draggable: true }}
                    modules={[Pagination, Navigation, Scrollbar, A11y]}
                    className="mySwiper w-full xl:max-w-[95rem] !overflow-visible"
                  >
                    {Object.values(packages).map((tier, index) => (
                      <SwiperSlide key={index} className="!cursor-swipe-hover">
                        <ScaleInVisible className="group relative size-full">
                          <PricingTier
                            tier={tier}
                            isYearly={isYearly}
                            className=""
                          />
                        </ScaleInVisible>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="xl:hidden contents">
                  {Object.values(packages).map((tier, index) => (
                    <ScaleInVisible
                      key={index}
                      className="group relative size-full max-w-[75vw] xl:w-[30rem] xl:max-w-[33.333333%]"
                    >
                      <PricingTier
                        tier={tier}
                        isYearly={isYearly}
                        className=""
                      />
                    </ScaleInVisible>
                  ))}
                </div>
              </>
            ) : packageCount > 2 ? (
              <>
                {Object.values(packages).map((tier, index) => (
                  <ScaleInVisible
                    key={index}
                    className="group relative size-full max-w-[75vw] xl:w-[30rem] xl:max-w-[33.333333%]"
                  >
                    <PricingTier
                      tier={tier}
                      isYearly={isYearly}
                      className="xl:min-h-[68rem]"
                    />
                  </ScaleInVisible>
                ))}
              </>
            ) : (
              <>
                {Object.values(packages).map((tier, index) => (
                  <ScaleInVisible
                    key={index}
                    className="group relative size-full max-w-[75vw] xl:w-[30rem] xl:max-w-[33.333333%]"
                  >
                    <PricingTier tier={tier} isYearly={isYearly} className="" />
                  </ScaleInVisible>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
);

PricingSection.displayName = "PricingSection";

export default PricingSection;
