import { AffiliateProductData } from "@/types";

// ---------------------------------------------------------------------------
// CENTRAL AFFILIATE PRODUCT RECORD
//
// This is the ONLY place affiliate product info should be edited. Every
// <AffiliateProduct code="..." /> on the site reads from here.
//
// To change a link/image/price/etc. for a product that's already live on
// the site: edit its entry below and redeploy — every page using that code
// picks up the change automatically. No page files need to be touched.
//
// The values below (image URLs, affiliate links, ASIN) are placeholders —
// replace them with your real Amazon Associates links and product images
// before going live. Nothing here is a real, working affiliate link yet.
// ---------------------------------------------------------------------------
export const affiliateProducts: Record<string, AffiliateProductData> = {
  LAPTOP001: {
    code: "LAPTOP001",
    name: "REPLACE ME — e.g. HP 15s Laptop (Intel i5, 8GB RAM, 512GB SSD)",
    image: "https://via.placeholder.com/600x600.png?text=Product+Image",
    shortDescription: "REPLACE ME — one-line summary shown on product cards.",
    description:
      "REPLACE ME — a longer description of the product, shown wherever more detail is useful.",
    affiliateLink: "https://www.amazon.in/dp/REPLACE_ASIN?tag=REPLACE_WITH_YOUR_AFFILIATE_TAG",
    buttonText: "View on Amazon",
    category: "Laptop",
    active: true,
  },
  MOUSE001: {
    code: "MOUSE001",
    name: "REPLACE ME — e.g. Logitech Wireless Mouse",
    image: "https://via.placeholder.com/600x600.png?text=Product+Image",
    shortDescription: "REPLACE ME — one-line summary shown on product cards.",
    description: "REPLACE ME — a longer description of the product.",
    affiliateLink: "https://www.amazon.in/dp/REPLACE_ASIN?tag=REPLACE_WITH_YOUR_AFFILIATE_TAG",
    buttonText: "View on Amazon",
    category: "Accessories",
    active: true,
  },
  KEYBOARD001: {
    code: "KEYBOARD001",
    name: "REPLACE ME — e.g. Mechanical Keyboard",
    image: "https://via.placeholder.com/600x600.png?text=Product+Image",
    shortDescription: "REPLACE ME — one-line summary shown on product cards.",
    description: "REPLACE ME — a longer description of the product.",
    affiliateLink: "https://www.amazon.in/dp/REPLACE_ASIN?tag=REPLACE_WITH_YOUR_AFFILIATE_TAG",
    buttonText: "View on Amazon",
    category: "Accessories",
    active: false, // example of an inactive product — it will not render anywhere
  },
  BOOK001: {
    code: "BOOK001",
    name: "REPLACE ME — e.g. Let Us C by Yashavant Kanetkar",
    image: "https://via.placeholder.com/600x600.png?text=Book+Cover",
    shortDescription: "REPLACE ME — one-line summary shown on product cards.",
    description: "REPLACE ME — a longer description of the book.",
    affiliateLink: "https://www.amazon.in/dp/REPLACE_ASIN?tag=REPLACE_WITH_YOUR_AFFILIATE_TAG",
    buttonText: "View on Amazon",
    category: "Books",
    active: true,
  },
};
