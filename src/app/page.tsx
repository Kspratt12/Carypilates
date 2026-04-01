"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Classes from "@/components/Classes";
import FirstVisit from "@/components/FirstVisit";
import Schedule from "@/components/Schedule";
import Instructors from "@/components/Instructors";
import GoogleReviews from "@/components/GoogleReviews";
import CTABanner from "@/components/CTABanner";
import Pricing from "@/components/Pricing";
import Instagram from "@/components/Instagram";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CalendarModal from "@/components/CalendarModal";
import ChatBubble from "@/components/ChatBubble";
import BackToTop from "@/components/BackToTop";
import GradientOrbs from "@/components/GradientOrbs";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <main style={{ position: "relative" }}>
      <GradientOrbs />
      <Navbar onOpenCalendar={() => setCalendarOpen(true)} />

      {/* === HERO === */}
      <Hero onOpenCalendar={() => setCalendarOpen(true)} />
      <Marquee />

      {/* === ABOUT (light bg) === */}
      <About />

      {/* === WHY US (dark bg - strong visual break) === */}
      <WhyUs />

      {/* === CLASSES (white bg) === */}
      <Classes onOpenCalendar={() => setCalendarOpen(true)} />

      {/* === FIRST VISIT (white bg after divider) === */}
      <SectionDivider from="#fff" to="#faf8fb" />
      <FirstVisit />

      {/* === SCHEDULE (light bg - different from first visit) === */}
      <SectionDivider from="#fff" to="#faf8fb" />
      <Schedule />

      {/* === INSTRUCTORS (light bg) === */}
      <SectionDivider from="#faf8fb" to="#faf8fb" />
      <Instructors />

      {/* === REVIEWS (light bg) === */}
      <GoogleReviews />

      {/* === CTA BANNER (gradient card on light bg) === */}
      <CTABanner onOpenCalendar={() => setCalendarOpen(true)} />

      {/* === PRICING (white bg) === */}
      <Pricing />

      {/* === INSTAGRAM GALLERY (light bg) === */}
      <SectionDivider from="#fff" to="#faf8fb" />
      <Instagram />

      {/* === FAQ (white bg - clear break) === */}
      <SectionDivider from="#faf8fb" to="#fff" />
      <FAQ />

      {/* === CONTACT (light bg) === */}
      <SectionDivider from="#fff" to="#faf8fb" />
      <Contact />

      {/* === FOOTER === */}
      <Footer />

      <CalendarModal
        isOpen={calendarOpen}
        onClose={() => setCalendarOpen(false)}
      />
      <ChatBubble />
      <BackToTop />
    </main>
  );
}
