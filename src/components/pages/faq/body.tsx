"use client";
import React from "react";
import FAQSection from "@/components/pages/sections/faqSection";
import ContactSection from "@/components/pages/sections/contactSection";

function body() {
  return (
    <>
      <FAQSection vertical className="bg-white z-10 !pt-[6rem] lg:!pt-[3.125rem]" />
      <ContactSection className="bg-white z-10" />
    </>
  );
}

export default body;