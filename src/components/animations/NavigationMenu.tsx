// "use client";
import {
  ReactNode,
  useEffect,
  useRef,
  // useEffect,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { gsap } from "@/utils/gsap";

import logo from "@/../../public/assets/images/logo2-nospace.webp";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import arrowRedirectWhite from "@/../../public/assets/svgs/arrow-redirect-cta-white.svg";
import { usePathname } from "next/navigation";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { FooterHelpLinks } from "@/data/navLinks";
import { TransitionLink } from "../TransitionLink";
import { useViewport } from "@/contexts/ViewportContext";
// import { AnimatedText } from "@/components/animations/GetChars";

// Custom hook to track scroll direction
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY === 0) {
        setScrollDirection("up");
        return;
      }

      const direction = scrollY > lastScrollY ? "down" : "up";
      if (Math.abs(scrollY - lastScrollY) > 5) {
        setScrollDirection(direction);
      }
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [lastScrollY]);

  return scrollDirection;
};

const transition = { duration: 0.5, ease: [0.76, 0, 0.24, 1] };

const height = {
  initial: { height: 0 },
  enter: { height: "auto", transition },
  exit: { height: 0, transition },
};

export const translate = {
  initial: { y: "100%", opacity: 0 },
  enter: (i: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
};

const slideTransition = {
  initial: { opacity: 0, x: -20 },
  enter: { opacity: 1, x: 0, transition },
  exit: { opacity: 0, x: 20, transition: { ...transition, duration: 0.3 } },
};

// Custom ease that matches [0.76, 0, 0.24, 1]
const customEase = "custom-ease";
gsap.registerEase(customEase, function (progress) {
  return gsap.parseEase("power4.inOut")(progress); // This is close to the cubic-bezier curve
});

// Height animation
export const animateHeight = {
  initial: (element) => {
    gsap.set(element, {
      height: 0,
    });
  },
  enter: (element) => {
    return gsap.to(element, {
      height: "auto",
      duration: 0.5,
      ease: customEase,
    });
  },
  exit: (element) => {
    return gsap.to(element, {
      height: 0,
      duration: 0.5,
      ease: customEase,
    });
  },
};

// Translate animation
export const animateTranslate = {
  initial: (element) => {
    gsap.set(element, {
      yPercent: 100,
      opacity: 0,
    });
  },
  enter: (element, delay = 0) => {
    return gsap.to(element, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: customEase,
      delay,
    });
  },
};

// Slide animation
export const animateSlide = {
  initial: (element) => {
    gsap.set(element, {
      opacity: 0,
      x: -20,
    });
  },
  enter: (element) => {
    return gsap.to(element, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: customEase,
    });
  },
  exit: (element) => {
    return gsap.to(element, {
      opacity: 0,
      x: 20,
      duration: 0.3,
      ease: customEase,
    });
  },
};

// interface ImageProps {
//   src: string;
//   isActive: boolean;
// }
//
// const ImageModal: React.FC<ImageProps> = ({ src, isActive }) => {
//   return (
//     <>
//       {src && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isActive ? 1 : 0 }}
//           className=" inset-0 -z-10"
//         >
//           <Image
//             src={`/img/${src}`}
//             alt="Selected link image"
//             className="size-full object-cover"
//           />
//         </motion.div>
//       )}
//     </>
//   );
// };

interface DropdownItem {
  icon: ReactNode;
  title: string;
  href: string;
}

interface InstantLink {
  category: string;
  title: string;
  href: string;
}

interface Dropdown {
  instantLinks?: InstantLink[];
  items: DropdownItem[];
}

interface LinkDetails {
  title: string;
  href: string;
  src?: string;
  dropdown?: Dropdown;
}

interface NavProps {
  activeDropdown: LinkDetails | null;
}

const Nav: React.FC<NavProps> = ({ activeDropdown }) => {
  if (!activeDropdown?.dropdown) return null;

  const groupedLinks = activeDropdown.dropdown.instantLinks?.reduce(
    (acc, link) => {
      if (!acc[link.category]) {
        acc[link.category] = [];
      }
      acc[link.category].push(link);
      return acc;
    },
    {} as Record<string, InstantLink[]>
  );

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden flex flex-col items-start justify-center size-full text-white"
    >
      <div className="overflow-hidden flex flex-row items-start justify-center size-full text-white">
        {/* Services Grid */}
        <motion.div
          variants={slideTransition}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex flex-col col-span-3 pr-[4rem] py-[2rem] h-full self-stretch"
        >
          <h3 className="text-sm font-medium text-white/40 mb-5">Services</h3>
          <div className="grid gap-[1rem]">
            {activeDropdown.dropdown.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <TransitionLink
                  href={item.href}
                  className="cursor-select-hover group inline-block w-fit"
                >
                  <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                    <div className="flex-col items-center p-2 rounded-lg bg-charcoal/20 border-none border group-hover:bg-charcoal/80 transition-all duration-200">
                      {/* <Image
                        src={item.icon}
                        alt={item.title}
                        height={20}
                        width={20}
                        className="aspect-square transition-all duration-200 group-hover:scale-110 filter grayscale group-hover:filter-none group-hover:grayscale-0 text-white"
                      /> */}
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
                </TransitionLink>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links Section */}
        {groupedLinks && (
          <motion.div
            variants={slideTransition}
            initial="initial"
            animate="enter"
            exit="exit"
            className="col-span-5 pr-[2rem] py-[2rem]"
          >
            <h3 className="text-sm font-medium text-white/40 mb-5">
              Quick links
            </h3>
            <div className="grid gap-6">
              {groupedLinks &&
                Object.entries(groupedLinks).map(([category, links]) => (
                  <div key={category} className="space-y-4">
                    <div className="space-y-2">
                      {links.map((link, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex"
                        >
                          <HoverWrapper className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full text-white">
                            <TransitionLink
                              href={link.href}
                              className="inline-block w-fit cursor-select-hover text-white/80 hover:text-white transition-colors duration-200 pn-regular-16"
                            >
                              <FlipLink>{link.title}</FlipLink>
                            </TransitionLink>
                          </HoverWrapper>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
};

const MobileMenu: React.FC<{
  navigation: LinkDetails[];
  isActive: boolean;
  onClose: () => void;
}> = ({ navigation, isActive, onClose }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isActive ? "auto" : 0,
        opacity: isActive ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed left-0 top-[71.23px] w-full bg-ash/90 text-white backdrop-blur-sm z-[1999] overflow-y-scroll max-h-[calc(100vh-3.85rem)]"
    >
      <div className="p-6 flex flex-col gap-6">
        {navigation.map((nav, index) => (
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

            {/* Dropdown Content */}
            {nav.dropdown && (
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: activeSubmenu === nav.title ? "auto" : 0,
                }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="overflow-hidden pl-4"
              >
                <div className="flex flex-col mt-4 gap-4">
                  {nav.dropdown.items.map((item, idx) => (
                    <TransitionLink
                      key={idx}
                      href={item.href}
                      className="flex items-center gap-3 text-white/70 hover:text-white"
                      onClick={onClose}
                    >
                      {/* <Image
                        src={item.icon}
                        alt={item.title}
                        height={16}
                        width={16}
                        className="opacity-70"
                      /> */}
                      <span className="pn-regular-16">{item.title}</span>
                    </TransitionLink>
                  ))}

                  {nav.dropdown.instantLinks && (
                    <>
                      <p className="text-sm font-medium text-white/40 pl-[2rem]">
                        Quick links
                      </p>
                      {nav.dropdown.instantLinks?.map((link, idx) => (
                        <TransitionLink
                          key={`quick-${idx}`}
                          href={link.href}
                          className="pl-[2rem] pn-regular-16 text-white/70 hover:text-white"
                          onClick={onClose}
                        >
                          {link.title}
                        </TransitionLink>
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        ))}

        {/* Mobile CTA */}
        <TransitionLink
          href="https://listings.virtualxposure.com/order"
          className="button pn-regular-16 text-center pn-regular-16 text-black !mt-4"
          onClick={onClose}
        >
          Book Now
          <Image
            alt="arrow"
            src={arrowRedirect}
            className="ml-2"
            width={20}
            height={20}
          />
        </TransitionLink>
      </div>
    </motion.div>
  );
};

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-wrap w-full justify-between mt-10 small-text gap-10 text-white pn-regular-16 ">
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end justify-end text-white/10 text-[0.5rem]"
        >
          <span className="mr-2">Made by:</span> @relaydigitalmktg
        </motion.li>
      </ul>
      <ul className="flex flex-row gap-[0.5rem] w-full md:w-auto mt-2 list-none p-0">
        {FooterHelpLinks.map((link, index) => (
          <motion.li
            key={index}
            custom={[0.3, 0]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
            className="flex items-end justify-end cursor-select-hover text-[0.8rem] text-white/70 hover:text-white transition-all"
          >
            <HoverWrapper className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full text-white">
              <TransitionLink href={link.href} aria-label={link.title} passHref>
                <FlipLink>{link.title}</FlipLink>
              </TransitionLink>
            </HoverWrapper>
          </motion.li>
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
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (!isMouseInHeader) {
      setPreviousDropdown(activeDropdown);
      setActiveDropdown(null);
    }
  }, [isMouseInHeader, activeDropdown, isAnimating]);

  const handleMouseEnter = async (nav: LinkDetails) => {
    if (nav.dropdown) {
      setIsMouseInHeader(true);

      if (activeDropdown && activeDropdown !== nav) {
        // If there's an active dropdown and it's different from the new one
        setIsAnimating(true);
        setPreviousDropdown(activeDropdown);
        setActiveDropdown(null);

        // Wait for exit animation to complete
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Start enter animation for new dropdown
        setActiveDropdown(nav);
        setPreviousDropdown(null);
        setIsAnimating(false);
      } else {
        // If no active dropdown or same dropdown
        setActiveDropdown(nav);
      }
    } else {
      setPreviousDropdown(activeDropdown);
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseInHeader(false);
    // const headerElement = document.getElementById("header");
    // const relatedTarget = e.relatedTarget as Element;

    // if (headerElement && !headerElement.contains(relatedTarget)) {
    //   setActiveDropdown(null);
    // }
  };

  return (
    <motion.div
      className={`${
        isHomePage ? "fixed sm:relative" : "fixed"
      } flex z-[99999] w-full max-w-[100vw]`}
      initial={{ y: 0 }}
      animate={{
        y: scrollDirection === "down" ? -100 : 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <div
        id="header"
        onMouseLeave={handleMouseLeave}
        className={`relative group/header transition-all duration-500 ${className} z-[2000] flex flex-col size-full h-auto pl-[1.5rem] p-[1rem] sm:p-[0.5rem] sm:pl-[1rem] ${isHomePage ? "bg-ash" : "bg-ash/90"} backdrop-blur-sm fixed top-0 left-0 right-0 ${
          isHomePage || isMobile ? "" : "opacity-60 hover:opacity-100"
        }`}
      >
        {/* Inverted Border Radius */}
        {isHomePage && (
          <>
            <div className="absolute flex flex-row items-start justify-between w-full left-0 -bottom-[1rem]">
              <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
                <div
                  className={`absolute bottom-0 right-0 flex flex-col bg-ash/90 backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-b-r-4 ${
                    isMouseInHeader ? "" : "opacity-0"
                  }`}
                />
              </div>
              <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
                <div
                  className={`absolute bottom-0 left-0 flex flex-col bg-ash/90 backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-b-l-4 ${
                    isMouseInHeader ? "" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          </>
        )}

        {/* Original Header */}
        <div className="relative flex items-center justify-between gap-10 z-[9999]">
          {/* Logo */}
          <div className="cursor-select-hover relative lg:max-w-[10vw] ">
            <TransitionLink
              href={"/"}
              className="flex size-full aspect-[1748/1072] overflow-hidden"
              passHref
            >
              <Image
                src={logo}
                alt="logo"
                className="w-[4rem] sm:w-[3rem]"
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
              >
                <HoverWrapper className="">
                  <TransitionLink
                    href={nav.href}
                    className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full text-white"
                  >
                    <FlipLink>
                      {/* <AnimatedText text={nav.title} /> */}
                      {nav.title}
                    </FlipLink>
                    {nav.dropdown && (
                      <span className="ml-1 inline-block transition-transform duration-200">
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                      </span>
                    )}
                  </TransitionLink>
                </HoverWrapper>
              </div>
            ))}

            {/* CTA button*/}
            <HoverWrapper className="">
              <TransitionLink
                href="https://listings.virtualxposure.com/order"
                className="group button !bg-transparent !text-white cursor-select-hover pn-regular-16 relative hidden md:flex !border-white shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-105 transition-all"
              >
                <FlipLink>
                  {/* <AnimatedText text="Book Now" /> */}
                  Book Now
                </FlipLink>
                <Image
                  alt="arrow"
                  src={arrowRedirectWhite}
                  className="text-white group-hover:rotate-45 transition-all duration-300"
                  quality={75}
                />
              </TransitionLink>
            </HoverWrapper>
          </nav>

          {/* Mobile Menu button pn-regular-16 */}
          <div
            onClick={() => setIsActive(!isActive)}
            className="flex md:hidden items-center justify-end gap-2 cursor-pointer"
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
            isActive={isActive && scrollDirection !== "down"}
            onClose={() => setIsActive(false)}
          />
        </div>

        {/* Dropdown Menu using Nav component */}
        <AnimatePresence mode="sync">
          {(activeDropdown || previousDropdown) &&
            scrollDirection !== "down" && (
              <Nav
                key={activeDropdown?.title || previousDropdown?.title}
                activeDropdown={activeDropdown || previousDropdown}
              />
            )}
        </AnimatePresence>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-[1998]"
            onClick={() => setIsActive(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
