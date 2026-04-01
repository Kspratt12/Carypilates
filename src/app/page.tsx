"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Schedule from "@/components/Schedule";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CalendarModal from "@/components/CalendarModal";
import ChatBubble from "@/components/ChatBubble";
import GradientOrbs from "@/components/GradientOrbs";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <main style={{ position: "relative" }}>
      <GradientOrbs />
      <Navbar onOpenCalendar={() => setCalendarOpen(true)} />
      <Hero onOpenCalendar={() => setCalendarOpen(true)} />
      <Marquee />
      <About />
      <SectionDivider from="#faf8fb" to="#fff" />
      <Classes onOpenCalendar={() => setCalendarOpen(true)} />
      <SectionDivider from="#fff" to="#fff" />
      <Schedule />
      <SectionDivider from="#fff" to="#faf8fb" />
      <Instructors />
      <Testimonials />
      <SectionDivider from="#6b5674" to="#fff" />
      <Pricing />
      <SectionDivider from="#fff" to="#faf8fb" />
      <Instagram />
      <SectionDivider from="#faf8fb" to="#faf8fb" />
      <Contact />
      <Footer />
      <CalendarModal
        isOpen={calendarOpen}
        onClose={() => setCalendarOpen(false)}
      />
      <ChatBubble />
    </main>
  );
}
