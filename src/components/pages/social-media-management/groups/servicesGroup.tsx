// @/components/pages/social-media-management/groups/servicesGroup.tsx
import SolutionSection from "@/components/pages/social-media-management/sections/solutionSection";
import ServicesSection from "@/components/pages/social-media-management/sections/servicesSection";
import RoadmapSection from "@/components/pages/social-media-management/sections/roadmapSection";

interface ServicesGroupProps {
  sectionRefs: React.MutableRefObject<Array<HTMLDivElement | null>>;
  startIndex: number;
}

const ServicesGroup: React.FC<ServicesGroupProps> = ({ sectionRefs, startIndex }) => {
  return (
    <>
      <SolutionSection className="bg-ash z-10" />
      <ServicesSection className="bg-white z-10" />
      <RoadmapSection className="bg-white z-10" />
    </>
  );
};

export default ServicesGroup;