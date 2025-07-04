import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/page";
import React from "react";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Refund Policy | Virtual Xposure",
  description:
    "Understanding Virtual Xposure's refund policy and our Fast‑Track MLS Guarantee. Learn about our commitment to customer satisfaction, refund eligibility, and the process for requesting refunds on our real estate marketing services.",
  keywords:
    "refund policy, money-back guarantee, Virtual Xposure refunds, service guarantee, satisfaction guarantee, refund terms, Fast‑Track MLS Guarantee, real estate marketing refunds, customer satisfaction policy",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Refund Policy | Virtual Xposure",
    description:
      "Understanding Virtual Xposure's refund policy and our Fast‑Track MLS Guarantee. Learn about our commitment to customer satisfaction, refund eligibility, and the process for requesting refunds on our real estate marketing services.",
  },
};

const page = () => {
  return (
    <Page>
      <div
        id="refund-policy"
        className={`section-container top !flex-row`}
      >
        <div className="relative flex size-full max-w-[--section-width] flex-col items-center justify-between gap-[1.5rem] sm:gap-[3.75rem]">
          <h1 className="pn-bold-40 text-center mb-8">Refund Policy</h1>

          <p className="mb-8">
            This Privacy Policy describes how virtual exposure.ca (the
            &quot;Site&quot; or &quot;we&quot;) collects, uses, and discloses
            your Personal Information when you visit or make a purchase from the
            Site.
          </p>

          <section className="mb-8">
            {/* <h2 className="pn-semibold-40 mb-4">
              Collecting Personal Information
            </h2> */}
            <p className="mb-4">
              We have a 14-day refund policy, which means you have 14 days after
              your session has been completed to request a refund. <br />
              <br />
              To be eligible for a refund, you need a copy of an invoice sent by
              Virtual Xposure or some other proof of purchase. <br />
              <br />
              To start the process for a refund, you can contact us at{" "}
              <a
                href="mailto:info@virtualxposure.ca"
                className="text-blue-600 hover:text-blue-800"
              >
                info@virtualxposure.ca
              </a>
              . If your refund request is accepted, you will quite simply
              receive a refund for the exact invoice amount via the same card to
              which the transaction took place. <br />
              <br />
              You can always contact us for any return questions at{" "}
              <a
                href="mailto:info@virtualxposure.ca"
                className="text-blue-600 hover:text-blue-800"
              >
                info@virtualxposure.ca
              </a>
              .
            </p>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Refunds</h2>
              <p className="mb-4">
                We will notify you once we&apos;ve received and inspected your
                return, and let you know if the refund was approved or not. If
                approved, you&apos;ll be automatically refunded on your original
                payment method. Please remember it can take some time for your
                bank or credit card company to process and post the refund too.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Page>
  );
};

export default page;
