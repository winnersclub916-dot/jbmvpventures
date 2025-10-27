interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
}

export default function PageSection({
  children,
  className = "",
  background = "bg-background"
}: PageSectionProps) {
  return (
    <section className={`py-12 md:py-16 ${background} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {children}
      </div>
    </section>
  );
}
