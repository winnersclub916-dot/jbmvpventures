interface AboutSectionProps {
  title: string;
  content: string;
  className?: string;
  background?: string;
}

export default function AboutSection({
  title,
  content,
  className = "",
  background = "bg-orange-50"
}: AboutSectionProps) {
  return (
    <section className={`py-12 md:py-16 ${background} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8">
          <div className="inline-block w-12 h-12 rounded-full border-2 border-orange-300 mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {title}
          </h2>
        </div>
        <div className="text-center">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}
