"use client";

import HeroSection from "@/components/common/HeroSection";
import CallToAction from "@/components/common/CallToAction";
import { SERVICES } from "@/utils/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/happy-business-people-shaking-hands-business-success.jpeg"
        alt="Business professionals"
        title="Empowering Lives Through Opportunities & Services"
        description="Join WINNERS Group and transform your life through our comprehensive multi-level marketing platform. Build your empire across 20 diverse service sectors."
        primaryButtonText="Explore Services"
        primaryButtonLink="/services"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        height="h-80 md:h-96"
        textColor="text-white"
      />

      {/* Services Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our diverse portfolio of services designed to create
            opportunities and drive success across multiple industries.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-yellow-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow text-center leading-relaxed">
                    {service.description}
                  </p>

                  <Link href={`/services/${service.id}`}>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Join thousands of successful individuals who have transformed their
            lives through our comprehensive services and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg rounded-full"
            >
              Get Started Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg rounded-full"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
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
