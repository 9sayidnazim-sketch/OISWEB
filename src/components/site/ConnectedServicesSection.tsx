import { Link } from "@tanstack/react-router";
import { ArrowRight, Layers } from "lucide-react";
import { Container } from "@/components/site/Section";
import { getRelatedServicesForProduct } from "@/lib/service-product-connections";

export function ConnectedServicesSection({
  productSlug,
  productName,
}: {
  productSlug: string;
  productName: string;
}) {
  const relatedServices = getRelatedServicesForProduct(productSlug);

  // If a product has no associated services, do not display an empty section
  if (relatedServices.length === 0) return null;

  return (
    <section
      aria-labelledby="connected-services-heading"
      className="border-t hairline bg-background py-16 md:py-24"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-primary">[ ASSOCIATED SERVICES & CAPABILITIES ]</p>
            <h2
              id="connected-services-heading"
              className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground"
            >
              Services powering {productName}.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Octapus engineering, design, and architecture capabilities that design, deploy, and support this system.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow transition-colors self-start md:self-end"
          >
            All capabilities <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="group relative flex flex-col justify-between rounded-2xl border hairline bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border hairline bg-muted/60 px-2.5 py-0.5 text-[0.65rem] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                    <Layers className="size-3 text-primary" aria-hidden="true" />
                    Service
                  </span>
                  <span className="text-[0.68rem] font-mono uppercase tracking-wider text-primary font-medium">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {service.summary}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t hairline">
                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                  View service details
                </span>
                <span className="flex size-7 items-center justify-center rounded-full border hairline bg-muted/40 text-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
