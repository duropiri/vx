// import house from "@/../../public/assets/svgs/real-estate.svg";
// import bullhorn from "@/../../public/assets/svgs/bullhorn.svg";
// import skool from "@/../../public/assets/svgs/skool-icon.svg";
// import camera from "@/../../public/assets/svgs/camera-shutter.svg";
// import enhance from "@/../../public/assets/svgs/enhance.svg";
// import virtualrealityimage from "@/../../public/assets/svgs/virtual-reality-image.svg";
import { ServiceIcons } from "@/data/serviceIcons";

export const HeaderLinks = [
  {
    title: "Our Solutions",
    href: "#services",
    dropdown: {
      instantLinks: [
        {
          category: "Listing Media",
          title: "Real Estate HDR Photography",
          href: "/real-estate-hdr-photography",
        },
        {
          category: "Listing Media",
          title: "Virtual 3D Tours",
          href: "/virtual-3d-tours",
        },
        {
          category: "Listing Media",
          title: "RMS Measurements & Schematic Floor Plans",
          href: "/rms-measurements-schematic-floor-plans",
        },
        {
          category: "Listing Media",
          title: "Real Estate Videography",
          href: "/real-estate-videography",
        },
        {
          category: "Listing Media",
          title: "Virtual Staging",
          href: "/virtual-staging",
        },
        {
          category: "Listing Media",
          title: "Virtual Renovation",
          href: "/virtual-renovation",
        },
        {
          category: "Listing Media",
          title: "3D Rendering",
          href: "/3d-rendering",
        },
        {
          category: "Listing Media",
          title: "Graphic Design",
          href: "/graphic-design",
        },
      ],
      items: [
        {
          icon: ServiceIcons.house,
          title: "Listing Media",
          href: "/services/listing-media",
        },
        // {
        //   icon: ServiceIcons.share,
        //   title: "Social Media Management",
        //   href: "/services/social-media-management",
        // },
        {
          icon: ServiceIcons.skool,
          title: "Exclusive Community",
          href: "https://www.skool.com",
        },
      ],
    },
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    dropdown: {
      items: [
        {
          icon: ServiceIcons.vr,
          title: "Floor Plans & iGUIDE 3D Tours",
          href: "/case-studies#floorplans",
        },
        {
          icon: ServiceIcons.camerashutter,
          title: "Photography",
          href: "/case-studies#photography",
        },
        {
          icon: ServiceIcons.enhance,
          title: "Virtual Enhancements",
          href: "/case-studies#virtual",
        },
      ],
    },
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Client Portal",
    href: "https://listings.virtualxposure.com/portal",
  },
];

export const HomePageNavdockLinks = [
  {
    title: "Pricing",
    href: "/#pricing",
  },
  {
    title: "Why Us",
    href: "/#why",
  },
  {
    title: "Our Services",
    href: "/#services",
  },
];

export const LMSNavdockLinks = [
  {
    title: "Our Services",
    href: "/services/listing-media#services",
  },
  {
    title: "Why Us",
    href: "/services/listing-media#why",
  },
  {
    title: "FAQs",
    href: "/services/listing-media#faqs",
  },
];

export const SMMANavdockLinks = [
  {
    title: "Plans & Pricing",
    href: "/services/social-media-management#pricing",
  },
  {
    title: "Our Solutions",
    href: "/services/social-media-management#solutions",
  },
  {
    title: "Our Services",
    href: "/services/social-media-management#services",
  },
  {
    title: "Roadmap",
    href: "/services/social-media-management#roadmap",
  },
  {
    title: "FAQs",
    href: "/services/social-media-management#faqs",
  },
];

export const FooterCompanyLinks = [
  {
    title: "Listing Media",
    href: "/services/listing-media",
  },
  {
    title: "Social Media Management",
    href: "/services/social-media-management",
  },
  {
    title: "Exclusive Community",
    href: "https://www.skool.com/",
  },
  {
    title: "Resources",
    href: "/resources",
  },
  {
    title: "About us",
    href: "/about",
  },
];

export const FooterHelpLinks = [
  {
    title: "Customer Support",
    href: "/support",
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Refund Policy",
    href: "/refund-policy",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
];
