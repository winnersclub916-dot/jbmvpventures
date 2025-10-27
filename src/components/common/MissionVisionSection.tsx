interface MissionVisionSectionProps {
  type: "mission" | "vision";
  title: string;
  content: string;
  className?: string;
  background?: string;
  alignment?: "left" | "right" | "center";
}

export default function MissionVisionSection({
  type,
  title,
  content,
  className = "",
  background = "bg-orange-400",
  alignment = "left"
}: MissionVisionSectionProps) {
  const alignmentClasses = {
    left: "text-center md:text-left",
    right: "text-center md:text-right",
    center: "text-center"
  };

  return (
    <section className={`py-12 md:py-16 ${background} ${className}`} data-section-type={type}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className={alignmentClasses[alignment]}>
          <div className="inline-block w-12 h-12 rounded-full border-2 border-white/30 mb-4"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h3>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}
