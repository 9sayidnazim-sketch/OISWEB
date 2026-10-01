import { Link } from "@tanstack/react-router";
import { ArrowRight, Box, Sparkles, Database } from "lucide-react";
import { Container, Section } from "@/components/site/Section";

const enterpriseConnections = [
  {
    icon: Database,
    badge: "Connected ERP",
    title: "O.B.M.S ERP",
    description:
      "One unified operating layer engineered for finance, inventory, procurement and real-time business reporting.",
    to: "/products/obms-erp",
    tag: "Finance & Operations",
  },
  {
    icon: Box,
    badge: "Connected CRM & Leads",
    title: "Outreach CRM",
    description:
      "Custom sales pipeline architecture and lead qualification software tuned for high-velocity sales organizations.",
    to: "/products/outreach",
    tag: "Sales Intelligence",
  },
  {
    icon: Sparkles,
    badge: "Creative Connection",
    title: "Octapus Studios",
    description:
      "Partnering engineering with our creative division for brand identity, UI/UX design systems and digital campaign production.",
    to: "/studios",
    tag: "Design & Brand",
  },
];

export function EngineeringConnectionsSection() {
  return (
    <Section
      eyebrow="Engineered Ecosystem"
      title="Connected products and creative capabilities."
      intro="Engineering isn't isolated. Our workshop builds custom platforms that connect with ready-to-deploy enterprise systems and Studios design."
      className="border-t hairline"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {enterpriseConnections.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              to={item.to}
              className="group relative flex flex-col justify-between rounded-2xl border hairline bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border hairline bg-muted/60 px-2.5 py-0.5 text-[0.65rem] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                    <Icon className="size-3 text-primary" aria-hidden="true" />
                    {item.badge}
                  </span>
                  <span className="text-[0.68rem] font-mono uppercase tracking-wider text-primary font-medium">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t hairline">
                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                  Explore connection
                </span>
                <span className="flex size-7 items-center justify-center rounded-full border hairline bg-muted/40 text-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
