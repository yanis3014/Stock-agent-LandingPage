"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { PricingHero, PricingROI, PricingCTA } from "@/components/landing/Pricing";
import Pricing from "@/components/landing/Pricing";
import PricingFAQ from "@/components/landing/PricingFAQ";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <PricingHero isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        <Pricing isAnnual={isAnnual} />
        <PricingROI />
        <PricingFAQ />
        <PricingCTA />
      </main>
    </>
  );
}
