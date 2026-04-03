"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhatToExpect } from "@/components/sections/WhatToExpect";
import { Testimonials } from "@/components/sections/Testimonials";
import { FloatingBookButton } from "@/components/ui/FloatingBookButton";
import { ThemeProvider } from "@/components/ThemeProvider";

const ZOTEK_BOT_ID = "13";
const ZOTEK_COLOR = encodeURIComponent("#D4A5A5"); // rosa theme primary

function openZotekWidget() {
  const box = document.getElementById("ztk-box");
  const btn = document.getElementById("ztk-btn");
  if (!btn) return;
  // Only open if currently closed (avoid toggling closed on double-click)
  if (box?.classList.contains("ztk-hidden")) {
    btn.click();
  }
}

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://zotek-ia.web.app/widget.js?bot=${ZOTEK_BOT_ID}&color=${ZOTEK_COLOR}`;
    script.async = true;
    // Hide the widget's own bubble — our buttons handle opening it
    script.onload = () => {
      const hideStyle = document.createElement("style");
      hideStyle.id = "ztk-hide-bubble";
      hideStyle.textContent = "#ztk-btn { display: none !important; }";
      document.head.appendChild(hideStyle);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      document.getElementById("ztk-hide-bubble")?.remove();
    };
  }, []);

  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Header onBookClick={openZotekWidget} />

        <Hero onBookClick={openZotekWidget} />
        <About />
        <Services />
        <WhatToExpect />
        <Testimonials />

        <Footer />

        <FloatingBookButton onClick={openZotekWidget} />
      </main>
    </ThemeProvider>
  );
}
