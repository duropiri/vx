// "use client";
// import {
//   // useEffect,
//   useState,
// } from "react";
import {
  motion,
  // AnimatePresence
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { getChars } from "@/components/animations/GetChars";

import logo from "@/../../public/images/logo-black-black.webp";
import arrowRedirect from "@/../../public/svgs/arrow-redirect-cta.svg";

// const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

// const opacity = {
//   initial: { opacity: 0 },
//   open: { opacity: 1, transition: { duration: 0.35 } },
//   closed: { opacity: 0, transition: { duration: 0.35 } },
// };

// const height = {
//   initial: { height: 0 },
//   enter: { height: "auto", transition },
//   exit: { height: 0, transition },
// };

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

interface LinkDetails {
  title: string;
  href: string;
  src?: string;
}

// interface NavProps {
//   links: LinkDetails[];
// }

// interface BodyProps {
//   links: LinkDetails[];
//   selectedLink: { isActive: boolean; index: number };
//   setSelectedLink: React.Dispatch<
//     React.SetStateAction<{ isActive: boolean; index: number }>
//   >;
// }

// interface FooterProps {}

// interface ImageProps {
//   src: string;
//   isActive: boolean;
// }

interface HeaderProps {
  className?: string;
  navigation: LinkDetails[];
}

// const Nav: React.FC<NavProps> = ({ links }) => {
//   const [selectedLink, setSelectedLink] = useState({
//     isActive: false,
//     index: 0,
//   });

//   return (
//     <motion.div
//       variants={height}
//       initial="initial"
//       animate="enter"
//       exit="exit"
//       className="overflow-hidden flex flex-row items-start justify-end size-full text-white"
//     >
//       <div className="flex flex-col items-end justify-between size-full">
//         <div className="flex flex-wrap mt-10 justify-end">
//           {links.map((link, index) => (
//             <Link key={`l_${index}`} href={link.href} passHref>
//               <motion.p
//                 onMouseOver={() => setSelectedLink({ isActive: true, index })}
//                 onMouseLeave={() => setSelectedLink({ isActive: false, index })}
//                 variants={blur}
//                 animate={
//                   selectedLink.isActive && selectedLink.index !== index
//                     ? "open"
//                     : "closed"
//                 }
//                 className="m-0 flex overflow-hidden large-text sm:text-[10vw] md:text-[3vw] pl-8 pt-2 font-light "
//               >
//                 {getChars(link.title)}
//               </motion.p>
//             </Link>
//           ))}
//         </div>
//         <Footer />
//       </div>
//       {links[selectedLink.index].src && (
//         <div className="flex relative w-[30vw] h-[300px]">
//           <ImageModal
//             src={links[selectedLink.index].src || ""}
//             isActive={selectedLink.isActive}
//           />
//         </div>
//       )}
//     </motion.div>
//   );
// };

// const Footer: React.FC<FooterProps> = () => {
//   return (
//     <div className="flex flex-wrap mt-10 small-text uppercase gap-10 text-white">
//       <ul className="w-full md:w-auto mt-2 list-none p-0">
//         <motion.li
//           custom={[0.3, 0]}
//           variants={translate}
//           initial="initial"
//           animate="enter"
//           exit="exit"
//           className="flex items-end justify-end"
//         >
//           <span className="font-extrabold mr-2">Made by:</span>{" "}
//           @relaydigitalmktg
//         </motion.li>
//       </ul>
//       <ul className="w-full md:w-auto mt-2 list-none p-0">
//         <motion.li
//           custom={[0.3, 0]}
//           variants={translate}
//           initial="initial"
//           animate="enter"
//           exit="exit"
//           className="flex items-end justify-end"
//         >
//           <Link
//             href="/privacy-policy"
//             aria-label="Visit Privacy Policy Page"
//             passHref
//           >
//             Privacy Policy
//           </Link>
//         </motion.li>
//         <motion.li
//           custom={[0.3, 0]}
//           variants={translate}
//           initial="initial"
//           animate="enter"
//           exit="exit"
//           className="flex items-end justify-end"
//         >
//           <Link
//             href="/terms"
//             aria-label="Visit Terms and Conditions Page"
//             passHref
//           >
//             Terms & Conditions
//           </Link>
//         </motion.li>
//       </ul>
//     </div>
//   );
// };

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

const Header: React.FC<HeaderProps> = ({ className, navigation }) => {
  // const [isActive, setIsActive] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [isBottom, setIsBottom] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768); // Set a breakpoint for mobile
  //   };

  //   // Check if the user is at the bottom of the page
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;

  //     // Detect when user reaches the bottom of the page
  //     setIsBottom(scrollTop + windowHeight >= documentHeight - windowHeight);

  //     // Set isScrolled for animation purposes
  //     setIsScrolled(
  //       scrollTop > 50 && scrollTop + windowHeight < documentHeight
  //     );
  //   };

  //   // Initial setup
  //   handleResize();
  //   handleScroll();

  //   // Event listeners for scroll and resize
  //   window.addEventListener("resize", handleResize);
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup event listeners
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Define animation variants
  // const navdockVariants = (isMobile: any) => ({
  //   hidden: {
  //     width: isMobile ? "auto" : "3.5rem", // No width animation on mobile, "3.5rem" on desktop
  //     opacity: 0,
  //     transition: { duration: 0 },
  //   },
  //   expanded: {
  //     width: isMobile ? "100%" : "auto", // Keep auto width but remove width animation on mobile
  //     opacity: 1,
  //     transition: {
  //       duration: isMobile ? 0 : 0.5, // No animation on mobile
  //       when: "beforeChildren",
  //       staggerChildren: 0,
  //     },
  //   },
  // });

  // const logoVariants = (isMobile: any) => ({
  //   hidden: {
  //     x: isMobile ? 0 : 150, // No x animation on mobile
  //     width: "2.25rem",
  //     transition: { duration: 0 },
  //   },
  //   expanded: {
  //     x: isMobile ? 0 : 0, // No x animation on mobile
  //     transition: { duration: isMobile ? 0 : 0.5 },
  //   },
  // });

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 0, transition: { duration: 0 } },
  //   visible: { opacity: 1, y: 0, transition: { delay: 0, duration: 0.5 } },
  // };

  return (
    <>
      <div
        id="header"
        className={`transition-all duration-500 ${className} z-[2000] flex flex-col size-full h-auto p-[2rem] lg:p-[0.438rem] lg:pl-[1.5rem] 
        ${false ? "" : "mix-blend-differences"} 
        ${false ? "opacity-0 pointer-events-none" : ""}
        `}
      >
        {/* Original Header */}
        <div className="relative flex size-full items-center justify-center sm:justify-between gap-10">
          {/* Logo */}
          <div className="cursor-select-hover relative lg:max-w-[10vw] ">
            <Link
              href={"/"}
              className="flex size-full lg:h-[1.375rem] overflow-hidden"
              passHref
            >
              <Image
                src={logo}
                alt="logo"
                className="size-full w-[3rem]"
                placeholder="blur"
                quality={80}
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav
            className={`pn-regular-16 flex items-center justify-end gap-[1.313rem] 
              ${false ? "opacity-0 pointer-events-none" : ""} 
            hidden transition-all duration-1000 md:flex size-full max-w-[55vw]`}
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
            <motion.div
              className={`pn-regular-16 relative group hidden md:flex button !p-0 !bg-goldenbrown text-ash shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-105 mix-blend-normal cursor-select-hover`}
              style={{
                background: "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
                backgroundSize: "300% 100%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <HoverWrapper className="">
                <Link
                  href={"#contact"}
                  className="flex size-full gap-[1rem] items-center px-[1.5rem] py-[0.5rem]"
                  passHref
                >
                  <FlipLink>{getChars("Get In Touch")}</FlipLink>
                  <Image
                    alt="arrow"
                    src={arrowRedirect}
                    className="text-ash group-hover:rotate-45 transition-all duration-300"
                    quality={80}
                  />
                </Link>
              </HoverWrapper>
            </motion.div>
          </nav>
        </div>

        {/* <AnimatePresence>
          {isActive && <Nav links={navigation} />}
        </AnimatePresence> */}
      </div>

      {/* Navdock */}
    </>
  );
};

export default Header;
