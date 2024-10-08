"use client";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import SectionHeader from "@/components/ui/sectionHeader";
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
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[1.5rem] lg:gap-[3.75rem] text-ash">
        {/* Header */}
        <SectionHeader
          center
          heading="Pricing"
          subheading="Find The Right Plan"
          body="To ensure we deliver top-tier quality designs on time, we work with
            a limited number of clients."
        />

        {/* Plan Switch */}
        <div className="flex flex-row items-center justify-between bg-white mt-[3rem] px-[0.5rem] py-[0.375rem] shadow-customShadow rounded-[3rem] mx-auto pn-regular-16 !text-[12px]">
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
            } py-[0.5rem] px-[1rem] lg:py-[0.75rem] lg:px-[1.375rem] rounded-[2.5rem] transition-all duration-300`}
          >
            17% Discount
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="relative flex flex-col lg:flex-row h-full w-full justify-start items-start gap-[2rem]">
          {/* Strategic Growth */}
          <div className="pricing-box self-stretch bg-white shadow-customShadow">
            <div className="flex flex-col w-full items-center justify-start gap-[1.5rem] text-ash">
              {/* Heading */}
              <div className="flex flex-col w-full items-center justify-start gap-[1.5rem]">
                <h1 className="text-center pn-regular-32">Strategic Growth</h1>
                <p className="text-center pn-regular-16">
                  No Contracts. Cancel Anytime.
                </p>
              </div>
              <div className="flex w-full h-[1px] bg-ash" />
              {/* Price */}
              <div className="flex flex-row w-full items-end justify-center py-[1.25rem]">
                <h2 className="text-center pn-semibold-40">$1,295</h2>
                <p className="text-center text-goldenbrown pn-semibold-16">
                  monthly
                </p>
              </div>
              {/* Features */}
              <ul className="custom-bullet-list flex flex-col w-full items-start justify-start gap-[0.625rem] !leading-[1rem] pn-regular-16">
                <li>
                  <p>
                    <span className="pn-bold-16">(4x)</span> Social Media
                    Short-Form Videos
                  </p>
                </li>
                <li>
                  <p>
                    <span className="pn-bold-16">(4x)</span> Custom Social Media
                    Thumbnails
                  </p>
                </li>
                <li>
                  <p>
                    All-inclusive social media management including content
                    creation, moderation & scheduling
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($2000 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Includes
                    <span className="pn-bold-16">
                      Instagram, Facebook & TikTok
                    </span>
                  </p>
                </li>
                <li className="w-72 flex-col justify-start items-start inline-flex">
                  <p className="pn-regular-16">
                    Monthly Strategy Plan
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px] !h-0">
                      ($250 value)
                    </span>
                  </p>
                </li>

                <li>
                  <p>
                    Topic Research & Script Writing
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px] !h-0">
                      ($250 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Copywriting & Ideation
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px] !h-0">
                      ($250 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Hashtag Research and Analytics
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px] !h-0">
                      ($250 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="pn-bold-16">FREE BONUS</span> Instagram
                    Verification
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px] !h-0">
                      ($250 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="pn-bold-16">FREE BONUS</span> Social Media
                    Account Optimization Audit <br />{" "}
                    <span className="uppercase font-bold !text-[12px] !h-0">
                      ($250 value)
                    </span>
                  </p>
                </li>
                <li className="w-72 flex-col justify-start items-start inline-flex">
                  <p className="pn-bold-16">
                    2X Money Back Guarantee
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px] !h-0">
                      ($250 value)
                    </span>
                  </p>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-center w-full mt-[3rem]">
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

          {/* Scaling Maestro */}
          <div className="pricing-box self-stretch bg-white shadow-customShadow">
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
            <div className="flex flex-col w-full items-center justify-start gap-[1.5rem] text-ash">
              {/* Heading */}
              <div className="flex flex-col w-full items-center justify-start gap-[1.5rem]">
                <h1 className="text-center pn-regular-32 text-goldenbrown">
                  Scaling Maestro
                </h1>
                <p className="text-center pn-regular-16">3 Month Commitment.</p>
              </div>
              <div className="flex w-full h-[1px] bg-ash" />
              {/* Price */}
              <div className="flex flex-row w-full items-end justify-center py-[1.25rem]">
                <h2 className="text-center pn-semibold-40">$2,495</h2>
                <p className="text-center text-goldenbrown pn-semibold-16">
                  monthly
                </p>
              </div>
              {/* Features */}
              <ul className="custom-bullet-list flex flex-col w-full items-start justify-start gap-[0.625rem] !leading-[1rem] pn-regular-16">
                <div className="flex w-full pn-bold-20 !leading-[2.25rem]">
                  Everything in&nbsp;
                  <span className="underline">Strategic Growth Plan</span>
                  &nbsp;+
                </div>
                <li>
                  <p>
                    <span className="pn-bold-16">(12x)</span> Social Media
                    Short-Form Videos
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      (3x value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="pn-bold-16">(12x)</span> Custom Social
                    Media Thumbnails
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      (3x value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="pn-bold-16">(12x)</span> Social Media
                    Carousel Posts
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($1200 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Includes Instagram, Facebook & TikTok
                    <span className="pn-bold-16"> & LinkedIn</span>
                  </p>
                </li>
                <li>
                  <p>
                    Follow-Up Automations & Lead Capture
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($500 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Offer Creation & Marketing Consulting
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($1000 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Weekly Analytics Report - Up to 1 Year of Data
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($250 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="">
                      FREE BONUS Professional Headshots & Lifestyle Photos{" "}
                    </span>
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($750 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="pn-bold-16">FREE BONUS</span> Custom Lead
                    Capture Clickfunnel
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($1000 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="pn-bold-16">FREE BONUS</span> Propietary
                    Lead Magnet
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($1000 value)
                    </span>
                  </p>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-center w-full mt-[3rem]">
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

          {/* Absolute Domination */}
          <div className="pricing-box self-stretch bg-ash shadow-customShadow">
            <div className="flex w-full flex-col justify-start items-center gap-[1.5rem]">
              {/* Heading */}
              <div className="flex flex-col w-full items-center justify-start gap-[1.5rem]">
                <h1 className="text-center pn-regular-32 text-white">
                  Absolute Domination
                </h1>
                <p className="text-center pn-regular-16 text-white">
                  3 Month Commitment.
                </p>
              </div>
              <div className="flex w-full h-[1px] bg-white" />
              {/* Price */}
              <div className="flex flex-row w-full items-end justify-center py-[1.25rem]">
                <h2 className="text-center text-white pn-semibold-40">
                  $5,995
                </h2>
                <p className="text-center text-goldenbrown pn-semibold-16">
                  monthly
                </p>
              </div>
              {/* Features */}
              <ul className="custom-bullet-list light flex flex-col w-full items-start justify-start gap-[0.625rem] text-white pn-regular-16 !leading-[1rem]">
                <div className="flex w-full text-white pn-bold-20 !leading-[2.25rem]">
                  Everything in&nbsp;
                  <span className="underline">Scaling Maestro Plan</span>&nbsp;+
                </div>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">(30x)</span>
                    <span className="text-white">
                      {" "}
                      Social Media Short-Form Videos
                      <br />{" "}
                      <span className="uppercase font-bold !text-[12px]">
                        (2.5x value)
                      </span>
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">(30x)</span> Custom
                    Social Media Thumbnails
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      (2.5x value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">(60x)</span> Social
                    Media Carousel Posts
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      (5x value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">Daily</span>{" "}
                    Photo/Video Story Posts
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($1000 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">Unlimited</span>{" "}
                    Social Media Account(s) - ALL Social Media Platforms
                    including Instagram, Facebook, TikTok, LinkedIn, Twitter
                    (X), and Pinterest
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Media Buying & Advertising
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($3000 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Lead Generation & CRM Pipeline Management
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($3000 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Personalized Email & Text Automation System
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($1000 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Branding Development & Logo Design
                    <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($2000 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">FREE BONUS</span>{" "}
                    Exclusive Get-Comfortable-On-Camera-In-3-Days Training
                    Program <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($1000 value)
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-white pn-bold-16">FREE BONUS</span>{" "}
                    Get-Ready-To-Go-Viral-Prep-Checklist <br />{" "}
                    <span className="uppercase font-bold !text-[12px]">
                      ($100 value)
                    </span>
                  </p>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-center w-full mt-[3rem]">
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
