import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";
import SectionHeader from "@/components/ui/sectionHeader";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import SupportForm from "./SupportForm";




export const metadata: Metadata = {
  ...baseMetadata,
  title: "Customer Support | Virtual Xposure",
  description:
    "Need help with an order, booking, or technical issue? Contact Virtual Xposure's support team or browse our FAQ section to get fast and reliable assistance.",
  keywords:
    "Virtual Xposure support, real estate media help, customer service, real estate photography support, booking issues, technical help, FAQ",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Customer Support | Virtual Xposure",
    description:
      "Need help with an order, booking, or technical issue? Contact Virtual Xposure's support team or browse our FAQ section to get fast and reliable assistance.",
  },
};

const page = () => {
  return (
    <Page>
      <Body
        title="How can we help you today?"
        copy="Search our support topics or submit a help request — our team is here to make sure everything runs smoothly for your next listing."
        cta={[
          {
            label: "Submit a Help Request",
            href: "https://api.leadconnectorhq.com/widget/form/0QEsQagx3S4w0ajMS2Zl",
          },
          {
            label: "View Help Topics",
            href: "#faq",
          },
        ]}
        src="/assets/images/vx_support_page_collage.png"
        testimonials={false}
        ctaSection={false}
        socialproofSection={false}
        whyusSection={false}
        faqSection={false}
        regularSection={
          <div className="faq-grid-section">
            {/* Header */}
            <SectionHeader
              className="mb-[3rem]"
              center={false}
              noCenter={true}
              noAnimation={false}
              medium
              heading="Explore Support Topics"
              subheading="Find answers fast"
              noBodyAnimation
              body="Browse our most common support topics. If you still need help, our team is one ticket away."
            />
            <div id="faq" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Getting Started",
                  desc: "Learn how to book services, access your portal, and get onboarded quickly.",
                  href: "https://portal.virtualxposure.com/courses/offers/c4b5cfc8-ed7b-496a-bbd1-8763447735da",
                },
                {
                  title: "Your Account",
                  desc: "Manage your login, billing info, profile settings, and notifications.",
                  href: "https://portal.virtualxposure.com/courses/offers/c4b5cfc8-ed7b-496a-bbd1-8763447735da",
                },
                {
                  title: "Orders & Delivery",
                  desc: "Track order status, download media, and understand delivery timelines.",
                  href: "https://portal.virtualxposure.com/courses/offers/c4b5cfc8-ed7b-496a-bbd1-8763447735da",
                },
                {
                  title: "Media Services",
                  desc: "Details on photos, videos, floorplans, virtual staging, and more.",
                  href: "https://portal.virtualxposure.com/courses/offers/c4b5cfc8-ed7b-496a-bbd1-8763447735da",
                },
                {
                  title: "Edits & Revisions",
                  desc: "How to request edits, revision limits, and what's included.",
                  href: "https://portal.virtualxposure.com/courses/offers/c4b5cfc8-ed7b-496a-bbd1-8763447735da",
                },
                {
                  title: "Technical Issues",
                  desc: "Troubleshooting help for media access, downloads, and broken links.",
                  href: "https://portal.virtualxposure.com/courses/offers/c4b5cfc8-ed7b-496a-bbd1-8763447735da",
                },
                {
                  title: "Booking Help",
                  desc: "How to schedule, reschedule, or cancel an appointment.",
                  href: "https://portal.virtualxposure.com/courses/offers/c4b5cfc8-ed7b-496a-bbd1-8763447735da",
                },
                {
                  title: "Payments & Invoicing",
                  desc: "Billing questions, refunds, receipts, and payment methods.",
                  href: "https://portal.virtualxposure.com/courses/offers/c4b5cfc8-ed7b-496a-bbd1-8763447735da",
                },
                {
                  title: "Policies",
                  desc: "Turnaround guarantees, cancellation rules, and our satisfaction promise.",
                  href: "https://portal.virtualxposure.com/courses/offers/c4b5cfc8-ed7b-496a-bbd1-8763447735da",
                },
              ].map((item, idx) => (
                <HoverWrapper
                  key={idx}
                  href={item.href}
                  className="cursor-select-hover"
                >
                  <div className="flex flex-col size-full items-start justify-between border rounded-lg p-6 shadow hover:shadow-md transition duration-200">
                    <div className="flex flex-col">
                      <h3 className="pn-semibold-24 mb-2">{item.title}</h3>
                      <p className="pn-regular-18 text-gray-600 mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="inline-block w-fit transition-colors duration-200 pn-semibold-20 text-goldenbrown ">
                      <FlipLink>Explore articles</FlipLink>
                    </div>
                  </div>
                </HoverWrapper>
              ))}
            </div>

            {/* <div id="support-form" className="mt-8">
              <SupportForm />
            </div> */}
          </div>
        }
      />
    </Page>
  );
};

export default page;
