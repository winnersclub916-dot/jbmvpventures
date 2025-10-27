import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
  backgroundGradient?: string;
}

export default function CallToAction({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className = "",
  backgroundGradient = "bg-gradient-to-b from-primary to-secondary text-white"
}: CallToActionProps) {
  return (
    <section className={`py-14 ${backgroundGradient} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          {title}
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed">
          {description}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild className="rounded-full px-6 bg-white text-foreground hover:bg-white/90">
            <Link href={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          {secondaryButtonText && secondaryButtonLink && (
            <Button asChild variant="outline" className="rounded-full px-6 border-white text-white hover:bg-white/10">
              <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
