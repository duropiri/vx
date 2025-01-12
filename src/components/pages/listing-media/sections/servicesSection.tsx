import ScaleInVisible from "@/components/animations/ScaleInVisible";
import SectionHeader from "@/components/ui/sectionHeader";
import ServiceCard from "./serviceCard";
import { services } from "@/data/services";

const ServicesSection = () => (
  <div className="z-10 relative flex size-full max-w-[--section-width] flex-col items-center xl:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      noCenter
      heading="Our Services"
      subheading="Our Unlimited Services Include"
      className="text-black"
    />
    <div className="z-10 relative flex md:grid size-full max-w-[--section-width] flex-col md:grid-cols-2 xl:grid-cols-3 items-center md:items-start justify-center gap-[3rem] xl:gap-[2rem]">
      {services.map((service, index) => (
        <ScaleInVisible
          key={index + 2}
          className="flex flex-col items-center justify-center"
        >
          <ServiceCard
            key={service.title}
            {...service}
            isRight={index % 1 !== 0}
          />
        </ScaleInVisible>
      ))}
    </div>
  </div>
);

export default ServicesSection;
