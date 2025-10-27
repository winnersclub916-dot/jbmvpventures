import Image from "next/image";

interface Feature {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  image?: string;
}

interface FeatureHighlightsProps {
  features: Feature[];
  title?: string;
  description?: string;
  className?: string;
  backgroundGradient?: string;
}

export default function FeatureHighlights({
  features,
  title = "Unlock Your Potential",
  description = "Discover the endless opportunities that await you in the Winners network",
  className = "",
  backgroundGradient = "bg-gradient-to-br from-[#E89528] to-[#D4A027]"
}: FeatureHighlightsProps) {
  return (
    <section className={`relative overflow-hidden ${backgroundGradient} py-16 ${className}`}>
      {/* decorative rings */}
      <div className="pointer-events-none absolute right-20 top-10 size-32 rounded-full border-2 border-white/30" />
      <div className="pointer-events-none absolute left-12 top-4 size-12 rounded-full border-2 border-white/30" />
      <div className="pointer-events-none absolute left-12 bottom-32 size-24 rounded-full border-2 border-white/30" />

      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-white/90">
            {description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-white shadow-lg p-5 transition-transform hover:scale-105"
            >
              <div className="relative h-32 rounded-md bg-[#DBEA8E] mb-4 overflow-hidden">
                {feature.image ? (
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute right-4 top-4 size-12 rounded-full bg-white shadow-md" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
