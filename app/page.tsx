// app/page.tsx  ← This is the HOME PAGE
//
// 📖 Flutter analogy: This file = your main screen widget.
//
// In Next.js App Router:
// • app/page.tsx        → yoursite.com/
// • app/about/page.tsx  → yoursite.com/about
// • app/curricula/page.tsx → yoursite.com/curricula
//
// This page is a SERVER COMPONENT by default (no "use client" at the top).
// Server components run on the server and are great for SEO and performance.
// Flutter analogy: Think of it as a StatelessWidget that renders on the server.

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import AudienceSection from "@/components/home/AudienceSection";
import CurriculaSection from "@/components/home/CurriculaSection";
import AppSection from "@/components/home/AppSection";
import BottomSections from "@/components/home/BottomSections";

// 📖 Note: "@/" is an alias for the root of your project.
// It's configured in tsconfig.json. In Flutter this is like your lib/ imports.

export default function HomePage() {
  return (
    // Flutter analogy: Scaffold()
    <main>
      <Header />

      {/* Each of these is a separate component — like Flutter widgets */}
      <HeroSection />           {/* Section 1+2: Hero with CTA */}
      <AboutSection />          {/* Section 3: من نحن / ماذا نقدم */}
      <AudienceSection />       {/* Section 4: من نخدم */}
      <CurriculaSection />      {/* Section 5: المناهج */}
      <AppSection />            {/* Section 6: التطبيق */}
      <BottomSections />        {/* Sections 7-10: Videos, News, Vision, CTA */}

      <Footer />                {/* Section 12: الفوتر */}
    </main>
  );
}
