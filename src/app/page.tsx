"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CalendarModal from "@/components/CalendarModal";

export default function Home() {
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <main>
      <Navbar onOpenCalendar={() => setCalendarOpen(true)} />
      <Hero onOpenCalendar={() => setCalendarOpen(true)} />
      <About />
      <Classes />
      <Instructors />
      <Testimonials />
      <Pricing />
      <Instagram />
      <Contact />
      <Footer />
      <CalendarModal
        isOpen={calendarOpen}
        onClose={() => setCalendarOpen(false)}
      />
    </main>
  );
}
