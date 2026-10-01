import { products, type Product } from "@/lib/site";
import { serviceBySlug, type ServicePageData } from "@/lib/service-pages";

/**
 * Service to Products relationship mapping.
 * Each service slug maps to real, valid product slugs in Octapus.
 */
const SERVICE_TO_PRODUCT_SLUGS: Record<string, string[]> = {
  "erp-systems": ["obms-erp", "odoo-custom-erp", "erp-implementation", "billing-software"],
  "business-systems": ["outreach", "obms-erp", "billing-software"],
  "business-automation": ["ois", "horus-ai", "ai-business-automation", "outreach"],
  "custom-software": ["obms-erp", "lms", "billing-software", "ois"],
  "mobile-apps": ["billing-software", "lms", "horus-ai"],
  "web-platforms": ["lms", "obms-erp", "outreach"],
  "technology-consulting": ["erp-implementation", "ois"],
};

/**
 * Product to Services relationship mapping.
 * Each product slug maps to real, valid service slugs in Octapus.
 */
const PRODUCT_TO_SERVICE_SLUGS: Record<string, string[]> = {
  "obms-erp": ["erp-systems", "business-systems", "custom-software"],
  "odoo-custom-erp": ["erp-systems", "business-systems"],
  "erp-implementation": ["erp-systems", "technology-consulting"],
  "billing-software": ["business-systems", "custom-software", "mobile-apps"],
  lms: ["web-platforms", "custom-software", "mobile-apps"],
  ois: ["business-automation", "custom-software", "technology-consulting"],
  "horus-ai": ["business-automation", "mobile-apps"],
  outreach: ["business-systems", "business-automation"],
  "ai-business-automation": ["business-automation", "custom-software"],
  "custom-ai": ["business-automation", "custom-software"],
};

/**
 * Returns relevant products for a given service.
 * Returns empty array if no connection exists.
 */
export function getRelatedProductsForService(serviceSlug: string): Product[] {
  const slugs = SERVICE_TO_PRODUCT_SLUGS[serviceSlug];
  if (!slugs || slugs.length === 0) return [];

  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));
}

/**
 * Returns relevant services for a given product.
 * Returns empty array if no connection exists.
 */
export function getRelatedServicesForProduct(productSlug: string): ServicePageData[] {
  const slugs = PRODUCT_TO_SERVICE_SLUGS[productSlug];
  if (!slugs || slugs.length === 0) return [];

  return slugs
    .map((slug) => serviceBySlug.get(slug))
    .filter((s): s is ServicePageData => Boolean(s));
}
