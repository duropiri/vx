import React, { useState } from "react";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Image from "next/image";
import logo from "@/../../public/assets/images/logo2-nospace.webp";
import amex from "@/../../public/assets/svgs/amex.svg";
import applePay from "@/../../public/assets/svgs/apple-pay.svg";
import dinersClub from "@/../../public/assets/svgs/diners-club.svg";
import discover from "@/../../public/assets/svgs/discover.svg";
import googlePay from "@/../../public/assets/svgs/google-pay.svg";
import masterCard from "@/../../public/assets/svgs/mastercard.svg";
import shopPay from "@/../../public/assets/svgs/shop-pay.svg";
import visa from "@/../../public/assets/svgs/visa.svg";
import { FooterCompanyLinks, FooterHelpLinks } from "@/data/navLinks";
import { TransitionLink } from "./TransitionLink";
import Link from "next/link";

interface ComponentProps {
  className?: string;
}

// Separate client-side only newsletter form component
const NewsletterFormClient: React.FC<{
  email: string;
  setEmail: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
}> = ({ email, setEmail, onSubmit, className = "" }) => {
  return (
    <div
      className={`${className} xl:my-0 flex min-h-0 flex-col items-start justify-start gap-[0.25rem] xl:gap-[0.5rem] w-full h-full xl:w-auto`}
    >
      <h2 className="pn-bold-20">Subscribe to Our Newsletter</h2>
      <div className="flex-1 flex size-full relative overflow-hidden overflow-y-scroll cursor-none-hover">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/YPFW7FZRKPkKraPvqyhY"
          className="overflow-y-scroll -mt-[30px] w-full  !h-[38rem] sm:!h-[30rem] xl:w-[30.469rem]"
          id="inline-YPFW7FZRKPkKraPvqyhY"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Newsletter Form"
          data-height="400"
          data-layout-iframe-id="inline-YPFW7FZRKPkKraPvqyhY"
          data-form-id="YPFW7FZRKPkKraPvqyhY"
          title="Newsletter Form"
        ></iframe>
      </div>
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
      {/* <form
        onSubmit={onSubmit}
        className="flex w-full xl:w-[30.469rem] rounded-[0.5rem] overflow-hidden"
      >
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-2/3 pl-[1.25rem] py-[1rem] text-white bg-white/25 placeholder:text-white/75 focus:outline-none"
          required
          autoComplete="off"
        />
        <button
          type="submit"
          className="flex cursor-select-hover items-center justify-center pn-bold-16 w-1/3 bg-goldenbrown text-white"
        >
          <HoverWrapper className="size-full p-[1rem]">
            <FlipLink>Join</FlipLink>
          </HoverWrapper>
        </button>
      </form> */}
    </div>
  );
};

export default function Footer({
  className = "",
}: ComponentProps): React.JSX.Element {
  const [email, setEmail] = useState("");

  // Define these as CSS custom properties (variables)
  const footerStyles = {
    "--footer-height-mobile": "21rem",
    "--footer-height-desktop": "27rem",
  } as React.CSSProperties;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // console.log("Submitted email:", email);
      setEmail("");
    }
  };

  return (
    <footer style={footerStyles} className="bg-ash">
      <div
        className={`bg-ash relative h-[var(--footer-height-mobile)] xl:h-[var(--footer-height-desktop)] select-none`}
        style={{
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
          // zIndex: 99999999999999,
        }}
      >
        <div
          className={`relative h-[calc(100vh+var(--footer-height-mobile))] xl:h-[calc(100vh+var(--footer-height-desktop))] -top-[100vh]`}
        >
          <div
            className={`${className} h-[var(--footer-height-mobile)] xl:h-[var(--footer-height-desktop)] sticky top-[calc(100vh-var(--footer-height-mobile))] xl:top-[calc(100vh-var(--footer-height-desktop))] bg-ash text-white`}
          >
            <div className="section-container flex flex-col size-full items-start justify-start pt-[9.375rem] !pb-0 gap-[2rem]">
              <div className="flex flex-col xl:!flex-row items-start justify-start xl:justify-between size-full max-w-[100dvw] gap-y-[1rem] xl:gap-y-[2rem]">
                {/* Branding section */}
                <div className="flex flex-col items-start justify-start gap-[1rem] xl:gap-[2rem] xl:max-w-[30%]">
                  <nav className="flex flex-row items-center gap-[0.5rem]">
                    <Image
                      src={logo}
                      alt="logo"
                      className="w-[2.25rem]"
                      placeholder="blur"
                      quality={75}
                    />
                    <p className="pn-semibold-24">Virtual Xposure</p>
                  </nav>
                  <div className="flex flex-col items-start justify-start gap-[1rem] xl:gap-[1.5rem]">
                    <div className="select-text">
                      <p className="pn-regular-20 text-white/75 pb-[1rem]">
                        The Gold Standard in Real Estate Marketing
                      </p>
                      <p className="pn-regular-16 text-white pb-[1rem] xl:pb-[2.5rem]">
                        We are a group of curious, innovative and like-minded
                        people, now stepping up to fill the gap in the industry
                        with the highest level of convenience, reliability,
                        quality and consistency.
                      </p>
                    </div>

                    {/* Social links */}
                    <div className="flex flex-row items-center gap-[0.75rem] text-charcoal">
                      {/* Twitter */}
                      <Link
                        aria-label="Virtual Xposure twitter account"
                        href="https://x.com/virtualxposur3"
                        passHref
                        className="size-[3rem]"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="cursor-select-hover hover:text-goldenbrown transition-all duration-300"
                        >
                          <path
                            d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                            fill="currentColor"
                          />
                          <path
                            d="M22.5997 11H25.0543L19.6932 17.126L26 25.4633H21.063L17.1934 20.4081L12.771 25.4633H10.3129L16.0461 18.9096L10 11H15.0621L18.5563 15.6206L22.5997 11ZM21.7375 23.9961H23.0969L14.3216 12.3907H12.8614L21.7375 23.9961Z"
                            fill="white"
                          />
                        </svg>
                      </Link>

                      {/* Facebook */}
                      <Link
                        aria-label="Virtual Xposure facebook account"
                        href="https://www.facebook.com/virtualxposureofficial/"
                        passHref
                        className="size-[3rem]"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="cursor-select-hover hover:text-goldenbrown transition-all duration-300"
                        >
                          <path
                            d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                            fill="currentColor"
                          />
                          <path
                            d="M16.3399 26.1105V18.9702H13.937V16.1875H16.3399V14.1353C16.3399 11.7538 17.7944 10.457 19.9189 10.457C20.9365 10.457 21.8112 10.5328 22.066 10.5667V13.0555L20.5926 13.0562C19.4372 13.0562 19.2135 13.6052 19.2135 14.4109V16.1875H21.969L21.6102 18.9702H19.2135V26.1105H16.3399Z"
                            fill="white"
                          />
                        </svg>
                      </Link>

                      {/* Instagram */}
                      <Link
                        aria-label="Virtual Xposure Instagram account"
                        href="https://www.instagram.com/virtualxposure/?hl=en"
                        passHref
                        className="size-[3rem]"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="cursor-select-hover hover:text-goldenbrown transition-all duration-300"
                        >
                          <path
                            d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                            fill="currentColor"
                          />
                          <path
                            d="M18.0012 10.8604C20.3267 10.8604 20.6021 10.8691 21.5207 10.911C22.0731 10.9178 22.6202 11.0192 23.1382 11.2109C23.5139 11.3558 23.8551 11.5777 24.1398 11.8624C24.4246 12.1472 24.6465 12.4884 24.7914 12.8641C24.9831 13.3821 25.0845 13.9292 25.0913 14.4816C25.1327 15.4002 25.1419 15.6756 25.1419 18.0011C25.1419 20.3266 25.1332 20.602 25.0913 21.5206C25.0845 22.073 24.9831 22.6201 24.7914 23.1382C24.6465 23.5139 24.4246 23.855 24.1398 24.1398C23.8551 24.4245 23.5139 24.6464 23.1382 24.7913C22.6202 24.983 22.0731 25.0844 21.5207 25.0912C20.6025 25.1327 20.3271 25.1418 18.0012 25.1418C15.6753 25.1418 15.3999 25.1331 14.4816 25.0912C13.9293 25.0844 13.3822 24.983 12.8641 24.7913C12.4884 24.6464 12.1472 24.4245 11.8625 24.1398C11.5778 23.855 11.3558 23.5139 11.211 23.1382C11.0193 22.6201 10.9178 22.073 10.9111 21.5206C10.8696 20.602 10.8605 20.3266 10.8605 18.0011C10.8605 15.6756 10.8692 15.4002 10.9111 14.4816C10.9178 13.9292 11.0193 13.3821 11.211 12.8641C11.3558 12.4884 11.5778 12.1472 11.8625 11.8624C12.1472 11.5777 12.4884 11.3558 12.8641 11.2109C13.3822 11.0192 13.9293 10.9178 14.4816 10.911C15.4003 10.8695 15.6757 10.8604 18.0012 10.8604ZM18.0012 9.29102C15.6371 9.29102 15.3393 9.30097 14.4103 9.34327C13.6874 9.35765 12.9722 9.49452 12.2951 9.74807C11.7142 9.96691 11.1881 10.3099 10.7535 10.753C10.31 11.1878 9.96671 11.7142 9.74773 12.2954C9.49418 12.9726 9.35731 13.6878 9.34293 14.4106C9.30146 15.3388 9.2915 15.6366 9.2915 18.0007C9.2915 20.3647 9.30146 20.6625 9.34376 21.5916C9.35814 22.3145 9.49501 23.0297 9.74855 23.7068C9.96729 24.2879 10.3103 24.8143 10.7535 25.2492C11.1884 25.6924 11.7148 26.0354 12.2959 26.2541C12.973 26.5077 13.6883 26.6446 14.4111 26.6589C15.3402 26.7004 15.6367 26.7112 18.002 26.7112C20.3673 26.7112 20.6639 26.7012 21.5929 26.6589C22.3158 26.6446 23.031 26.5077 23.7081 26.2541C24.2865 26.0299 24.8117 25.6875 25.2502 25.2487C25.6887 24.8099 26.0308 24.2845 26.2546 23.7059C26.5082 23.0288 26.6451 22.3136 26.6594 21.5907C26.7009 20.6625 26.7109 20.3647 26.7109 18.0007C26.7109 15.6366 26.7009 15.3388 26.6586 14.4098C26.6442 13.6869 26.5073 12.9717 26.2538 12.2946C26.0351 11.7135 25.6921 11.1871 25.2489 10.7522C24.814 10.3089 24.2876 9.96598 23.7064 9.74724C23.0293 9.49369 22.3141 9.35682 21.5912 9.34244C20.663 9.30097 20.3652 9.29102 18.0012 9.29102Z"
                            fill="white"
                          />
                          <path
                            d="M18.0014 13.5312C17.1168 13.5312 16.2521 13.7936 15.5166 14.285C14.7811 14.7765 14.2078 15.475 13.8693 16.2923C13.5307 17.1095 13.4422 18.0088 13.6148 18.8764C13.7873 19.744 14.2133 20.541 14.8388 21.1665C15.4643 21.792 16.2613 22.218 17.1289 22.3906C17.9965 22.5631 18.8958 22.4746 19.713 22.136C20.5303 21.7975 21.2288 21.2243 21.7203 20.4887C22.2117 19.7532 22.4741 18.8885 22.4741 18.0039C22.4741 16.8177 22.0028 15.68 21.1641 14.8413C20.3253 14.0025 19.1877 13.5312 18.0014 13.5312ZM18.0014 20.9071C17.4272 20.9071 16.8659 20.7368 16.3885 20.4178C15.9111 20.0988 15.5389 19.6454 15.3192 19.1149C15.0995 18.5844 15.042 18.0007 15.154 17.4375C15.266 16.8743 15.5425 16.357 15.9485 15.951C16.3546 15.545 16.8719 15.2685 17.435 15.1564C17.9982 15.0444 18.582 15.1019 19.1125 15.3216C19.6429 15.5414 20.0964 15.9135 20.4154 16.3909C20.7344 16.8684 20.9047 17.4297 20.9047 18.0039C20.9047 18.7739 20.5988 19.5123 20.0543 20.0568C19.5099 20.6012 18.7714 20.9071 18.0014 20.9071Z"
                            fill="white"
                          />
                          <path
                            d="M22.6506 14.395C23.2279 14.395 23.6958 13.9271 23.6958 13.3498C23.6958 12.7726 23.2279 12.3047 22.6506 12.3047C22.0734 12.3047 21.6055 12.7726 21.6055 13.3498C21.6055 13.9271 22.0734 14.395 22.6506 14.395Z"
                            fill="white"
                          />
                        </svg>
                      </Link>

                      {/* LinkedIn */}
                      <Link
                        aria-label="Virtual Xposure LinkedIn account"
                        href="https://ca.linkedin.com/company/virtualxposure"
                        passHref
                        className="size-[3rem]"
                      >
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="cursor-select-hover hover:text-goldenbrown transition-all duration-300"
                        >
                          <path
                            d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                            fill="currentColor"
                          />
                          <path
                            d="M13.7243 15.1297H10.5123C10.3697 15.1297 10.2542 15.2453 10.2542 15.3878V25.7067C10.2542 25.8492 10.3697 25.9647 10.5123 25.9647H13.7243C13.8669 25.9647 13.9824 25.8492 13.9824 25.7067V15.3878C13.9824 15.2453 13.8669 15.1297 13.7243 15.1297Z"
                            fill="white"
                          />
                          <path
                            d="M12.1195 10C10.9508 10 10 10.9498 10 12.1172C10 13.2852 10.9508 14.2353 12.1195 14.2353C13.2873 14.2353 14.2374 13.2851 14.2374 12.1172C14.2374 10.9498 13.2873 10 12.1195 10Z"
                            fill="white"
                          />
                          <path
                            d="M21.8944 14.8733C20.6043 14.8733 19.6507 15.4279 19.0722 16.058V15.3878C19.0722 15.2453 18.9567 15.1298 18.8142 15.1298H15.7381C15.5955 15.1298 15.48 15.2453 15.48 15.3878V25.7067C15.48 25.8493 15.5955 25.9648 15.7381 25.9648H18.9431C19.0857 25.9648 19.2012 25.8493 19.2012 25.7067V20.6013C19.2012 18.8808 19.6685 18.2106 20.8678 18.2106C22.1739 18.2106 22.2777 19.2851 22.2777 20.6898V25.7068C22.2777 25.8493 22.3932 25.9648 22.5357 25.9648H25.7419C25.8845 25.9648 26 25.8493 26 25.7068V20.0467C26 17.4885 25.5122 14.8733 21.8944 14.8733Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex xl:hidden h-[0.055rem] w-full bg-charcoal" />

                {/* Links section */}
                <div className="hidden sm:flex flex-row w-full items-start justify-between xl:contents">
                  {/* Company Links */}
                  <div className="flex flex-col w-full xl:w-auto items-start justify-start gap-[1rem] xl:gap-[2rem]">
                    <h2 className="pn-bold-20">Company</h2>
                    <div className="flex flex-col pn-regular-16 text-white/75 gap-[1rem] xl:gap-[1.5rem]">
                      {FooterCompanyLinks.map((nav, index) => (
                        <HoverWrapper
                          key={index}
                          className="cursor-select-hover inline-block w-fit"
                        >
                          <TransitionLink href={nav.href} passHref>
                            <FlipLink>{nav.title}</FlipLink>
                          </TransitionLink>
                        </HoverWrapper>
                      ))}
                    </div>
                  </div>

                  {/* Help Links */}
                  <div className="flex flex-col w-full xl:w-auto items-end text-end xl:text-start xl:items-start xl:justify-start gap-[1rem] xl:gap-[2rem]">
                    <h2 className="pn-bold-20">Help</h2>
                    <div className="flex flex-col items-end xl:items-start pn-regular-16 text-white/75 gap-[1rem] xl:gap-[1.5rem]">
                      {FooterHelpLinks.map((nav, index) => (
                        <HoverWrapper
                          key={index}
                          className="cursor-select-hover inline-block w-fit"
                        >
                          <TransitionLink href={nav.href} passHref>
                            <FlipLink>{nav.title}</FlipLink>
                          </TransitionLink>
                        </HoverWrapper>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex xl:hidden h-[0.055rem] w-full bg-charcoal" />

                {/* Newsletter Form - Now client-side only */}
                <NewsletterFormClient
                  email={email}
                  setEmail={setEmail}
                  onSubmit={handleSubmit}
                  className="hidden sm:flex"
                />
              </div>

              <div className="hidden xl:flex h-[0.055rem] w-full bg-charcoal" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div
        className="flex flex-col xl:!flex-row w-full !justify-between items-center gap-y-[1rem] xl:gap-y-[2rem] section-container bg-ash text-white !py-[1rem] xl:!py-[2rem] select-none z-20"
        style={{ zIndex: 99999999999999 }}
      >
        {/* Links section */}
        <div className="flex sm:hidden flex-row w-full items-start justify-between">
          {/* Company Links */}
          <div className="flex flex-col w-full xl:w-auto items-start justify-start gap-[1rem] xl:gap-[2rem]">
            <h2 className="pn-bold-20">Company</h2>
            <div className="flex flex-col pn-regular-16 text-white/75 gap-[1rem] xl:gap-[1.5rem]">
              {FooterCompanyLinks.map((nav, index) => (
                <HoverWrapper
                  key={index}
                  className="cursor-select-hover inline-block w-fit"
                >
                  <TransitionLink href={nav.href} passHref>
                    <FlipLink>{nav.title}</FlipLink>
                  </TransitionLink>
                </HoverWrapper>
              ))}
            </div>
          </div>

          {/* Help Links */}
          <div className="flex flex-col w-full xl:w-auto items-end text-end xl:text-start xl:items-start xl:justify-start gap-[1rem] xl:gap-[2rem]">
            <h2 className="pn-bold-20">Help</h2>
            <div className="flex flex-col items-end xl:items-start pn-regular-16 text-white/75 gap-[1rem] xl:gap-[1.5rem]">
              {FooterHelpLinks.map((nav, index) => (
                <HoverWrapper
                  key={index}
                  className="cursor-select-hover inline-block w-fit"
                >
                  <TransitionLink href={nav.href} passHref>
                    <FlipLink>{nav.title}</FlipLink>
                  </TransitionLink>
                </HoverWrapper>
              ))}
            </div>
          </div>
        </div>

        <div className="flex sm:hidden h-[0.055rem] w-full bg-charcoal" />

        <NewsletterFormClient
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubmit}
          className="flex sm:hidden"
        />
        <p className="pn-regular-14 text-center xl:text-start select-text">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by
          VirtualXposure
        </p>

        <div className="flex flex-row items-center gap-[0.375rem] xl:pr-[2rem] select-none pointer-events-none">
          {/* Payment method icons */}
          <Image
            alt="amex"
            src={amex}
            className="size-full max-w-[2rem]"
            quality={75}
          />
          <Image
            alt="apple-pay"
            src={applePay}
            className="size-full max-w-[2rem]"
            quality={75}
          />
          <Image
            alt="diners-club"
            src={dinersClub}
            className="size-full max-w-[2rem]"
            quality={75}
          />
          <Image
            alt="discover"
            src={discover}
            className="size-full max-w-[2rem]"
            quality={75}
          />
          <Image
            alt="google-pay"
            src={googlePay}
            className="size-full max-w-[2rem]"
            quality={75}
          />
          <Image
            alt="mastercard"
            src={masterCard}
            className="size-full max-w-[2rem]"
            quality={75}
          />
          <Image
            alt="shop-pay"
            src={shopPay}
            className="size-full max-w-[2rem]"
            quality={75}
          />
          <Image
            alt="visa"
            src={visa}
            className="size-full max-w-[2rem]"
            quality={75}
          />
        </div>

        {/* <div className="flex sm:hidden h-[15rem] w-full pointer-events-none" /> */}
      </div>
    </footer>
  );
}
