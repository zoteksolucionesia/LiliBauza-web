"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhatToExpect } from "@/components/sections/WhatToExpect";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingModal } from "@/components/ui/BookingModal";
import { FloatingBookButton } from "@/components/ui/FloatingBookButton";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Header onBookClick={handleBookClick} />

        <Hero onBookClick={handleBookClick} />
        <About />
        <Services />
        <WhatToExpect />
        <Testimonials />

        <Footer />

        <FloatingBookButton onClick={handleBookClick} />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </main>
    </ThemeProvider>
  );
}
