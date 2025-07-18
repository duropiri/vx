// "use client";
import {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  // useEffect,
  useState,
} from "react";

import Image from "next/image";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { gsap } from "@/utils/gsap";

import logo from "@/../../public/assets/images/logo2-nospace.webp";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { FooterHelpLinks } from "@/data/navLinks";
import { TransitionLink } from "../TransitionLink";
import { useViewport } from "@/contexts/ViewportContext";
import { ServiceIcons } from "@/data/serviceIcons";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

// Custom hook to track scroll direction
// const useScrollDirection = () => {
//   const [scrollDirection, setScrollDirection] = useState("up");
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const updateScrollDirection = () => {
//       const scrollY = window.scrollY;
//       if (scrollY === 0) {
//         setScrollDirection("up");
//         return;
//       }

//       const direction = scrollY > lastScrollY ? "down" : "up";
//       if (Math.abs(scrollY - lastScrollY) > 5) {
//         setScrollDirection(direction);
//       }
//       setLastScrollY(scrollY);
//     };

//     window.addEventListener("scroll", updateScrollDirection);
//     return () => window.removeEventListener("scroll", updateScrollDirection);
//   }, [lastScrollY]);

//   return scrollDirection;
// };

// interface ImageProps {
//   src: string;
//   isActive: boolean;
// }

// const ImageModal: React.FC<ImageProps> = ({ src, isActive }) => {
//   return (
//     <>
//       {src && (
//         <div
//           className={`inset-0 -z-10 transition-opacity duration-300 ${
//             isActive ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <Image
//             src={`/img/${src}`}
//             alt="Selected link image"
//             className="size-full object-cover"
//           />
//         </div>
//       )}
//     </>
//   );
// };

interface DropdownItem {
  icon: ReactNode;
  title: string;
  href: string;
}

interface QuickLink {
  category: string;
  icon?: ReactNode;
  title: string;
  href: string;
  target?: string;
  rel?: string;
}

interface Dropdown {
  quickLinks?: QuickLink[];
  items?: {
    title: string;
    items: DropdownItem[];
  };
}

export interface LinkDetails {
  title: string;
  href: string;
  src?: string;
  dropdown?: Dropdown;
}

interface NavProps {
  activeDropdown?: LinkDetails | null;
  isVisible?: boolean;
}

const Nav: React.FC<NavProps> = ({ activeDropdown, isVisible }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linksRef = useRef<(HTMLDivElement | null)[]>([]);
  const heightRef = useRef<number>(0);
  const [currentDropdown, setCurrentDropdown] = useState<LinkDetails | null>(
    null
  );
  const { windowWidth } = useViewport();

  useEffect(() => {
    if (activeDropdown?.dropdown) {
      setCurrentDropdown(activeDropdown);
    } else {
      animateOut().then(() => {
        setCurrentDropdown(null);
      });
    }
  }, [activeDropdown, windowWidth]);

  const animateOut = async () => {
    const container = containerRef.current;
    if (!container || !isVisible) return;

    // Set height to auto temporarily to measure
    gsap.set(container, { height: "auto", visibility: "hidden" });
    heightRef.current = container.offsetHeight;
    gsap.set(container, { height: 0, visibility: "visible" });

    // Animate opening
    const tl = gsap.timeline();

    tl.to(container, {
      height: heightRef.current,
      duration: 0.25,
      ease: "power2.inOut",
    });

    // Animate items
    itemsRef.current.forEach((item) => {
      if (item) {
        tl.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.15,
            ease: "power2.out",
          },
          "-=0.1"
        );
      }
    });

    // Animate links
    linksRef.current.forEach((link) => {
      if (link) {
        tl.fromTo(
          link,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.1,
            ease: "power2.out",
          },
          "-=0.05"
        );
      }
    });

    return () => {
      gsap.killTweensOf([container, ...itemsRef.current, ...linksRef.current]);
    };
  };

  // if (!currentDropdown?.dropdown) return null;

  const dropdown = currentDropdown?.dropdown;
  // if (!dropdown) return null;

  const groupedLinks = dropdown?.quickLinks?.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = [];
    }
    acc[link.category].push(link);
    return acc;
  }, {} as Record<string, QuickLink[]>);

  const setItemRef = (index: number) => (el: HTMLDivElement | null) => {
    itemsRef.current[index] = el;
  };

  const setLinkRef = (index: number) => (el: HTMLDivElement | null) => {
    linksRef.current[index] = el;
  };

  return (
    <div
      // ref={containerRef}
      className="nav-dropdown overflow-hidden flex flex-col items-start justify-center size-full text-white"
    >
      <div className="overflow-hidden flex flex-row items-start justify-center size-full text-white">
        {/* Services Grid */}
        {dropdown?.items?.items && (
          <div className="slide-in-left flex flex-col col-span-3 pr-[4rem] py-[2rem] h-full self-stretch">
            <p className="text-sm font-medium text-white/40 mb-5">
              {dropdown.items.title}
            </p>
            <div className="grid [grid-template-columns:auto_auto] auto-rows-auto gap-y-[1rem] gap-x-[2rem] w-auto">
              {dropdown.items.items.map((item, index) => (
                <TransitionLink
                  href={item.href}
                  key={index}
                  ref={setItemRef(index)}
                >
                  <div className="cursor-select-hover group inline-block w-fit">
                    <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                      <div className="flex-col items-center p-2 rounded-lg bg-charcoal/20 border-none border group-hover:bg-charcoal/80 transition-all duration-200">
                        <div className="aspect-square size-6 transition-all duration-200 group-hover:scale-110 filter grayscale group-hover:filter-none group-hover:grayscale-0 text-white">
                          {item.icon}
                        </div>
                      </div>
                      <HoverWrapper className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full text-white">
                        <div className="inline-block w-fit text-white/80 group-hover:text-white transition-colors duration-200 pn-regular-16">
                          <FlipLink>{item.title}</FlipLink>
                        </div>
                      </HoverWrapper>
                    </div>
                  </div>
                </TransitionLink>
              ))}
            </div>
          </div>
        )}

        {/* Quick Links Section */}
        {groupedLinks && (
          <div className="slide-in-left col-span-5 pr-[2rem] py-[2rem]">
            <p className="text-sm font-medium text-white/40 mb-5">
              Quick links
            </p>
            <div className="grid gap-6">
              {Object.entries(groupedLinks).map(([category, links]) => (
                <div key={category} className="space-y-4">
                  <div className="space-y-2">
                    {links.map((link, index) => (
                      <div key={index} ref={setLinkRef(index)} className="flex">
                        <HoverWrapper className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full text-white">
                          <TransitionLink
                            href={link.href}
                            target={link.target}
                            rel={link.rel}
                            className="inline-block w-fit cursor-select-hover text-white/80 hover:text-white transition-colors duration-200 pn-regular-16"
                          >
                            <FlipLink>
                              <div className="inline-flex flex-row items-center justify-center gap-[0.5rem]">
                                {link.icon && (
                                  <div className="hidden sm:inline-block aspect-square size-4 transition-all duration-200 group-hover:scale-110 filter grayscale group-hover:filter-none group-hover:grayscale-0 text-white">
                                    {link.icon}
                                  </div>
                                )}
                                {link.title}
                              </div>
                            </FlipLink>
                          </TransitionLink>
                        </HoverWrapper>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface TwoPanelMenuProps {
  navigation: LinkDetails[];
  isActive: boolean;
  onClose?: () => void;
}

const TwoPanelMenu: React.FC<TwoPanelMenuProps> = ({
  navigation,
  isActive,
  onClose,
}) => {
  const [panel, setPanel] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Reset panel on close
  useEffect(() => {
    if (!isActive) setPanel(null);
  }, [isActive]);

  // Adjust height to active panel
  const adjustHeight = () => {
    const wrapper = wrapperRef.current;
    const activePanel = panel ? subRef.current : mainRef.current;
    if (wrapper && activePanel) {
      wrapper.style.height = `${activePanel.scrollHeight}px`;
    }
  };

  // Run on mount and whenever panel changes
  useLayoutEffect(adjustHeight, [panel]);
  useLayoutEffect(() => {
    if (isActive) adjustHeight();
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      ref={wrapperRef}
      className="relative w-full bg-ash text-white transition-[height] duration-500"
    >
      <div
        className={`flex transform transition-transform duration-700 ${
          panel ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Main */}
        <div
          ref={mainRef}
          className={`pn-regular-24 flex-shrink-0 w-full flex flex-col gap-2 transition-opacity duration-300 ${
            panel ? "opacity-0" : "opacity-100"
          }`}
        >
          {navigation.map((nav, idx) => (
            <button
              key={idx}
              className="flex justify-between items-center w-full py-2 text-left"
              onClick={() => {
                if (nav.dropdown) setPanel(nav.title);
                else {
                  router.push(nav.href);
                  onClose?.();
                }
              }}
            >
              <span>{nav.title}</span>
              {nav.dropdown && <ChevronRightIcon />}
            </button>
          ))}
        </div>

        {/* Sub */}
        <div
          ref={subRef}
          className={`flex-shrink-0 w-full flex flex-col gap-2 transition-opacity duration-1000 ${
            panel ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className="flex items-center py-2 text-left"
            onClick={() => setPanel(null)}
          >
            <ChevronLeftIcon />
            <span className="ml-2">Back</span>
          </button>
          {/* <h2 className="text-lg pn-semibold-12 mb-2">{panel}</h2> */}
          <div className="pn-regular-20 flex flex-col gap-2">
            {navigation
              .find((nav) => nav.title === panel)
              ?.dropdown?.items?.items.map((item, i) => (
                <Link key={i} href={item.href}>
                  <p className="block py-2">{item.title}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface MobileMenuProps {
  navigation: LinkDetails[];
  isActive: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navigation,
  isActive,
  onClose,
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const submenuHeights = useRef<Record<string, number>>({});
  const isInitialMount = useRef(true);
  const { windowWidth } = useViewport();

  // Main menu animation
  useEffect(() => {
    if (!menuRef.current || isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const ctx = gsap.context(() => {
      if (isActive) {
        gsap.to(menuRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power3.inOut",
        });
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    }, menuRef);

    return () => ctx.revert();
  }, [isActive, windowWidth]);

  // Initialize menu state
  useEffect(() => {
    if (menuRef.current) {
      gsap.set(menuRef.current, {
        height: isActive ? "auto" : 0,
        opacity: isActive ? 1 : 0,
      });
    }
  }, [windowWidth]);

  // Submenu animations
  useEffect(() => {
    if (!menuRef.current) return;

    const ctx = gsap.context(() => {
      // Store and set initial heights
      navigation.forEach((nav) => {
        if (nav.dropdown && submenuRefs.current[nav.title]) {
          const submenu = submenuRefs.current[nav.title];
          if (submenu) {
            // Temporarily set to auto and measure
            gsap.set(submenu, {
              height: "auto",
              opacity: 1,
              // visibility: "hidden",
            });
            submenuHeights.current[nav.title] = submenu.offsetHeight;

            // Set initial state
            gsap.set(submenu, {
              height:
                activeSubmenu === nav.title
                  ? submenuHeights.current[nav.title]
                  : 0,
              opacity: activeSubmenu === nav.title ? 1 : 0,
              // visibility: "visible",
            });

            // Animate to new state
            gsap.to(submenu, {
              height:
                activeSubmenu === nav.title
                  ? submenuHeights.current[nav.title]
                  : 0,
              opacity: activeSubmenu === nav.title ? 1 : 0,
              duration: 0.5,
              ease: "power3.inOut",
            });
          }
        }
      });
    }, menuRef);

    return () => ctx.revert();
  }, [activeSubmenu, navigation, windowWidth]);

  const setSubmenuRef = (title: string) => (el: HTMLDivElement | null) => {
    submenuRefs.current[title] = el;
  };

  return (
    <div
      ref={menuRef}
      className="fixed md:hidden left-0 top-[51.61px] w-full bg-ash text-white [backdrop-filter:_saturate(180%)_blur(20px)] z-[99999999] overflow-y-scroll max-h-[calc(100vh-6rem)] overflow-x-hidden"
    >
      <div className="p-[1rem] sm:p-[0.5rem] flex flex-col gap-6">
        {/* {navigation.map((nav, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between items-center">
              <TransitionLink
                href={nav.href}
                className="pn-regular-24"
                onClick={() => !nav.dropdown && onClose()}
              >
                {nav.title}
              </TransitionLink>
              {nav.dropdown && (
                <ChevronDownIcon
                  className={`h-6 w-6 transition-transform duration-300 ${
                    activeSubmenu === nav.title ? "rotate-180" : ""
                  }`}
                  onClick={() =>
                    setActiveSubmenu(
                      activeSubmenu === nav.title ? null : nav.title
                    )
                  }
                />
              )}
            </div>


            {nav.dropdown && (
              <div
                ref={setSubmenuRef(nav.title)}
                className="overflow-hidden pl-4"
              >
                <div className="flex flex-col mt-4 gap-4">
                  {nav.dropdown.items &&
                    nav.dropdown.items.items.map((item, idx) => (
                      <TransitionLink
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-3 text-white/70 hover:text-white"
                        onClick={onClose}
                      >
                        <span className="pn-regular-16">{item.title}</span>
                      </TransitionLink>
                    ))}

                  {nav.dropdown.quickLinks && (
                    <>
                      {nav.dropdown?.items && (
                        <p
                          className={`text-sm font-medium text-white/40 ${
                            nav.dropdown?.items && "pl-[2rem]"
                          }`}
                        >
                          Quick links
                        </p>
                      )}
                      {nav.dropdown.quickLinks?.map((link, idx) => (
                        <TransitionLink
                          key={`quick-${idx}`}
                          href={link.href}
                          className={`${
                            nav.dropdown?.items && "pl-[2rem]"
                          } gap-[1rem] pn-regular-16 text-white/70 hover:text-white`}
                          onClick={onClose}
                        >
                          {link.icon && (
                            <div className="hidden sm:inline-block aspect-square size-6 transition-all duration-200 group-hover:scale-110 filter grayscale group-hover:filter-none group-hover:grayscale-0 text-white">
                              {link.icon}
                            </div>
                          )}{" "}
                          {link.title}
                        </TransitionLink>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))} */}

        <TwoPanelMenu
          navigation={navigation} // your array of { title, href, dropdown? }
          isActive={isActive} // boolean toggle
          onClose={onClose}
        />

        {/* Mobile CTA */}
        <Link
          href="https://listings.virtualxposure.com/order"
          className="button pn-regular-16 text-center pn-regular-16 text-black"
          onClick={onClose}
        >
          Book Now
          <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
            {ServiceIcons.arrow}
          </div>
        </Link>
      </div>
    </div>
  );
};

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-wrap w-full justify-between gap-10 text-white pn-regular-16 ">
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <li className="flex items-end justify-end text-white/10 text-[0.5rem]">
          <span className="mr-2">Made by:</span> @relaydigitalmktg
        </li>
      </ul>
      <ul className="flex flex-row gap-[0.5rem] w-full md:w-auto mt-2 list-none p-0">
        {FooterHelpLinks.map((link, index) => (
          <li
            key={index}
            className="flex items-end justify-end cursor-select-hover text-[0.8rem] text-white/70 hover:text-white transition-all"
            style={{ "--delay": `${index * 0.05}s` } as React.CSSProperties}
          >
            <HoverWrapper className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full text-white">
              <TransitionLink href={link.href} aria-label={link.title} passHref>
                <FlipLink>{link.title}</FlipLink>
              </TransitionLink>
            </HoverWrapper>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface HeaderProps {
  className?: string;
  navigation: LinkDetails[];
}

const Header: React.FC<HeaderProps> = ({ className, navigation }) => {
  const pathname = usePathname();
  const isHomePage =
    pathname === "/" ||
    pathname === "/services/listing-media" ||
    pathname === "/services/social-media-management";
  const { isMobile } = useViewport();
  const [activeDropdown, setActiveDropdown] = useState<LinkDetails | null>(
    null
  );
  const [previousDropdown, setPreviousDropdown] = useState<LinkDetails | null>(
    null
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMouseInHeader, setIsMouseInHeader] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(() => {
    if (typeof window !== "undefined") {
      // Check if this is a page refresh
      const isPageRefresh =
        window.performance.navigation.type ===
        window.performance.navigation.TYPE_RELOAD;
      if (isPageRefresh) {
        sessionStorage.removeItem("announcementDismissed");
        return true;
      }
      return sessionStorage.getItem("announcementDismissed") !== "true";
    }
    return true;
  });

  useEffect(() => {
    if (!showAnnouncement) {
      sessionStorage.setItem("announcementDismissed", "true");
    }
  }, [showAnnouncement]);

  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const { windowWidth } = useViewport();

  useEffect(() => {
    if (!isMouseInHeader) {
      setPreviousDropdown(activeDropdown);
      setActiveDropdown(null);
    }
  }, [isMouseInHeader, activeDropdown, isAnimating, windowWidth]);

  const handleMouseEnter = async (nav: LinkDetails) => {
    if (nav.dropdown) {
      setIsMouseInHeader(true);
      setIsActive(true);

      if (activeDropdown && activeDropdown !== nav) {
        setIsAnimating(true);
        setPreviousDropdown(activeDropdown);
        setActiveDropdown(null);

        await new Promise((resolve) => setTimeout(resolve, 300));

        setActiveDropdown(nav);
        setPreviousDropdown(null);
        setIsAnimating(false);
      } else {
        setActiveDropdown(nav);
      }
    } else {
      setPreviousDropdown(activeDropdown);
      setActiveDropdown(null);
      // setIsActive(false);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseInHeader(false);
    if (!isMobile) {
      setIsActive(false);
    }
  };

  // Handle dropdown height animation
  useEffect(() => {
    if (!dropdownRef.current) return;

    if (isActive) {
      // console.log("Active Dropdown", activeDropdown);
      // console.log("Previous Dropdown", previousDropdown);

      gsap.fromTo(
        dropdownRef.current,
        { height: dropdownRef.current.offsetHeight },
        { height: "auto", delay: 0.05, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        footerRef.current,
        { height: 0 },
        { height: "auto", duration: 0.01, ease: "power2.out" }
      );
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(footerRef.current, {
        height: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isActive, activeDropdown, previousDropdown]);

  return (
    <div
      ref={headerRef}
      className={`${
        isHomePage ? "fixed sm:relative" : "fixed"
      } flex flex-col z-[99999] w-full max-w-[100vw]`}
      // onMouseLeave={() => setIsActive(false)}
    >
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className=" bg-goldenbrown flex flex-row items-center justify-between sm:justify-end px-[1rem] py-[0.5rem] pn-regular-12 text-black select-none relative z-[2001]">
          <p className="md:mr-[2rem] space-x-[0.5rem] select-text">
            <a
              href="tel:+1 888-300-5068"
              className="underline cursor-select-hover"
            >
              Call: +1 888-300-5068
            </a>
            <span className="font-bold">OR</span>
            <span>Chat with our LIVE Agent!</span>
            <span className="hidden sm:inline-block">|</span>
            {/* <span className="block sm:hidden"><br/></span> */}
            <span>
              <br className="block sm:hidden" />
              Support Hours: 8:00AM - 8:00PM MST
            </span>
            {/* Opt-in compliance tooltip */}
            <span className="relative group ml-2 cursor-tooltip-hover">
              <span className="pn-regular-12 underline">SMS Terms</span>
              <div className="absolute top-full mb-2 hidden group-hover:flex group-focus:flex bg-charcoal text-white p-2 rounded whitespace-pre-wrap z-20 text-center">
                <p className="">
                  BY TEXTING THE NUMBER ABOVE, YOU AGREE TO RECEIVE MARKETING
                  MESSAGES FROM <span className="italic">VIRTUAL XPOSURE</span>.
                  <br />
                  <span className="text-center text-[0.7rem] flex flex-col items-center justify-center">
                    <span>MESSAGE & DATA RATES MAY APPLY || TEXT &apos;HELP&apos; FOR
                    ASSISTANCE</span>
                    <span>MESSAGE FREQUENCY MAY VARY || TEXT &apos;STOP&apos; TO
                    UNSUBSCRIBE</span>
                  </span>
                </p>
              </div>
            </span>
          </p>
          <button
            className=" size-[2em] md:size-[1em] cursor-select-hover"
            onClick={() => setShowAnnouncement(false)}
            aria-label="Close announcement"
          >
            {ServiceIcons.close}
          </button>
        </div>
      )}
      <div
        id="header"
        onMouseLeave={() => handleMouseLeave()}
        className={`relative group/header transition-all duration-500 ${className} z-[2000] flex flex-col size-full h-auto pl-[1rem] p-[1rem] sm:p-[0.5rem] sm:pl-[1rem] ${
          isActive ? "bg-ash" : "bg-ash/75 hover:bg-ash"
        } [backdrop-filter:_saturate(180%)_blur(20px)] fixed top-0 left-0 right-0`}
      >
        {/* Inverted Border Radius */}
        {isHomePage && (
          <div className="absolute flex flex-row items-start justify-between w-full left-0 -bottom-[1rem] pointer-events-none">
            <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
              <div
                className={`absolute bottom-0 right-0 flex flex-col bg-ash [backdrop-filter:_saturate(180%)_blur(20px)] transition-all duration-500 size-[5rem] inv-rad inv-rad-b-r-4 ${
                  isMouseInHeader ? "" : "opacity-0"
                }`}
              />
            </div>
            <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
              <div
                className={`absolute bottom-0 left-0 flex flex-col bg-ash [backdrop-filter:_saturate(180%)_blur(20px)] transition-all duration-500 size-[5rem] inv-rad inv-rad-b-l-4 ${
                  isMouseInHeader ? "" : "opacity-0"
                }`}
              />
            </div>
          </div>
        )}

        {/* Header Content */}
        <div
          className={`relative flex items-center justify-between gap-10 z-[9999]`}
        >
          {/* Logo */}
          <div className="cursor-select-hover relative lg:max-w-[10vw] select-none">
            <TransitionLink
              href={"/"}
              className="flex size-full aspect-[1748/1072] overflow-hidden"
              passHref
            >
              <Image
                src={logo}
                alt="logo"
                className="w-[2rem] sm:w-[3rem]"
                placeholder="blur"
                quality={75}
              />
            </TransitionLink>
          </div>

          {/* Navigation */}
          <nav className="hidden pn-regular-16 items-center justify-end gap-[1rem] transition-all duration-1000 md:flex w-fit">
            {navigation.map((nav, index) => (
              <div
                key={index}
                className="flex relative group items-center justify-center"
                onMouseEnter={() => {
                  if (nav.dropdown) {
                    handleMouseEnter(nav);
                  } else {
                    handleMouseLeave();
                  }
                }}
                onMouseDown={() => handleMouseLeave()}
              >
                <HoverWrapper>
                  {nav.href === "#services" ? (
                    <Link
                      href={nav.href}
                      className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full text-white"
                    >
                      <FlipLink>{nav.title}</FlipLink>
                      {nav.dropdown && (
                        <span className="ml-1 inline-block transition-transform duration-200">
                          <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                        </span>
                      )}
                    </Link>
                  ) : (
                    <TransitionLink
                      href={nav.href}
                      className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full text-white"
                    >
                      <FlipLink>{nav.title}</FlipLink>
                      {nav.dropdown && (
                        <span className="ml-1 inline-block transition-transform duration-200">
                          <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                        </span>
                      )}
                    </TransitionLink>
                  )}
                </HoverWrapper>
              </div>
            ))}

            {/* CTA button */}
            <HoverWrapper className="group/cta cursor-select-hover">
              <Link
                href="https://listings.virtualxposure.com/order"
                className="button !bg-transparent !text-white pn-regular-16 relative hidden md:flex !border-white shadow-customShadow shadow-ash/5 group-hover/cta:shadow-goldenrod/5 group-hover/cta:!bg-white group-hover/cta:!text-ash transition-all"
                onMouseDown={() => handleMouseLeave()}
              >
                <FlipLink>Book Now</FlipLink>
                <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                  {ServiceIcons.arrow}
                </div>
              </Link>
            </HoverWrapper>
          </nav>

          {/* Mobile Menu button */}
          <div
            onClick={() => setIsActive(!isActive)}
            className="flex md:hidden items-center justify-end gap-2 cursor-pointer h-auto"
          >
            <div className="relative flex flex-col items-center justify-center gap-1">
              <div
                className={`w-6 h-[2px] bg-white transform transition-all duration-300 origin-center ${
                  isActive ? "rotate-45 translate-y-[3px]" : ""
                }`}
              />
              <div
                className={`w-6 h-[2px] bg-white transform transition-all duration-300 origin-center ${
                  isActive ? "-rotate-45 -translate-y-[3px]" : ""
                }`}
              />
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            navigation={navigation}
            isActive={
              isActive
              //  && scrollDirection !== "down"
            }
            onClose={() => setIsActive(false)}
          />
        </div>

        {/* Dropdown Menu */}
        {/* {(activeDropdown || previousDropdown) && ( */}
        <div
          ref={dropdownRef}
          className="relative flex flex-col overflow-hidden"
        >
          <Nav
            key={`nav-${activeDropdown?.title || previousDropdown?.title}`}
            activeDropdown={activeDropdown || previousDropdown}
            // isVisible={isActive}
          />
          <div ref={footerRef} className="hidden sm:inline-block">
            <Footer />
          </div>
        </div>
        {/* )} */}
      </div>

      {/* Backdrop */}
      <>
        <div
          className={`hidden sm:inline-block fixed inset-0 bg-black/50 [backdrop-filter:_saturate(180%)_blur(20px)] z-[1998] transition-opacity duration-500 ${
            isActive
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsActive(false)}
          onMouseEnter={() => setIsActive(false)}
        />
        <div
          className={`inline-block pointer-events-none sm:hidden fixed inset-0 bg-black/50 [backdrop-filter:_saturate(180%)_blur(20px)] z-[1998] transition-opacity duration-500 ${
            isActive
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsActive(false)}
        />
      </>
    </div>
  );
};

export default Header;
