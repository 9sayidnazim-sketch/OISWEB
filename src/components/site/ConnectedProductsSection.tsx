import { Link } from "@tanstack/react-router";
import { ArrowRight, Box } from "lucide-react";
import { Container } from "@/components/site/Section";
import { getRelatedProductsForService } from "@/lib/service-product-connections";

export function ConnectedProductsSection({ serviceSlug }: { serviceSlug: string }) {
  const relatedProducts = getRelatedProductsForService(serviceSlug);

  // Requirement: If a service has no related product, do not create a connection or display an empty section.
  if (relatedProducts.length === 0) return null;

  return (
    <section
      aria-labelledby="connected-products-heading"
      className="border-t border-black/[0.06] bg-[#fafafa] py-20 sm:py-28"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-primary">[ CONNECTED PRODUCTS & SOLUTIONS ]</p>
            <h2
              id="connected-products-heading"
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] text-foreground"
            >
              Proven systems built with this capability.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Explore working products and deployed platforms from the Octapus ecosystem that put this service into action.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow transition-colors self-start md:self-end"
          >
            Browse all products <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {relatedProducts.map((product) => (
            <Link
              key={product.slug}
              to="/products/$slug"
              params={{ slug: product.slug }}
              className="group relative flex flex-col justify-between rounded-2xl border hairline bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border hairline bg-muted/60 px-2.5 py-0.5 text-[0.65rem] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                    <Box className="size-3 text-primary" aria-hidden="true" />
                    Product
                  </span>
                  {product.tags && product.tags[0] && (
                    <span className="text-[0.68rem] font-mono uppercase tracking-wider text-primary font-medium">
                      {product.tags[0]}
                    </span>
                  )}
                </div>

                {product.image && typeof product.image === "string" && (
                  <div className="relative mb-5 h-36 w-full overflow-hidden rounded-xl border hairline bg-muted/20 flex items-center justify-center p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {product.name}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {product.headline}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t hairline">
                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                  Explore solution
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
