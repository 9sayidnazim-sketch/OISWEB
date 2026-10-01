import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Cpu, Layers } from "lucide-react";
import { Container, Section } from "@/components/site/Section";

const connections = [
  {
    icon: Globe,
    category: "Connected Service",
    title: "Web Platforms & Digital Products",
    description:
      "Transforming brand identity, creative direction and design systems into high-speed, interactive web platforms and portals.",
    to: "/services/web-platforms",
    label: "Explore web platforms",
  },
  {
    icon: Cpu,
    category: "Workshop Connection",
    title: "Octapus Engineering",
    description:
      "Where creative experiences meet technical precision: custom software, database architecture, APIs and secure cloud deployment.",
    to: "/engineering",
    label: "Visit engineering",
  },
  {
    icon: Layers,
    category: "Connected Service",
    title: "Custom Software Development",
    description:
      "Tailor-made business applications and customer portals engineered with your brand’s exact design language and workflows.",
    to: "/services/custom-software",
    label: "Explore custom software",
  },
];

export function StudiosConnectionsSection() {
  return (
    <Section
      eyebrow="Connected capabilities"
      title="From brand identity to engineered execution."
      intro="Creative work never stops at design. Studios connects directly with our engineering workshop to build complete digital flagships."
      className="border-t hairline"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {connections.map((item) => {
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
                    {item.category}
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
                  {item.label}
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
