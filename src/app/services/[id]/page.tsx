import { SERVICES } from "@/utils/data";
import { notFound } from "next/navigation";
import Link from "next/link";

type PageProps = {
  params: {
    id: string; // Next.js provides dynamic params as strings
  };
};

export default function DetailedServices({ params }: PageProps) {
  const numericId = Number(params.id);
  const service = SERVICES.find((s) => s.id === numericId);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <Link href="/services" className="text-primary hover:underline">
            ← Back to Services
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {service.title}
        </h1>
        <p className="text-muted-foreground mb-8">{service.description}</p>

        {/* What We Offer */}
        {service["What We Offer"] && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {service["What We Offer"].items?.map((it: { title: string }, idx: number) => (
                <div key={idx} className="rounded-md border p-4 bg-white">
                  {it.title}
                </div>
              ))}
            </div>
            {service["What We Offer"].description && (
              <p className="text-sm text-muted-foreground">
                {service["What We Offer"].description}
              </p>
            )}
          </div>
        )}

        {/* Master the Skills That Matter */}
        {service["Master the Skills That Matter"] && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Master the Skills That Matter</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service["Master the Skills That Matter"].items?.map(
                (
                  it: { title?: string; type?: string; description?: string },
                  idx: number
                ) => (
                  <div key={idx} className="rounded-md border p-4 bg-white">
                    {it.title ? (
                      it.title
                    ) : (
                      <div>
                        <span className="font-medium capitalize mr-2">
                          {it.type}
                        </span>
                        <span className="text-muted-foreground">{it.description}</span>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
