import HeroSection from "@/components/common/HeroSection";
import AboutSection from "@/components/common/AboutSection";
import MissionVisionSection from "@/components/common/MissionVisionSection";
import ServicesGrid from "@/components/common/ServicesGrid";
import CallToAction from "@/components/common/CallToAction";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <HeroSection
        backgroundImage="/image 18.png"
        alt="About Winners Group"
        title="The Story Behind Winners — Where Success Begins"
        description="Winners is a visionary network dedicated to empowering individuals through opportunity, innovation, and collective growth."
        height="h-80 md:h-96"
        className="flex items-center justify-center"
      />

      {/* About Section */}
      <AboutSection
        title="About Winners ; A Journey Of Empowerment And Growth"
        content="Winners is a dynamic network under JBMVP Ventures LLP, built on the foundation of opportunity, empowerment, and success. Our mission is to create pathways for individuals to achieve financial independence and personal growth through diverse business ventures. From education and healthcare to agriculture, construction and media, we operate across multiple sectors to uplift communities and generate impact. At Winners, we believe in turning potential into performance by nurturing talent and fostering innovation. Our programs and initiatives are designed to inspire entrepreneurship, leadership, and self-empowerment among people from all walks of life. With a vision to build a global community of achievers, we focus on integrity, unity, and continuous progress. Every service we offer reflects our commitment to excellence and the belief that true success is shared success. Together, we grow, inspire, and build a future where everyone has the chance to be a Winner."
      />

      {/* Mission */}
      <MissionVisionSection
        type="mission"
        title="Our Mission:"
        content="To empower individuals by creating pathways to financial freedom, entrepreneurship, and personal growth through innovation, integrity, and collaboration. At Winners, our mission goes beyond business - we strive to transform lives by opening doors to new possibilities. We aim to bridge gaps, break barriers, and enable freedom through skill development, mentorship, and innovative opportunities. By upholding integrity and fostering collaboration, we create an environment where ambition turns into achievement. Through every initiative, we empower people to take control of their future and become true catalysts of change."
        alignment="left"
      />

      {/* Vision */}
      <MissionVisionSection
        type="vision"
        title="Our Vision:"
        content="To build a global community of achievers who redefine success through opportunity, trust, and shared prosperity. Our vision is to create a diverse network of empowered individuals who aspire and uplift one another. We believe success is not an individual gain but a collective journey built on trust, opportunity, and mutual growth. By nurturing a culture of collaboration and shared prosperity, we aim to redefine what it means to achieve. Through Winners, we envision a world where every individual has the chance to rise, lead, and make a lasting impact."
        alignment="left"
        background="bg-orange-300"
      />
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