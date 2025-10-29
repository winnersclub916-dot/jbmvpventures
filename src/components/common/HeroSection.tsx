import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  backgroundImage: string;
  alt: string;
  title: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  overlay?: boolean;
  height?: string;
  textColor?: string;
  className?: string;
}

export default function HeroSection({
  backgroundImage,
  alt,
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  overlay = true,
  height = "h-72 md:h-96",
  textColor = "text-white",
  className = ""
}: HeroSectionProps) {
  return (
    <section className={`relative ${height} w-full overflow-hidden ${className}`}>
      <Image
        src={backgroundImage}
        alt={alt}
        fill
        priority
        className="object-cover"
      />
      {overlay && <div className="absolute inset-0 bg-black/50" />}
      <div className="relative z-10 h-full mx-auto max-w-6xl flex items-center px-4 sm:px-6 md:px-8 lg:px-10">
        <div>
          {subtitle && (
            <p className="text-sm tracking-wide uppercase text-secondary font-semibold">
              {subtitle}
            </p>
          )}
          <h1 className={`${textColor} text-4xl md:text-6xl font-bold leading-tight tracking-tight`}>
            {title}
          </h1>
          {description && (
            <p className={`mt-6 ${textColor}/90 max-w-2xl text-lg md:text-xl leading-relaxed`}>
              {description}
            </p>
          )}
          {(primaryButtonText || secondaryButtonText) && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {primaryButtonText && primaryButtonLink && (
                <Button className="rounded-full px-8 py-5 bg-white text-foreground hover:bg-white/90 font-medium" asChild>
                  <Link href={primaryButtonLink}>{primaryButtonText}</Link>
                </Button>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Button variant="outline" className="rounded-full px-6 border-white text-white hover:bg-white/10" asChild>
                  <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
