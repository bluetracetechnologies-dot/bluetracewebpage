import { NextResponse } from "next/server";
import { catalog, CURRENCY } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

/**
 * Machine-readable catalog feed for AI shopping agents and integrations.
 *
 * GET /api/catalog returns every purchasable item with a stable id and the
 * checkout endpoint an agent should POST { itemId } to in order to obtain a
 * Razorpay order. Public, read-only, cacheable.
 */
export async function GET() {
  const base = siteConfig.url.replace(/\/$/, "");

  return NextResponse.json(
    {
      merchant: {
        name: siteConfig.legalName,
        url: siteConfig.url,
        contact: siteConfig.emails.sales,
      },
      currency: CURRENCY,
      checkout: {
        method: "POST",
        endpoint: `${base}/api/checkout`,
        body: { itemId: "<catalog item id>" },
        note: "Returns a Razorpay order id; complete payment with Razorpay Checkout.",
      },
      items: catalog.map((i) => ({
        id: i.id,
        name: i.name,
        category: i.category,
        summary: i.summary,
        type: i.type,
        price: { amount: i.priceINR, currency: CURRENCY, approxUSD: i.priceUSD },
        turnaround: i.turnaround ?? null,
        deliverables: i.deliverables,
        buy: `${base}/api/checkout`,
      })),
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300",
      },
    },
  );
}
