import house from "@/../../public/svgs/real-estate.svg";
import bullhorn from "@/../../public/svgs/bullhorn.svg";
import skool from "@/../../public/svgs/skool-icon.svg";

export const HeaderLinks = [
  {
    title: "Our Solutions",
    href: "/#services",
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
          icon: house,
          title: "Listing Media",
          href: "/services/listing-media",
        },
        {
          icon: bullhorn,
          title: "Social Media Management",
          href: "/services/social-media-management",
        },
        {
          icon: skool,
          title: "Exclusive Community",
          href: "https://www.skool.com",
        },
      ],
    },
  },
  {
    title: "Plans & Pricing",
    href: "/pricing",
  },
  {
    title: "Client Portal",
    href: "https://listings.virtualxposure.com/portal",
  },
];

export const FooterCompanyLinks = [
  {
    title: "Listing Media",
    href: "/listing-media",
  },
  {
    title: "Social Media Management",
    href: "/social-media-management",
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
];
