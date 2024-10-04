"use client";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

interface SectionProps {
  className?: string;
}

const Prices = [
  {
    plan: "Basic Plan",
    description: "No Contracts. Cancel Anytime.",
    price: 1000,
    features: [
      "(4x) Social Media Short Form Videos",
      "(4x) Custom Social Media Thumbnails",
      "All-inclusive social media management including content creation, moderation & scheduling",
      "Includes Instagram, Facebook & TikTok",
      "Daily Communication",
      "Topic Research & Script Writing",
      "Copywriting & Ideation",
      "Monthly Strategy Plan",
      "FREE BONUS Instagram Verification",
      "FREE BONUS Social Media Account Optimization Audit ($500 VALUE)",
      "2X Money Back Guarantee",
    ],
  },
  {
    plan: "Advanced Plan",
    description: "3 Month Commitment",
    price: 2000,
    addition: "Everything in Basic Plan Plus",
    features: [
      "(8x) Social Media Short-Form Videos",
      "(8x) Custom Social Media Thumbnails",
      "(12x) Social Media Carousel Posts",
      "Includes Instagram, Facebook, TikTok & LinkedIn",
      "Hashtag Research and Analytics",
      "Unlimited Revisions",
      "Weekly Analytics Report (Up to 1 Year of Data)",
      "FREE BONUS Professional Headshots & Lifestyle Photos ($1500 VALUE)",
      "FREE BONUS Customizable LinkinBio URL",
      "FREE BONUS Members-Only VX Merch",
    ],
  },
  {
    plan: "Unlimited Plan",
    description: "3 Month Commitment",
    price: 6000,
    addition: "Everything in Advanced Plan Plus",
    features: [
      "(30x) Social Media Short-Form Videos",
      "(30x) Custom Social Media Thumbnails",
      "(60x) Social Media Carousel Posts",
      "Daily Photo/Video Story Posts",
      "Priority Listing Appointment Booking (EXCLUSIVE)",
      "Unlimited Social Media Account(s) - ALL Social Media Platforms including Instagram, Facebook, TikTok, LinkedIn, Twitter (X), and Pinterest",
      "Media Buying & Advertising",
      "FREE BONUS Exclusive Get-Comfortable-On-Camera-In-3-Days Training Program ($1000 VALUE)",
      "FREE BONUS Custom Logo Design ($2000 VALUE)",
    ],
  },
];

function PricingSection({ className }: SectionProps) {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div id="pricing" className={`section-container !flex-row ${className}`}>
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[3.75rem]">
        <div
          className={`flex flex-col items-center justify-center w-full gap-y-[0.75rem]`}
        >
          <span className="inline-block pn-semibold-16 uppercase bg-goldenbrown/25 text-ash px-[0.625rem] py-[0.5rem] rounded-[0.75rem]">
            Pricing
          </span>
          <h2 className="pn-semibold-48 capitalize text-ash">
            Find The Right Plan
          </h2>
          <p className="pn-regular-16 max-w-[43.75rem] text-center">
            To ensure we deliver top-tier quality designs on time, we work with
            a limited number of clients.
          </p>
        </div>

        <div className="flex flex-row items-center justify-between bg-white mt-[3rem] px-[0.5rem] py-[0.375rem] shadow-customShadow rounded-[3rem] mx-auto">
          <span className="text-ash pn-regular-16 py-[0.75rem] px-[1.375rem]">
            Monthly
          </span>

          <Switch
            id="toggle-pricing"
            onClick={togglePricing}
            className="cursor-select-hover"
          />

          <span className="text-ash pn-regular-16 py-[0.75rem] px-[1.375rem]">
            Yearly
          </span>

          <div
            className={`${
              isYearly
                ? "bg-goldenbrown text-white"
                : "bg-ash text-white line-through"
            } pn-regular-16  py-[0.75rem] px-[1.375rem] rounded-[2.5rem] transition-all duration-300`}
          >
            17% Discount
          </div>
        </div>

        <div className="relative flex flex-row h-[62.5rem] size-full justify-start items-start gap-[2rem]">
          <div className="flex flex-col h-full size-full items-start justify-between px-[2.5rem] pb-[2.5rem] pt-[4.5rem] bg-white shadow-customShadow rounded-[1.4rem]">
            <div className="flex flex-col w-full items-center justify-start gap-[3rem] text-ash">
              {/* Heading */}
              <div className="flex flex-col w-full items-center justify-start gap-[1.5rem]">
                <h1 className="text-center pn-regular-32">Basic Plan</h1>
                <p className="text-center pn-regular-16">
                  No Contracts. Cancel Anytime.
                </p>
              </div>
              <div className="flex w-full h-[1px] bg-ash" />
              {/* Price */}
              <div className="flex flex-row w-full items-end justify-center py-[1.25rem]">
                <h2 className="text-center text-ash pn-semibold-40">$1000</h2>
                <p className="text-center text-goldenbrown pn-semibold-16">
                  /month
                </p>
              </div>
              {/* Features */}
              <ul className="custom-bullet-list flex flex-col w-full items-start justify-start gap-[0.625rem] leading-[1rem] text-ash pn-regular-16">
                <li>
                  <p>
                    <span className="text-ash pn-bold-16">(4x)</span>
                    <span className="text-ash pn-regular-16">
                      {" "}
                      Social Media Short-Form Videos
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-ash pn-bold-16">(4x)</span>
                    <span className="text-ash pn-regular-16">
                      {" "}
                      Custom Social Media Thumbnails
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    All-inclusive social media management including content
                    creation, moderation & scheduling
                  </p>{" "}
                </li>
                <li>
                  <p>
                    <span className="text-ash pn-regular-16">Includes </span>
                    <span className="text-ash pn-bold-16">
                      Instagram, Facebook & TikTok
                    </span>
                  </p>
                </li>
                <li>
                  <p>Daily Communication</p>
                </li>
                <li>
                  <p>Topic Research & Script Writing</p>
                </li>
                <li>
                  <p>Copywriting & Ideation</p>
                </li>
                <li className="w-72 flex-col justify-start items-start inline-flex">
                  <p className="text-ash pn-regular-16">
                    Monthly Strategy Plan
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-ash pn-bold-16">FREE BONUS</span>
                    <span className="text-ash pn-regular-16">
                      {" "}
                      Instagram Verification
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-ash pn-bold-16">FREE BONUS</span>
                    <span className="text-ash pn-regular-16">
                      {" "}
                      Social Media Account Optimization Audit{" "}
                    </span>
                    <span className="text-ash pn-bold-16">($500 VALUE)</span>
                  </p>
                </li>
                <li className="w-72 flex-col justify-start items-start inline-flex">
                  <p className="text-ash pn-bold-16">2X Money Back Guarantee</p>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center w-full">
              <HoverWrapper
                href="/"
                className="button cursor-select-hover !w-[18.75rem] !py-[1.25rem] !bg-white !border-ash shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
              >
                <FlipLink className="pn-semibold-16 leading-[1rem]">
                  Get Started
                </FlipLink>
              </HoverWrapper>
            </div>
          </div>

          <div className="relative flex flex-col size-full items-start justify-between px-[2.5rem] pb-[2.5rem] pt-[4.5rem] bg-white shadow-customShadow rounded-[1.4rem]">
            <div className="absolute top-[1.5rem] right-[1.5rem] flex px-[0.75rem] py-[0.5rem] bg-ash rounded-[2rem] border border-goldenbrown justify-center items-center gap-[0.25rem]">
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
                  Popular
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-start gap-[3rem] text-ash">
              {/* Heading */}
              <div className="flex flex-col w-full items-center justify-start gap-[1.5rem]">
                <h1 className="text-center pn-regular-32 text-goldenbrown">
                  Advanced Plan
                </h1>
                <p className="text-center pn-regular-16">3 Month Commitment.</p>
              </div>
              <div className="flex w-full h-[1px] bg-ash" />
              {/* Price */}
              <div className="flex flex-row w-full items-end justify-center py-[1.25rem]">
                <h2 className="text-center text-ash pn-semibold-40">$2,000</h2>
                <p className="text-center text-goldenbrown pn-semibold-16">
                  /month
                </p>
              </div>
              {/* Features */}
              <ul className="custom-bullet-list flex flex-col w-full items-start justify-start gap-[0.625rem] leading-[1rem]">
                <div className="flex w-full text-ash pn-semibold-22">
                  Everything in Basic Plan Plus:
                </div>
                <li>
                  <p>
                    <span className="text-ash pn-bold-16">(8x)</span>
                    <span className="text-ash pn-regular-16">
                      {" "}
                      Social Media Short-Form Videos
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-ash pn-bold-16">(8x)</span>
                    <span className="text-ash pn-regular-16">
                      {" "}
                      Custom Social Media Thumbnails
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-ash pn-bold-16">(12x)</span>
                    <span className="text-ash pn-regular-16">
                      {" "}
                      Social Media Carousel Posts
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-ash pn-regular-16">
                      Includes Instagram, Facebook & TikTok
                    </span>
                    <span className="text-ash pn-bold-16"> & LinkedIn</span>
                  </p>
                </li>
                <li>
                  <p>Hashtag Research and Analytics</p>
                </li>
                <li>
                  <p>Unlimited Revisions</p>
                </li>
                <li>
                  <p>
                    <span className="text-ash pn-regular-16">
                      Weekly Analytics Report{" "}
                    </span>
                    <span className="text-ash pn-bold-16">
                      (Up to 1 Year of Data)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-ash pn-regular-16">
                      FREE BONUS Professional Headshots & Lifestyle Photos{" "}
                    </span>
                    <span className="text-ash pn-bold-16">($1500 VALUE)</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-ash pn-bold-16">FREE BONUS</span>
                    <span className="text-ash pn-regular-16">
                      {" "}
                      Customizable LinkinBio URL
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-ash pn-bold-16">FREE BONUS</span>
                    <span className="text-ash pn-regular-16">
                      {" "}
                      Members-Only VX Merch
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center w-full">
              <HoverWrapper
                href="/"
                className="button cursor-select-hover !w-[18.75rem] !py-[1.25rem] !bg-ash !border-ash shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
              >
                <FlipLink className="pn-semibold-16 text-goldenbrown leading-[1rem]">
                  Get Started
                </FlipLink>
              </HoverWrapper>
            </div>
          </div>

          <div className="flex flex-col size-full items-start justify-between px-[2.5rem] pb-[2.5rem] pt-[4.5rem] bg-ash shadow-customShadow rounded-[1.4rem]">
            <div className="flex w-full flex-col justify-start items-center gap-12">
              {/* Heading */}
              <div className="flex flex-col w-full items-center justify-start gap-[1.5rem]">
                <h1 className="text-center pn-regular-32 text-white">
                  Ultimate Plan
                </h1>
                <p className="text-center pn-regular-16 text-white">
                  3 Month Commitment.
                </p>
              </div>
              <div className="flex w-full h-[1px] bg-white" />
              {/* Price */}
              <div className="flex flex-row w-full items-end justify-center py-[1.25rem]">
                <h2 className="text-center text-white pn-semibold-40">
                  $6,000
                </h2>
                <p className="text-center text-goldenbrown pn-semibold-16">
                  /month
                </p>
              </div>
              {/* Features */}
              <ul className="custom-bullet-list light flex flex-col w-full items-start justify-start gap-[0.625rem] text-white leading-[1rem]">
                <div className="flex w-full text-white pn-semibold-22">
                  Everything in Advanced Plan Plus:
                </div>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">(30x)</span>
                    <span className="text-white pn-regular-16">
                      {" "}
                      Social Media Short-Form Videos
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">(30x)</span>
                    <span className="text-white pn-regular-16">
                      {" "}
                      Custom Social Media Thumbnails
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">(60x)</span>
                    <span className="text-white pn-regular-16">
                      {" "}
                      Social Media Carousel Posts
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">Daily</span>
                    <span className="text-white pn-regular-16">
                      {" "}
                      Photo/Video Story Posts
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">Priority</span>
                    <span className="text-white pn-regular-16">
                      {" "}
                      Listing Appointment Booking
                    </span>{" "}
                    <span className="text-white pn-bold-16">(EXCLUSIVE)</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">Unlimited</span>
                    <span className="text-white pn-regular-16">
                      {" "}
                      Social Media Account(s) - ALL Social Media Platforms
                      including Instagram, Facebook, TikTok, LinkedIn, Twitter
                      (X), and Pinterest
                    </span>
                  </p>
                </li>
                <li>
                  <p> Media Buying & Advertising</p>
                </li>
                <li>
                  <span className="text-white pn-bold-16">
                    <p>FREE BONUS</p>
                  </span>
                  <span className="text-white pn-regular-16">
                    <p>
                      {" "}
                      Exclusive Get-Comfortable-On-Camera-In-3-Days Training
                      Program{" "}
                    </p>
                  </span>
                  <span className="text-white pn-bold-16">
                    <p>($1000 VALUE)</p>
                  </span>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">FREE BONUS</span>
                    <span className="text-white pn-regular-16">
                      {" "}
                      Custom Logo Design{" "}
                    </span>
                    <span className="text-white pn-bold-16">($2000 VALUE)</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center w-full">
              <HoverWrapper
                href="/"
                className="button cursor-select-hover !w-[18.75rem] !py-[1.25rem] !bg-goldenbrown !border-white shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
              >
                <FlipLink className="pn-semibold-16 text-white leading-[1rem]">
                  Contact Us
                </FlipLink>
              </HoverWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
