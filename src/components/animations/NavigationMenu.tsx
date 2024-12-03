// "use client";
import {
  useEffect,
  // useEffect,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { getChars } from "@/components/animations/GetChars";

import logo from "@/../../public/images/logo-black-black.webp";
// import chevronDown from "@/../../public/svgs/chevron-down.svg";
import arrowRedirect from "@/../../public/svgs/arrow-redirect-cta-white.svg";
// import arrowRedirectBlack from "@/../../public/svgs/arrow-redirect-cta.svg";
import { usePathname } from "next/navigation";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { FooterHelpLinks } from "@/data/navLinks";

// Custom hook to track scroll direction
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      
      // Always show header at the top of the page
      if (scrollY === 0) {
        setScrollDirection("up");
        return;
      }

      const direction = scrollY > lastScrollY ? "down" : "up";
      
      // Only update direction if the scroll is more than 5px to prevent tiny movements
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

// const opacity = {
//   initial: { opacity: 0 },
//   open: { opacity: 1, transition: { duration: 0.35 } },
//   closed: { opacity: 0, transition: { duration: 0.35 } },
// };

const height = {
  initial: { height: 0 },
  enter: { height: "auto", transition },
  exit: { height: 0, transition },
};

// const background = {
//   initial: { height: 0 },
//   open: { height: "100vh", transition },
//   closed: { height: 0, transition },
// };

// const blur = {
//   initial: { filter: "blur(0px)", opacity: 1 },
//   open: { filter: "blur(4px)", opacity: 0.6, transition: { duration: 0.3 } },
//   closed: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.3 } },
// };

export const translate = {
  initial: { y: "100%", opacity: 0 },
  enter: (i: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: [number, number]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

interface DropdownItem {
  icon: string;
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

// interface BodyProps {
//   links: LinkDetails[];
//   selectedLink: { isActive: boolean; index: number };
//   setSelectedLink: React.Dispatch<
//     React.SetStateAction<{ isActive: boolean; index: number }>
//   >;
// }

interface FooterProps {}

interface ImageProps {
  src: string;
  isActive: boolean;
}

interface HeaderProps {
  className?: string;
  navigation: LinkDetails[];
}

const Nav: React.FC<NavProps> = ({ activeDropdown }) => {
  if (!activeDropdown?.dropdown) return null;

  // const [selectedLink, setSelectedLink] = useState({
  //   isActive: false,
  //   index: 0,
  // });

  // Group instant links by category
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
    <>
      <motion.div
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit"
        className="overflow-hidden flex flex-col items-start justify-center size-full text-white"
      >
        <div className="overflow-hidden flex flex-row items-start justify-center size-full text-white">
          {/* Services Grid */}
          <div className="flex flex-col col-span-3 pr-[4rem] py-[2rem] h-full self-stretch">
            <h3 className="text-sm font-medium text-black/40 mb-5">Services</h3>
            <div className="grid gap-[1rem]">
              {activeDropdown.dropdown.items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="cursor-select-hover group inline-block w-fit"
                >
                  <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                    <div className="flex-col items-center p-2 rounded-lg bg-ash/10 border-none border group-hover:bg-charcoal/10 transition-all duration-200">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        height={20}
                        width={20}
                        className="transition-all duration-200 group-hover:scale-110 filter grayscale group-hover:filter-none group-hover:grayscale-0 text-ash"
                      />
                    </div>
                    <HoverWrapper className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full">
                      <div className="inline-block w-fit text-black/80 group-hover:text-black transition-colors duration-200 pn-regular-22">
                        <FlipLink>{item.title}</FlipLink>
                      </div>
                    </HoverWrapper>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-5 pr-[2rem] py-[2rem]">
            <h3 className="text-sm font-medium text-black/40 mb-5">
              Quick links
            </h3>
            <div className="grid gap-6">
              {groupedLinks &&
                Object.entries(groupedLinks).map(([category, links]) => (
                  <div key={category} className="space-y-4">
                    {/* <h4 className="text-sm font-medium text-black/40">
                    {category}
                  </h4> */}
                    <div className="space-y-2">
                      {links.map((link, index) => (
                        <div key={index} className="flex">
                          <HoverWrapper className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full">
                            <Link
                              href={link.href}
                              className="inline-block w-fit cursor-select-hover text-black/80 hover:text-black transition-colors duration-200 pn-regular-22"
                            >
                              <FlipLink>{link.title}</FlipLink>
                            </Link>
                          </HoverWrapper>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
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
      className="fixed left-0 top-[3.85rem] w-full bg-white/80 backdrop-blur-sm z-[1999] overflow-y-scroll max-h-[calc(100vh-3.85rem)]"
    >
      <div className="p-6 flex flex-col gap-6">
        {navigation.map((nav, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between items-center">
              <Link
                href={nav.href}
                className="pn-regular-28"
                onClick={() => !nav.dropdown && onClose()}
              >
                {nav.title}
              </Link>
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
                    <Link
                      key={idx}
                      href={item.href}
                      className="flex items-center gap-3 text-black/70 hover:text-black"
                      onClick={onClose}
                    >
                      {/* <Image
                        src={item.icon}
                        alt={item.title}
                        height={16}
                        width={16}
                        className="opacity-70"
                      /> */}
                      <span className="pn-regular-22">{item.title}</span>
                    </Link>
                  ))}

                  {nav.dropdown.instantLinks && (
                    <>
                      <p className="text-sm font-medium text-black/40 pl-[2rem]">
                        Quick links
                      </p>
                      {nav.dropdown.instantLinks?.map((link, idx) => (
                        <Link
                          key={`quick-${idx}`}
                          href={link.href}
                          className="pl-[2rem] pn-regular-22 text-black/70 hover:text-black"
                          onClick={onClose}
                        >
                          {link.title}
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        ))}

        {/* Mobile CTA */}
        <Link
          href="#contact"
          className="button dark pn-regular-22 text-center pn-regular-22 !mt-4"
          onClick={onClose}
        >
          Get In Touch
          <Image
            alt="arrow"
            src={arrowRedirect}
            className="ml-2"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </motion.div>
  );
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-wrap w-full justify-between mt-10 small-text gap-10 text-black pn-regular-22 ">
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end justify-end text-black/10 text-[0.5rem]"
        >
          <span className="mr-2">Made by:</span> @relaydigitalmktg
        </motion.li>
      </ul>
      <ul className="flex flex-row gap-[0.5rem] w-full md:w-auto mt-2 list-none p-0">
        {FooterHelpLinks.map((link, index) => (
          <motion.li
            custom={[0.3, 0]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
            className="flex items-end justify-end cursor-select-hover text-[0.8rem] text-black/70 hover:text-black transition-all"
          >
            <HoverWrapper className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full">
              <Link href={link.href} aria-label={link.title} passHref>
                <FlipLink>{link.title}</FlipLink>
              </Link>
            </HoverWrapper>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const ImageModal: React.FC<ImageProps> = ({ src, isActive }) => {
  return (
    <>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          className=" inset-0 -z-10"
        >
          <Image
            src={`/img/${src}`}
            alt="Selected link image"
            className="size-full object-cover"
          />
        </motion.div>
      )}
    </>
  );
};

const Header: React.FC<HeaderProps> = ({ className, navigation }) => {
  const pathname = usePathname();
  const isHomePage =
    pathname === "/" ||
    pathname === "/services/listing-media" ||
    pathname === "/services/social-media-management";
  const [activeDropdown, setActiveDropdown] = useState<LinkDetails | null>(
    null
  );
  const [isMouseInHeader, setIsMouseInHeader] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (!isMouseInHeader) {
      setActiveDropdown(null);
    }
  }, [isMouseInHeader, setIsMouseInHeader]);

  const handleMouseEnter = (nav: LinkDetails) => {
    // If nav has dropdown, show it; otherwise close any open dropdown
    setActiveDropdown(nav.dropdown ? nav : null);
    setIsMouseInHeader(true);
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
        className={`transition-all duration-500 ${className} z-[2000] flex flex-col size-full h-auto p-[1rem] lg:p-[1rem] lg:pl-[1.5rem] bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0`}
      >
        {/* Original Header */}
        <div className="relative flex size-full items-center justify-between gap-10 z-[9999]">
          {/* Logo */}
          <div className="cursor-select-hover relative lg:max-w-[10vw] ">
            <Link
              href={"/"}
              className="flex size-full h-[1.85rem] lg:h-[1.375rem] overflow-hidden"
              passHref
            >
              <Image
                src={logo}
                alt="logo"
                className="w-[3rem] lg:w-[2.25rem]"
                placeholder="blur"
                quality={80}
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden pn-regular-22 items-center justify-end gap-[1.313rem] transition-all duration-1000 md:flex size-full max-w-[55vw]">
            {navigation.map((nav, index) => (
              <div
                key={index}
                className="flex relative group items-center justify-center self-stretch"
                onMouseEnter={() => handleMouseEnter(nav)}
              >
                <HoverWrapper className="cursor-select-hover text-nowrap transition-all duration-300 flex items-center justify-center h-full">
                  <Link
                    href={nav.href}
                    className="flex h-full items-center justify-center"
                  >
                    <FlipLink>{getChars(nav.title)}</FlipLink>
                    {nav.dropdown && (
                      <span className="ml-1 inline-block transition-transform duration-200">
                        <ChevronDownIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                      </span>
                    )}
                  </Link>
                </HoverWrapper>
              </div>
            ))}

            {/* CTA button*/}
            <div className="pn-regular-22 relative hidden md:flex !border-none shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-105 transition-all">
              <HoverWrapper className="group button dark thin cursor-select-hover">
                <Link
                  href="#contact"
                  className="flex size-full gap-[1rem] items-center"
                >
                  <FlipLink>{getChars("Get In Touch")}</FlipLink>
                  <Image
                    alt="arrow"
                    src={arrowRedirect}
                    className="text-white group-hover:rotate-45 transition-all duration-300"
                    quality={80}
                  />
                </Link>
              </HoverWrapper>
            </div>
          </nav>

          {/* Mobile Menu button pn-regular-22 */}
          <div
            onClick={() => setIsActive(!isActive)}
            className="flex md:hidden items-center justify-end gap-2 cursor-pointer"
          >
            <div className="relative flex flex-col items-center justify-center gap-1">
              <div
                className={`w-6 h-[2px] bg-black transition-all duration-300 ${
                  isActive ? "rotate-45 translate-y-[3px]" : ""
                }`}
              />
              <div
                className={`w-6 h-[2px] bg-black transition-all duration-300 ${
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
        <AnimatePresence>
          {activeDropdown && scrollDirection !== "down" && (
            <Nav activeDropdown={activeDropdown} />
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-[1998]"
            onClick={() => setIsActive(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
