// @/components/pages/social-media-management/groups/marketingGroup.tsx
import SocialProofSection from "@/components/pages/sections/socialProofSection";
import CopySection from "@/components/pages/sections/copySection";
import ProblemSection from "@/components/pages/social-media-management/sections/problemSection";

interface MarketingGroupProps {
  sectionRefs: React.MutableRefObject<Array<HTMLDivElement | null>>;
  startIndex: number;
}

const MarketingGroup: React.FC<MarketingGroupProps> = ({ sectionRefs, startIndex }) => {
  return (
    <>
      <SocialProofSection
        id="socialProof1"
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el) => { sectionRefs.current[startIndex] = el; }}
      />
      <CopySection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el) => { sectionRefs.current[startIndex + 1] = el; }}
        copy={
          <>
            We now live in an
            <span className="text-goldenbrown gold-text">online</span>
            real estate economy
          </>
        }
      />
      <ProblemSection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-0 min-w-[100vw]"
        ref={(el) => { sectionRefs.current[startIndex + 2] = el; }}
      />
    </>
  );
};

export default MarketingGroup;