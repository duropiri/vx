import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/page";
import React from "react";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Terms and Conditions | Virtual Xposure",
  description:
    "Read Virtual Xposure's terms and conditions for real estate marketing services. Find detailed information about our service agreements, usage rights, payment terms, and policies for all our real estate marketing solutions.",
  keywords:
    "terms and conditions, Virtual Xposure terms, service agreement, usage rights, marketing terms, real estate marketing policies, service terms, legal terms, privacy policy",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Terms and Conditions | Virtual Xposure",
    description:
      "Read Virtual Xposure's terms and conditions for real estate marketing services. Find detailed information about our service agreements, usage rights, payment terms, and policies for all our real estate marketing solutions.",
  },
};

const page = () => {
  const cookieTable = [
    { name: "_ab", function: "Used in connection with access to admin." },
    {
      name: "_secure_session_id",
      function: "Used in connection with navigation through a storefront",
    },
    { name: "cart", function: "Used in connection with shopping cart." },
    { name: "cart_sig", function: "Used in connection with checkout." },
    { name: "cart_ts", function: "Used in connection with checkout." },
    { name: "checkout_token", function: "Used in connection with checkout." },
    { name: "secret", function: "Used in connection with checkout." },
    {
      name: "secure_customer_sig",
      function: "Used in connection with customer login.",
    },
    {
      name: "storefront_digest",
      function: "Used in connection with customer login.",
    },
    {
      name: "_shopify_u",
      function: "Used to facilitate updating customer account information.",
    },
  ];

  const analyticsTable = [
    { name: "_tracking_consent", function: "Tracking preferences." },
    { name: "_landing_page", function: "Track landing pages" },
    { name: "_orig_referrer", function: "Track landing pages" },
    { name: "_s", function: "Shopify analytics." },
    { name: "_shopify_s", function: "Shopify analytics." },
    {
      name: "_shopify_sa_p",
      function: "Shopify analytics relating to marketing & referrals.",
    },
    {
      name: "_shopify_sa_t",
      function: "Shopify analytics relating to marketing & referrals.",
    },
    { name: "_shopify_y", function: "Shopify analytics." },
    { name: "_y", function: "Shopify analytics." },
  ];

  const Table = ({ data, title }) => (
    <div className="mb-8">
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left font-bold">
                Name
              </th>
              <th className="border border-gray-300 p-3 text-left font-bold">
                Function
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3 font-mono">
                  {row.name}
                </td>
                <td className="border border-gray-300 p-3">{row.function}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <Page>
      <div
        id="terms-and-conditions"
        className={`section-container top !flex-row`}
      >
        <div className="relative flex size-full max-w-[--section-width] flex-col items-center justify-between gap-[1.5rem] sm:gap-[3.75rem]">
          <h1 className="pn-bold-40 text-center mb-8">Terms and Conditions</h1>

          <p className="mb-8">
            This Privacy Policy describes how virtual exposure.ca (the
            &quot;Site&quot; or &quot;we&quot;) collects, uses, and discloses
            your Personal Information when you visit or make a purchase from the
            Site.
          </p>

          <section className="mb-8">
            <h2 className="pn-semibold-40 mb-4">
              Collecting Personal Information
            </h2>
            <p className="mb-4">
              When you visit the Site, we collect certain information about your
              device, your interaction with the Site, and information necessary
              to process your purchases. We may also collect additional
              information if you contact us for customer support. In this
              Privacy Policy, we refer to any information that can uniquely
              identify an individual as &quot;Personal Information&quot;. See
              the list below for more information about what Personal
              Information we collect and why.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Device information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-bold">
                    Examples of Personal Information collected:
                  </span>{" "}
                  version of web browser, IP address, time zone, cookie
                  information, what sites or products you view, search terms,
                  and how you interact with the Site.
                </li>
                <li>
                  <span className="font-bold">Purpose of collection:</span> to
                  load the Site accurately for you, and to perform analytics on
                  Site usage to optimize your Site.
                </li>
                <li>
                  <span className="font-bold">Source of collection:</span>{" "}
                  Collected automatically when you access your Site using
                  cookies, log files, web beacons, tags, or pixels.
                </li>
                <li>
                  <span className="font-bold">
                    Disclosure for a business purpose:
                  </span>{" "}
                  shared with our processor Shopify.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Order information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-bold">
                    Examples of Personal Information collected:
                  </span>{" "}
                  name, billing address, shipping address, payment information
                  (including credit card numbers), email address, and phone
                  number.
                </li>
                <li>
                  <span className="font-bold">Purpose of collection:</span> to
                  provide products or services to you to fulfill your contract,
                  to process your payment information, arrange for shipping, and
                  provide you with invoices and/or order confirmations,
                  communicate with you, screen our orders for potential risk or
                  fraud, and when in line with the preferences you have shared
                  with us, provide you with information or advertising relating
                  to our products or services.
                </li>
                <li>
                  <span className="font-bold">Source of collection:</span>{" "}
                  collected from you.
                </li>
                <li>
                  <span className="font-bold">
                    Disclosure for a business purpose:
                  </span>{" "}
                  shared with our processor Shopify.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                Customer support information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-bold">Purpose of collection:</span> to
                  provide customer support.
                </li>
                <li>
                  <span className="font-bold">Source of collection:</span>{" "}
                  collected from you.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="pn-semibold-40 mb-4">
              Sharing Personal Information
            </h2>
            <p className="mb-4">
              We share your Personal Information with service providers to help
              us provide our services and fulfill your contracts with us, as
              described above. For example:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We use Shopify to power our online store. You can read more
                about how Shopify uses your Personal Information here:{" "}
                <a
                  href="https://www.shopify.com/legal/privacy"
                  className="text-blue-600 hover:text-blue-800"
                >
                  https://www.shopify.com/legal/privacy
                </a>
                .
              </li>
              <li>
                We may share your Personal Information to comply with applicable
                laws and regulations, to respond to a subpoena, search warrant
                or other lawful request for information we receive, or to
                otherwise protect our rights.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="pn-semibold-40 mb-4">Behavioral Advertising</h2>
            <p className="mb-4">
              As described above, we use your Personal Information to provide
              you with targeted advertisements or marketing communications we
              believe may be of interest to you. For example:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                We use Google Analytics to help us understand how our customers
                use the Site. You can read more about how Google uses your
                Personal Information here:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=en"
                  className="text-blue-600 hover:text-blue-800"
                >
                  https://policies.google.com/privacy?hl=en
                </a>
                .
              </li>
              <li>
                We share information about your use of the Site, your purchases,
                and your interaction with our ads on other websites with our
                advertising partners.
              </li>
            </ul>
            <p className="mb-4">You can opt-out of targeted advertising by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-bold">FACEBOOK</span> -{" "}
                <a
                  href="https://www.facebook.com/settings/?tab=ads"
                  className="text-blue-600 hover:text-blue-800"
                >
                  https://www.facebook.com/settings/?tab=ads
                </a>
              </li>
              <li>
                <span className="font-bold">GOOGLE</span> -{" "}
                <a
                  href="https://www.google.com/settings/ads/anonymous"
                  className="text-blue-600 hover:text-blue-800"
                >
                  https://www.google.com/settings/ads/anonymous
                </a>
              </li>
              <li>
                <span className="font-bold">BING</span> -{" "}
                <a
                  href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
                  className="text-blue-600 hover:text-blue-800"
                >
                  https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="pn-semibold-40 mb-4">Using Personal Information</h2>
            <p className="mb-4">
              We use your personal information to provide our services to you,
              which includes offering products for sale, processing payment,
              shipping and fulfillment of your order, and keeping you up to date
              on new products, services, and offers.
            </p>
            <h3 className="text-xl font-bold mb-2">Lawful basis</h3>
            <p className="mb-4">
              Pursuant to the General Data Protection Regulation
              (&quot;GDPR&quot;), if you are a resident of the European Economic
              Area (&quot;EEA&quot;), we process your personal information under
              the following lawful bases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your consent;</li>
              <li>The performance of the contract between you and the Site;</li>
              <li>Compliance with our legal obligations;</li>
              <li>To protect your vital interests;</li>
              <li>To perform a task carried out in the public interest;</li>
              <li>
                For our legitimate interests, which do not override your
                fundamental rights and freedoms.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="pn-semibold-40 mb-4">Cookies</h2>
            <p className="mb-4">
              A cookie is a small amount of information that&apos;s downloaded
              to your computer or device when you visit our Site. We use a
              number of different cookies, including functional, performance,
              advertising, and social media or content cookies.
            </p>

            <h3 className="text-xl font-bold mb-4">
              Cookies Necessary for the Functioning of the Store
            </h3>
            <Table data={cookieTable} title={undefined} />

            <h3 className="text-xl font-bold mb-4">Reporting and Analytics</h3>
            <Table data={analyticsTable} title={undefined} />

            <p className="mt-6">
              The length of time that a cookie remains on your computer or
              mobile device depends on whether it is a &quot;persistent&quot; or
              &quot;session&quot; cookie. Session cookies last until you stop
              browsing and persistent cookies last until they expire or are
              deleted. Most of the cookies we use are persistent and will expire
              between 30 minutes and two years from the date they are downloaded
              to your device.
            </p>

            <p className="mt-4">
              You can control and manage cookies in various ways. Please keep in
              mind that removing or blocking cookies can negatively impact your
              user experience and parts of our website may no longer be fully
              accessible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="pn-semibold-40 mb-4">Do Not Track</h2>
            <p className="">
              Please note that because there is no consistent industry
              understanding of how to respond to &quot;Do Not Track&quot;
              signals, we do not alter our data collection and usage practices
              when we detect such a signal from your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="pn-semibold-40 mb-4">Changes</h2>
            <p className="">
              We may update this Privacy Policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal, or regulatory reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="pn-semibold-40 mb-4">Contact</h2>
            <p className="mb-4">
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us by email at{" "}
              <a
                href="mailto:info@virtualxposure.ca"
                className="text-blue-600 hover:text-blue-800"
              >
                info@virtualxposure.ca
              </a>
            </p>
            <p className="mb-4">Last updated: [12/20/2021]</p>
            <p className="">
              If you are not satisfied with our response to your complaint, you
              have the right to lodge your complaint with the relevant data
              protection authority. You can contact your local data protection
              authority, or our supervisory authority here:{" "}
              <a
                href="https://www.oipc.ab.ca/"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.oipc.ab.ca/
              </a>
            </p>
          </section>
        </div>
      </div>
    </Page>
  );
};

export default page;
