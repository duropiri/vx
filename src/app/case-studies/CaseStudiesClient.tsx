"use client";
import * as Tabs from "@radix-ui/react-tabs";
// import * as Tooltip from "@radix-ui/react-tooltip";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react"; // For the close icon

import SectionHeader from "@/components/ui/sectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  ReactCompareSlider,
  //   ReactCompareSliderImage,
} from "react-compare-slider";

export const FloorplansSection = () => {
  // const iGuideUrl = "https://youriguide.com/11408_167a_ave_edmonton_ab";
  const iGuideUrl =
    "https://youriguide.com/embed/1505_sesame_st_toronto_on?unbranded=1&nomenu=1&autostart=1&bgcolor=FFFFFF";

  return (
    <div
      id="floorplans"
      className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center xl:items-start justify-center gap-y-[2rem] xl:gap-y-[6rem]"
    >
      <SectionHeader
        center
        heading="Floor Plans"
        subheading="iGUIDE 3D Tours, Measurements & Floor Plans"
        className="text-black"
      />
      <div className="relative flex size-full max-w-[--section-width] flex-col-reverse xl:flex-row items-center justify-center gap-[3rem] xl:gap-[3.75rem]">
        <div className="z-[999] relative flex size-full flex-col items-center xl:items-start justify-center gap-y-[2rem]">
          <SectionHeader
            subheading="Showcase your home layout in detail."
            body="The 3D basic floor plan is the best kind of virtual property tour, which shows the home to a potential buyer in greater detail. From demonstrating the flooring transitions to the door swings directions, a 3D basic floor plan will effectively exhibit a home or property and help attract potential buyers to make a decision easier."
            className="text-black"
          />
          <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem] w-full">
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                Verified RMS Measurements
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                Accurate to RECA Standards
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                24 Hour Turnaround
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                SSL Encrypted Checkout
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                2X Money Back Guarantee
              </p>
            </li>
          </ul>
        </div>
        <div className="relative flex size-full aspect-video rounded-[1rem] overflow-hidden shadow-customShadow cursor-none-hover cursor-auto">
          <iframe
            src={iGuideUrl}
            title="iGuide 3D Tour"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export const PhotographySection = ({ dark = true }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Screen Size checking (previous useEffect remains the same)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial setup
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Screen Size checking
  useEffect(() => {
    console.log("Is Mobile:", isMobile);
  }, [isMobile]); // This will run whenever isMobile changes

  const getImagePath = (category, index) => {
    const formattedCategory =
      category === "aerial drone" ? "aerial drone" : category;
    const capitalizedCategory = formattedCategory
      .split(" ")
      .map((word) => word.charAt(0) + word.slice(1))
      .join("_");
    return `/assets/portfolio/images/${formattedCategory}/Virtual_Xposure_-_${capitalizedCategory}_Image_-_(${index}).webp`;
  };

  // const generateCategoryItemsRandom = (category, count) => {
  //   // Generate a larger pool of items first (e.g., 30)
  //   const allItems = Array.from({ length: 19 }, (_, index) => ({
  //     id: index + 1,
  //     title: `${category.charAt(0).toUpperCase() + category.slice(1)} Photo ${
  //       index + 1
  //     }`,
  //     image: getImagePath(category, index + 1),
  //   }));

  //   // Randomly select 10 items
  //   return allItems
  //     .sort(() => Math.random() - 0.5) // Shuffle array
  //     .slice(0, count); // Take first 10 items
  // };

  const generateCategoryItems = (category, count) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Photo ${
        index + 1
      }`,
      image: getImagePath(category, index + 1),
    }));
  };

  const categoryData = {
    interior: generateCategoryItems("interior", 12),
    exterior: generateCategoryItems("exterior", 12),
    "aerial drone": generateCategoryItems("aerial drone", 12),
  };

  // const categoryData = {
  //   interior: [
  //     {
  //       id: 1,
  //       title: "Modern Minimalist Home",
  //       description:
  //         "A sleek 2,500 sq ft contemporary residence featuring clean lines, neutral color palette, and expansive natural light.",
  //       challenge:
  //         "Capturing the subtle textures and spatial relationships of minimalist design.",
  //       solution:
  //         "Used soft, diffused lighting and strategic wide-angle compositions to emphasize spatial flow.",
  //       image: getImagePath("interior", 1),
  //     },
  //     {
  //       id: 2,
  //       title: "Corporate Office Spaces",
  //       description:
  //         "A cutting-edge tech company's open-plan workspace with collaborative zones and innovative design elements.",
  //       challenge:
  //         "Showcasing the dynamic work environment while maintaining professional aesthetics.",
  //       solution:
  //         "Employed architectural photography techniques to highlight spatial design and workplace culture.",
  //       image: getImagePath("interior", 2),
  //     },
  //   ],
  //   exterior: [
  //     {
  //       id: 1,
  //       title: "Coastal Luxury Villa",
  //       description:
  //         "An expansive oceanfront property with seamless indoor-outdoor living design.",
  //       challenge:
  //         "Capturing the property's grandeur while maintaining natural lighting and scenic backdrop.",
  //       solution:
  //         "Utilized golden hour timing and multiple exposure techniques to balance architectural details with landscape.",
  //       image: getImagePath("exterior", 1),
  //     },
  //     {
  //       id: 2,
  //       title: "Modern Commercial Complex",
  //       description:
  //         "A sophisticated commercial property showcasing contemporary architectural design.",
  //       challenge:
  //         "Highlighting architectural uniqueness during varying light conditions.",
  //       solution:
  //         "Captured multiple shots throughout the day, focusing on geometric lines and material textures.",
  //       image: getImagePath("exterior", 2),
  //     },
  //   ],
  //   "aerial drone": [
  //     {
  //       id: 1,
  //       title: "Urban Development Overview",
  //       description:
  //         "Comprehensive aerial documentation of a developing urban district.",
  //       challenge:
  //         "Creating a cohesive visual narrative of urban transformation.",
  //       solution:
  //         "Planned flight paths to capture progressive development stages and urban infrastructure.",
  //       image: getImagePath("aerial drone", 1),
  //     },
  //     {
  //       id: 2,
  //       title: "Luxury Estate Aerial Tour",
  //       description:
  //         "Bird's-eye perspective of a prestigious residential property.",
  //       challenge:
  //         "Capturing the scale and grandeur of the estate from multiple angles.",
  //       solution:
  //         "Utilized various drone flight patterns and heights to showcase the property's features.",
  //       image: getImagePath("aerial drone", 2),
  //     },
  //   ],
  // };

  // Generate the 'all' category by combining items from other categories

  const allCategory = Object.entries(categoryData).flatMap(
    ([category, items]) =>
      items.map((item) => ({
        id: item.id,
        title: item.title,
        category: category,
        image: item.image,
      }))
  );

  const caseStudies = {
    all: allCategory,
    ...categoryData,
  };

  // Function to chunk array into groups of 9
  // const chunkArray = (arr, size) => {
  //   return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
  //     arr.slice(i * size, i * size + size)
  //   );
  // };

  const renderCaseStudyCard = (study) => (
    <motion.div
      key={study.id}
      className="relative group cursor-select-hover rounded-[1rem] overflow-hidden flex flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{
        amount: 0.3,
        margin: "50px",
      }}
      transition={{
        delay: 0.1,
        duration: 0.4,
        ease: "easeOut",
      }}
      onClick={() => setSelectedImage(study.image)}
    >
      <div className="relative aspect-square">
        <div className="flex flex-col size-full items-center justify-center overflow-hidden bg-ash pointer-events-none">
          <div className="size-full">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="w-full scale-125 group-hover:scale-110 opacity-100 group-hover:opacity-50 transition-all duration-500 object-cover"
              quality={80}
            />
          </div>
        </div>
      </div>
      {study.description && (
        <div className="absolute bottom-0 bg-white/75 opacity-0 p-[2rem] pn-regular-16 group-hover:opacity-100 transition-all duration-500">
          <h3 className="pn-semibold-40 font-bold mb-[1rem]">{study.title}</h3>
          <p className="mb-[2rem] text-white/80">{study.description}</p>
          {study.challenge && (
            <div className="mb-2">
              <strong>Challenge:</strong> {study.challenge}
            </div>
          )}
          {study.solution && (
            <div>
              <strong>Solution:</strong> {study.solution}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );

  const renderSwiperContent = (studies) => {
    return (
      <div className="pb-[5rem]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={16}
          loop={true}
          slidesPerView={isMobile ? 2 : 6}
          slidesPerGroup={isMobile ? 2 : 6}
          pagination={{
            dynamicBullets: true,
          }}
          className={`overflow-visible relative flex flex-col !pb-[4rem] 
            [&_.swiper-pagination-bullet]:!w-[1.5rem] 
            [&_.swiper-pagination-bullet]:!h-[1.5rem]
            ${dark && "[&_.swiper-pagination-bullet]:bg-white"} 
            [&_.swiper-pagination]:!-mt-[5rem]
            [&_.swiper-pagination-bullet-active]:!bg-goldenbrown
            [&_.swiper-pagination]:!top-auto
          `}
        >
          {studies.map((study) => (
            <SwiperSlide key={study.id} className="!h-auto">
              {renderCaseStudyCard(study)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <>
      <div
        id="photography"
        className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center xl:items-start justify-center gap-y-[2rem] xl:gap-y-[6rem]"
      >
        <SectionHeader
          center
          dark={dark}
          heading="Photography"
          subheading="Examples Of Our Work"
          body="From stunning interiors to sweeping aerial views, our professional photography services capture your property in its best light. Every shot is carefully composed and expertly edited to showcase your property's unique features and appeal to potential buyers."
          className="text-black"
        />
        <div className="relative flex size-full max-w-[--section-width] flex-col xl:flex-row items-center justify-center gap-[3rem] xl:gap-[3.75rem]">
          <Tabs.Root
            defaultValue="all"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col size-full"
          >
            <Tabs.List className="pn-semibold-40 flex flex-col xl:flex-row items-start justify-between py-[2rem] border-b mb-[2rem]">
              {["all", "interior", "exterior", "aerial drone"].map((tab) => (
                <Tabs.Trigger
                  key={tab}
                  value={tab}
                  className={`cursor-select-hover px-4 py-2 transition-all duration-500 ${
                    dark ? "text-white" : "text-black"
                  } ${
                    activeTab === tab
                      ? "opacity-100 underline! underline-offset-[1rem] decoration-ash gold-text font-bold"
                      : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {tab === "aerial drone"
                    ? "Drone"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {Object.keys(caseStudies).map((category) => (
              <Tabs.Content key={category} value={category} className="w-full">
                {renderSwiperContent(caseStudies[category])}
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog.Root
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]" />
          <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99999]">
            <div className="relative w-[90vw] h-[90vh] bg-transparent">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Full size image"
                  fill
                  className="object-contain"
                  quality={100}
                />
              )}
              <Dialog.Close className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors cursor-select-hover">
                <X className="w-6 h-6" />
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export const VirtualSection = ({
  renovation = true,
  objremoval = true,
  staging = true,
}) => {
  const commonFeatures = [
    { id: 1, text: "Professional editing by experienced designers" },
    { id: 2, text: "Quick 24-hour turnaround time" },
    { id: 3, text: "Secure, encrypted file handling" },
    { id: 4, text: "Satisfaction guaranteed" },
    { id: 5, text: "High-resolution, print-ready images" },
    { id: 6, text: "MLS and RECA compliant results" },
  ];

  const services = [
    renovation && {
      id: 1,
      title: "Virtual Renovation",
      description:
        "Transform your space without the mess. Our virtual renovation service helps you visualize potential upgrades and modernizations to your property with stunning before-and-after previews. Perfect for planning bathroom remodels, kitchen updates, or whole-home makeovers. Our advanced digital tools allow you to experiment with different styles, colors, and fixtures to create your ideal look—all without lifting a hammer.",
      beforeImage: "/assets/portfolio/virtual renovation images/DEMO_(3).webp",
      afterImage: "/assets/portfolio/virtual renovation images/DEMO_(4).webp",
      features: commonFeatures,
      reversed: false,
    },
    objremoval && {
      id: 2,
      title: "Object Removal",
      description:
        "Clean, professional photos start with a clutter-free space. Our advanced digital decluttering service removes distracting items, personal belongings, and temporary fixtures from your listing photos. We help present your property in its best light by digitally clearing spaces to highlight their true potential. Perfect for occupied homes or properties mid-move.",
      beforeImage: "/assets/portfolio/virtual renovation images/DEMO_(5).webp",
      afterImage: "/assets/portfolio/virtual renovation images/DEMO_(6).webp",
      features: commonFeatures,
      reversed: true,
    },
    staging && {
      id: 3,
      title: "Virtual Staging",
      description:
        "Showcase your property's full potential without the expense of physical staging. Our virtual staging service digitally furnishes empty spaces with designer-curated furniture and décor, helping buyers envision the lifestyle your property offers. From modern minimalist to cozy traditional, we can style your space to appeal to your target market—at a fraction of the cost of traditional staging.",
      beforeImage: "/assets/portfolio/virtual staging images/DEMO_(19).webp",
      afterImage: "/assets/portfolio/virtual staging images/DEMO_(20).webp",
      features: commonFeatures,
      reversed: false,
    },
  ].filter(Boolean); // Remove falsy values

  const CompareSlider = ({ beforeImage, afterImage }) => (
    <ReactCompareSlider
      className="cursor-none-hover cursor-default rounded-[1rem] overflow-hidden shadow-customShadow"
      itemOne={
        <div className="relative flex">
          <Image
            src={beforeImage}
            alt="before-image"
            width={1200}
            height={600}
            className="w-full h-full object-cover pointer-events-none"
            quality={80}
          />
          <span className="absolute bottom-[1rem] left-[1rem] subheading pn-semibold-16 bg-charcoal text-white opacity-80">
            Before
          </span>
        </div>
      }
      itemTwo={
        <div className="relative flex">
          <Image
            src={afterImage}
            alt="after-image"
            width={1200}
            height={600}
            className="w-full h-full object-cover pointer-events-none"
            quality={80}
          />
          <span className="absolute bottom-[1rem] right-[1rem] subheading pn-semibold-16 bg-ash text-goldenrod opacity-80">
            <span className="gold-text">After</span>
          </span>
        </div>
      }
    />
  );

  const ServiceFeatures = ({ features }) => (
    <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem] w-full">
      {features.map((feature, index) => (
        <li
          key={index}
          className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]"
        >
          <p className="pn-regular-16 text-black/80 group-hover:text-black">
            {feature.text}
          </p>
        </li>
      ))}
    </ul>
  );

  const ServiceSection = ({ service }) => (
    <div
      className={`flex flex-col-reverse ${
        service.reversed ? "xl:flex-row-reverse" : "xl:flex-row"
      } size-full items-center justify-between gap-[3rem] xl:gap-[3.75rem]`}
    >
      <div className="z-[999] relative flex size-full flex-col items-center xl:items-start justify-center gap-y-[2rem]">
        <SectionHeader
          subheading={service.title}
          body={service.description}
          className="text-black"
        />
        <ServiceFeatures features={service.features} />
      </div>
      <div className="relative flex flex-col size-full items-start justify-center rounded-[1rem]">
        <CompareSlider
          beforeImage={service.beforeImage}
          afterImage={service.afterImage}
        />
      </div>
    </div>
  );

  return (
    <div
      id="virtual"
      className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center xl:items-start justify-center gap-y-[2rem] xl:gap-y-[6rem]"
    >
      <SectionHeader
        center
        heading="Virtual Enhancements"
        subheading="Virtual Enhancements On-Demand"
        className="text-black"
      />
      <div className="relative flex size-full max-w-[--section-width] flex-col items-center justify-center gap-[10rem] xl:gap-[3.75rem]">
        {services.map((service, index) => (
          <ServiceSection key={index} service={service} />
        ))}
      </div>
    </div>
  );
};
