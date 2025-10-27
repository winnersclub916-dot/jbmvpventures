"use client";

import HeroSection from "@/components/common/HeroSection";
import ServicesGrid from "@/components/common/ServicesGrid";
import TestimonialsCarousel from "@/components/common/TestimonialsCarousel";
import CallToAction from "@/components/common/CallToAction";
import FeatureHighlights from "@/components/common/FeatureHighlights";
import PageSection from "@/components/common/PageSection";

export default function Home() {
  const testimonials = [
    {
      quote: "Winners Group transformed my life completely. From a homemaker to a successful entrepreneur, the journey has been incredible.",
      name: "Sarah Johnson",
      title: "Regional Leader"
    },
    {
      quote: "The support and training I received helped me build a thriving business. I'm now financially independent and inspiring others to do the same.",
      name: "Michael Chen",
      title: "Diamond Achiever"
    },
    {
      quote: "I never imagined I could achieve this level of success. The Winners network gave me the tools, mentorship, and confidence to excel.",
      name: "Priya Sharma",
      title: "Executive Director"
    },
    {
      quote: "From struggling to make ends meet to owning my dream home, Winners Group has been life-changing. The community here is truly supportive.",
      name: "David Martinez",
      title: "Senior Partner"
    },
    {
      quote: "What started as a side hustle became my passion and primary income. The flexibility and earning potential are unmatched.",
      name: "Emily Roberts",
      title: "Gold Leader"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/Rectangle 61.png"
        alt="Hero background"
        title="Empowering Lives Through Opportunities & Growth"
        description="Join Winners Group and transform your life through our comprehensive multi-level marketing platform. Build your empire across 20 diverse service sectors."
        primaryButtonText="Explore Services"
        primaryButtonLink="/services"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        height="h-80 md:h-96"
        textColor="text-white"
      />

      {/* Services Portfolio */}
      <ServicesGrid
        services={[
          {
            title: "Training Program",
            desc: "Professional skill development and career enhancement programs.",
            icon: "🎓",
          },
          {
            title: "Medical Services",
            desc: "Comprehensive healthcare solutions for families",
            icon: "🏥",
          },
          {
            title: "Insurance Solutions",
            desc: "Complete protection for life, health, and property.",
            icon: "🛡️",
          },
          {
            title: "Education Centers",
            desc: "Quality education from primary to higher levels.",
            icon: "📚",
          },
          {
            title: "Construction",
            desc: "Professional infrastructure development services.",
            icon: "🏗️",
          },
          {
            title: "Agriculture",
            desc: "Modern farming and organic cultivation solutions.",
            icon: "🌾",
          },
          {
            title: "Marketing Centers",
            desc: "Strategic business growth and brand visibility.",
            icon: "📈",
          },
          {
            title: "Travel & Tourism",
            desc: "Complete travel packages and tourism services.",
            icon: "✈️",
          },
        ]}
        title="Our Services Portfolio"
        description="Discover our comprehensive range of services designed to create opportunities across multiple industries."
      />

      {/* About Section */}
      <PageSection>
        <div className="rounded-xl border bg-card p-6 md:p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">About Winners Group</h3>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Winners Group, owned by JBMVP Ventures LLP, is a visionary multi-level marketing company dedicated to creating pathways for financial independence and personal growth. Our mission is to empower individuals through comprehensive business opportunities, self-employment training, and leadership development programs.
          </p>
          <br />
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            We believe in building a network of successful entrepreneurs who not only achieve their own dreams but also help others realize their potential. Through our 20 diverse service sectors, we provide multiple revenue streams and endless possibilities for growth.
          </p>
        </div>
      </PageSection>

      {/* Feature Highlights */}
      <FeatureHighlights
  features={[
    {
      title: "Winners Agriculture",
      desc: "Modern agricultural solutions, farming techniques, and organic produce cultivation programs.",
      image: "/Modernagricultural.jpg",
    },
    {
      title: "Winners Education",
      desc: "Comprehensive learning programs focusing on skill development, leadership, and innovation.",
      image: "/learningprograms.jpg",
    },
    {
      title: "Winners Health",
      desc: "Health awareness campaigns, medical assistance drives, and community wellness initiatives.",
      image: "/Healthawareness.jpg",
    },
    {
      title: "Winners Environment",
      desc: "Sustainability projects, environmental conservation efforts, and tree-planting campaigns.",
      image: "/WinnersEnvironment.jpg",
    },
  ]}
/>


      {/* Testimonials */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* Call To Action */}
      <CallToAction
        title="Ready To Start Your Journey?"
        description="Join a thriving network and take your next step today."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
    
  );
}