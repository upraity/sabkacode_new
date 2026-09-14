import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { getAffiliateProduct } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

interface AffiliateProductProps {
  code: string;
  /** Compact mode for tighter grids (e.g. sidebars). Defaults to full card. */
  compact?: boolean;
}

// Usage: <AffiliateProduct code="LAPTOP001" />
//
// This is a Server Component — it reads the product record on the server
// (via lib/data/getAffiliateProduct) and renders plain HTML, so no product
// data or affiliate link ever needs to ship to the client as JavaScript.
//
// Pages should only ever contain the product code, never the underlying
// name/image/link — that all lives centrally in lib/data/products.json.ts.
export async function AffiliateProduct({ code, compact = false }: AffiliateProductProps) {
  const product = await getAffiliateProduct(code);

  // Missing code: fail loudly in development, fail silently in production
  // so a typo'd code never shows broken UI to a real visitor.
  if (!product) {
    if (process.env.NODE_ENV !== "production") {
      return (
        <div className="rounded-card border border-dashed border-red-300 bg-red-50 p-4 text-sm text-red-700">
          Unknown affiliate product code: <code className="font-mono">{code}</code>. Add it to{" "}
          <code className="font-mono">lib/data/products.json.ts</code>.
        </div>
      );
    }
    return null;
  }

  // Inactive product: hide it everywhere without deleting the record, so it
  // can be reactivated later just by flipping `active` back to true.
  if (!product.active) {
    return null;
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-card border border-ink-100 bg-white shadow-card">
      <div className={`relative w-full bg-ink-50 ${compact ? "aspect-[4/3]" : "aspect-square"}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, 300px"
          className="object-contain p-4"
        />
        {product.badge && (
          <span className="absolute left-2 top-2 rounded bg-brand-600 px-2 py-0.5 text-xs font-medium text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2">
          <Badge tone="muted">{product.category}</Badge>
          {typeof product.rating === "number" && (
            <span className="text-xs font-medium text-ink-500">★ {product.rating.toFixed(1)}</span>
          )}
        </div>

        <h3 className="mt-2 line-clamp-2 font-semibold text-ink-900">{product.name}</h3>

        {(product.shortDescription || product.description) && (
          <p className="mt-1 line-clamp-2 flex-1 text-sm text-ink-500">
            {product.shortDescription ?? product.description}
          </p>
        )}

        {product.price && (
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-semibold text-ink-900">{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-ink-400 line-through">{product.originalPrice}</span>
            )}
          </div>
        )}

        <a
          href={product.affiliateLink}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          {product.buttonText} <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
