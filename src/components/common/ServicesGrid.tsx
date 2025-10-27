import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}

interface ServicesGridProps {
  services: Service[];
  title?: string;
  description?: string;
  showViewAllButton?: boolean;
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
}

export default function ServicesGrid({
  services,
  title,
  description,
  showViewAllButton = true,
  viewAllLink = "/services",
  viewAllText = "View All 20 Services",
  className = ""
}: ServicesGridProps) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {(title || description) && (
          <div className="text-center">
            {title && <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>}
            {description && (
              <p className="mt-2 text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title || index}
              className="rounded-lg border bg-card p-5 shadow-xs hover:shadow-sm transition-shadow"
            >
              <div className="size-10 rounded-full bg-secondary/20 grid place-items-center mb-3">
                {service.icon || <span className="text-secondary text-lg">●</span>}
              </div>
              <h3 className="font-semibold">{service.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        {showViewAllButton && (
          <div className="mt-8 flex justify-center">
            <Button asChild className="rounded-full px-6">
              <Link href={viewAllLink}>{viewAllText}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
