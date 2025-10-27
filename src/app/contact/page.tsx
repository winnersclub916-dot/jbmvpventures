"use client";

import ContactForm from "@/components/common/ContactForm";
import CallToAction from "@/components/common/CallToAction";



export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/contactbg.png')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Send Your Query
          </h2>

          <ContactForm />
        </div>
      </section>

      <CallToAction
        title="Ready To Start Your Journey?"
        description="Join thousands of successful entrepreneurs who have transformed their lives with Winners Group."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/services"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        backgroundGradient="bg-gradient-to-r from-primary to-secondary text-white"
      />
    </div>
  );
}
