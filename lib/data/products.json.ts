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
    name: "HP OmniBook 5 OLED (Previously Pavilion), Snapdragon X Processor 45 Tops (16GB LPDDR5x, 1 TB SSD), 2K 14''/35.6cm, Win11, Office24, Silver, 1.29kg, he0015QU, Multi-Day Battery, AI Laptop",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/61aLy7kImQL._SL1500_.jpg",
    shortDescription: "HP OmniBook 5 OLED (Previously Pavilion), Snapdragon X Processor 45 Tops (16GB LPDDR5x, 1 TB SSD), 2K 14''/35.6cm, Win11, Office24, Silver, 1.29kg, he0015QU, Multi-Day Battery, AI Laptop",
    description:
      "HP OmniBook 5 OLED (Previously Pavilion), Snapdragon X Processor 45 Tops (16GB LPDDR5x, 1 TB SSD), 2K 14''/35.6cm, Win11, Office24, Silver, 1.29kg, he0015QU, Multi-Day Battery, AI Laptop",
    affiliateLink: "https://www.amazon.in/HP-Previously-Snapdragon-Processor-Light-Weight/dp/B0F8P844W2?crid=3SDYHUHU2KUNJ&dib=eyJ2IjoiMSJ9.6evB2EmL33ZOMJb2gJdT5ewWXHUnEqnQT-Qp9rSa9zd0wPWiOjctkgfQNJrA_JqOtIU7xlkVW9WRAgQPTNHKBYJktcf0qpIMOc9D54jVlBDvNqTDYG9yy-nwPAciGKYuDPTZn2eIcjK9k7j8Uod-8R3U8vinIS5L7huOEpu_mfaDVYmRkJ_sx9O1ysO8jN2uFpNfYWJFq1hM7f_YGaxawWqV5hdl25EYE_ccnJYxlIA.kSVEuuwAZvZr0Fv2I4l5XT7ZzLfaTiEfV359iqEPHAY&dib_tag=se&keywords=hp%2Blaptop%2Bi5%2B13th%2Bgeneration%2B16gb%2Bram&qid=1789395080&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=hp%2Blaptop%2Caps%2C425&sr=8-1-spons&aref=W4niAv6RQh&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=dheerajuprait-21&linkId=6c1119e1e4f868c8305059a6f8798614&ref_=as_li_ss_tl",
    buttonText: "View on Amazon",
    category: "Laptop",
    active: true,
  },
  MOUSE001: {
    code: "MOUSE001",
    name: "Acer Wireless Mouse for Computer, 6 Buttons 1600 DPI, Large Ergonomic Mouse",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/61AeUJwifcL._SL1500_.jpg",
    shortDescription: "Acer Wireless Mouse for Computer, 6 Buttons 1600 DPI, Large Ergonomic Mouse",
    description: "",
    affiliateLink: "https://www.amazon.in/dp/B0FB3R84NG?pd_rd_i=B0FB3R84NG&pd_rd_w=ePRZv&content-id=amzn1.sym.cebd979a-4e06-4bc9-ba7d-b9887a34ed18&pf_rd_p=cebd979a-4e06-4bc9-ba7d-b9887a34ed18&pf_rd_r=88NW88DE66GB8SQ9VPX1&pd_rd_wg=382zz&pd_rd_r=2cfdccfa-413b-4914-9b54-83181f469431&aref=lKL7OXtv82&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&linkCode=ll2&tag=dheerajuprait-21&linkId=0c0abffc235a362fc5c1fced6b001fe1&ref_=as_li_ss_tl",
    buttonText: "View on Amazon",
    category: "Accessories",
    active: true,
  },
  KEYBOARD001: {
    code: "KEYBOARD001",
    name: "AULA F87 Wireless Mechanical Keyboard, TKL Gaming Keyboard 75%, 87 Keys",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/61qKJklF14L._SL1500_.jpg",
    shortDescription: "AULA F87 Wireless Mechanical Keyboard, TKL Gaming Keyboard 75%, 87 Keys",
    description: "",
    affiliateLink: "https://www.amazon.in/AULA-F87-Mechanical-Swappable-Pre-lubed/dp/B0D5R7P3W9?crid=1BKEO943YTTKX&dib=eyJ2IjoiMSJ9.Zu-knlIOjdWOpE24GFuNXR1sC4wmm1aY_er6b9V_gbVVbMVRQXE3hGFyJ5orUoRTr94V-Z9vYlB3OgmWUKAzXlvI3WQnsDbw7oIcZ9wHPptkGqZAiugWez-Kmjs4J3K0SBjbOHUWXoI0FreD3TC43w_gBEgrXB2oWj9trEKjWuyJSm9AMgG-O34EcAPDG-rDJKOFctOoiTatZqVp5UGvhyCV7h10GQeIMFsyYLyltG4.edf4IPvE8Nn5pltr7-l15CN51PrL5Qeq1RLzrAyuSuE&dib_tag=se&keywords=wireless+keyboard&qid=1789398316&sprefix=wireless+keyboar%2Caps%2C401&sr=8-14&linkCode=ll2&tag=dheerajuprait-21&linkId=05c214b99e387e02768d7a1f5522f581&ref_=as_li_ss_tl",
    buttonText: "View on Amazon",
    category: "Accessories",
    active: false, // example of an inactive product — it will not render anywhere
  },
  BOOK001: {
    code: "BOOK001",
    name: "Atomic Habits: Tiny Changes, Remarkable Results",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/817HaeblezL._SL1500_.jpg",
    shortDescription: "Atomic Habits: Tiny Changes, Remarkable Results",
    description: "",
    affiliateLink: "https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834?crid=2ZBIJ19HLBOMY&dib=eyJ2IjoiMSJ9.xAoqssi61EZJQQ1VLeENKyKf4viTubjZtXiJap1seBESIgwRo6JB9ZR4sIeAsH_05jBNQPr4BUSx4xrgYmLYPUB0xAnyIyYdcx6_XOB4iYOaSKC-thLosHCFzcK_l-36NHzn6SOL00yolFiZISEYsPBhftWtUXsQg53-0jDNMNoUED9UXk6xRRTXW9yocaOM8VDnknNIseTSjDzX-2eb37YxYSJRjhc4Bp0zKMvj36Q._oXsB1L3kSCXVYb9368ZjlgWr-_TO9Wo7LDVONTkbvE&dib_tag=se&keywords=atomic+habit&qid=1789398721&sprefix=atomic+habi%2Caps%2C359&sr=8-3&linkCode=ll2&tag=dheerajuprait-21&linkId=8b6f818d2400a1e7fa67a95f28724525&ref_=as_li_ss_tl",
    buttonText: "View on Amazon",
    category: "Books",
    active: true,
  },
};
