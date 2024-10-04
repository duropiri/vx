"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { getChars } from "@/components/animations/GetChars";

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35 } },
  closed: { opacity: 0, transition: { duration: 0.35 } },
};

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

const blur = {
  initial: { filter: "blur(0px)", opacity: 1 },
  open: { filter: "blur(4px)", opacity: 0.6, transition: { duration: 0.3 } },
  closed: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.3 } },
};

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

interface LinkDetails {
  title: string;
  href: string;
  src?: string;
}

interface NavProps {
  links: LinkDetails[];
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

const Nav: React.FC<NavProps> = ({ links }) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden flex flex-row items-start justify-end size-full text-white"
    >
      <div className="flex flex-col items-end justify-between size-full">
        <div className="flex flex-wrap mt-10 justify-end">
          {links.map((link, index) => (
            <Link key={`l_${index}`} href={link.href} passHref>
              <motion.p
                onMouseOver={() => setSelectedLink({ isActive: true, index })}
                onMouseLeave={() => setSelectedLink({ isActive: false, index })}
                variants={blur}
                animate={
                  selectedLink.isActive && selectedLink.index !== index
                    ? "open"
                    : "closed"
                }
                className="m-0 flex overflow-hidden large-text sm:text-[10vw] md:text-[3vw] pl-8 pt-2 font-light "
              >
                {getChars(link.title)}
              </motion.p>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
      {links[selectedLink.index].src && (
        <div className="flex relative w-[30vw] h-[300px]">
          <ImageModal
            src={links[selectedLink.index].src || ""}
            isActive={selectedLink.isActive}
          />
        </div>
      )}
    </motion.div>
  );
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-wrap mt-10 small-text uppercase gap-10 text-white">
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end justify-end"
        >
          <span className="font-extrabold mr-2">Made by:</span>{" "}
          @relaydigitalmktg
        </motion.li>
      </ul>
      <ul className="w-full md:w-auto mt-2 list-none p-0">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end justify-end"
        >
          <Link
            href="/privacy-policy"
            aria-label="Visit Privacy Policy Page"
            passHref
          >
            Privacy Policy
          </Link>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-end justify-end"
        >
          <Link
            href="/terms"
            aria-label="Visit Terms and Conditions Page"
            passHref
          >
            Terms & Conditions
          </Link>
        </motion.li>
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
  const [isActive, setIsActive] = useState(false);
  // const [selectedLink, setSelectedLink] = useState({
  //   isActive: false,
  //   index: 0,
  // });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define animation variants
  const navdockVariants = {
    hidden: {
      width: "3.5rem", // Just enough to fit the logo
      opacity: 0,
      transition: { duration: 0 },
    },
    expanded: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0,
      },
    },
  };

  const logoVariants = {
    hidden: {
      x: 150, // Centered
      width: "2.25rem",
      transition: { duration: 0 },
    },
    expanded: {
      x: 0, // Move to the left
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 0, transition: { duration: 0 } },
    visible: { opacity: 1, y: 0, transition: { delay: 0, duration: 0.5 } },
  };

  return (
    <>
      <div
        id="header"
        className={`transition-all duration-500 ${className} z-[999] flex flex-col size-full h-auto p-[0.438rem] pl-[1.5rem] ${
          isActive ? "" : "mix-blend-differences"
        } ${isScrolled ? "opacity-0 pointer-events-none" : ""}`}
      >
        {/* Original Header */}
        <div className="relative flex size-full items-center justify-between gap-10">
          {/* Logo */}
          <div className="cursor-select-hover relative max-w-[10vw] ">
            <Link
              href={"/"}
              className="flex size-full h-[1.375rem] overflow-hidden"
              passHref
            >
              {/* <img src="/images/logo5.webp" alt="Loading" className="" /> */}
              <Image
                src="/images/logo5.webp"
                alt="logo"
                width={36}
                height={22}
                className=""
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav
            className={`pn-regular-16 flex items-center justify-end gap-[1.313rem] ${
              isActive ? "opacity-0 pointer-events-none" : ""
            } hidden transition-all duration-1000 md:flex size-full max-w-[55vw]`}
          >
            {navigation.map((nav, index) => (
              <HoverWrapper
                key={index}
                className="cursor-select-hover text-nowrap transition-all duration-300"
              >
                <Link key={`l_${index}`} href={nav.href} passHref>
                  <FlipLink>{getChars(nav.title)}</FlipLink>
                </Link>
              </HoverWrapper>
            ))}

            {/* CTA */}
            <HoverWrapper className="cursor-select-hover">
              <Link
                href={"/#contact"}
                className="pn-regular-16 relative group hidden md:flex button !bg-goldenbrown text-ash shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 mix-blend-normal"
                passHref
              >
                <FlipLink>{getChars("Contact Us")}</FlipLink>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_73_5969)">
                    <path
                      d="M14.6665 6.33398L6.33319 14.6673"
                      stroke="#1B1A17"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.16656 6.33398H14.6666V13.834"
                      stroke="#1B1A17"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_73_5969">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.499878 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </HoverWrapper>
          </nav>

          {/* Mobile Menu */}
          <div
            onClick={() => setIsActive(!isActive)}
            className="group flex md:hidden items-center justify-end gap-2 cursor-pointer"
          >
            <div className="relative flex flex-col items-center justify-center">
              <div
                className={`w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${
                  isActive ? "rotate-45 translate-y-[0.175rem]" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-white transform transition duration-300 ease-in-out mt-1 ${
                  isActive ? "-rotate-45 -translate-y-[0.175rem]" : ""
                }`}
              />
            </div>
            <div className="group-hover:translate-x-1 duration-300 relative flex flex-col items-start justify-center size-full small-text">
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
                className="absolute m-0"
              >
                Menu
              </motion.p>
              <motion.p
                variants={opacity}
                animate={isActive ? "open" : "closed"}
                className=" m-0"
              >
                Close
              </motion.p>
            </div>
          </div>
        </div>

        {/* <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="absolute bg-transparent backdrop-blur-lg opacity-50 size-full top-full left-0"
      /> */}
        <AnimatePresence>
          {isActive && <Nav links={navigation} />}
        </AnimatePresence>
      </div>

      {/* Navdock */}
      <div className="fixed flex flex-row items-center justify-center top-[2.5rem] w-[100dvw] h-[3.5rem] z-[1000]">
        <motion.div
          className={`flex flex-row items-center justify-center top-[2.5rem] bg-ash text-white rounded-[1.5rem] border-[0.5rem] border-ash overflow-hidden ${
            isScrolled ? "" : "hidden"
          }`}
          initial="hidden"
          animate={isScrolled ? "expanded" : "hidden"}
          variants={navdockVariants}
        >
          {/* Logo always visible */}
          <div className="gap-[1.25rem] mx-auto flex justify-between items-center">
            <motion.div
              className="bg-ash z-10 w-[2.25rem] h-[1.375rem] ml-[1.5rem]"
              initial="hidden"
              animate={isScrolled ? "expanded" : "hidden"}
              variants={logoVariants}
            >
              <Link
                href="/"
                passHref
                className="cursor-select-hover flex size-full h-[1.375rem] overflow-hidden"
              >
                <Image
                  src="/images/logo2.png"
                  alt="logo"
                  width={36}
                  height={22}
                  className=""
                />
              </Link>
            </motion.div>
            {/* Navigation items and CTA (hidden at first, revealed later) */}
            <motion.nav
              className="flex flex-row gap-[1.25rem]"
              variants={itemVariants}
              initial="hidden"
              animate={isScrolled ? "visible" : "hidden"}
            >
              {navigation.map((nav, index) => (
                <HoverWrapper
                  key={index}
                  className="cursor-select-hover text-nowrap transition-all duration-300"
                  // variants={itemVariants}
                >
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isScrolled ? "visible" : "hidden"}
                  >
                    <Link key={`l_${index}`} href={nav.href} passHref>
                      <FlipLink>{getChars(nav.title)}</FlipLink>
                    </Link>
                  </motion.div>
                </HoverWrapper>
              ))}
            </motion.nav>

            {/* CTA */}
            <HoverWrapper className="cursor-select-hover">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isScrolled ? "visible" : "hidden"}
              >
                <Link
                  href={"/#contact"}
                  className="pn-regular-16 relative group hidden md:flex button !border-none !bg-goldenbrown text-ash shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 !rounded-[0.938rem] !py-[0.688rem] !px-[1.25rem]"
                  passHref
                >
                  <FlipLink>{getChars("Contact Us")}</FlipLink>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_73_5969)">
                      <path
                        d="M14.6665 6.33398L6.33319 14.6673"
                        stroke="#1B1A17"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.16656 6.33398H14.6666V13.834"
                        stroke="#1B1A17"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_73_5969">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.499878 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </motion.div>
            </HoverWrapper>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
